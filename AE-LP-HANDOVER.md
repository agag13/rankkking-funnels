# 01Wire UAE Landing Page — Developer Handover (17 Sep 2026)

**From:** Ankush Gupta (ankush@fameninja.com) · **To:** Aman
**Project:** B2B white-label PR partner landing page for UAE agencies (`/ae` route)
**Status:** Design + copy + structure COMPLETE and reviewed. Remaining work = wiring (webhook, domain, deploy) + placeholder content that Ankush will supply.

---

## 1. What this is

01Wire sells press coverage (guaranteed article placements) in Dubai/GCC, international, and Indian publications. This page recruits **UAE marketing/dev/SEO agencies** to resell placements white-label. It is modelled on the proven India reseller page (lp.rankkking.com) but rebuilt with the 01Wire dark brand, AED-only pricing, and UAE-specific proof.

Live preview of current state: build the repo and open `/ae/` (see §4).

## 2. Repo, branch, and the ONE warning that matters

- Repo: `https://github.com/agag13/rankkking-funnels` (this file lives in its root)
- **Work on branch `ae-landing-page`** — clone and check it out:
  ```bash
  git clone https://github.com/agag13/rankkking-funnels.git
  cd rankkking-funnels
  git checkout ae-landing-page
  ```
- Commits so far:
  - `86f6e08` Add /ae UAE white-label PR partner page
  - `8ca9f09` Use official publication + 01Wire logos on /ae
  - `b2a1de9` Real publication screenshots with hover reveal + agency-types section
  - `c9d6f13` Touch-friendly microcopy on screenshot cards
- ⚠️ **READ `AGENTS.md` IN THE REPO ROOT BEFORE TOUCHING CODE.** This repo runs Next.js 16 and AGENTS.md's own words are "This is NOT the Next.js you know." The docs bundled at `node_modules/next/dist/docs` are the reference — several APIs differ from older Next.js. Do not assume.
- ⚠️ **The India funnel (main page) must remain byte-identical.** All AE work is additive: new route, new content file, new components, additive-only type changes. `git diff main -- <anything outside /ae scope>` should stay empty. Do not merge to `main` without Ankush's go.

## 3. Architecture — where everything lives

The repo is **content-driven**: pages are assembled from a config object, not hardcoded JSX.

| File | What it is |
|---|---|
| `content/funnels/pr-reseller-ae.ts` | **ALL AE copy, pricing, logos, screenshots, FAQ, form config.** 95% of your edits happen here. |
| `content/types.ts` | `FunnelConfig` type. AE additions were additive (`ScreenshotSlot.image/logo`, `agencyTypes`, `phoneCountry`, etc.). |
| `app/ae/` | The route + `theme.css` (`.theme-ae` scope; includes the white-logo invert rule for the 01Wire wordmark). |
| `components/sections/SocialProofAe.tsx` | Publication screenshot cards — resting = dimmed screenshot + logo + outlet name; hover/tap = article reveal. |
| `components/sections/AgencyTypes.tsx` | 8 agency verticals grid ("PR is one collaboration away — an add-on and a booster"). |
| `lib/submitLead.ts` | Lead POST to n8n webhook. The AE endpoint **does not exist yet** — see §5 task 1. |
| `public/logos/ae/` | 6 real publication logos + 01wire.png. |
| `public/screenshots/ae/` | 3 self-captured publication screenshots (Khaleej Times etc.). |

**Brand tokens (01Wire dark):** paper `#15120D` / `#1E1A13` · ink `#F3ECDD` · signal coral `#EE5B61` · wire-blue `#8FB0DA` · fonts Baloo 2 (display) + Manrope (body). **AED only — never show USD or INR on this page.**

## 4. Run it locally

```bash
cd rankkking-funnels        # on branch ae-landing-page
npm install
npm run build               # static export → out/
python3 -m http.server 8734 -d out
# open http://localhost:8734/ae/
```

Remember: **static export — every content edit needs `npm run build` before it shows** (`out/` is gitignored, never commit it). Check mobile at 375px width; most traffic is mobile via Meta ads.

## 5. YOUR TASK LIST (dev work, in order)

1. **n8n lead webhook** — create workflow with path `/webhook/01wire-ae-lead` (mirror the existing India lead workflow), then put the URL in `pr-reseller-ae.ts` (`[PLACEHOLDER-WEBHOOK]`). **Relax the phone regex for +971** (UAE numbers are 9 digits after country code; India-only validation currently). Test an end-to-end submit.
2. **WhatsApp number** — form + floating button currently point at the +91 number. Swap to the +971 number once Ankush provides it (`[PLACEHOLDER-WHATSAPP]`).
3. **Thank-you page** — confirm `thankYouPath` works for /ae and fires the Lead event.
4. **Tracking** — GTM `GTM-WFLR2PF` + Meta pixel `1034815105967725` are inherited from the India setup. Verify both fire on `/ae/` (PageView + Lead on submit). Ask Ankush whether AE should get its own pixel before launch — do not decide this yourself.
5. **OG image** — `[PLACEHOLDER-OG-IMAGE]`; create a 1200×630 with the 01Wire dark brand once final headline is locked.
6. **Domain + deploy** — target is `ae.01wire.com` (assumed, confirm with Ankush). Netlify hosts the repo. Set up the subdomain, deploy the `ae-landing-page` branch (or merge to main after Ankush's go + the byte-identical check in §2).
7. **Mobile QA pass** — screenshot cards use tap-to-reveal on touch; verify on a real phone.

## 6. Waiting on ANKUSH (content placeholders — don't invent these)

Search `PLACEHOLDER` in `pr-reseller-ae.ts`. Currently pending from Ankush:
- **AED wholesale rates** (page shows AED 550 dummy) — `[PLACEHOLDER-RATES]`
- **+971 WhatsApp number** — `[PLACEHOLDER-WHATSAPP]`
- **2 testimonials** (real partner quotes) — `[PLACEHOLDER-TESTIMONIAL]` ×2
- **Guarantee terms** — `[PLACEHOLDER-GUARANTEE-TERMS]`
- **Organic-PR services list** — `[PLACEHOLDER-ORGANIC-PR]`
- **GCC client-placement screenshots** (real client articles for extra proof)
- **Legal footer**: email / address / TRN — `[PLACEHOLDER-EMAIL/ADDRESS/LEGAL]`
- **Final domain confirmation** (ae.01wire.com?)

Ship nothing to production with a PLACEHOLDER still visible.

## 7. Roadmap after this (not your scope yet, just so you know)

- **B2C UAE page** (direct buyers, same repo, separate route) — planned second.
- **India reseller page 01Wire reskin** — lp.rankkking.com must become 01Wire-branded before the India video ads scale; the `/ae` page's theme is the reference implementation. Separate workstream, Ankush will brief.

## 8. Rules recap (the things that get changes rejected)

1. Read `AGENTS.md` first. Next.js 16 ≠ what you know.
2. India page stays byte-identical. AE changes are additive only.
3. AED only. No USD, no INR, anywhere on /ae.
4. Rebuild after every edit (static export).
5. Placeholders are Ankush's to fill — chase him, don't guess.
6. Nothing deploys to the live domain without Ankush's explicit go.

Questions → Ankush on WhatsApp.
