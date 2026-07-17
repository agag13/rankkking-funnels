# Developer Handover — Rankkking Landing Page Funnel System

> Last updated: 17 July 2026. This document is the single source of truth for taking over
> this project. Read it top to bottom before touching anything. The [README](README.md)
> has day-to-day commands; this file has the full context.

---

## 1. What this project is

A fast, static, config-driven **lead-generation landing page system** for Rankkking's
white-label PR reseller offer, built to replace a slow FlexiFunnels page. It will receive
paid traffic from **Google Ads and Facebook Ads**, so page speed, conversion tracking,
and lead quality (anti-spam) are the priorities.

**Live production site:** https://lp-rankkking.netlify.app
**Final domain (pending DNS cutover):** lp.rankkking.com (currently still serving the old FlexiFunnels page)

There are two funnels on this one site:

| Funnel | Where | Fields captured | Purpose |
|---|---|---|---|
| `pr-reseller` | Hero form on `/` | name, email (opt), WhatsApp phone, city, agency domain | Main offer: wholesale PR rate card, delivered on WhatsApp |
| `free-listing-sites` | Popup (14s timer + exit-intent) on `/` | name, email, WhatsApp phone | Lead magnet: "Free Listings Vault" — 203 free listing sites at `/free-listing-sites/` |

## 2. Stack & architecture

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS 4**
- `output: "export"` in [next.config.ts](next.config.ts) → pure static HTML/CSS/JS in `out/`.
  **There is no server.** All backend behavior lives in n8n (see §4).
- **Config-driven content**: ALL page copy lives in one typed object —
  [content/funnels/pr-reseller.ts](content/funnels/pr-reseller.ts) (shape defined in
  [content/types.ts](content/types.ts)). Components in `components/sections/` are generic
  renderers. **To change any text/price/FAQ, edit the config file only.**
  A new landing page = a new config file + assets; components are reused.
- **Lead magnet data**: [content/leadmagnets/listing-sites.ts](content/leadmagnets/listing-sites.ts)
  — 203 curated sites (name, url, category). All URLs were HTTP-verified alive on 17 Jul 2026.
- Fonts self-hosted via `next/font` (Inter). All logos self-hosted in `public/logos/`.

### Key files

```
content/funnels/pr-reseller.ts   ← ALL page copy + tracking IDs + WhatsApp number + webhook URL
content/types.ts                 ← FunnelConfig type
content/leadmagnets/listing-sites.ts ← 203 Vault sites
components/LeadForm.tsx          ← hero form (validation + honeypot + WhatsApp button)
components/LeadMagnetForm.tsx    ← popup form (name/email/phone)
components/LeadPopup.tsx         ← timed + exit-intent popup (once per session)
components/Analytics.tsx         ← GTM + Meta Pixel injection + attribution capture
components/sections/*            ← one component per page section (16 total)
lib/validate.ts                  ← shared validation (Indian mobile, name, domain extraction)
lib/attribution.ts               ← UTM/gclid/fbclid capture to sessionStorage
lib/submitLead.ts                ← webhook POST with full payload
lib/track.ts                     ← dataLayer + fbq helpers
app/page.tsx                     ← main LP (assembles sections)
app/thank-you/                   ← conversion page → auto-redirects to WhatsApp
app/free-listing-sites/          ← Vault delivery page (noindex)
netlify.toml                     ← build + caching/security headers
```

## 3. Lead flow (end to end)

1. Visitor lands; [Analytics.tsx](components/Analytics.tsx) captures `utm_*`, `gclid`,
   `fbclid`, referrer, landing page into sessionStorage (first-touch wins per session).
2. Form submit → client-side validation:
   - **name**: letters/spaces/dots/hyphens only (digits & specials live-stripped), min 2 letters
   - **phone**: normalized to `+91XXXXXXXXXX`, must match `[6-9]\d{9}` (strips leading 0/91)
   - **agency**: any pasted URL is reduced to a bare domain (`https://www.x.com/p?q` → `x.com`)
   - **email**: required on the lead-magnet form only
3. JSON POST to the n8n webhook (URL in the config file / `NEXT_PUBLIC_LEAD_WEBHOOK_URL`).
   Payload includes anti-spam signals: `website` (honeypot) and `form_seconds` (time to fill).
4. On success: rate-card leads → `/thank-you/` (fires `generate_lead` + Meta `Lead`,
   then auto-opens WhatsApp chat). Lead-magnet leads → `/free-listing-sites/?src=popup`
   (fires `lead_magnet_delivered` + Meta `CompleteRegistration`).
5. If the webhook fails, the form shows a WhatsApp fallback link — leads are never lost silently.

## 4. Backend: n8n (this is the "server")

- **Instance:** https://n8n-main-u34424.vm.elestio.app (owner: Mayur Ahir, mayur@rankkking.net)
- **Workflow:** "Rankkking LP — Lead Capture" — https://n8n-main-u34424.vm.elestio.app/workflow/ryhZR7Ct3ZxNJoE3
- **Webhook (production):** `POST https://n8n-main-u34424.vm.elestio.app/webhook/rankkking-lead`
- **Storage:** n8n Data Table **"Rankkking Leads"** (id `wseBzcwwzFfBkAsZ`) — n8n UI → Data Tables

### Workflow logic (12 nodes)

```
Webhook → Normalize (typed fields from body)
        → Spam Check (IF, any-of):
            honeypot filled | form_seconds < 5 | phone !~ ^\+91[6-9]\d{9}$ | disposable email domain
            → TRUE: respond {ok:true} silently, save NOTHING (bots must not learn)
            → FALSE ↓
        → Check Existing (Data Table get: phone + funnel match, alwaysOutputData)
        → Build Row (status = existing ? "duplicate" : "new")
        → Save Lead (insert) → Respond {ok:true}
        → fan-out:
            Is New Lead?    → TRUE: Gmail "Notify Team" → info@rankkking.com
            Is Lead Magnet? → TRUE (funnel=free-listing-sites & email present):
                              Gmail "Send List To Lead" → emails the Vault link to the lead
```

Important behaviors:
- **Dedupe is scoped to phone+funnel** — the same person can be a "new" lead in both
  funnels (this is intentional; a Vault lead upgrading to rate-card must notify the team).
- Duplicates ARE stored (`status: duplicate`) but don't trigger the team email.
  Lead-magnet duplicates still receive the Vault delivery email.
- Both Gmail nodes use the credential named **"Mayur"** (`onError: continue` so email
  failure never breaks lead capture). ⚠️ Lead-facing emails currently send from Mayur's
  Gmail — pending task: switch to a branded mailbox (see §8).
- Editing the workflow: use the n8n UI, or the n8n MCP/API. If you break it, the shape
  above is the contract the frontend depends on: `POST` JSON, respond `{ok:true}` with
  CORS `*`, HTTP 200.

## 5. Tracking

| Tool | ID | Notes |
|---|---|---|
| GTM | `GTM-WFLR2PF` | GA4 (`G-WV14GDHQ5S`) and MS Clarity (`eriuz1tb45`) load through it |
| Meta Pixel | `1034815105967725` | Base code direct in [Analytics.tsx](components/Analytics.tsx) |

Custom events pushed to `dataLayer` (wire GTM triggers to these):
- `lead_form_submit_attempt` (any form, before webhook)
- `generate_lead` (rate-card success) + Meta `Lead`
- `lead_thank_you` (thank-you pageview → **use `/thank-you/` as the Google Ads conversion**)
- `lead_magnet_delivered` (Vault page view, `src` param distinguishes popup vs direct) + Meta `CompleteRegistration`
- `whatsapp_click` (WhatsApp button in hero form)

## 6. Anti-spam (all invisible to real users)

| Layer | Where |
|---|---|
| Honeypot field `website` (offscreen) | form + dropped in n8n |
| Time-to-fill < 5s → drop | form sends `form_seconds`, n8n checks |
| Indian mobile regex (client + server) | `lib/validate.ts` + n8n Spam Check |
| Disposable email blocklist (15 domains) | n8n Spam Check |
| Phone+funnel dedupe | n8n Check Existing |

Spam gets a fake success response and is never stored. If bot volume grows, the planned
Tier-2 is **Cloudflare Turnstile** (free): add the widget to both forms, verify the token
in n8n via an HTTP Request node to `siteverify` before Save Lead.

## 7. Build, run, deploy

```bash
npm install
npm run dev                                # local dev on :3000
npm run lint                               # must stay clean (0 errors)
npm run build                              # static export → out/
npx netlify-cli deploy --prod --dir=out    # deploy
```

- **Hosting:** Netlify project `lp-rankkking` (id `a11208a5-8e56-4a1a-b412-9e9000de2aa9`),
  account **hi@ankushgupta.xyz** (team `hi-udqj89k`). The repo folder is already
  `netlify link`ed; a fresh clone needs `netlify login` + `netlify link` (or use
  `NETLIFY_AUTH_TOKEN`).
- Deploys are **manual CLI** today. Optional upgrade: connect this GitHub repo in the
  Netlify UI (Build & deploy → Link repository) — [netlify.toml](netlify.toml) is already
  configured, so pushes to `main` would auto-deploy.
- `NEXT_PUBLIC_LEAD_WEBHOOK_URL` env var can override the webhook at build time
  (defaults to the production webhook hardcoded in the funnel config).

## 8. Pending tasks (priority order)

1. **DNS cutover** — point `lp.rankkking.com` CNAME → `lp-rankkking.netlify.app`, add the
   custom domain in Netlify (auto-SSL). Until then the old FlexiFunnels page stays live.
   **After cutover, also update:**
   - the Vault URL inside the n8n "Send List To Lead" email body (currently netlify.app)
   - nothing else — `metadataBase`/og:url already point to lp.rankkking.com
2. **Branded sender email** — connect info@rankkking.com (or similar) as a credential in
   n8n and switch the "Send List To Lead" node to it (team-notify can stay on Mayur's).
3. **GTM wiring check** — confirm inside GTM that `generate_lead` / `lead_thank_you` /
   `lead_magnet_delivered` are mapped to GA4 + Google Ads conversions before campaigns launch.
4. **Google Ads / Meta conversions** — register `/thank-you/` and the Meta `Lead` /
   `CompleteRegistration` events as conversions in the respective ad platforms.
5. Legal pages — footer links point to rankkking.com/privacy-policy and /terms-of-service;
   create local pages if the team wants them on this domain.
6. (Optional) Turnstile, A/B test variants (config-file-per-variant is the intended pattern),
   auto-deploy from GitHub.

## 9. Gotchas & tribal knowledge

- **Logos**: strip logos use CSS `brightness-0 invert` → any image WITHOUT transparency
  renders as a solid box. New logos must have transparent backgrounds; use
  `invert: false` in the config for logos with filled shapes (renders grayscale+bright instead).
- **`out/` and `.netlify/` are build artifacts** — never edit, already lint-ignored.
- **The listing data file is generated-but-hand-maintained** — if you re-import from a CSV,
  HTTP-verify the URLs; 14 dead ones were already pruned (don't re-add them).
- **Leads table cleanliness**: test with obviously-named leads ("TEST …") and delete the
  rows from the n8n Data Table afterward — the table is the team's working lead list.
- **Testing the webhook directly**:
  ```bash
  curl -X POST https://n8n-main-u34424.vm.elestio.app/webhook/rankkking-lead \
    -H "Content-Type: application/json" \
    -d '{"funnel":"pr-reseller","source_form":"hero","name":"TEST ignore","email":"","phone":"+919876543210","city":"Pune","agency":"test.com","website":"","form_seconds":30}'
  ```
  `website` non-empty or `form_seconds` < 5 = silently dropped (that's the spam gate working).
- **India-specific**: phone validation intentionally accepts ONLY Indian mobiles (starts 6–9).
  If the business expands beyond India, `lib/validate.ts` + the n8n regex both need changes.
- The original FlexiFunnels page (funnel id LqReJxwAd2KvZP7N) is still the DNS target —
  don't cancel that subscription until after cutover + a safe window.

## 10. Access checklist for the incoming developer

| System | What | Who grants |
|---|---|---|
| GitHub | `agag13/rankkking-funnels` (private) | Ankush (repo owner) |
| Netlify | team `hi-udqj89k` / project `lp-rankkking` | Ankush (hi@ankushgupta.xyz) |
| n8n | instance login + workflow + data table | Mayur (mayur@rankkking.net) |
| GTM / GA4 / Clarity | containers listed in §5 | whoever owns the Google/MS accounts |
| Meta Business | pixel `1034815105967725` | Rankkking's Meta Business Manager admin |
| DNS | rankkking.com zone (for the `lp` record) | domain registrar owner |
| WhatsApp | +91 86303 22204 receives all lead chats | Rankkking team |

---

*History: built 17 Jul 2026 from the copy of the original lp.rankkking.com (FlexiFunnels).
Full change history is in git — the commit messages are descriptive.*
