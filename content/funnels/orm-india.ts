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
const PHONE_E164 = "+917042341907";

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
    prefill: "Hi, I need urgent confidential help with my online reputation.",
  },
  phone: { display: "+91 70423 41907", tel: PHONE_E164 },
  webhookUrl:
    process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL ??
    "https://n8n-main-u34424.vm.elestio.app/webhook/fameninja-orm-lead",
  // Blocked on Ankush: create the Turnstile site+secret key pair, put the
  // site key here (or in NEXT_PUBLIC_TURNSTILE_SITE_KEY) and verify the
  // token in n8n with the secret. Empty = honeypot and timer only, which
  // is all that currently guards a webhook URL visible in page source.
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
  announcement: {
    text: "Free, confidential reputation audit — know exactly what can and can't be fixed",
    textShort: "Free, confidential reputation audit",
    cta: "Get Free Audit",
  },
  stickyCta: { formLabel: "Get Free Audit", whatsappLabel: "WhatsApp" },
  logo: { src: "/logos/fameninja-logo.png", alt: "FameNinja" },
  nav: {
    items: [
      { label: "Your situation", href: "#segments" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Platforms", href: "#where-we-work" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Get Free Audit",
  },
  hero: {
    badge: "ONLINE REPUTATION MANAGEMENT · INDIA",
    titlePre: "Online Reputation Management ",
    titleHighlight: "that takes back your search results",
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
    serviceLabel: "What do you need help with?",
    services: [
      "Remove negative links",
      "Suppress news coverage",
      "Google review issues",
      "Glassdoor / AmbitionBox reviews",
      "Court case showing in search",
      "Crisis — urgent help",
      "Something else",
    ],
    cityLabel: "City (optional)",
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
    cityOptional: true,
    submitLabel: "Get My Free Audit",
    popupSubmitLabel: "Send My Free Audit",
    slaNote: "Audit on WhatsApp within 1 working day · Pay only for agreed outcomes",
    privacyNote: "100% confidential. We never share your details or your case.",
    chatPrompt: "Prefer to talk right now?",
  },
  pressLogos: {
    title: "We manage reputations across Google Search, news portals, review platforms and social media",
    logos: [],
  },
  proofBar: [
    { value: "500+", label: "Brands & individuals helped" },
    { value: "24×7", label: "Crisis response" },
    { value: "1 day", label: "Audit reply on WhatsApp" },
    { value: "100%", label: "Confidential" },
  ],
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
  segments: {
    kicker: "WHERE PEOPLE USUALLY START",
    title: ["Find your situation,", "get a straight answer on it"],
    cards: [
      {
        icon: "⚖️",
        title: "A court case showing in search",
        body:
          "A case report or legal record ranks for your name. Depending on the platform's policy, the jurisdiction, and how the matter ended, some listings may be eligible for de-indexing or removal — and many are not. The audit tells you which bucket yours falls in, and what the suppression route looks like if removal isn't available.",
      },
      {
        icon: "🏢",
        title: "Glassdoor & AmbitionBox reviews",
        body:
          "Ex-employee reviews are costing you candidates. Reviews that break the platform's own policy can be reported through its process; genuine ones cannot be deleted by anyone. We work both sides — reporting what qualifies, and rebuilding the rating with real, current employees.",
      },
      {
        icon: "📰",
        title: "Negative news & articles",
        body:
          "An old story outranks everything else for your name. Where the facts support it we approach the publisher for a correction, an update, or a de-index request. Where they don't, we build and rank truthful content until the story is no longer the first thing people see.",
      },
      {
        icon: "🚨",
        title: "Crisis — it's happening right now",
        body:
          "A story is breaking, a review bomb has started, or something is spreading today. Crisis response runs 24×7. Call or message us and we start on it directly, then send the written assessment after.",
        action: "crisis",
      },
    ],
  },
  platforms: {
    kicker: "PLATFORMS WE WORK ON",
    items: [
      "Google Search",
      "Google Reviews",
      "Glassdoor",
      "AmbitionBox",
      "Justdial",
      "MouthShut",
      "IndiaMART",
      "Trustpilot",
      "YouTube",
      "News portals",
    ],
    note: "Don't see your platform?",
  },
  honesty: {
    title: "We tell you what CAN'T be fixed",
    points: [
      "Factual, lawful, policy-compliant content usually stays up — no agency can change that, and we won't pretend otherwise.",
      "Genuine negative reviews can't be deleted. There we work on your response strategy and on earning better reviews from real customers.",
      "Nobody can promise a removal outcome. Removal depends on platform policies and legal eligibility, which is why the audit comes before the invoice.",
      "If we can't move anything on your list, we say so in the audit — and you've paid nothing to find out.",
    ],
    note: "Every engagement starts with the honest version. That is also why our pricing is tied to the work we agree on, not to an outcome we can't control.",
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
    // Empty on purpose. The testimonial and case-study blocks do not render
    // at all while these are empty, which is the required state until real
    // quotes arrive WITH WRITTEN PERMISSION. Never put sample text here:
    // v1 shipped "[PLACEHOLDER]" quotes to production under paid traffic.
    testimonials: [],
    caseStudy: { stats: [], quote: "", author: "" },
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
      {
        q: "How much does online reputation management cost in India?",
        a: "It depends on how many items are involved, which platforms they sit on, and which route each one needs — a policy report, a legal notice, publisher outreach or suppression. That is exactly what the free audit prices: you get a written scope and a figure before you commit, and you pay for the work agreed in that scope, not for an outcome nobody can control.",
      },
      {
        q: "Can a court case be removed from search results?",
        a: "Sometimes, and often not. It depends on the platform's policy, the jurisdiction, how the matter concluded, and whether any right-to-be-forgotten route applies to you — some listings may be eligible for de-indexing or removal, many are not. We check yours in the audit and tell you honestly which it is. Where removal isn't available, the plan is suppression: ranking accurate, current content above it.",
      },
    ],
  },
  finalCta: {
    title: ["Find out what's fixable —", "before you spend a rupee"],
    subtitle:
      "Get your free, confidential reputation audit. We'll show you what can be removed, what can be suppressed, and exactly how we'd do it.",
    note: "No obligation. 100% confidential.",
    cta: "Get My Free Audit",
    formHeading: "Start with the free audit",
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
    minSecondsOnPage: 20,
  },
  leadMagnet: {
    funnelId: "orm-india-audit",
    badge: "3-POINT SELF-AUDIT",
    heading: "Check your own search results in 3 steps",
    subheading:
      "Do this before you talk to any agency — including us. It takes about ten minutes and tells you how bad the problem actually is.",
    bullets: [
      "Search your name and your brand in an incognito window, on mobile and desktop. The first ten results are what clients, investors and employers see.",
      "List every harmful item and note where it sits: a review platform, a news site, a court or government record, or social media. The platform decides which routes even exist.",
      "For each one ask: is it factual and lawful? If yes, plan on suppression. If it breaks a platform policy or the law, it may be eligible for removal.",
    ],
    checklistCta:
      "Want the same list back with what's actually removable in your case, and what it would cost? Send it to us — the audit is free and confidential.",
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
