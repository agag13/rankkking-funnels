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
| 11 | Exit-intent popup with incremental value | Done | Real exit intent, not a timer. Three leave signals: the pointer leaving through the top (desktop), a decisive scroll back up after 60% depth (touch), and the tab being hidden (tab or window switch). All behind a 20-second engagement floor. Carries a readable 3-point self-audit checklist above the form. **To view it:** it shows once per tab session, so after it has appeared once the `lead_popup_seen` flag suppresses it — open a new tab, or load the page with `?popup=1` to force it open and skip both the flag and the delay. |

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
| 11 | Footer email / GSTIN / address | Done | Supplied 2026-09-18: contact@01wire.com, the Allahabad registered address, GSTIN 09FPPPK1285E1ZJ. Email and phone are live `mailto:`/`tel:` links. Still outstanding: the "since [YEAR]" claim. **Ankush to confirm** that a FameNinja-branded page should carry an `@01wire.com` contact address rather than an `@fameninja.com` one — it is the operating entity's domain, but a visitor comparing the two may read it as a mismatch.

## Verified locally

- `npm run build` clean; TypeScript clean; the only ESLint warnings come from the prebuilt bundles under `public/` and predate this work.
- Compliance grep on the **rendered** page: zero placeholder strings, zero removal promises. All four "guarantee" hits are anti-guarantee (the comparison column "Guarantee-sellers", the FAQ question, and two denials).
- Submit with the webhook down returns the WhatsApp fallback rather than losing the lead. The webhook currently answers `404 — the requested webhook "POST fameninja-orm-lead" is not registered`, so **every lead today arrives only through that fallback**.
- Desktop 1440 and mobile 390 both walked through; sticky bar, proof bar and the compact announcement behave.

## Not verifiable until deploy

Lighthouse mobile ≥ 90 needs the public URL, and the deploy needs Netlify
access. Conversion firing needs GTM access.

## n8n workflow — LIVE

Workflow **"FameNinja ORM — Lead Capture"**, id `1kn0KeroW3YcPGy0`, on
the same instance as the Rankkking one. Built from
"Rankkking LP — Lead Capture" (`ryhZR7Ct3ZxNJoE3`), validated clean and
**activated on 2026-09-18**. The webhook answers 200 instead of 404, so
the live v1 page now delivers to n8n as well, instead of depending on
the WhatsApp fallback the way it has since launch.

What differs from the workflow it was copied from:

- Its own data table, **"FameNinja ORM Leads"** (`zwQHxbslYFeq774r`), so
  FameNinja leads are not mixed into the Rankkking table. Every lead,
  new and repeat, is also appended to the Google Sheet **"FameNinja ORM
  Leads"**, `1CSiZCDBI3vNXqG-8EJFm6noyopiBkInciYXt5Lke3Fk`. The data
  table is the system of record; the sheet is the human-readable copy.
  The Sheets node runs after the webhook has responded and continues on
  error, so neither a slow sheet nor a Google outage can lose a lead.
  Its cell format is RAW — without that, Sheets strips the leading `+`
  off every phone number.
- `service` and `turnstile_token` are read off the payload; `service` is
  stored and appears in the Chat alert, `turnstile_token` is not stored —
  it is a one-time proof, not lead data.
- `allowedOrigins` is scoped to `lp-fameninja.netlify.app` and
  `lp.fameninja.com` instead of `*`. **Any other host must be added here
  or the browser blocks the response even though the workflow ran.**
- A **disabled** "Verify Turnstile" node is staged as a side branch, with
  the full switch-on procedure in its node note. It does nothing yet:
  the page sends a token and nothing checks it until the key pair exists.
- Both Chat alerts fire after the webhook has already responded, so a
  slow notification can never push the visitor onto the WhatsApp
  fallback. The reference workflow had one alert node wired to both
  branches of its "Is New Lead" check and another not wired at all; here
  new and repeat leads each get their own.

**Two things to revisit:**

1. Both alerts post to the same Google Chat space as the Rankkking leads
   (`AAQASzcoL9I`). Change the URL on the two notify nodes if FameNinja
   leads belong somewhere else.
2. The leads sheet is shared **anyone-with-link = editor**, which is how
   both existing Rankkking lead sheets are already set up: n8n writes
   with the "Mayur" Google credential, which does not otherwise have
   access to a sheet owned by another account. It means anyone holding
   the URL can read and edit lead names, emails and phone numbers. The
   tighter fix is to share the sheet with just that credential's Google
   account and then revoke link access.

## Known: ad attribution is first-touch and session-sticky

`lib/attribution.ts` stores the first set of ad parameters it sees and
lets later page views only fill in keys it does not already have. One
visitor, one visit, one click — correct. But a visitor who clicks a
second ad in the same tab is still reported under the first click's
`gclid` and campaign, and a test run that reuses one tab across several
URLs produces rows whose `gclid`/`utm_campaign` do not match the `page`
column they arrived on. The `page` column always holds the landing URL,
so it is the field to trust when the two disagree.

This is inherited from the PR funnel on `main` and is shared code, so it
has been left as is. Worth a decision before offline conversion import:
Google Ads wants the click that produced the conversion, which is
last-touch, not first.

## End-to-end test, 2026-09-18

Submitted the real v2 hero form at 1280px with ad parameters on the URL.
It reached `/thank-you/`, and the row carried the service choice
("Glassdoor / AmbitionBox reviews"), `source_form: hero`, and the full
attribution set — utm_source, utm_medium, utm_campaign and gclid.

Anti-spam holds: honeypot filled, sub-5-second fill, malformed phone and
a disposable-email domain each returned 200 and **none were stored**.
Dedupe holds: a second submit on the same phone stored as
`status: duplicate` and raised the repeat alert instead of the new-lead
one. Three test leads are still in the table and the sheet; clear them
before the campaign starts.
