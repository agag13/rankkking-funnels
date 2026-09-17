# India ORM Landing Page Teardown (all data observed in fetched HTML, 2026-09-10)

**Fetches:** all 5 pages returned HTTP 200 (desktop Chrome UA). No failures.

## 1. Value4Brand.com (homepage, ~1,363 words)
- **Hero:** "Connecting Brands With Digital Future" / "We Change History" — generic agency positioning, ORM buried in nav.
- **Lead capture:** email-subscribe field mid-page; bottom form (fname, email, phone, company, city, service dropdown, message, pre-checked consent). Service dropdown = 8 options (SEO, Social, Review Mgmt…). Custom on-site chat widget (emoji search + message input) + "Schedule a Call" button. 2 tel: links. **No WhatsApp link.**
- **Trust:** client testimonial ("worked with Value4Brand for almost 2 years"), industries-served grid (13 verticals). No client counts/years/certs.
- **Pricing/urgency:** none.
- **Tracking (heaviest):** GTM-5MJMLLK3 + GTM-5N6728FW, GA4 G-X2S6LN3XL6, legacy UA-89603883-1, **Google Ads AW-16527408832**, Microsoft Clarity.

## 2. OnlineReputationBuilders.in (~1,623 words)
- **Hero:** badge "🏆 Ranked #1 Online Reputation Agency in Delhi NCR & India"; H1 "India's Premier Online Reputation Management Agency"; 8 checkmark bullets ("Clear negative search results…", "Over 1,200 happy clients").
- **Lead capture:** 2 identical forms (hero + footer): name, email, **country-code dropdown (India/UK/USA/AU/UAE/SG/CA)**, phone, **service dropdown** (Business Rep Mgmt / Personal-Executive / Remove Negative Search Results / Remove Google-Glassdoor Reviews / Crisis & PR / Wikipedia), optional case details. Under each: "💬 Chat on WhatsApp (Instant Response)" — wa.me/918882788412 prefilled *"Hi, I need urgent confidential help with online reputation management."* 8 tel: links. "🔒 100% secure & confidential" under both forms.
- **Trust:** 89% visibility lift, 97% review-response accuracy, **1200+ clients, 10+ years, 50+ platforms, 250+ brands**; "Featured In Publications"; 8 named-vertical case studies (Insurance, Real Estate, Politics, Celebrity…); platform-logo wall (Trustpilot, RateMDs, Indeed, G2…).
- **Urgency:** "Emergency Help", "24/7 Name Checking", "Instant Response", "urgent confidential" in WA prefill. Pricing: none.
- **Section order:** mega-menu (30+ removal sub-services) → hero+form → services → how-to articles → platform wall → case studies → FAQ → testimonials → logo strip → footer form. **Tracking: GA4 only (G-3HQP074NNT)** — thin.

## 3. TechBursters court-case page (~1,367 words; placement page linking to FameNinja)
- Long-form legal explainer (de-indexing ≠ deletion, Delhi HC 2026 ruling, DPDP) → "Where FameNinja Fits" section → CTA "Message on WhatsApp" (wa.me/917042341907, no prefill) + link to fameninja.com/contact-us + 2 deep links. No form, no tel:. Tracking: GA4 G-N0S0N40ZRT.

## 4. SevenStarWebSolutions.com/remove-negative-complaints/ (~3,036 words). **Verification:** surfaced organically in WebSearch for an India negative-review-removal query (ranking), and its HTML carries **Google Ads conversion tag AW-814014535** + GTM-NBV49NL + GA4 + legacy UA — paid-traffic instrumentation. (Meta Ad Library keyword search for India returned no relevant ORM advertisers — noisy/unusable.)
- **Hero:** "Get Quote For Remove Negative Complaints!" + counter bar "500+ Clients Served Globally | 100+ Brand Reputation Projects | 1000+ Projects Delivered".
- **Lead capture:** slide-in "Get Your Estimate!" quote form (contact name, business name, phone, email, current website, reference website, service select, project overview, timeframe, reCAPTCHA) + second footer form; **7 tel: links (3 numbers incl. landline), wa.me/917835869777, Tawk.to live chat**.
- **Pricing visible:** Bronze $249/mo, Silver $449/mo, Gold $599/mo (phrases targeted, "Search Positions Protected"). "Guaranteed Reputation Management" language sitewide.

## What plausibly drives their lead volume (ranked)
1. **ORB's service-type dropdown** — pre-qualifies problem (Glassdoor vs court case vs crisis) and mirrors ad keyword; lowers friction vs free-text.
2. **WhatsApp-instant positioning with urgency-loaded prefill** (ORB) — "urgent confidential help" self-selects hot leads.
3. **Specific number stack** (ORB 1200+/10yr/89%; SevenStar 500+/1000+) beside the form.
4. **Form above the fold + duplicated at exit** (ORB, SevenStar).
5. **Multiple tel: + live chat + callback** (SevenStar 7 tel links, Tawk.to; V4B chat + Schedule-a-Call).
6. **Visible pricing anchors** (SevenStar) — filters tire-kickers, signals affordability.
7. Country-code dropdown (ORB) — captures NRI/overseas Indians.

## What lp-fameninja.netlify.app lacks (has: hero form name/email/phone/city dropdown/concern field, honeypot, 3 wa.me w/ prefill, floating WA FAB, GTM-NSLJ8GG3 + Clarity, 500+/24/7/100% stats, comparison table, FAQ)
1. **No service-type dropdown** — city dropdown segments geography, not problem type (ORB's #1 element).
2. **Zero tel: links / no callback widget** — call-preferring Indian buyers (esp. 45+) have no path.
3. **No named case studies or platform-logo wall**; testimonial slot is literally "[PLACEHOLDER]" — must fix before spending.
4. **No urgency in WA prefill** ("I need help" vs ORB's "urgent confidential").
5. Single form instance (no footer repeat), no "Featured in" strip, no years-in-business/percentage outcomes, no live chat, no Google Ads (AW-) conversion tag visible.

Sources: [Seven Star complaint-removal page](https://www.sevenstarwebsolutions.com/remove-negative-complaints/) found via [web search results](https://googleseotrends.com/review-removal-agencies-in-india/) listing India review-removal providers.