import type { FunnelConfig } from "../types";

/**
 * FameNinja — ORM India funnel (first funnel on the `fameninja` branch).
 *
 * COPY RULES (from the 2026-09-06 ads/policy study — do not break these):
 * - Never promise or guarantee removal. Google disapproves "Enabling
 *   dishonest behavior" for ads/pages that sell guaranteed removal of
 *   negative content. FameNinja's only fully-approved pages are the ones
 *   that qualify removal with legal/eligibility language.
 * - Allowed framing: "remove what is lawfully removable, suppress what is
 *   not", "resolution", "legal and ethical", "depends on platform policies".
 * - Claims used below exist on FameNinja's own live pages:
 *   "500+ brands & individuals helped" (agency ORM page stat strip),
 *   free reputation audit (fameninja.com hero), 24/7 crisis response
 *   (approved 2024 RSA headline), phone +91 70423 41907 (site-wide).
 *   Do NOT add new numbers/claims without a source.
 *
 * TODO(user) before deploy:
 * - tracking.gtmId: GTM-NSLJ8GG3 is the container running on
 *   agency.fameninja.com — confirm the AW-17388770213 conversion tag inside
 *   it fires on /thank-you/ of this new domain.
 * - webhookUrl: duplicate the n8n "Rankkking LP — Lead Capture" workflow
 *   as "FameNinja ORM — Lead Capture" with path fameninja-orm-lead.
 * - footer.email / footer.gstin: fill FameNinja's real values.
 * - socialProof.testimonials: replace with REAL client quotes (with
 *   permission). Placeholders are clearly marked and must not go live.
 */

const WHATSAPP_NUMBER = "917042341907";

export const ormIndia: FunnelConfig = {
  id: "orm-india",
  meta: {
    title: "Online Reputation Management Services in India | FameNinja",
    description:
      "Take back control of your search results. We remove what is lawfully removable, suppress what is not, and rebuild your online presence. Free reputation audit.",
    ogImage: "/logos/fameninja-og.png",
    url: "https://lp-fameninja.netlify.app",
  },
  tracking: {
    gtmId: "GTM-NSLJ8GG3",
    metaPixelId: "784877987247242",
  },
  whatsapp: {
    number: WHATSAPP_NUMBER,
    prefill: "Hi FameNinja! I need help with my online reputation.",
  },
  webhookUrl:
    process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL ??
    "https://n8n-main-u34424.vm.elestio.app/webhook/fameninja-orm-lead",
  announcement: {
    text: "Free, confidential reputation audit — know exactly what can and can't be fixed",
    cta: "Get Free Audit",
  },
  logo: { src: "/logos/fameninja-logo.png", alt: "FameNinja" },
  hero: {
    badge: "ONLINE REPUTATION MANAGEMENT · INDIA",
    titlePre: "Take Back Control of ",
    titleHighlight: "Your Search Results",
    titlePost: "",
    subtitle:
      "Negative news, unfair reviews or old content showing up when people search your name or brand? We remove what is lawfully removable, suppress what is not, and rebuild what people see — with an honest assessment first, not hype.",
    chips: [
      "Free confidential audit",
      "Honest about outcomes — no false promises",
      "500+ brands & individuals helped",
    ],
  },
  form: {
    heading: "Get Your Free Reputation Audit",
    subheading:
      "Tell us what's showing up. We'll reply on WhatsApp with what can be fixed, how, and what it costs — no obligation.",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email ID",
    phonePlaceholder: "WhatsApp Number",
    agencyPlaceholder: "Name / brand / link you're concerned about (optional)",
    agencyMode: "text-optional",
    cityLabel: "--Select your city--",
    cities: [
      "Mumbai",
      "Delhi / NCR",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Kolkata",
      "Ahmedabad",
      "Outside India",
      "Other",
    ],
    submitLabel: "Get My Free Audit",
    popupSubmitLabel: "Send My Free Audit",
    privacyNote: "100% confidential. We never share your details or your case.",
    chatPrompt: "Prefer to talk right now?",
  },
  pressLogos: {
    title: "We manage reputations across Google Search, news portals, review platforms and social media",
    logos: [],
  },
  problem: {
    kicker: "SOUNDS FAMILIAR?",
    title: ["One bad search result", "can cost you real business"],
    cards: [
      {
        icon: "📰",
        title: "Negative news & articles",
        body: "An old story or unfair article ranks on page one for your name — and every client, investor and employer sees it first.",
      },
      {
        icon: "⭐",
        title: "Review attacks",
        body: "Fake, malicious or policy-violating reviews are dragging your rating down and scaring off genuine customers.",
      },
      {
        icon: "🔍",
        title: "A search page you don't control",
        body: "When someone Googles you, strangers' content decides your first impression — not you.",
      },
    ],
  },
  howItWorks: {
    kicker: "HOW IT WORKS",
    title: ["Honest process,", "no false promises"],
    steps: [
      {
        number: "01",
        label: "Audit",
        title: "Free confidential audit",
        body: "We map everything that appears for your name or brand and classify each item: lawfully removable, suppressible, or neither. You get the honest picture before you pay anything.",
      },
      {
        number: "02",
        label: "Assess",
        title: "Legal & policy assessment",
        body: "For each harmful item we identify the correct route — platform policy reports, legal notices where applicable, publisher outreach, or de-indexing requests. Only legitimate, white-hat routes.",
      },
      {
        number: "03",
        label: "Execute",
        title: "Removal requests + suppression",
        body: "We pursue removals only where content is lawfully removable. Everything else is suppressed by building and ranking positive, truthful content that takes over your page one.",
      },
      {
        number: "04",
        label: "Monitor",
        title: "Monitoring & reporting",
        body: "You get transparent progress reports, and we keep monitoring so new problems are caught early — with 24/7 response when something urgent breaks.",
      },
    ],
    cta: "Start With the Free Audit",
  },
  math: {
    kicker: "WHAT YOU GET",
    title: ["Clarity first,", "then the fix"],
    rows: [
      { label: "Reputation audit", value: "Free", highlight: true },
      { label: "Crisis response", value: "24/7" },
      { label: "Brands & individuals helped", value: "500+" },
    ],
    note: "The audit tells you exactly what is lawfully removable, what can be suppressed, and what no honest agency can change — so you never pay for the impossible.",
  },
  network: {
    kicker: "WHERE WE WORK",
    title: ["Every surface where", "your reputation lives"],
    stats: [
      { value: "Search", label: "Google results & autocomplete" },
      { value: "News", label: "Articles & publisher outreach" },
      { value: "Reviews", label: "Google, Glassdoor & platforms" },
      { value: "Social", label: "Posts, pages & profiles" },
    ],
    logosTitle: "",
    cta: "Get My Free Audit",
  },
  socialProof: {
    kicker: "RESULTS",
    title: ["Trusted by businesses", "and individuals across India"],
    stats: [
      { value: "500+", label: "Brands & individuals helped" },
      { value: "24/7", label: "Crisis response" },
      { value: "100%", label: "Confidential handling" },
    ],
    testimonials: [
      {
        quote:
          "[PLACEHOLDER — replace with a real client quote, with permission, before launch]",
        name: "[Client name]",
        company: "[Company]",
        initials: "??",
      },
    ],
    caseStudy: {
      stats: [],
      quote:
        "[PLACEHOLDER — replace with a real, verifiable case summary before launch]",
      author: "[Client, with permission]",
    },
    logosTitle: "",
    partnerLogos: [],
  },
  features: {
    kicker: "WHY FAMENINJA",
    title: "ORM the way it should be done",
    cards: [
      {
        icon: "⚖️",
        title: "Legal & ethical only",
        body: "Platform policies, legal notices and publisher outreach — never fake reviews, never black-hat tricks that put you at more risk.",
      },
      {
        icon: "🔒",
        title: "Fully confidential",
        body: "Your case, documents and identity stay private. NDAs available on request.",
      },
      {
        icon: "📊",
        title: "Transparent reporting",
        body: "You see what we're doing, what moved, and what's pending — every month.",
      },
      {
        icon: "🗣️",
        title: "Straight answers",
        body: "If something can't be removed, we tell you upfront and show you the suppression plan instead.",
      },
    ],
    cta: "Talk to Us",
  },
  comparison: {
    kicker: "COMPARE",
    title: "FameNinja vs the alternatives",
    columns: ["FameNinja", "Doing it yourself", "Guarantee-sellers"],
    rows: [
      {
        label: "Free audit before any commitment",
        values: ["yes:Always", "—", "varies"],
      },
      {
        label: "Tells you when removal is NOT possible",
        values: ["yes:Upfront", "—", "no:Rarely"],
      },
      {
        label: "Legal & platform-policy routes only",
        values: ["yes:Always", "yes:If you know them", "varies"],
      },
      {
        label: "Suppression plan when removal isn't eligible",
        values: ["yes:Included", "no:DIY SEO", "varies"],
      },
      {
        label: "Progress reporting",
        values: ["yes:Monthly", "—", "varies"],
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Honest answers to the questions that matter",
    items: [
      {
        q: "Can you remove any negative content from Google?",
        a: "No — and no honest agency can. Removal depends on platform policies and legal eligibility. In your free audit we tell you exactly which items are lawfully removable and which ones we'd suppress with positive, truthful content instead.",
      },
      {
        q: "Do you guarantee results?",
        a: "We don't sell guarantees on removal — content that is factual, lawful and policy-compliant generally cannot be removed. What we do commit to: an honest audit, only legitimate methods, and transparent reporting on what moves.",
      },
      {
        q: "Can you help with fake or defamatory reviews?",
        a: "Yes. Reviews that violate platform policies or the law can be reported and pursued through the platform's own processes and, where applicable, legal notices. Genuine negative reviews can't be deleted — there we work on response strategy and rebuilding your rating with real customers.",
      },
      {
        q: "How long does online reputation management take?",
        a: "Policy-based review reports can move in days to weeks. Suppression of search results typically takes a few months of consistent work. Your audit includes a realistic timeline for your specific case — not a one-size-fits-all promise.",
      },
      {
        q: "Is my case kept confidential?",
        a: "Completely. Your identity, documents and situation are never shared, and we can sign an NDA before you share anything sensitive.",
      },
      {
        q: "What will you NOT do?",
        a: "We don't post fake reviews, fake takedown notices, or use hacking/black-hat tactics — these can backfire legally and make your search results worse. Everything we do can survive scrutiny.",
      },
    ],
  },
  finalCta: {
    title: ["Find out what's fixable —", "before you spend a rupee"],
    subtitle:
      "Get your free, confidential reputation audit. We'll show you what can be removed, what can be suppressed, and exactly how we'd do it.",
    note: "No obligation. 100% confidential.",
    cta: "Get My Free Audit",
  },
  footer: {
    about:
      "FameNinja is an online reputation management agency for individuals and businesses across India and the UAE. We remove what is lawfully removable, suppress what is not, and rebuild what people see when they search for you.",
    email: "",
    office: "India",
    gstin: "",
    legal: [
      { label: "Privacy Policy", href: "https://fameninja.com/privacy-policy" },
      { label: "Terms", href: "https://fameninja.com/terms" },
    ],
    copyright: `© ${new Date().getFullYear()} FameNinja. All rights reserved.`,
    disclaimer:
      "We do not remove factual, lawful, or policy-compliant content, and we do not guarantee removal outcomes. Every engagement starts with an honest assessment of what is and isn't possible under platform policies and applicable law.",
  },
  popup: {
    heading: "Before you go — get your free reputation audit",
    delaySeconds: 15,
  },
  leadMagnet: {
    funnelId: "orm-india-audit",
    badge: "FREE & CONFIDENTIAL",
    heading: "Free Reputation Audit",
    subheading:
      "We'll map what shows up for your name or brand and tell you honestly what can be fixed — on WhatsApp, within one working day.",
    bullets: [
      "Every negative item, classified: removable / suppressible / neither",
      "The exact route we'd use for each (policy, legal, or suppression)",
      "Realistic timeline and cost — before you commit to anything",
    ],
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email ID",
    phonePlaceholder: "WhatsApp Number",
    submitLabel: "Get My Free Audit",
    privacyNote: "100% confidential. We never share your details.",
    deliveryPath: "/thank-you/",
    page: {
      title: "Free Reputation Audit | FameNinja",
      metaDescription: "Request your free, confidential online reputation audit.",
      intro: "Your audit request is in.",
      tip: "Have links handy? Send them on WhatsApp so the audit covers everything.",
      ctaTitle: "Want to move faster?",
      ctaBody: "Message us on WhatsApp and the audit starts right away.",
      ctaButton: "WhatsApp Us Now",
    },
  },
  thankYou: {
    title: "Your free audit request is in.",
    subtitle:
      "Our team will review what's showing up and reply on WhatsApp within one working day with an honest assessment — what's removable, what's suppressible, and what it would cost.",
    whatsappCta: "WhatsApp Us Now",
  },
};
