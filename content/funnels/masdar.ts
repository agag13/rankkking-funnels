import type { FunnelConfig } from "../types";

/**
 * Masdar City Free Zone — business-setup lead-gen funnel.
 *
 * NOTE (pre-launch TODOs, all clearly placeholder):
 *  - tracking.gtmId / metaPixelId + layout ga4Id → real Masdar GTM / GA4 / Meta Pixel
 *  - webhookUrl → real Masdar lead endpoint (env NEXT_PUBLIC_MASDAR_LEAD_WEBHOOK_URL)
 *  - whatsapp.number → real Masdar/agency WhatsApp (empty = WhatsApp UI hidden)
 *  - footer.email / legal hrefs / meta.url → real contact, legal pages, live domain
 *  Copy is original and facts (0% tax on qualifying income, 100% ownership, 2,500+
 *  companies, anchor tenants, media coverage) are from masdarcityfreezone.com.
 */
export const masdar: FunnelConfig = {
  id: "masdar-business-setup",
  meta: {
    title: "Set Up a 100%-Owned Company in Abu Dhabi | Masdar City Free Zone",
    description:
      "Launch your company in Abu Dhabi's Masdar City Free Zone — 100% foreign ownership, 0% tax on qualifying income, licence in days, plus residency & freelancer visas. Get a free setup quote.",
    ogImage: "/og-masdar.png",
    url: "https://masdar-city-freezone-setup.netlify.app",
  },
  tracking: {
    gtmId: "TODO-GTM-ID",
    metaPixelId: "TODO-PIXEL-ID",
  },
  whatsapp: {
    number: "", // TODO: add real WhatsApp number (digits + country code). Empty hides WA UI.
    prefill: "Hi, I'd like a setup quote for Masdar City Free Zone.",
  },
  webhookUrl: process.env.NEXT_PUBLIC_MASDAR_LEAD_WEBHOOK_URL ?? "",
  announcement: {
    text: "100% foreign ownership · 0% tax on qualifying income · Set up in days",
    cta: "Get a Free Quote",
  },
  logo: { src: "/logos/masdar-wordmark.svg", alt: "Masdar City Free Zone" },
  hero: {
    badge: "ABU DHABI · MASDAR CITY FREE ZONE",
    titlePre: "Launch Your ",
    titleHighlight: "100% Foreign-Owned Company",
    titlePost: " in Abu Dhabi",
    subtitle:
      "Set up in Masdar City Free Zone — a 0%-tax, fully digital free zone in the UAE capital, home to 2,500+ companies from early-stage startups to global leaders. Licence, residency visas and bank-account support, handled end to end.",
    chips: [
      "100% foreign ownership",
      "0% tax on qualifying income",
      "Licence in days",
      "Residency & freelancer visas",
    ],
  },
  form: {
    heading: "Get Your Free Setup Quote",
    subheading: "Tell us your plan — our Abu Dhabi team sends a tailored quote and visa options.",
    namePlaceholder: "Full name",
    emailPlaceholder: "Email address",
    phonePlaceholder: "Mobile number",
    agencyPlaceholder: "",
    cityLabel: "",
    cities: [],
    submitLabel: "Get My Free Quote →",
    popupSubmitLabel: "Get My Free Quote",
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
    kicker: "THE CHALLENGE",
    title: ["Setting Up in the UAE", "Shouldn't Feel This Hard."],
    cards: [
      {
        icon: "🧭",
        title: "Free zone or mainland?",
        body: "Dozens of zones, each with different rules, costs and visa quotas. Most founders lose weeks just deciding where to register.",
      },
      {
        icon: "💸",
        title: "Hidden costs everywhere",
        body: "Headline setup prices rarely include visas, establishment cards, medicals or office space. The real bill shows up later.",
      },
      {
        icon: "🗂️",
        title: "Paperwork & delays",
        body: "Approvals, attestations and bank KYC — one missing document sends you right back to the start.",
      },
    ],
  },
  howItWorks: {
    kicker: "HOW IT WORKS",
    title: ["Your Company in Abu Dhabi,", "in 3 Simple Steps."],
    steps: [
      {
        number: "01",
        label: "Step 01",
        title: "Tell us your plan",
        body: "Share your activity and nationality. We recommend the right licence, visa count and package inside Masdar City Free Zone.",
      },
      {
        number: "02",
        label: "Step 02",
        title: "We handle the setup",
        body: "Name reservation, licence, establishment card, visas and bank-account introductions — managed by our Abu Dhabi team, mostly digital.",
      },
      {
        number: "03",
        label: "Step 03",
        title: "Start operating",
        body: "Receive your trade licence and residency visa, open your account, and run a 100%-owned UAE business.",
      },
    ],
    cta: "Get a Free Quote",
  },
  math: {
    kicker: "PRICING",
    title: ["Transparent, All-In Pricing."],
    rows: [
      { label: "Trade licence", value: "Matched to your activity" },
      { label: "Residency visas", value: "Add as you grow" },
      { label: "You always know the total", value: "No hidden fees", highlight: true },
    ],
    note: "We quote the all-in cost upfront — licence, visas and admin included.",
  },
  network: {
    kicker: "WHY ABU DHABI",
    title: ["A Capital Built for Business."],
    stats: [
      { value: "2,500+", label: "Companies already based here" },
      { value: "0%", label: "Tax on qualifying income" },
      { value: "100%", label: "Foreign ownership" },
    ],
    logosTitle: "HOME TO GLOBAL LEADERS — IRENA · UAE SPACE AGENCY · SIEMENS · HONEYWELL · ETIHAD",
    cta: "Start Your Setup",
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
        body: "Commercial, professional or industrial licence matched to your activity — issued fast and fully digital.",
      },
      {
        icon: "🛂",
        title: "Residency visas",
        body: "Investor and employee visas for you, your team and family, with flexible quotas as you scale.",
      },
      {
        icon: "🧑‍💻",
        title: "Freelancer permits",
        body: "Going solo? Get a freelance permit and UAE residency without forming a full company.",
      },
      {
        icon: "🏦",
        title: "Bank-account support",
        body: "Introductions to UAE banks and help preparing a clean KYC pack to speed up approval.",
      },
      {
        icon: "🧾",
        title: "0% tax on qualifying income",
        body: "Benefit from the UAE free-zone tax regime, full profit repatriation and zero customs duty.",
      },
      {
        icon: "🏗️",
        title: "Office & flexi-desk options",
        body: "From a flexi-desk to a full office in Masdar City, scaling with your team.",
      },
    ],
    cta: "Get a Free Quote",
  },
  comparison: {
    kicker: "COMPARE",
    title: "Masdar City Free Zone vs the Alternatives",
    columns: ["Masdar City Free Zone", "Mainland", "Other Free Zones"],
    rows: [
      { label: "Foreign ownership", values: ["yes:100%", "Most activities", "yes:100%"] },
      { label: "Tax on qualifying income", values: ["yes:0%", "9% corporate", "yes:0%"] },
      { label: "Local sponsor required", values: ["no:No", "Sometimes", "no:No"] },
      { label: "Setup speed", values: ["In days", "Weeks", "Varies"] },
      { label: "Customs duty", values: ["yes:0%", "5%", "yes:0%"] },
      { label: "Innovation ecosystem", values: ["yes:Space · AI · clean energy", "General", "Varies"] },
      { label: "Global anchor tenants", values: ["yes:Yes", "—", "Varies"] },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Your Questions, Answered",
    items: [
      {
        q: "How long does company setup take?",
        a: "Once we have your documents, a Masdar City Free Zone licence is typically issued within a few working days, with visa processing running in parallel.",
      },
      {
        q: "Do I need a local partner or sponsor?",
        a: "No. Free-zone companies are 100% foreign-owned — you keep full ownership and full profit repatriation.",
      },
      {
        q: "Is income really taxed at 0%?",
        a: "Qualifying free-zone income benefits from 0% corporate tax under the UAE regime, with zero customs duty and full repatriation. We'll confirm exactly what qualifies for your activity.",
      },
      {
        q: "Can I get a residency visa?",
        a: "Yes — investor and employee residency visas come with your licence for you, your staff and family. Freelance permits with residency are also available.",
      },
      {
        q: "What will it cost?",
        a: "Cost depends on your activity and how many visas you need. Tell us your plan and we send an all-in quote with no hidden fees.",
      },
      {
        q: "Can you help me open a bank account?",
        a: "Yes. We introduce you to UAE banks and help prepare your KYC pack so approval moves faster.",
      },
      {
        q: "I'm outside the UAE — can I set up remotely?",
        a: "Yes. Most of the process is digital, and many founders complete their setup before they ever arrive in the UAE.",
      },
    ],
  },
  finalCta: {
    title: ["Build Your Business", "in the UAE Capital."],
    subtitle:
      "Tell us your plan and get a tailored setup quote — licence, residency visas and bank support, handled end to end.",
    note: "We reply fast during business hours.",
    cta: "Get My Free Setup Quote",
  },
  footer: {
    about:
      "Company formation in Masdar City Free Zone, Abu Dhabi — 100% foreign-owned licences, residency visas and bank-account support for founders and businesses worldwide.",
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
  popup: { heading: "Get the Free Setup Quote", delaySeconds: 20 },
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
      "Our Abu Dhabi setup team will review your details and send your tailored quote shortly. Please check your email (and spam folder).",
    whatsappCta: "Message us on WhatsApp",
  },
};
