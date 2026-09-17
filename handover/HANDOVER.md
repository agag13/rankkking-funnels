# FameNinja ORM Landing Page — Developer Handover

**From:** Ankush (with Claude Code session history)
**To:** Aman
**Date:** 2026-09-17
**Goal:** Finalize v2 of the FameNinja ORM lead-gen landing page and deploy it, so Google Ads campaigns can be reactivated on it.

---

## 1. What this project is

FameNinja is an online reputation management (ORM) agency (India + UAE). We are relaunching Google Ads for the ORM niche. The landing page is the blocker: the old WordPress/Elementor pages are slow (3.7s TTFB, 32 CSS files) and carry policy-risky copy, so a new static landing page was built on the proven `rankkking-funnels` stack. **v1 is live; your job is to build v2 from the approved design mockup and research below.**

## 2. Current state — all the links

| Thing | Where |
|---|---|
| Live LP (v1) | https://lp-fameninja.netlify.app |
| **v2 design mockup (your build spec)** | https://claude.ai/code/artifact/cab7927c-2f50-41ac-ad48-fb8c70dafd0c — desktop 1440px + mobile 390px artboards, with sticky notes listing every change vs v1. You can export PNG/PDF from the toolbar. Ask Ankush to share it with you. |
| Repo | https://github.com/agag13/rankkking-funnels — **branch `fameninja`** (never touch `main`; `main` auto-deploys lp.rankkking.com production) |
| Netlify project | `lp-fameninja` (ID `791b5be8-7be3-4caf-8f2d-c71ca05c99b6`), https://app.netlify.com/projects/lp-fameninja — manual CLI deploys, NOT git-connected |
| Lead webhook (n8n) | `https://n8n-main-u34424.vm.elestio.app/webhook/fameninja-orm-lead` — **the n8n workflow for this path does not exist yet** (see §6). Reference workflow: "Rankkking LP — Lead Capture" on the same n8n instance. |
| Tracking IDs | GTM container `GTM-NSLJ8GG3` · Google Ads conversion `AW-17388770213` · Meta pixel `784877987247242` · Microsoft Clarity: **project ID missing — currently empty in config** |
| WhatsApp / phone | +91 70423 41907 (wa.me/917042341907) |
| Google Ads accounts | Two FameNinja accounts exist: `674-927-7358` "Fameninja" (ACTIVE — campaigns will run here) and `904-575-5621` "Fame Ninja" (2025 era, paused, reference only). Managed via ppc@rankkking.net. |

## 3. Repo guide

- **Stack:** Next.js 16 + React 19 + Tailwind 4, TypeScript, `output: "export"` (pure static — no server), deployed to Netlify CDN.
- **Everything about the page lives in ONE config file:** `content/funnels/orm-india.ts`. Sections render from it via `app/page.tsx` → `components/sections/*`. Copy changes = config edits only.
- Lead plumbing (`lib/`): `submitLead.ts` (posts to n8n webhook, **throws on failure so the form shows a WhatsApp fallback — a lead must never be silently lost**), `attribution.ts` (UTM/gclid capture), `dedupe.ts`, `validate.ts`, honeypot + form-timer anti-spam in the form components.
- Form behavior flag already added: `form.agencyMode: "text-optional"` makes the concern field optional free text (the PR funnel on `main` uses domain validation — don't break it).
- `README.md` in the repo documents "How to create a NEW funnel page" — the user plans more category LPs (brand reputation, SaaS reputation…) as sibling funnels on this branch later.

**Build & deploy:**
```bash
git clone https://github.com/agag13/rankkking-funnels && cd rankkking-funnels
git checkout fameninja
npm install
npm run dev        # local
npm run build      # static export to out/
netlify deploy --prod --dir=out --site 791b5be8-7be3-4caf-8f2d-c71ca05c99b6
```

## 4. Your task list (v2 build — priority order)

The design mockup is the visual spec. The list below is the full change set with the evidence behind each (see `research/` for the source reports).

**A. Conversion changes (from the mockup):**
1. H1 → contains "Online Reputation Management" verbatim ("Online Reputation Management that takes back your search results") — ad message-match/Quality Score.
2. **Service-type dropdown replaces the required city select** (options in mockup: Remove negative links / Suppress news coverage / Google review issues / Glassdoor-AmbitionBox reviews / Court case showing in search / Crisis — urgent help). This is the #1 lead driver on India competitor ORB. Needs a new config field + `LeadForm.tsx`/`LeadMagnetForm.tsx` change + webhook payload field.
3. **tel: links** — header phone, crisis card, footer (v1 has ZERO tel links; competitors run 7–8).
4. SLA + risk-reversal line under submit: "Audit on WhatsApp within 1 working day · Pay only for agreed outcomes" (Removify's compliance-safe pattern — fee promise, never outcome promise).
5. WhatsApp prefill → "Hi, I need urgent confidential help with my online reputation." (ORB's hot-lead self-selection).
6. Platform chip wall: Google Search, Google Reviews, Glassdoor, AmbitionBox, Justdial, MouthShut, IndiaMART, Trustpilot, YouTube, News portals + "Don't see your platform? Ask us."
7. Four high-intent segment cards: Court case in search (RTBF framing — "may make you eligible", never a promise), Glassdoor/AmbitionBox attacks, Negative news, Crisis fast-lane (call + WA, 24×7).
8. Numeric proof bar: 500+ / 24×7 / 1 day / 100% confidential (all claims already on FameNinja's live pages — do not add new numbers).
9. Two new FAQs: "How much does ORM cost in India?" and "Can a court case be removed from search results?" (+ keep existing 6).
10. Honest-outcomes strip ("We tell you what CAN'T be fixed"), compact second form near footer, mobile sticky bottom CTA bar (Get Free Audit | WhatsApp), compact single-line mobile announcement bar.
11. Rework the 15s timed popup into true exit-intent with incremental value (self-audit checklist angle), not a duplicate of the hero form.

**B. Technical fixes (from the tech audit — `research/03`):**
1. All form inputs `text-[15px]` → **16px** (kills iOS focus-zoom; majority-mobile traffic).
2. Real `<label>`/`aria-label` on every form control (currently only the honeypot has one); add `:focus-visible` styles.
3. `rel=canonical` + env-driven `og:url` (currently hardcoded to netlify.app — will break on lp.fameninja.com move).
4. JSON-LD: Organization + Service + FAQPage (FAQs already exist verbatim; page currently has ZERO schema).
5. `sitemap.xml` + `Sitemap:` line in robots.txt.
6. Set the Microsoft Clarity project ID in `content/funnels/orm-india.ts` tracking config (get ID from Ankush).
7. Verify the Google Ads conversion (AW-17388770213, inside GTM-NSLJ8GG3) fires on `/thank-you/` AND on wa.me clicks — WhatsApp leads are currently untracked-risk.
8. Protect the exposed n8n webhook (Cloudflare Turnstile or server-side validation) — it's visible in page source, honeypot is the only defense.
9. JS diet: ~200KB gz for a static LP; audit the 71KB-gz chunk.
10. Fix `autoComplete="url"` on the free-text concern field.
11. Footer: real mailto:, tel:, registered address, GSTIN (values from Ankush — see §6).

## 5. HARD RULES — read before writing any copy

1. **Never promise or guarantee content removal.** Google disapproves ads/pages for "Enabling dishonest behavior" — this account has real disapproval history from exactly this (see `research/00-project-history.md`). Approved framing: "remove what is lawfully removable", "suppress", "resolution", "may be eligible", "depends on platform policies and legal eligibility". Banned framing: "guaranteed removal", "we will delete", "100% removal", per-link removal pricing as a promise. "Pay only for agreed outcomes" (fee structure) is OK; "guaranteed removed" is not.
2. **No fabricated facts.** Only these claims are cleared (they exist on FameNinja's live properties): 500+ brands & individuals helped, 24×7 crisis response, free audit, 1-working-day audit reply, India + UAE, +91 70423 41907. Anything else (years, client names, case metrics, awards) must come from Ankush in writing.
3. **Testimonials must be real, with written permission.** The mockup has clearly-marked slots. v1 shipped literal "[PLACEHOLDER]" testimonials to production — that must never happen again; if quotes aren't ready at deploy time, remove the section entirely.
4. **Never push to `main`** — it is lp.rankkking.com production. All work on `fameninja` branch (or feature branches merged into it).
5. White-hat only, everywhere. No fake reviews, no black-hat — it's also the brand's positioning on the page itself.

## 6. Blocked on Ankush (chase these)

- [ ] 2–3 real client quotes + 1 case summary, with written permission (or approve shipping without the section)
- [ ] Footer values: email, registered office address, GSTIN, "since [YEAR]" claim
- [ ] Netlify access to project `lp-fameninja` (or Ankush runs the deploy command)
- [ ] n8n access to duplicate "Rankkking LP — Lead Capture" → new workflow with path `fameninja-orm-lead` (until then, leads only arrive via the WhatsApp fallback)
- [ ] GTM access (GTM-NSLJ8GG3) to verify/add the AW-17388770213 conversion trigger for the new domain + wa.me click event
- [ ] Microsoft Clarity project ID
- [ ] Share the design-mockup artifact link with Aman
- [ ] Decision: when to CNAME `lp.fameninja.com` → Netlify (post-launch)

## 7. Research folder (`handover/research/` in this repo) — what's in it

All reports are real fetched/API data (Sept 6–10, 2026), no theory:

- `00-project-history.md` — full project memory: both Google Ads accounts' history, winning/wasted keywords (ORM India campaign: CPA ₹522, "All keyword" ad group CPA ₹177, "business reputation management" broad CPA ₹59), policy landmines, keyword volumes, lead-magnet research (reputation-score scanner validated as future flagship).
- `01-three-angle-synthesis.md` — **START HERE**: our-LP vs ad-library advertisers vs Dubai agencies vs India competitors comparison table + 22-item prioritized gap list + Top-10 build list.
- `02-ad-library-diff-sep10.md` — who's actually running ORM ads (Google/Meta/LinkedIn, India + UAE).
- `03-lp-technical-audit.md` — v1 audit with every defect + evidence (your §4B source).
- `04-lp-conversion-audit.md` — CRO audit, 6/10 score, friction list (your §4A source).
- `05-dubai-agency-lp-patterns.md` — UAE patterns (WhatsApp-primary, +971 + district address, budget dropdowns). **UAE rail is deferred** until UAE campaigns launch — don't fake a Dubai address.
- `06-india-competitor-lp-teardown.md` — ORB/Value4Brand/SevenStar teardowns (what actually drives their leads).
- `07-new-advertiser-lp-teardowns.md` — six competitor LP teardowns (Removify, Prime Reputation, CheckMyRisks, A2Z, RepIndia, Media Watcher).

## 8. Definition of done

1. v2 implemented on `fameninja` branch matching the mockup (desktop + mobile), §4A + §4B complete.
2. `npm run build` clean; Lighthouse mobile performance ≥ 90 on the deployed URL.
3. Form submits reach n8n (or WhatsApp fallback verified working); conversion event verified firing in GTM preview.
4. No placeholder text anywhere on the deployed page. No removal-guarantee language anywhere (grep for "guarantee", "permanent", "100% removal" before deploy).
5. Deployed to lp-fameninja.netlify.app; Ankush signs off against the mockup.

After that, Ankush reactivates Google Ads campaigns pointing at the page (his side — account 674-927-7358).
