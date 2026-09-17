#!/usr/bin/env python3
"""Generate the /ae Open Graph image (1200x630) in the 01Wire dark brand.

Run from the repo root:

    python3 scripts/make-ae-og-image.py

Writes public/logos/ae/og-image.png. Re-run whenever the /ae headline changes —
HEADLINE/HIGHLIGHT below are the only lines that normally need editing.

Fonts are the same two the page uses (Baloo 2 display, Manrope body). They are
downloaded from the Google Fonts repo into .cache/fonts/ on first run.
"""

import os
import urllib.request

from PIL import Image, ImageDraw, ImageFilter, ImageFont

# --- brand tokens (mirror app/ae/theme.css) ---------------------------------
PAPER = (21, 18, 13)
PAPER_2 = (30, 26, 19)
INK = (243, 236, 221)
CORAL = (238, 91, 97)
WIRE_BLUE = (143, 176, 218)
MUTED = (150, 141, 124)

W, H = 1200, 630

KICKER = "WHITE-LABEL PR  ·  FOR AGENCIES IN THE UAE"
# highlight colour matches the hero <span> on the page (--ae-wire-blue)
HEADLINE = [("Add ", INK), ("AED 15–40K Monthly Revenue", WIRE_BLUE)]
HEADLINE_2 = "Without Hiring a PR Team"
CHIPS = ["No join fee", "AED invoicing", "Pay per placement"]
OUTLETS = "Khaleej Times · Gulf News · Arabian Business · Forbes Middle East"

FONTS = {
    "Baloo2.ttf": "https://github.com/google/fonts/raw/main/ofl/baloo2/Baloo2%5Bwght%5D.ttf",
    "Manrope.ttf": "https://github.com/google/fonts/raw/main/ofl/manrope/Manrope%5Bwght%5D.ttf",
}
FONT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".cache", "fonts")
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
LOGO = os.path.join(ROOT, "public", "logos", "ae", "01wire-dark.png")
OUT = os.path.join(ROOT, "public", "logos", "ae", "og-image.png")


def font(name, size, weight):
    os.makedirs(FONT_DIR, exist_ok=True)
    path = os.path.join(FONT_DIR, name)
    if not os.path.exists(path):
        urllib.request.urlretrieve(FONTS[name], path)
    f = ImageFont.truetype(path, size)
    f.set_variation_by_axes([weight])
    return f


def tracked(draw, xy, text, fnt, fill, tracking):
    """Draw text with extra letter-spacing; returns the width drawn."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += draw.textlength(ch, font=fnt) + tracking
    return x - xy[0] - tracking


def glow(size, center, radius, color, alpha):
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.ellipse(
        [center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius],
        fill=color + (alpha,),
    )
    return layer.filter(ImageFilter.GaussianBlur(radius * 0.55))


def main():
    img = Image.new("RGB", (W, H), PAPER)

    # warm vertical gradient PAPER -> PAPER_2
    grad = Image.new("RGB", (1, H))
    gd = ImageDraw.Draw(grad)
    for y in range(H):
        t = y / (H - 1)
        gd.point((0, y), fill=tuple(round(a + (b - a) * t) for a, b in zip(PAPER, PAPER_2)))
    img = grad.resize((W, H))

    # brand glows
    img = img.convert("RGBA")
    img.alpha_composite(glow((W, H), (150, 560), 300, CORAL, 46))
    img.alpha_composite(glow((W, H), (1070, 90), 260, WIRE_BLUE, 30))
    draw = ImageDraw.Draw(img)

    # coral rule down the left edge
    draw.rectangle([0, 0, 7, H], fill=CORAL)

    # same dark-theme logo asset the page uses
    logo = Image.open(LOGO).convert("RGBA")
    target_h = 46
    logo = logo.resize((round(logo.width * target_h / logo.height), target_h), Image.LANCZOS)
    img.alpha_composite(logo, (72, 62))

    f_kicker = font("Manrope.ttf", 21, 700)
    f_sub = font("Manrope.ttf", 25, 500)
    f_chip = font("Manrope.ttf", 22, 600)
    f_outlet = font("Manrope.ttf", 20, 500)

    tracked(draw, (72, 176), KICKER, f_kicker, WIRE_BLUE, 2.4)

    # headline auto-shrinks until both lines clear the right margin
    max_w = W - 72 - 60
    size = 74
    while size > 40:
        f_head = font("Baloo2.ttf", size, 800)
        line1 = sum(draw.textlength(t, font=f_head) for t, _ in HEADLINE)
        line2 = draw.textlength(HEADLINE_2, font=f_head)
        if max(line1, line2) <= max_w:
            break
        size -= 2

    x, y = 72, 224
    for text, colour in HEADLINE:
        draw.text((x, y), text, font=f_head, fill=colour)
        x += draw.textlength(text, font=f_head)
    draw.text((72, y + round(size * 1.14)), HEADLINE_2, font=f_head, fill=INK)

    draw.text(
        (72, 420),
        "Resell press coverage under your own brand — Dubai & GCC,",
        font=f_sub,
        fill=MUTED,
    )
    draw.text((72, 454), "international and Indian media. AED rates, AED invoicing.", font=f_sub, fill=MUTED)

    # chips
    x = 72
    for chip in CHIPS:
        w = draw.textlength(chip, font=f_chip)
        draw.rounded_rectangle([x, 502, x + w + 40, 548], radius=23, outline=(74, 66, 54), width=2)
        draw.text((x + 20, 512), chip, font=f_chip, fill=INK)
        x += w + 40 + 16

    tw = draw.textlength(OUTLETS, font=f_outlet)
    draw.text((W - 72 - tw, 570), OUTLETS, font=f_outlet, fill=(120, 112, 99))

    img.convert("RGB").save(OUT, "PNG", optimize=True)
    print("wrote", os.path.relpath(OUT, ROOT), img.size)


if __name__ == "__main__":
    main()
