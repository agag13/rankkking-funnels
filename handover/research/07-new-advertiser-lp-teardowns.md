# New-Advertiser Landing Page Teardowns (2026-09-10)

**A2Z Reputation — homepage teardown (fetched 2026-09-10, https 200, www→apex redirect; desktop and mobile serve identical HTML)**

**What they sell:** ORM push-down + review management, brand monitoring, content promotion, local SEO — plus nav items for "Remove Negative Content Online," defamation/libel, and "Cyber Litigation Services." Footer claims "23 years old firm." Geo pages: Dubai, USA, UK, Kenya.

**Hero:** "From Bad Reviews to Great Results — We Transform Your Online Image." CTA: "Get in touch."

**Lead capture:** 3 Contact Form 7 forms (name, email, phone with intl country-code picker, message; one adds subject), all reCAPTCHA-gated. Floating "WhatsApp Us" (wa.me/917065043632), "Request a Call Back" CTA, tel: links +91-9811209922, +91-7065043632, Dubai +971-585301580, mailto info@a2zreputation.com. No calendar booking.

**Trust:** 6 testimonials with Western names/no companies (Michael Anderson, Jessica Martinez…), "Businesses We Have Worked With" logo strip, 8 industry tiles (IVF, healthcare, dental, law, real estate…), 4-step process, 6-item FAQ.

**Compliance posture — the standout:** explicitly anti-guarantee. Section headed "What We Do (We Push Down, Not Delete)"; FAQ: "No. We do not promise the removal of legitimate content." Repeated "ethical/white-hat" framing. Yet nav still carries removal-intent pages ("Remove Negative Reviews Online") — they capture removal keywords, then reframe to push-down.

**Offer:** "free reputation assessment" (FAQ only, weak placement). No pricing, no urgency.

**Stack:** WordPress + WPBakery + Slider Revolution + WP Rocket; GA4 G-Q948Y933VR, GTM-MGJ47J2Q, Google Ads AW-803341524 (running Google Ads conversion tracking), Microsoft Clarity, LogRocket (ykrr4g/a2zreputationcom), Site Kit, Popup Maker. No Meta pixel.

**Weight/speed:** HTML 147KB, TTFB ~2.16s, total ~2.34s for HTML alone; ~2.25MB subresources across 79 files, 31 scripts, 47 images. Heaviest: rs6.min.js 406KB, libs 185KB, rbtools 161KB. Bloated; a lean LP would beat it easily.

**3 ideas worth borrowing:**
1. **Removal-keyword capture + ethical reframe** — bid/rank for "remove negative content," convert on a defensible push-down promise; safer for Google Ads policy too.
2. **Dual-country contact rails** — separate India + UAE phone numbers, WhatsApp deep link, and intl phone-code field on forms; cheap credibility for India/UAE targeting.
3. **Cyber-litigation adjacency** — pairing ORM with legal (defamation/litigation) services differentiates and justifies premium pricing; FameNinja could surface a legal-escalation track. Also: promote their buried "free reputation assessment" into a hero-level offer — they didn't.

Files: /private/tmp/claude-501/-Users-ankushgupta-paid-ninja/a995ffe9-33be-4571-b836-59d0ee2871d2/scratchpad/a2z_desktop.html, a2z_text.txt

---

**Teardown: mediawatcher.ai/pr-and-crisis-management/** (fetched 2026-09-10, HTTP 200, no redirects; desktop + mobile HTML identical)

**What they sell:** SaaS media-monitoring platform (Meltwater-style), not an ORM/removal agency. This page is the "PR & Crisis Management" use-case page. Offices listed: Singapore, Dubai (Internet City), Vilnius.

**Hero copy:** "Stay in control when it matters most" / "A negative mention can quickly escalate into a full-blown crisis." Secondary: "Maintain Your Brand Image Like A Pro", "Catch crises before they gain momentum", "Know Everything. React Instantly. Stay in Control."

**Lead capture:** No form on-page. All CTAs = "Request Demo" / "Book Free Demo" linking to /contact-us/, which loads a HubSpot embedded form (portal 243406694, formId 9f5425b9-…; fields render via JS, not visible in HTML). No WhatsApp, no phone, no Calendly. Only mailto:sales@mediawatcher.ai. YouTube "Watch Video" embed on page.

**Trust signals:** Weak. One anonymous case blurb ("A luxury brand utilized Media Watcher… mitigated a potential PR crisis"). "100,000+ media sources" claim. No client logos, no named testimonials, no review badges. Three physical addresses in footer. Heavy "X Alternative" comparison pages (Meltwater, Cision, Brand24, etc.) in nav.

**Offer framing:** Free demo only; persona blocks for PR/Comms, Brand Managers, Corporate Relations. Fear-based urgency (crisis escalation) + control language.

**Compliance posture:** Clean — no removal guarantees, no legal/defamation claims; it's monitoring software, so nothing to guarantee. Only Privacy Policy/Terms links. WebPage + BreadcrumbList schema.

**Tracking stack:** GTM (GTM-M29CPPRL), GA4 (G-ZTH59GK2EG), Google Ads (AW-17128263917), LinkedIn Insight (pid 8586161), MS Clarity, Mouseflow, HubSpot, Ahrefs Analytics. No Meta pixel found.

**Weight/speed:** HTML 70KB, TTFB ~1.1s desktop; ~73 images ≈2.76MB + 162KB CSS/JS ≈ ~3MB total. WordPress 7.1 + WPBakery + Autoptimize.

**3 ideas worth borrowing for India/UAE ORM lead-gen:**
1. Persona-split sections (PR head / founder / HR) with role-specific pain copy — cheap to build, sharpens Google Ads message match.
2. "Alternative to X" comparison-page cluster feeding the money page — steals competitor branded search.
3. Their gap is our edge: they bury lead capture behind /contact-us with zero WhatsApp/phone. An India/UAE page with on-page form + WhatsApp click-to-chat + named proof will out-convert this pattern.

Files: /private/tmp/claude-501/-Users-ankushgupta-paid-ninja/a995ffe9-33be-4571-b836-59d0ee2871d2/scratchpad/mw_desktop.html, mw_contact.html, mw_text.txt

---

**RepIndia teardown — key finding first: the ad URL is not a landing page.** `/digital/marketing` 301s (WordPress redirect, `x-redirect-by`) to a blog post: `https://www.repindia.com/blog/marketing-reality-check-2026/`. Same for desktop and mobile UA. They're sending Google IN ad clicks to editorial content.

**What they sell:** full-service digital agency. Form's services dropdown: Social Media Management, Online Reputation Management, Creative Solutions, SEO, Digital Film Production, Website & Tech, Media & Buying, Performance Marketing. ORM is one line item, not the pitch.

**Hero copy (H1):** "2026 Marketing Reality Check: Are Brands Over-Investing in AI and Under-Investing in Strategy?" Intro: "Output has increased significantly, but direction often feels unclear." Zero ORM messaging above the fold.

**Lead capture:** footer Contact Form 7 ("Let's Connect / Write a Message"): Name, Email*, Mobile*, Services dropdown, City dropdown (Delhi/NCR, Mumbai, Bengaluru, Chennai, Hyderabad, Kolkata, Other), reCAPTCHA. WhatsApp `wa.me/+919818350700`; `mailto:info@repindia.com`. No calendar, no visible tel: link.

**Trust signals:** weak on this page — a "697 views" counter, footer Case Studies link. No client logos, awards, or testimonials in the page HTML.

**Offer framing:** none. No pricing, no free audit, no urgency. CTA is "Got An Idea? Let's Work On It." Footer links an "SEO Packages" page.

**Compliance posture:** no removal guarantees, no legal/takedown framing anywhere — it's an editorial page; nothing to flag.

**Tracking stack:** GTM-TKK77W3, GA UA-54483484-1 (legacy UA), Google Ads AW-10961582535, Microsoft Clarity, gtag. No Meta pixel in raw HTML (could load via GTM). Cloudflare CDN.

**Weight/load:** HTML 209KB; ~31 external assets (25 scripts, 19 images) totaling ~1.67MB → ~1.9MB page. TTFB ~1.5s, HTML complete ~2.0s (SIN edge).

**Three ideas worth borrowing:**
1. **City dropdown for lead routing/qualification** — mirror with Delhi/Mumbai/Bengaluru + Dubai/Abu Dhabi/Sharjah for an India/UAE ORM page; feeds geo intent to sales.
2. **Service-selector field** — pre-qualifies intent (removal vs. suppression vs. review management) before the first call.
3. **Persistent WhatsApp click-to-chat (wa.me deep link)** — their only low-friction channel; make it primary CTA in India/UAE.

Anti-lesson: their ad→blog redirect wastes spend — a dedicated ORM LP will out-convert this easily.

---

**Removify.com teardown (fetched 2026-09-10; www 301s to removify.com; desktop+mobile UA both 200)**

**What they sell:** Online content/review removal (Google, Glassdoor, Indeed, Trustpilot, RateMDs, Vitals, Tripadvisor, OpenTable) plus AMPLIFY review generation and review monitoring. Pay-per-outcome removal service, AU/US offices.

**Hero:** "When your reputation is on the line, you can rely on Removify" / "Fast, effective removal of unwanted content online. If we don't succeed, you don't pay." CTAs: "Get a free quote" / "Request a call".

**Lead capture:** 4 Contact Form 7 forms, no WhatsApp, no calendar. Request-a-call form: Full Name, Email, Phone, Company, "Preferred Contact Time (e.g. between 1pm-3pm)", "How can we help?". Hidden fields pass page-url, gaclientid, rsid (CallRail session) and lead_source_description for attribution. reCAPTCHA on forms. Phones: US +1 855-432-2909, Intl +61 3 9112 6280, AU 1300 915 074 (CallRail number-swap active).

**Trust:** "Featured In" press bar (Inc, Entrepreneur, Sky, Financial Review, SBS, SMH...), "5.0 Based on 300+ reviews" with named testimonials, "Join 10,000+ businesses", 3 case studies with metrics ("5 Days / 7 Reviews removed"), platform logo wall.

**Offer/compliance framing:** No blanket removal guarantee — outcome-conditional pricing: "You will only pay for what we successfully remove." Targets "unfair and unwanted"/"illegitimate" content; no legal threats or lawyer framing on the homepage. This is the compliant posture: guarantee the fee structure, not the outcome.

**Tracking stack:** GTM (GTM-MQV6XML), gtag/GA, Meta pixel + FB domain verification, LinkedIn Insight, CallRail, ClickCease (click-fraud protection — they run paid search), reCAPTCHA. WordPress 5.8 + NitroPack.

**Weight/speed (curl, single location):** HTML doc 246KB, TTFB 2.17s, HTML complete 2.66s; 30 referenced assets ≈1.67MB, so ~1.9MB total. Heavy-ish; NitroPack masks it via lazy-load.

**3 ideas worth borrowing for India/UAE ORM lead-gen:**
1. Success-fee headline ("If we don't succeed, you don't pay") — kills the #1 objection in a low-trust category, and it's Google Ads-policy-safe vs "guaranteed removal".
2. Platform logo wall + "Don't see your platform? Get a quote" catch-all — converts long-tail removal intent (add IndiaMART, MouthShut, AmbitionBox, Justdial).
3. "Preferred contact time" field + hidden gaclientid/page-url attribution — cheap to add, improves call connect rates and lets you tie closed revenue back to keywords.

Files: /private/tmp/claude-501/-Users-ankushgupta-paid-ninja/a995ffe9-33be-4571-b836-59d0ee2871d2/scratchpad/removify_desktop.html, removify_mobile.html

---

**CheckMyRisks.com teardown (fetched 2026-09-10)**

**Fetch note:** `https://www.checkmyrisks.com/` returns **404** (nginx/Cloudflare, both UAs). Live page is non-www `https://checkmyrisks.com/` — 200, identical desktop/mobile HTML (100.7 KB, Nuxt SSR). If their ads use www, they're burning clicks.

**What they sell:** "RiskCheck by Reputation House" — free automated "digital reputation report" scanning Google, AI answers (ChatGPT/Gemini/Perplexity), reviews. Lead magnet funneling to "talk to an expert / request a strategy" (Reputation House ORM services).

**Hero:** "Get your free digital reputation report" / "instant reputation report showing how your company appears across Google search, AI answers, and review platforms — before risks impact your business."

**Lead capture:** Inline form — Company/Brand Name* (only required field), Website, Geography dropdown, Language; CTA "Get Started", "Free – sign up to receive your report" (email gate via /auth, "3 free reports"). **No phone, WhatsApp, or calendar anywhere** (zero tel:/wa.me/calendly in source).

**Trust signals:** "1500+ reports generated / 3 mins avg scan / 15+ criteria"; privacy copy ("We analyze only public sources… data is not shared, sold, or published"); Sample Report + demo video; parent-brand footer; FAQPage + SoftwareApplication + Organization JSON-LD.

**Offer framing:** "Diagnosis, not a dashboard"; "Risk Check doesn't show data. It shows risk"; "diagnostics, not monitoring"; anti-sell FAQ ("doesn't sell — it helps you decide"). Persona blocks: CEO/Founder, Compliance/Legal/Risk, Head of Comms.

**Compliance posture:** Clean — no removal guarantees, no legal promises; frames as "Digital Risk Protection"; policy is a bare /Policy.pdf; one scan per entity.

**Tracking:** GTM-PBS7NDWD + Ahrefs Analytics only (no visible Meta/Clarity pixels in HTML; possibly inside GTM). TTFB ~1.4–1.6s; referenced first-party assets ~10.8 MB (3 MB icon sprite, four 1.6–1.8 MB decorative SVGs) — heavy. Demo video hosted on s3.twcstorage.ru (Russian Timeweb S3) — odd for an AE advertiser.

**3 ideas worth borrowing:**
1. **Free instant scan as the conversion event** — brand name is the only required field; friction near zero, email gated only at report delivery.
2. **"AI is misrepresenting your company" angle** — ChatGPT/Gemini/Perplexity fear is fresh, differentiated ORM hook for India/UAE execs.
3. **Persona-segmented "why you" blocks** (CEO/Legal/PR) + numeric proof bar (reports count, scan time, criteria) — cheap credibility without fake logos.

---

**Teardown: primereputationonline.com** (fetched 2026-09-10, HTTP 200, desktop+mobile UA identical — Next.js SPA, no redirects)

**What they sell:** Individual-focused negative-content removal — newspaper articles, negative links/reviews, Google autosuggest removal, link burial, YouTube deindexing, "legal record removal for immigration." Delhi business (D-56 Tajpur Street, Badarpur, New Delhi 110044; +91 92204 96258).

**Hero:** "Remove negative content and restore your online reputation" / "Get a Free Quote" / "Trusted by 5k+" / "Get free reputation audit in 24 hours!"

**Lead capture:** No backend form. Modal ("Get a consultation right now!") collects name, phone (placeholder "04" — UAE dial hint), email, callback time slot (Morning/Afternoon/Evening), service dropdown (Reputation Mgmt / Content Removal / Brand Monitoring), optional query — then submit just opens wa.me/+919220496258 with a prefilled "*New Consultation Request*" message. WhatsApp float button too. No calendar, no email capture server-side.

**Trust signals:** "1900+ projects completed," 16 platform logos (Google, Glassdoor ["Glossdoor" typo], Ripoff Report, Trustpilot, Indeed...), 9 geo-diverse testimonials (Dubai, Bangalore, NYC, Tokyo...) each "4.8/5" with a case-type label ("Forum Content Removal," "Legal Record Removal for Immigration Case"). Stats labels "Success Rate / Negative Links Removed" exist in JS.

**Offer/compliance:** No explicit guarantee, refund, or price found; timeline claim: "results appear within 24 hours to 60 days... serious cases up to 90 days." Only legal cover is a privacy-consent line under the form. Testimonials are unverifiable; immigration-record-removal framing is aggressive.

**Tracking:** gtag with Google Ads AW-17038701729 + GA4 G-4JN10KRNR4 only — no gtag('event') conversion fires anywhere, no Meta pixel/GTM/Clarity. They likely can't track form→WhatsApp conversions properly.

**Weight/speed:** HTML 75KB, TTFB 1.2s, but ~13.1MB total — hero-image.png alone is 10.4MB uncompressed. Brutal on Indian mobile.

**3 ideas worth borrowing:**
1. **WhatsApp-prefilled structured lead** (name/service/time-slot baked into the message) — perfect for IN/UAE buyers, near-zero friction; but fire an AdWords conversion on click, which they don't.
2. **"Free reputation audit in 24 hours"** — concrete, low-commitment hook beating generic "free consultation."
3. **Case-type-labeled testimonials by city** (Dubai/Bangalore) — instant "people like me" matching; do it with verifiable cases.