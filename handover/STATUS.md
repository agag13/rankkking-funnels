# v2 build status

**Developer:** Aman · **Branch:** `fameninja` · **Last updated:** 2026-09-18

Progress against [HANDOVER.md](HANDOVER.md) §4. This file tracks the build;
HANDOVER.md stays as Ankush wrote it.

---

## §4A — Conversion changes

| # | Item | State | Notes |
|---|---|---|---|
| 1 | H1 contains "Online Reputation Management" | Done | "Online Reputation Management that takes back your search results" |
| 2 | Service-type dropdown replaces required city select | Done | New `form.services` config; city kept but optional (`form.cityOptional`) and routing-only. The choice reaches n8n as `service` and rides the `generate_lead` dataLayer event. A 7th option, "Something else", was added so a visitor whose problem is not listed still converts — flag if you want it removed. |
| 3 | tel: links | Done | Header, crisis card, footer. Each fires a `phone_click` dataLayer event. |
| 4 | SLA + risk-reversal line under submit | Done | `form.slaNote` |
| 5 | WhatsApp prefill | Done | "Hi, I need urgent confidential help with my online reputation." |
| 6 | Platform chip wall | Done | Ten platforms + "Don't see your platform? Ask us", inside the existing "where we work" section rather than as a new one. |
| 7 | Four high-intent segment cards | Done | Court case (eligibility framing throughout), Glassdoor/AmbitionBox, negative news, crisis fast-lane with call + WhatsApp buttons. |
| 8 | Numeric proof bar | Done | 500+ / 24×7 / 1 day / 100% — all pre-cleared claims, no new numbers. |
| 9 | Two new FAQs | Done | ORM cost in India (no figures quoted — none are cleared) and court-case removal. The original six are untouched, so there are eight. |
| 10 | Honest-outcomes strip, second form, sticky mobile bar, compact announcement | Done | Second form is compact: name, email, WhatsApp, service. |
| 11 | Exit-intent popup with incremental value | Done | Real exit intent, not a timer: pointer leaving through the top on desktop, a decisive scroll back up after 60% depth on touch, both behind a 20-second engagement floor. Carries a readable 3-point self-audit checklist above the form. |

## §4B — Technical fixes

| # | Item | State | Notes |
|---|---|---|---|
| 1 | 16px inputs | Done | Verified computed 16px on all six controls. |
| 2 | Labels / aria / focus-visible | Done | Every control labelled and error-linked via `aria-describedby`; global `:focus-visible` ring; `prefers-reduced-motion` honoured. |
| 3 | canonical + env-driven og:url | Done | `lib/siteUrl.ts`, overridable with `NEXT_PUBLIC_SITE_URL`. |
| 4 | JSON-LD | Done | Organization + Service + FAQPage as one `@graph`, FAQ entities generated from the same config the visible FAQ renders from. |
| 5 | sitemap.xml + robots Sitemap line | Done | `app/sitemap.ts` and `app/robots.ts`; `public/robots.txt` removed so the domain is not hardcoded. |
| 6 | Microsoft Clarity project ID | **Blocked** | Config already conditional — paste the ID into `tracking.clarityId` and it starts recording. |
| 7 | Verify AW-17388770213 fires | **Blocked** | Page side is ready: `generate_lead` on submit, `lead_thank_you` on /thank-you/, `whatsapp_click` and `phone_click` on those links. Needs GTM access to confirm the triggers. |
| 8 | Protect the exposed webhook | Half done | Turnstile is wired into all three forms and sends `turnstile_token`, but renders nothing until a site key is set. n8n must verify the token with the secret key — that half needs n8n access. |
| 9 | JS diet | Done, limited | 195.6 → 191.3 KB gz by dropping `next/image`, which does nothing under `images.unoptimized`. The remaining ~147 KB is React + react-dom + the App Router runtime; the audit's suspected animation library does not exist. Re-encoding the oversized logo made it larger, so it was left alone. |
| 10 | `autoComplete="url"` on the concern field | Done | |
| 11 | Footer email / GSTIN / address | **Blocked** | Rows stay hidden until real values arrive, instead of rendering an empty `mailto:`. |

## Verified locally

- `npm run build` clean; TypeScript clean; the only ESLint warnings come from the prebuilt bundles under `public/` and predate this work.
- Compliance grep on the **rendered** page: zero placeholder strings, zero removal promises. All four "guarantee" hits are anti-guarantee (the comparison column "Guarantee-sellers", the FAQ question, and two denials).
- Submit with the webhook down returns the WhatsApp fallback rather than losing the lead. The webhook currently answers `404 — the requested webhook "POST fameninja-orm-lead" is not registered`, so **every lead today arrives only through that fallback**.
- Desktop 1440 and mobile 390 both walked through; sticky bar, proof bar and the compact announcement behave.

## Not verifiable until deploy

Lighthouse mobile ≥ 90 needs the public URL, and the deploy needs Netlify
access. Conversion firing needs GTM access.

## Note for whoever creates the n8n workflow

The payload gained two fields: `service` (the dropdown choice) and
`turnstile_token`. `source_form` now also takes the value `footer`.
The webhook node needs the production origin in its allowed origins, or
the browser will block the response even when the workflow is live.
