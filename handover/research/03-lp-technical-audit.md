All data gathered. Report follows.

---

# LP Audit: lp-fameninja.netlify.app (fetched 2026-09-10, desktop + iPhone UA — identical HTML, static export)

## (a) Scorecard

| Area | Verdict |
|---|---|
| SEO meta (title/desc/OG) | PASS |
| Canonical + structured data | **FAIL** |
| Robots/sitemap | WARN |
| Heading hierarchy | PASS |
| Performance (TTFB/CSS/fonts/cache) | PASS |
| JS payload | WARN |
| Mobile viewport/breakpoints | PASS |
| iOS input zoom risk | **FAIL** |
| Accessibility (labels/focus) | **FAIL** |
| Content completeness | WARN |
| Placeholder content | **FAIL** |
| Trust/legal | WARN |

## (b) Defects with evidence

**SEO**
- No `rel=canonical` anywhere in HTML. `og:url` hardcodes `https://lp-fameninja.netlify.app/` — will be wrong on custom domain.
- **Zero JSON-LD** (`application/ld+json` count: 0). No Organization, Service, or FAQPage schema despite 6 live `<details>` FAQs.
- `sitemap.xml` → 404; robots.txt has no `Sitemap:` line (does correctly Disallow `/thank-you/`, `/free-listing-sites/`).
- Good: title "Online Reputation Management Services in India | FameNinja" (58 chars), 155-char description, full OG/Twitter set, og:image 1200×630 (44,594 B PNG), favicon.ico 32px + icon.png 64px, single H1, clean H2/H3 tree, `lang="en"`.

**Performance**
- TTFB 0.53–1.0s across runs (Netlify Edge, `cache-status: hit`). HTML 96,195 B raw / 17,147 B gz.
- JS: 10 chunks, **~200 KB gz / ~665 KB raw** — heavy for a static LP. Largest: `1eglloh0s_w8l.js` 71 KB gz (226 KB raw), `0cz1d0mv5g_q7.js` 39.6 KB gz, `3w4o9hklow6fg.js` 37.5 KB gz.
- Good: 1 CSS file 7.6 KB gz; Inter woff2 48.4 KB preloaded, `font-display:swap`; logo preloaded (LCP); `/_next/*` immutable 1yr, logos 7-day, HTML must-revalidate — all correct.
- Logo PNG is 1536×398 rendered at 160×40 (~10× oversized; only 13 KB so low priority).

**Mobile**
- All 5 form fields + city select use `text-[15px]` → **iOS Safari zooms on focus** (<16px).
- Viewport meta correct; Tailwind v4 media queries at 40/48/64/80/96rem present. Tap targets OK (buttons px-6 py-3/3.5 ≈ 46–48px).

**Accessibility**
- Only 1 `<label>` in the page — and it wraps the honeypot (`name="website"`). All 5 visible fields + select are **placeholder-only**, no `aria-label` (page total: 2 aria-labels — star rating, WhatsApp).
- Only 4 `:focus` rules (form fields), zero `:focus-visible`, no `prefers-reduced-motion` CSS.

**Content / placeholders (CRITICAL — live ad traffic)**
- `PLACEHOLDER` ×6, `[Client` ×7 in shipped HTML: "PLACEHOLDER — replace with a real client quote, with permission, before launch", `[Client name]`, `[Company]`, "real, verifiable case summary".
- Footer CONTACT: `<a href="mailto:">` — **empty href AND empty anchor text**. OFFICE = just "India". No GSTIN anywhere.
- Present and correct: announcement bar, hero+form (name/email/tel/city/optional concern + honeypot), 3 problem cards, 4-step process, stats (500+ brands, 24/7), where-we-work, 4 features, comparison table (in `overflow-x-auto`), 6 FAQs (native `<details>`), final CTA, exit popup ("Before you go"), WhatsApp float (+91 70423 41907, aria-labelled).

**Trust/tracking**
- Microsoft Clarity wired but `clarityId:""` — **no recordings firing**. GTM-NSLJ8GG3 + FB pixel 784877987247242 present (noscript fallbacks confirmed).
- Lead webhook exposed in HTML source: `https://n8n-main-u34424.vm.elestio.app/webhook/fameninja-orm-lead` — spammable; only honeypot defends it.
- No `tel:` link. Disclaimer present ("We do not remove factual, lawful, or policy-compliant content…"). Privacy/Terms link to fameninja.com (not verified live here).

## (c) Top 10 fixes by impact

1. Replace all 6 PLACEHOLDER testimonials / `[Client name]` blocks or hide the section — visible scaffolding under paid traffic destroys trust and risks ad disapproval.
2. Fix footer: real email in the empty `mailto:` link, GSTIN + registered address (Indian B2B trust, ad verification).
3. Bump inputs `text-[15px]` → 16px to kill iOS focus-zoom on the lead form (majority-mobile ad traffic).
4. Add `rel=canonical` (and env-driven og:url) before custom-domain launch.
5. Add JSON-LD: Organization + Service + FAQPage (6 FAQs already exist verbatim).
6. Set the Clarity project ID — CRO is blind right now.
7. Add labels/aria-labels to all 6 form controls.
8. Rate-limit/validate the exposed n8n webhook (Turnstile or server check).
9. Cut JS: 200 KB gz for a static LP; audit the 71 KB-gz chunk (likely animation lib).
10. Ship sitemap.xml + robots `Sitemap:` line; optionally add a `tel:` link.

Fetched files: `/private/tmp/claude-501/-Users-ankushgupta-paid-ninja/a995ffe9-33be-4571-b836-59d0ee2871d2/scratchpad/{desktop.html,mobile.html,headers_desktop.txt,styles.css,logo.png,og.png}`