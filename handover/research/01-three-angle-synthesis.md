# FameNinja ORM LP — Research Synthesis (2026-09-10)

## A) Three-Angle Comparison Table

| Element | Our LP today | Ad-library advertisers | Dubai agencies | India competitors |
|---|---|---|---|---|
| **Hero / offer** | H1 "Take Back Control of Your Search Results" (no ORM keyword); free confidential audit; 3 checkmarks | Removify: "If we don't succeed, you don't pay"; Prime: "Free reputation audit in 24 hours" + "Remove negative content"; CheckMyRisks: free instant AI-reputation scan (brand name only); RepIndia sends ads to a blog post (anti-lesson) | "Get a Proposal/Quote" + "Free Consultation" dominate; free-audit framing nearly absent; proof-stuffed subheads (Appinventiv); Mighty Warner: "TOP REPUTATION MANAGEMENT SERVICES IN DUBAI" | ORB: "#1... Delhi NCR & India" badge + 8 checkmark bullets; SevenStar: "Get Quote" + counter bar; V4B generic agency hero |
| **Form design** | 5 fields (4 required incl. city select); text-[15px] (iOS zoom); placeholder-only, no labels; honeypot; single instance | CheckMyRisks: 1 required field; Prime: modal → prefilled WhatsApp (no backend); Removify: preferred-contact-time + hidden gaclientid/page-url attribution, reCAPTCHA; A2Z: intl country-code picker | Budget-qualifying dropdowns, AED 5K–100K+ (Digital Gravity); "response in 2 mins" promise (Appinventiv); service+timeline qualifiers | ORB: service-type dropdown (problem, not city) + country-code dropdown, form duplicated hero+footer; SevenStar: slide-in quote form + footer form; RepIndia: city dropdown for routing |
| **Trust** | PLACEHOLDER testimonials ×6 live; unverifiable "500+" ×3; no logos, no case studies; empty footer mailto, no address/GSTIN | Removify: press bar (Inc, Entrepreneur), "5.0 / 300+ reviews", named testimonials, case studies with metrics, platform logo wall; Prime: 16 platform logos, 9 city+case-type testimonials; CheckMyRisks: "1500+ reports / 3 min / 15+ criteria" numeric bar; Media Watcher: weak (our edge) | Govt/mega-brand logo walls (Govt of Dubai, Emaar, Ferrari) + partner/award badges (Google Premier, MENA Search Awards) outweigh review counts; district addresses (SZR, Business Bay) | ORB: 1200+ clients/10+ yrs/89% lift, 8 vertical case studies, platform wall, "Featured In"; SevenStar: 500+/1000+ counters + visible $249–599/mo pricing |
| **WhatsApp / phone** | wa.me float + "Chat on WhatsApp Instead"; prefill is mild "I need help"; **zero tel: links** | Prime: WhatsApp-only funnel + float; Removify: 3 phone lines + CallRail, no WA; A2Z: WA + 4 tel: (incl. Dubai +971) | WhatsApp on 7/8 pages, often above forms — primary UAE channel; sticky +971 numbers | ORB: WA prefill "urgent confidential help" + 8 tel: links; SevenStar: 7 tel: + Tawk.to chat; V4B: chat widget + Schedule-a-Call (no WA) |
| **Segmentation** | City select only (geography, not problem) | Persona blocks: CEO/Legal/PR (CheckMyRisks), PR/Brand/Corp (Media Watcher); Prime: service dropdown in modal | Persona/use-case pages; "Alternative to X" comparison clusters (Media Watcher, Zazz) | ORB: 6-option service dropdown (Glassdoor / court case / crisis / Wikipedia...) — their #1 element; RepIndia: city + service dropdowns |
| **Localization** | "INDIA" eyebrow, where-we-work section, +91 prefix; no UAE presence | A2Z: dual India+UAE numbers and geo pages; Removify live in Gulf (AE/QA/KW) with Glassdoor success-fee ads | +971 + named Dubai district address = legitimacy stamp (7/8); AED budgets; Vision 2030/UAE PDPL name-drops; Arabic toggle rare (2/8 — white space) | ORB country-code dropdown captures NRI/overseas |
| **Urgency / risk reversal** | Free audit, NDA, no-obligation; no SLA on main form ("1 working day" only in popup JSON); timed 15s popup duplicating hero offer | Removify success-fee = strongest risk reversal; Prime: "audit in 24 hours", 24h–60d timeline; Media Watcher: crisis-escalation fear | "2 mins response" promise; consultation-now framing; little discounting urgency | ORB: "Emergency Help", "24/7", "Instant Response", urgency-loaded WA prefill; SevenStar: "Guaranteed" language (policy-risky) |
| **Compliance framing** | Honest: "remove what is lawfully removable" + disclaimer — strong | Removify: guarantee the **fee**, not the outcome; A2Z: "We Push Down, Not Delete" + removal-keyword capture then ethical reframe; Prime aggressive (immigration-record removal); monitoring SaaS trivially clean | Clean — no removal claims (mostly non-ORM); ReputationManagementDubai promises removal (outlier) | A2Z-style honesty vs SevenStar "Guaranteed Reputation Management" — we already sit on the compliant side |
| **Tracking** | GTM + FB pixel live; **Clarity ID empty**; no AW- conversion tag visible (may be inside GTM — inputs don't confirm); exposed n8n webhook; zero JSON-LD | Removify: GTM+Meta+LinkedIn+CallRail+ClickCease (full stack); Prime: gtag but **no conversion events** (anti-lesson); CheckMyRisks: FAQPage+Org schema | GA4/GTM standard; HubSpot/Clarity/Mouseflow (Media Watcher) | SevenStar & V4B run AW- conversion tags; ORB thin (GA4 only) |

**Conflicts noted:** popup is described as "exit popup" in the section list but config shows a 15-second *timed* popup (conversion audit). India teardown says "3 wa.me w/ prefill" while technical audit itemizes float + under-form link — counts differ, both confirm prefilled wa.me links exist.

## B) Missing-On-Our-Page List (prioritized)

| # | Item | Evidence angle(s) | Impact | Effort |
|---|---|---|---|---|
| 1 | Remove/replace PLACEHOLDER testimonials, `[Client name]` ×7 | Tech audit, CRO audit, India | Trust (critical) + ad-disapproval risk | S |
| 2 | Footer: real mailto, tel:, address, GSTIN | Tech audit, CRO, Dubai (address = legitimacy) | Trust | S |
| 3 | Service-type dropdown (removal / suppression / Glassdoor / crisis / court case) | India (ORB #1), ad-lib (Prime, RepIndia) | Lead volume + qualification | S |
| 4 | tel: links / callback path | India (SevenStar 7 tel:, ORB 8), Dubai | Lead volume (call-preferring 45+) | S |
| 5 | SLA line "Audit on WhatsApp within 1 working day" under submit | CRO (copy exists in popup JSON), ad-lib (Prime 24h) | Lead volume | S |
| 6 | Success-fee / outcome-conditional pricing line | Ad-lib (Removify) | Lead volume + compliance-safe | S |
| 7 | Urgency WA prefill ("urgent confidential help") | India (ORB) | Lead volume | S |
| 8 | Clarity project ID | Tech audit | CRO visibility | S |
| 9 | 16px inputs (kill iOS zoom) + labels/aria-labels + focus-visible | Tech audit | Lead volume (mobile) + a11y | S |
| 10 | JSON-LD: Organization + Service + FAQPage | Tech audit, ad-lib (CheckMyRisks) | SEO/trust | S |
| 11 | Platform logo wall + "Don't see your platform?" (add IndiaMART, MouthShut, AmbitionBox, Justdial) | Ad-lib (Removify, Prime), India (ORB) | Trust + long-tail conversion | M |
| 12 | Numeric proof bar with verifiable stats + case-type/city-labeled testimonials | Ad-lib (CheckMyRisks, Prime), India (ORB, SevenStar) | Trust | M |
| 13 | Second form instance (footer) | India (ORB, SevenStar) | Lead volume | S |
| 14 | Sticky mobile CTA bar (Audit / WhatsApp) | CRO audit | Lead volume | S |
| 15 | Make city optional; keep for routing only | CRO, RepIndia (routing use) | Lead volume | S |
| 16 | High-intent segment blocks/FAQs: court cases/RTBF, Glassdoor/AmbitionBox, pricing, crisis fast-lane, deepfakes | CRO audit, ad-lib personas | Lead volume (ad message match) | M |
| 17 | "Online Reputation Management" verbatim in H1/subhead | CRO audit | QS/message match | S |
| 18 | Rework 15s popup → true exit-intent with incremental value (checklist or WA) | CRO audit | Lead volume | M |
| 19 | Canonical + env og:url, sitemap.xml + robots line | Tech audit | SEO/speed | S |
| 20 | Webhook protection (Turnstile/server validation) + AW- conversion firing confirmed | Tech audit, ad-lib (Prime anti-lesson) | Data integrity | M |
| 21 | UAE rail: +971 contact, Dubai district address if real, AED framing — only when UAE targeting starts | Dubai (7/8), A2Z dual-rail | Lead volume (UAE) | M–L |
| 22 | JS diet (audit 71KB-gz chunk), fix autoComplete="url" on concern field | Tech audit, CRO | Speed | M |

## C) Top 10 Build List (next revision)

1. Delete or replace the placeholder testimonial section today — live "[PLACEHOLDER]" under paid traffic (tech + CRO audits, both flagged critical).
2. Fill the footer: mailto:, tel: +91 70423 41907, office address, GSTIN (tech audit; Dubai research shows address = legitimacy stamp).
3. Swap city select for a required service-type dropdown (Remove negative links / Suppress articles / Glassdoor-AmbitionBox / Crisis / Court case / Other); city becomes optional (ORB teardown #1 driver; CRO friction #3).
4. Add under the submit button: "Free audit delivered on WhatsApp within 1 working day — pay only for agreed outcomes" (copy exists in popup JSON; Removify success-fee pattern, policy-safe).
5. Change WA prefill to "Hi, I need urgent confidential help with my online reputation" on all wa.me links (ORB's hot-lead self-selection).
6. Set inputs to 16px, add labels/aria-labels to all 6 controls, add :focus-visible (tech audit FAILs; majority-mobile traffic).
7. Set the Clarity project ID and verify a Google Ads conversion fires on form submit AND wa.me click (tech audit: Clarity blind; Prime anti-lesson: untracked WhatsApp leads).
8. Inject Organization + Service + FAQPage JSON-LD from the 6 existing FAQs, plus rel=canonical and sitemap.xml (tech audit: zero schema, no canonical).
9. Add a platform logo wall (Google, Glassdoor, AmbitionBox, IndiaMART, MouthShut, Justdial, Trustpilot) with "Don't see your platform? Ask us" (Removify + Prime + ORB all run one; we have none).
10. Duplicate the lead form above the footer and add a sticky mobile bottom bar "Free Audit | WhatsApp" (ORB/SevenStar dual-form pattern; CRO audit gap #9); rework the 15s popup into true exit-intent offering a 3-point self-audit checklist instead of the same form (CRO audit #7).

Deferred until UAE campaigns launch: +971/AED/Dubai-address rail and Arabic toggle (Dubai research — high value, but only with real UAE presence; don't fake the address).