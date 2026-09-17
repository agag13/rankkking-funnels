# Prompt for Aman

Aman — repo invite accept karne ke baad is prompt ko apne Claude Code session mein paste karo (ya khud padh lo). Sab kuch repo ke andar hai — koi zip/alag file nahi chahiye.

---

You are taking over development of the FameNinja ORM landing page (v2). Everything you need is inside this repo on the `fameninja` branch.

**Setup:**
```bash
git clone https://github.com/agag13/rankkking-funnels && cd rankkking-funnels
git checkout fameninja
```

**First, read these completely before writing any code:**
1. `handover/HANDOVER.md` — project state, all links/IDs, your full task list (§4), hard compliance rules (§5), and definition of done (§8).
2. `handover/research/01-three-angle-synthesis.md` — the research behind every change you're making. The rest of `handover/research/` is the supporting evidence (competitor teardowns, audits, ad-library data — all real fetched data, not theory).

**Then:**
1. Open the design mockup (link in `handover/HANDOVER.md` §2 and `handover/design-mockup/README.md` — ask Ankush to share it if you can't open it). It has desktop (1440px) and mobile (390px) artboards plus sticky notes listing every change vs the live page. The mockup is the visual spec; HANDOVER §4 is the complete change list with priorities.
2. Explore the codebase: the entire page is config-driven from `content/funnels/orm-india.ts`; read the repo `README.md`, `app/page.tsx`, `components/LeadForm.tsx`, and `lib/submitLead.ts` before changing anything.
3. Implement §4A (conversion changes) and §4B (technical fixes) on the `fameninja` branch. NEVER touch `main` — it is a different product's live site (lp.rankkking.com). Work in small commits; `npm run build` must stay clean.
4. Before deploy, run the compliance check from HANDOVER §8 (no "guarantee"/"permanent removal"-type language, no placeholder text anywhere). The §5 rules are non-negotiable — this ad account has real Google disapproval history and every word of copy must survive Google's "Enabling dishonest behavior" policy.
5. Some items are blocked on inputs from Ankush (HANDOVER §6: testimonials, footer email/GSTIN/address, Clarity ID, n8n workflow, GTM verification). Build everything else first; ask Ankush for the blocked items in ONE consolidated list. If testimonials aren't available at deploy time, remove that section entirely rather than shipping placeholders.
6. Deploy: `npm run build && netlify deploy --prod --dir=out --site 791b5be8-7be3-4caf-8f2d-c71ca05c99b6` (needs Netlify access — Ankush grants it or runs the command himself). Verify the live page on desktop and a real phone, then hand the URL to Ankush for sign-off against the mockup.

Constraints: pure static export (`output: "export"` stays — no server code), keep the existing lead-capture plumbing intact (n8n webhook + WhatsApp fallback + honeypot + attribution + dedupe), keep the existing design tokens (navy #050b1d–#12295f, brand blue #2563eb, green #22c55e, Inter), and match the mockup rather than redesigning.

---

**Ankush-side checklist (repo access ho chuki hai):**
- [ ] Design mockup artifact share (claude.ai link — HANDOVER §2)
- [ ] Netlify project access (ya deploy Ankush khud karega)
- [ ] n8n + GTM access (ya Ankush khud verify karega)
- [ ] Content inputs: testimonials (written permission), email, GSTIN, address, since-year, Clarity ID
