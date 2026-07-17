# Rankkking Funnels — React Landing Page System

Fast, static, config-driven lead-gen landing pages built with **Next.js 16 + Tailwind 4**, deployed on **Netlify**, with leads captured by an **n8n webhook**. Built to replace FlexiFunnels pages with something you fully own and can manage from Claude Code.

## Live system

| Piece | Where |
|---|---|
| Live site | https://lp-rankkking.netlify.app (point `lp.rankkking.com` here when ready) |
| Netlify project | `lp-rankkking` — https://app.netlify.com/projects/lp-rankkking |
| Lead webhook | `https://n8n-main-u34424.vm.elestio.app/webhook/rankkking-lead` |
| n8n workflow | "Rankkking LP — Lead Capture" — https://n8n-main-u34424.vm.elestio.app/workflow/ryhZR7Ct3ZxNJoE3 |
| Leads storage | n8n Data Table **"Rankkking Leads"** (n8n → Data Tables) |
| Notifications | Gmail (credential "Mayur") → info@rankkking.com on every lead |

## Lead flow

1. Visitor lands (UTM params + gclid/fbclid are captured to sessionStorage).
2. Submits the hero form or popup form → JSON POST to the n8n webhook with full ad attribution.
3. n8n saves the row to the "Rankkking Leads" data table, responds 200, and emails the team.
4. Visitor is redirected to `/thank-you/` (fires `generate_lead` + Meta `Lead` events — **use this URL as the Google Ads conversion page**), then auto-opens WhatsApp (+91 86303 22204).
5. If the webhook ever fails, the form shows a WhatsApp fallback link — no lead is silently lost.

## Anti-spam (Tier 1)

Every submission passes through these checks — all invisible to real visitors:

| Check | Where | Behavior |
|---|---|---|
| Honeypot (`website` field, hidden offscreen) | form + n8n | Filled → silently dropped (bot still gets a 200) |
| Time-to-fill < 5s | form sends `form_seconds`, n8n checks | Dropped silently |
| Indian mobile format (10 digits, starts 6–9) | form (blocks with error) + n8n regex | Form shows error; anything slipping past is dropped in n8n |
| Disposable email domains (mailinator, yopmail, …) | n8n | Dropped silently |
| Duplicate phone | n8n checks the data table | Saved with `status: duplicate`, **no email sent**; new leads get `status: new` + email |

Spam is never stored and never emailed; duplicates are stored (for visibility) but don't notify. To add Cloudflare Turnstile later (Tier 2), create a site key at cloudflare.com → Turnstile and ask Claude to wire it in.

## Tracking

GTM `GTM-WFLR2PF` (GA4 + Clarity flow through it, same as the old page) and Meta Pixel `1034815105967725` are injected in [components/Analytics.tsx](components/Analytics.tsx). IDs live in the funnel config.

## How to change copy / prices / FAQ

Everything on the page is in **one file**: [content/funnels/pr-reseller.ts](content/funnels/pr-reseller.ts). Edit text there — no component changes needed. Then rebuild + deploy (below).

## How to create a NEW funnel page

1. Copy `content/funnels/pr-reseller.ts` → `content/funnels/<new-funnel>.ts`, change the copy/IDs.
2. Add its logos/images to `public/logos/`.
3. Point `app/page.tsx` (or a new route folder) at the new config.
4. Create a new n8n webhook path (duplicate the "Rankkking LP — Lead Capture" workflow, change the path), put the URL in the config.
5. Deploy — new Netlify site per funnel, or a route on this one.

## Build & deploy

```bash
npm run dev          # local preview on :3000
npm run build        # static export to out/
npx netlify-cli deploy --prod --dir=out   # deploy (already linked to lp-rankkking)
```

The deploy account is `hi@ankushgupta.xyz` (Netlify team hi-udqj89k).

## DNS cutover (when ready to go live)

In your DNS for `rankkking.com`, change the `lp` record to a **CNAME → `lp-rankkking.netlify.app`**, then add `lp.rankkking.com` as a custom domain in the Netlify project settings (Netlify auto-provisions SSL). The old FlexiFunnels page keeps working until you flip this.

## Notes

- Env override: set `NEXT_PUBLIC_LEAD_WEBHOOK_URL` at build time to change the webhook without editing the config.
- Test leads named "TEST LEAD (Claude setup — ignore)" and "BROWSER TEST (Claude — ignore)" exist in the data table from setup verification — delete them in n8n.
- An empty duplicate Netlify project `rankkking-lp` exists on the other Netlify account (ankush-ksf7ei4 team, created via the connector before its deploy proxy failed) — safe to delete.
