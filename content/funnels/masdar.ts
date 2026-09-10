import type { FunnelConfig } from "../types";

/**
 * Masdar City Free Zone — business-setup lead-gen funnel (v2, research-backed).
 *
 * Positioning wedge (from competitor research): the big free-zone AUTHORITIES
 * barely advertise directly — the auctions are dominated by consultancy
 * middlemen. So "set up DIRECT with Abu Dhabi's government free zone, no agency
 * mark-up, licence in your own name" is a differentiator none of the top
 * spenders can honestly claim.
 *
 * NOTE (pre-launch TODOs, all clearly placeholder):
 *  - tracking.gtmId / metaPixelId + layout ga4Id → real Masdar GTM / GA4 / Meta Pixel
 *  - webhookUrl → real Masdar lead endpoint (env NEXT_PUBLIC_MASDAR_LEAD_WEBHOOK_URL)
 *  - whatsapp.number → real Masdar/agency WhatsApp (empty = WhatsApp UI hidden)
 *  - footer.email / legal hrefs → real contact + legal pages
 *  Copy is original; facts (0% tax on qualifying income, 100% ownership, 2,500+
 *  companies, anchor tenants, media coverage, est. 2006) are from
 *  masdarcityfreezone.com and public UAE sources.
 */
export const masdar: FunnelConfig = {
  id: "masdar-business-setup",
  meta: {
    title: "Set Up a 100%-Owned Company in Abu Dhabi | Masdar City Free Zone",
    description:
      "Set up your company directly with Abu Dhabi's Masdar City Free Zone — 100% foreign ownership, 0% tax on qualifying income, licence in days, residency & freelancer visas. No agency mark-up. Get your instant quote.",
    ogImage: "/og-masdar.png",
    url: "https://masdar-city-freezone-setup.netlify.app",
  },
  tracking: {
    gtmId: "TODO-GTM-ID",
    metaPixelId: "TODO-PIXEL-ID",
  },
  whatsapp: {
    number: "", // TODO: add real WhatsApp number (digits + country code). Empty hides WA UI.
    prefill: "Hi, I'd like an instant setup quote for Masdar City Free Zone.",
  },
  webhookUrl: process.env.NEXT_PUBLIC_MASDAR_LEAD_WEBHOOK_URL ?? "",
  announcement: {
    text: "Set up direct with Abu Dhabi's government free zone — no agency mark-up",
    cta: "Get My Instant Quote",
  },
  logo: { src: "/logos/masdar-wordmark.svg", alt: "Masdar City Free Zone" },
  hero: {
    badge: "ABU DHABI · GOVERNMENT FREE ZONE",
    titlePre: "Set Up Your Company Directly With ",
    titleHighlight: "Abu Dhabi's Government Free Zone",
    titlePost: "",
    subtitle:
      "100% foreign-owned, licensed in days, 0% tax on qualifying income. Straight from Masdar City Free Zone — no agency mark-up, your licence in your name from day one.",
    chips: [
      "100% foreign ownership",
      "0% tax on qualifying income",
      "Licence in days",
      "Your licence, your name",
    ],
  },
  form: {
    heading: "Get Your Instant Quote",
    subheading: "Five quick fields → your exact, all-in setup cost, sent to you fast.",
    namePlaceholder: "Full name",
    emailPlaceholder: "Email address",
    phonePlaceholder: "Mobile number",
    agencyPlaceholder: "",
    cityLabel: "",
    cities: [],
    submitLabel: "Get My Instant Quote →",
    popupSubmitLabel: "Get My Instant Quote",
    privacyNote: "We'll only use your details to prepare your setup quote.",
    chatPrompt: "Prefer to talk?",
    mode: "intl",
    activityLabel: "-- Your business activity --",
    activities: [
      "Consulting / Professional services",
      "Trading / General trading",
      "E-commerce",
      "Technology / Software / AI",
      "Media & marketing",
      "Holding company",
      "Industrial / Clean energy",
      "Logistics",
      "Freelancer / Solo",
      "Other",
    ],
    nationalityLabel: "-- Your nationality --",
    nationalities: [
      "India",
      "United Arab Emirates",
      "Saudi Arabia",
      "Pakistan",
      "United Kingdom",
      "United States",
      "Egypt",
      "Other",
    ],
  },
  pressLogos: {
    title: "FEATURED IN  BBC · BLOOMBERG · CNN · FINANCIAL TIMES",
    logos: [], // text eyebrow only — real media logos can be added to /public/logos later
  },
  problem: {
    kicker: "THE CATCH NO ONE MENTIONS",
    title: ["Most UAE Setups Run", "Through a Middleman."],
    cards: [
      {
        icon: "🏷️",
        title: "Consultant mark-up & lock-in",
        body: "Most founders buy through an agency that adds a mark-up, holds the licence, and can charge an NOC just to let you leave.",
      },
      {
        icon: "💸",
        title: "Teaser price, renewal shock",
        body: "The 'from AED X' headline rarely includes visas, Emirates ID or next year's renewal. The real bill shows up later.",
      },
      {
        icon: "🏦",
        title: "Then the bank stalls you",
        body: "The licence is the easy part — most people get stuck opening a UAE business bank account, and get left to do it alone.",
      },
    ],
  },
  howItWorks: {
    kicker: "HOW IT WORKS",
    title: ["Your Company in Abu Dhabi,", "Handled End to End."],
    steps: [
      {
        number: "01",
        label: "Step 01",
        title: "Get your exact quote",
        body: "Tell us your activity and nationality. We send one transparent, all-in price — licence, visas and next year's renewal — plus your exact document list.",
      },
      {
        number: "02",
        label: "Step 02",
        title: "Submit online, from anywhere",
        body: "Formation is fully digital — start with your passport from home in about 20 minutes. You only visit the UAE later for your Emirates ID biometrics.",
      },
      {
        number: "03",
        label: "Step 03",
        title: "Licence, visa & bank",
        body: "Your trade licence is issued in days. We arrange your residency visa and Emirates ID, and stay with you until your business bank account is live.",
      },
    ],
    cta: "Get My Instant Quote",
  },
  math: {
    kicker: "PRICING",
    title: ["One Honest Number, In Writing."],
    rows: [
      { label: "Trade licence", value: "Matched to your activity" },
      { label: "Residency visas", value: "Add as you grow" },
      { label: "You always know the total", value: "No hidden renewal fees", highlight: true },
    ],
    note: "We quote the all-in cost upfront — licence, visas and admin included — and show next year's renewal too.",
  },
  network: {
    kicker: "WHY MASDAR CITY",
    title: ["Backed by Abu Dhabi.", "Not an Agency."],
    stats: [
      { value: "2,500+", label: "Companies already based here" },
      { value: "0%", label: "Tax on qualifying income" },
      { value: "100%", label: "Foreign ownership" },
    ],
    logosTitle:
      "HOME TO — UAE SPACE AGENCY · MASDAR · SIEMENS · HONEYWELL · LOCKHEED MARTIN · ETIHAD · IRENA",
    cta: "Get My Instant Quote",
  },
  socialProof: {
    kicker: "TRUSTED",
    title: ["A Proven Home for Business."],
    stats: [
      { value: "2,500+", label: "Companies" },
      { value: "0%", label: "Tax on qualifying income" },
      { value: "100%", label: "Foreign ownership" },
      { value: "Days", label: "To licence" },
    ],
    testimonials: [], // intentionally empty — no fabricated customer quotes
    caseStudy: { stats: [], quote: "", author: "" },
    logosTitle: "",
    partnerLogos: [],
  },
  features: {
    kicker: "WHAT'S INCLUDED",
    title: "Everything to Launch and Operate",
    cards: [
      {
        icon: "🏢",
        title: "Trade licence",
        body: "Commercial, professional or industrial licence matched to your activity — issued fast, fully digital, in your own name.",
      },
      {
        icon: "🛂",
        title: "Residency visas",
        body: "Investor and employee visas for you, your team and family — sponsor your spouse, children and often your parents.",
      },
      {
        icon: "🧑‍💻",
        title: "Freelancer permits",
        body: "Going solo? Get a freelance permit and UAE residency without forming a full company.",
      },
      {
        icon: "🏦",
        title: "Bank-account support",
        body: "We guide you through UAE banks and fintechs and don't stop until your corporate account is live.",
      },
      {
        icon: "🧾",
        title: "0% tax on qualifying income",
        body: "Benefit from the UAE free-zone regime, full profit repatriation and zero customs duty — we keep you compliant.",
      },
      {
        icon: "🏗️",
        title: "Office & flexi-desk options",
        body: "From a flexi-desk to a full office in Masdar City — 5 minutes from Zayed International Airport.",
      },
    ],
    cta: "Get My Instant Quote",
  },
  comparison: {
    kicker: "COMPARE",
    title: "Direct With the Free Zone vs Through a Consultant",
    columns: ["Masdar City (direct)", "Via a Consultant", "Other Free Zone"],
    rows: [
      { label: "Who you set up with", values: ["Abu Dhabi govt free zone", "A reseller / agency", "Free-zone authority"] },
      { label: "Agency mark-up", values: ["no:None", "yes:Added", "Varies"] },
      { label: "Licence in your own name", values: ["yes:Yes", "Sometimes", "yes:Yes"] },
      { label: "NOC needed to leave", values: ["no:No", "Sometimes", "Varies"] },
      { label: "Price in writing upfront", values: ["yes:Yes", "Varies", "Varies"] },
      { label: "Tax on qualifying income", values: ["yes:0%", "0%", "0%"] },
      { label: "Bank account support", values: ["yes:Until it's open", "Varies", "Varies"] },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Your Questions, Answered",
    items: [
      {
        q: "How much does it cost — all in, including the year-two renewal?",
        a: "We give you one transparent, itemised number before you pay anything: licence, residency visa, Emirates ID, establishment card and flexi-desk, plus what renewal costs next year. No teaser price that balloons at checkout, and no surprise bill twelve months later. Tell us your activity and how many visas you need and we'll send the exact figure.",
      },
      {
        q: "Is my income really taxed at 0%?",
        a: "Yes — on qualifying income. The UAE's 0% free-zone rate applies to a Qualifying Free Zone Person earning qualifying income, and it must be maintained each tax period; income from mainland customers is generally taxed at 9%. We explain in plain English exactly what qualifies for your business and keep you compliant so you never get an unexpected bill.",
      },
      {
        q: "Do I have to live in Abu Dhabi to keep my visa?",
        a: "No. Your UAE residency visa stays active as long as you don't remain outside the country for more than roughly six months (180 days) at a stretch. A short visit every few months keeps it valid — you do not have to relocate full-time to hold your visa and sponsor your family.",
      },
      {
        q: "Free zone or mainland — which one do I actually need?",
        a: "If you serve clients abroad, sell online, consult, freelance or run a digital business, a Masdar City free-zone licence is all you need — with 100% ownership and 0% tax on qualifying income. If you plan to sell directly to customers inside the UAE mainland, we'll tell you straight when mainland is the better fit. No upselling.",
      },
      {
        q: "Will you help me open a business bank account?",
        a: "Yes, and we don't stop until it's done. The licence is the straightforward part — most founders get stuck at the bank. We guide you through the application with UAE banks and fintechs such as Wio and Mashreq and stay with you until your corporate account is live.",
      },
      {
        q: "How many visas can I get, and can I sponsor my family?",
        a: "Your package includes residency visas for you, and you can sponsor your spouse, children and in many cases your parents. Visa allocation scales with your package and workspace, and with a qualifying income you can bring your whole family to the UAE on your Masdar City company.",
      },
      {
        q: "Can I set up from India or Pakistan without flying over first?",
        a: "Yes. The company formation is fully digital — start with your passport from home in about twenty minutes. You only need to visit the UAE later for your medical test and Emirates ID biometrics once the licence is issued. We handle document requirements, including attestation and police clearance where needed.",
      },
      {
        q: "How long does the whole process take?",
        a: "Your trade licence is typically issued within a few days of receiving your documents. Visa issuance and the bank account follow shortly after, and our team stays on every step so there are no stalls or surprises.",
      },
    ],
  },
  finalCta: {
    title: ["Own 100% of Your UAE Company.", "Keep What You Earn."],
    subtitle:
      "Get your exact, all-in quote in 60 seconds — licence, residency visas and bank support, handled end to end, direct with the Abu Dhabi free zone.",
    note: "We reply fast during business hours.",
    cta: "Get My Instant Quote",
  },
  footer: {
    about:
      "Set up your company directly with Masdar City Free Zone, a government free zone of Abu Dhabi — 100% foreign-owned licences, residency visas and bank-account support, with no agency mark-up.",
    email: "setup@example.com", // TODO: real contact email
    office: "Masdar City, Abu Dhabi, United Arab Emirates",
    gstin: "",
    legal: [
      { label: "Privacy Policy", href: "#" }, // TODO: real legal pages
      { label: "Terms of Service", href: "#" },
    ],
    copyright: "© 2026 — Business setup in Masdar City Free Zone, Abu Dhabi.",
    disclaimer:
      "Information is for general guidance. Final tax treatment and eligibility depend on your business activity and are confirmed during setup.",
  },
  popup: { heading: "Get Your Instant Quote", delaySeconds: 20 },
  leadMagnet: {
    funnelId: "masdar-guide",
    badge: "FREE",
    heading: "Free UAE Business-Setup Guide",
    subheading: "A quick guide to choosing the right licence, visas and structure in the UAE.",
    bullets: [
      "Free zone vs mainland, explained simply",
      "What a licence really includes",
      "Visa options for you and your team",
    ],
    namePlaceholder: "Your name",
    emailPlaceholder: "Email",
    phonePlaceholder: "Mobile number",
    submitLabel: "Send Me the Guide →",
    privacyNote: "No spam — just the guide.",
    deliveryPath: "/",
    page: {
      title: "UAE Business-Setup Guide",
      metaDescription: "A quick guide to setting up a company in the UAE.",
      intro: "",
      tip: "",
      ctaTitle: "",
      ctaBody: "",
      ctaButton: "",
    },
  },
  thankYou: {
    title: "✅ Thank you — request received",
    subtitle:
      "Our Abu Dhabi setup team will review your details and send your tailored, all-in quote shortly. Please check your email (and spam folder).",
    whatsappCta: "Message us on WhatsApp",
  },
};
