#!/usr/bin/env python3
"""Build the dark-theme variant of the 01Wire logo.

Run from the repo root:

    python3 scripts/make-ae-dark-logo.py

Reads public/logos/ae/01wire.png (the official light-background logo: black ring
+ coral disc + white "ONE" + black "WiRE" + coral dot) and writes
public/logos/ae/01wire-dark.png.

Only the black ink is recoloured to the /ae cream (--ae-ink). Coral and the
white "ONE" are left exactly as they are, which is the whole point: the old
`filter: brightness(0) invert(.94)` in theme.css flattened every pixel to one
cream tone, so the white "ONE" and the coral disc merged into a solid blob.
"""

import os

from PIL import Image

CREAM = (243, 236, 221)  # --ae-ink
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
SRC = os.path.join(ROOT, "public", "logos", "ae", "01wire.png")
OUT = os.path.join(ROOT, "public", "logos", "ae", "01wire-dark.png")


def main():
    im = Image.open(SRC).convert("RGBA")
    px = im.load()
    for y in range(im.height):
        for x in range(im.width):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            # Anything meaningfully red is brand coral (or a coral/white blend)
            # and stays untouched.
            if r - (g + b) / 2 > 30:
                continue
            # Neutral ink: black -> cream, white -> white, blends in between.
            t = (0.299 * r + 0.587 * g + 0.114 * b) / 255
            px[x, y] = (
                round(CREAM[0] + (255 - CREAM[0]) * t),
                round(CREAM[1] + (255 - CREAM[1]) * t),
                round(CREAM[2] + (255 - CREAM[2]) * t),
                a,
            )
    im.save(OUT, "PNG", optimize=True)
    print("wrote", os.path.relpath(OUT, ROOT), im.size)


if __name__ == "__main__":
    main()
