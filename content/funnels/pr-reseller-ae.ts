import type { FunnelConfig } from "../types";

/**
 * /ae — White-Label PR Partner Program for UAE Agencies, branded as 01Wire.
 *
 * Everything the /ae page shows lives in this file. Placeholders awaiting the
 * owner are marked [PLACEHOLDER-*] — grep this file for "PLACEHOLDER" before
 * going live.
 */

// [PLACEHOLDER-WHATSAPP] Currently the shared +91 number — may become a +971 number.
const WHATSAPP_NUMBER = "918630322204";

export const prResellerAe: FunnelConfig = {
  id: "pr-reseller-ae",
  meta: {
    title: "White-Label PR Partner Program for UAE Agencies | 01Wire",
    description:
      "Resell PR under your own brand — Khaleej Times and Gulf News-class placements across Dubai & GCC, international and Indian media. AED wholesale rates, AED invoicing, AED 950–1,950 margin per placement.",
    // [PLACEHOLDER-OG-IMAGE] No 01Wire OG image yet — this is the Rankkking one. Replace before launch.
    ogImage: "/logos/og-image.png",
    // [PLACEHOLDER-URL] Final domain pending — ae.01wire.com assumed.
    url: "https://ae.01wire.com",
  },
  tracking: {
    // Same GTM container + Meta Pixel as the India funnel.
    gtmId: "GTM-WFLR2PF",
    metaPixelId: "1034815105967725",
  },
  whatsapp: {
    number: WHATSAPP_NUMBER,
    prefill: "Hi 01Wire! I run an agency in the UAE and want the AED wholesale rate card.",
  },
  // [PLACEHOLDER-WEBHOOK] Same env-override pattern as the India funnel, but a
  // DEDICATED webhook path: the India n8n workflow drops any phone that is not a
  // 10-digit Indian mobile, so +971 leads would be silently lost. Duplicate the
  // "Rankkking LP — Lead Capture" workflow, set the path to 01wire-ae-lead, and
  // relax its phone check to accept +9715XXXXXXXX before going live.
  webhookUrl:
    process.env.NEXT_PUBLIC_AE_LEAD_WEBHOOK_URL ??
    "https://n8n-main-u34424.vm.elestio.app/webhook/01wire-ae-lead",
  announcement: {
    text: "Q4 cohort — we onboard 5 UAE partner agencies per quarter · 3 slots left",
    cta: "Claim a Slot",
  },
  // No 01Wire logo asset exists in /public/logos yet, so the page renders a
  // Baloo 2 text wordmark ("01WIRE" + coral dot). Drop a real file in
  // /public/logos and remove `wordmark` to switch to an image. [PLACEHOLDER-LOGO]
  logo: { src: "", alt: "01Wire", wordmark: "01WIRE" },
  hero: {
    badge: "WHITE-LABEL PR · FOR AGENCIES IN THE UAE",
    titlePre: "Add ",
    titleHighlight: "AED 15–40K Monthly Revenue",
    titlePost: " Without Hiring a PR Team",
    subtitle:
      "Resell press coverage under your own brand — across Dubai & GCC, international, and Indian publications. We write, place, and report, fully white-label. You invoice the client and keep the margin.",
    chips: ["No join fee", "AED invoicing", "Pay per placement"],
  },
  form: {
    heading: "Get the AED Wholesale Rate Card",
    subheading: "Full AED rate card + partner onboarding, on WhatsApp. Support 9am–9pm GST.",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email ID", // unused — email field hidden on this funnel
    phonePlaceholder: "WhatsApp Number",
    agencyPlaceholder: "Agency Name",
    cityLabel: "--Select your city--",
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Other GCC"],
    submitLabel: "Send Me the AED Rate Card →",
    popupSubmitLabel: "Get the AED Rate Card",
    privacyNote: "100% confidential · We never contact your clients",
    chatPrompt: "Prefer to chat?",
    phoneCountry: {
      flag: "🇦🇪",
      dialCode: "+971",
      pattern: "^5\\d{8}$",
      stripPrefix: "^(?:971|0)(?=5)",
      errorMessage: "Please enter a valid UAE mobile number (9 digits, starting with 5).",
    },
    agencyMode: "name",
    hideEmail: true,
    timeline: {
      label: "When do you want to start?",
      options: ["This month", "This quarter", "Just exploring"],
    },
    clientCount: {
      label: "Clients who'd buy PR from you",
      options: ["1–2", "3–5", "6+"],
    },
    thankYouPath: "/ae/thank-you/",
  },
  pressLogos: {
    title: "PLACEMENTS YOUR CLIENTS WILL RECOGNISE",
    // Styled text wordmarks — swap in real logo files when licensing is confirmed.
    logos: [
      { src: "", alt: "Khaleej Times", text: "Khaleej Times", height: 24 },
      { src: "", alt: "Gulf News", text: "Gulf News", height: 24 },
      { src: "", alt: "Arabian Business", text: "Arabian Business", height: 22 },
      { src: "", alt: "Forbes Middle East", text: "Forbes Middle East", height: 22 },
      { src: "", alt: "Entrepreneur Middle East", text: "Entrepreneur ME", height: 22 },
      { src: "", alt: "And 2,500 more publications worldwide", text: "+2,500 more worldwide", height: 15 },
    ],
  },
  problem: {
    kicker: "THE PROBLEM",
    title: ["Your Clients Want Press.", "The Economics Say No."],
    columns: 4,
    cards: [
      {
        icon: "📩",
        title: "Clients keep asking for PR",
        body: "“Can you get us in the news?” Every agency in Dubai hears it. Saying no sends the client shopping — sometimes for a whole new agency.",
      },
      {
        icon: "💸",
        title: "Dubai PR firms want AED 15–30K/month",
        body: "Retainers start before a single placement lands. There is no room left to resell that at a margin your client will accept.",
      },
      {
        icon: "🤷",
        title: "No journalist network",
        body: "GCC media relationships take years to build — and they don't transfer when an editor changes desks. You can't shortcut this alone.",
      },
      {
        icon: "⚠️",
        title: "PR firms poach your clients",
        body: "Introduce a PR firm and watch them quietly pitch your client direct next quarter. Your relationship, their upside.",
      },
    ],
  },
  howItWorks: {
    kicker: "HOW IT WORKS",
    title: ["Sell PR Under Your Brand.", "We Run the Desk Behind It."],
    steps: [
      {
        number: "01",
        label: "Step 01",
        title: "You Sell",
        body: "Pitch PR as your own service at your own retail price. Use our co-marketing decks and proposal templates to close — you decide the margin.",
      },
      {
        number: "02",
        label: "Step 02",
        title: "We Deliver",
        body: "Our desk writes the story, places it, and sends you a fully white-label report — most placements live in 24–48 hours. Our name appears nowhere.",
      },
      {
        number: "03",
        label: "Step 03",
        title: "You Collect",
        body: "Your client sees your logo on every page and pays your invoice in AED. You bank the difference — placement after placement.",
      },
    ],
    cta: "Become a Partner",
  },
  math: {
    kicker: "THE MATH IN AED",
    title: ["Wholesale In.", "Retail Out. You Keep the Gap."],
    rows: [
      // [PLACEHOLDER-RATES] Wholesale floor pending final AED rate card.
      { label: "You pay 01Wire (wholesale)", value: "from AED 550" },
      { label: "You charge your client", value: "AED 1,500–2,500" },
      { label: "Your margin per placement", value: "AED 950–1,950", highlight: true },
    ],
    note: "Five retained clients at 2–4 placements a month is AED 15–40K in recurring margin. You set the retail price — plenty of partners charge more.",
  },
  // Not rendered on /ae (SocialProofAe + pressLogos cover it) — required by the
  // FunnelConfig type. Kept honest so it can be switched on later.
  network: {
    kicker: "THE NETWORK",
    title: ["One Desk.", "2,500+ Publications on Tap."],
    stats: [
      { value: "2,500+", label: "Publications worldwide" },
      { value: "3", label: "Markets on one rate card" },
      { value: "24–48hr", label: "Typical turnaround" },
    ],
    logosTitle: "YOUR CLIENTS GET COVERAGE IN",
    cta: "Get the AED Rate Card",
  },
  threeMarkets: {
    kicker: "COVERAGE",
    title: ["One Partner.", "Three Markets."],
    markets: [
      {
        icon: "🇦🇪",
        title: "Dubai & GCC",
        subtitle: "The coverage your clients actually ask for by name.",
        points: [
          "Khaleej Times & Gulf News-class titles",
          "Business, tech and lifestyle desks",
          "English and Arabic outlets",
        ],
      },
      {
        icon: "🌍",
        title: "International",
        subtitle: "Global credibility for funding rounds, launches and founders.",
        points: [
          "Forbes ME & Entrepreneur ME-class titles",
          "US, UK and global business press",
          "Tier-1 options quoted upfront",
        ],
      },
      {
        icon: "🇮🇳",
        title: "India",
        subtitle: "For Dubai companies expanding into India — at source rates.",
        points: [
          "2,500+ Indian news & PR sites",
          "National dailies to startup media",
          "Same white-label reports",
        ],
      },
    ],
    note: "One rate card, one WhatsApp thread, one AED invoice — wholesale pricing in all three markets. No other UAE partner desk covers all three at source rates.",
  },
  socialProofAe: {
    kicker: "SOCIAL PROOF",
    title: ["300+ Agencies Already Resell Our PR.", "UAE Partners Are Next."],
    stats: [
      { value: "300+", label: "Active partner agencies" },
      { value: "2,500+", label: "Publications worldwide" },
      { value: "3", label: "Markets on one rate card" },
      { value: "24–48hr", label: "Avg placement time" },
    ],
    // [PLACEHOLDER-SCREENSHOT] ×3 — drop in real placement screenshots (browser
    // frames are already styled; replace the placeholder body with an <img>).
    screenshots: [
      {
        outlet: "Khaleej Times",
        url: "khaleejtimes.com/business/…",
        caption: "Placement screenshot slot — [PLACEHOLDER-SCREENSHOT]",
      },
      {
        outlet: "Gulf News",
        url: "gulfnews.com/business/…",
        caption: "Placement screenshot slot — [PLACEHOLDER-SCREENSHOT]",
      },
      {
        outlet: "Arabian Business",
        url: "arabianbusiness.com/…",
        caption: "Placement screenshot slot — [PLACEHOLDER-SCREENSHOT]",
      },
    ],
    // [PLACEHOLDER-TESTIMONIAL] ×2 — sample copy; replace with real UAE partner quotes.
    testimonials: [
      {
        quote:
          "We quoted PR to a client on Monday and sent them a live Khaleej Times-class placement report the same week — under our logo. It's now a line item in every retainer we pitch.",
        name: "Partner Agency",
        company: "Digital agency, Dubai",
        initials: "PA",
      },
      {
        quote:
          "The AED invoicing is what sold us. No FX mess, no INR conversion on our books — wholesale in, retail out, and the margin stays clean.",
        name: "Partner Agency",
        company: "Marketing studio, Abu Dhabi",
        initials: "PA",
      },
    ],
  },
  // Not rendered on /ae (SocialProofAe replaces it) — required by the type.
  // [PLACEHOLDER-CASE-STUDY] if this section is ever switched on.
  socialProof: {
    kicker: "SOCIAL PROOF",
    title: ["300+ Agencies Already Resell Our PR.", "UAE Partners Are Next."],
    stats: [
      { value: "300+", label: "Active partner agencies" },
      { value: "2,500+", label: "Publications worldwide" },
      { value: "3", label: "Markets on one rate card" },
      { value: "24–48hr", label: "Avg placement time" },
    ],
    testimonials: [],
    caseStudy: {
      stats: [],
      quote: "",
      author: "",
    },
    logosTitle: "TRUSTED BY 300+ PARTNER AGENCIES",
    partnerLogos: [],
  },
  partnerTiers: {
    kicker: "PARTNER TIERS",
    title: ["Start Free.", "Scale When the Volume Comes."],
    subtitle:
      "Every tier is pay-per-placement — tiers are set by monthly volume, and you move up automatically.",
    tiers: [
      {
        name: "Starter",
        tagline: "Your first placements",
        features: [
          "No join fee — start today",
          "Pay per placement, nothing upfront",
          "White-label reports with your logo",
          "WhatsApp support, 9am–9pm GST",
        ],
      },
      {
        name: "Growth",
        tagline: "5+ placements a month",
        badge: "★ RECOMMENDED",
        recommended: true,
        features: [
          "Bulk wholesale rates",
          "Dedicated account manager",
          "Co-marketing kit — decks & proposals",
          "Everything in Starter",
        ],
      },
      {
        name: "Scale",
        tagline: "15+ placements a month",
        features: [
          "Best wholesale tier",
          "Priority 24-hour delivery",
          "Quarterly strategy call",
          "Everything in Growth",
        ],
      },
    ],
    cta: "Get the AED Rate Card",
    note: "No contracts at any tier. Slow month? You simply pay the Starter rate — nothing else changes.",
  },
  guarantee: {
    kicker: "OUR GUARANTEE",
    icon: "🛡️",
    title: "Published in 10 working days — or full dirham back.",
    body: "If we accept your order and the placement isn't live within 10 working days, you get a full refund in AED. Most placements go live in 24–48 hours — the guarantee exists so your client deadlines are never at risk.",
    // [PLACEHOLDER-GUARANTEE-TERMS] Pending owner confirmation of the exact terms.
    note: "Full guarantee terms are included in the partner rate card.",
  },
  features: {
    kicker: "WHAT YOU GET",
    title: "Everything Built for UAE Partner Agencies",
    cards: [
      {
        icon: "🏷️",
        title: "White-Label Reports",
        body: "Every report carries your branding. Our name appears nowhere. Your clients only ever see you.",
      },
      {
        icon: "📊",
        title: "Placement Tracker Dashboard",
        body: "Real-time status on every order. Live links and reports in one place — 24/7.",
      },
      {
        icon: "⚡",
        title: "24–48hr Turnaround",
        body: "Most placements live within two business days. Tier-1 takes longer — we tell you upfront.",
      },
      {
        icon: "💬",
        title: "Support 9am–9pm GST",
        body: "A real human on WhatsApp through the full UAE working day — not a ticket queue.",
      },
      {
        icon: "📁",
        title: "Co-Marketing Materials",
        body: "Sales decks, proposal templates and case-study formats — pre-built so you close faster.",
      },
      {
        icon: "📉",
        title: "Bulk Pricing Tiers",
        body: "The more you place, the lower your wholesale. Growth and Scale tiers unlock automatically.",
      },
      {
        // [PLACEHOLDER-ORGANIC-PR] Scope & pricing of the organic PR offering pending owner input.
        icon: "🌱",
        title: "Organic PR Services",
        body: "Editorial pitching and earned features for clients who need organic coverage. Ask your account manager for scope and pricing.",
      },
    ],
    cta: "Get the AED Rate Card",
  },
  comparison: {
    kicker: "COMPARE",
    title: "Partner with 01Wire vs Doing It Any Other Way",
    columns: ["Partner with 01Wire", "Build in-house", "Dubai PR firm"],
    rows: [
      { label: "Cost to start", values: ["AED 0", "AED 25K+/month hire", "AED 15–30K/month retainer"] },
      { label: "Your brand on reports", values: ["yes:Always", "yes:Yes", "no:Never"] },
      { label: "Client relationship stays yours", values: ["yes:100%", "yes:Yes", "no:At risk"] },
      { label: "GCC + India + International reach", values: ["yes:All three", "Years to build", "no:Mostly GCC"] },
      { label: "Typical turnaround", values: ["24–48 hours", "Months to first hit", "2–4 weeks"] },
      { label: "Pay per placement", values: ["yes:Yes", "no:Fixed salary", "no:Retainer lock-in"] },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Questions UAE Agencies Always Ask",
    items: [
      {
        q: "Do you invoice in AED? What payment methods do you accept?",
        a: "Yes — every invoice is raised in AED. Pay by UAE bank transfer or card. No foreign-exchange surprises and no INR conversion on your books.",
      },
      {
        q: "Is there a joining fee or minimum commitment?",
        a: "No join fee, no retainer, no minimums. Pay per placement — order one or order fifty. You control your volume month to month.",
      },
      {
        q: "Who owns the client relationship?",
        a: "You do, always. Your contract, your invoice, your brand on every report. We are your production desk, not a competing agency.",
      },
      {
        q: "How fast are placements published?",
        a: "Most placements go live in 24–48 hours. Tier-1 and international titles take longer — we quote the timeline upfront, before you commit.",
      },
      {
        q: "Can I see a sample white-label report before I start?",
        a: "Yes. Message us on WhatsApp and we'll send a sample report with placeholder branding, so you can see exactly what your client would receive.",
      },
      {
        q: "Which publications can you place in?",
        a: "Khaleej Times and Gulf News-class titles across Dubai & GCC, Forbes ME and Entrepreneur ME-class international options, and 2,500+ Indian news sites. The full list, with wholesale rates, is in the rate card.",
      },
      {
        q: "How do wholesale rates work?",
        a: "Each publication has a fixed wholesale price in AED. You set your own retail price on top — most partners charge 2–3× wholesale. At 5+ placements a month, bulk tiers lower your wholesale automatically.",
      },
      {
        q: "Will you ever contact our clients?",
        a: "Never. We have no contact with your clients at any stage — no calls, no emails, no branding. Everything routes through you.",
      },
      {
        q: "What happens if a placement fails?",
        a: "We replace it free, or refund it under the 10-working-day guarantee. Your client never sees an issue — you stay in control of the story.",
      },
    ],
  },
  finalCta: {
    title: ["Stop Referring PR Away.", "Start Invoicing It in AED."],
    subtitle:
      "No join fee. Pay per placement. White-label from day one — join the Q4 UAE partner cohort before the remaining slots go.",
    note: "Replies within business hours, 9am–9pm GST",
    cta: "Get the AED Wholesale Rate Card",
  },
  footer: {
    about:
      "01Wire is the white-label PR desk behind agencies across the UAE and GCC — placements in Dubai & GCC, international, and Indian media, resold under your brand.",
    // [PLACEHOLDER-EMAIL] Confirm the partner inbox.
    email: "partners@01wire.com",
    // [PLACEHOLDER-ADDRESS] Registered office / free-zone address pending.
    office: "Dubai, United Arab Emirates",
    // [PLACEHOLDER-TRN] Add the TRN when registration is confirmed (empty hides the line).
    gstin: "",
    legal: [
      // [PLACEHOLDER-LEGAL] Publish these pages on 01wire.com before launch.
      { label: "Privacy Policy", href: "https://01wire.com/privacy-policy/" },
      { label: "Terms of Service", href: "https://01wire.com/terms-of-service/" },
    ],
    copyright: "© 2026 01WIRE. All rights reserved.",
    disclaimer:
      "Revenue figures are based on partner-reported averages across markets. Individual results vary.",
  },
  // The /ae route does not render the lead-magnet popup — these two blocks are
  // required by the FunnelConfig type and only take effect if LeadPopup is ever
  // added to app/ae/page.tsx.
  popup: { heading: "Get the AED Wholesale Rate Card", delaySeconds: 14 },
  leadMagnet: {
    funnelId: "pr-reseller-ae-magnet",
    badge: "FREE DOWNLOAD",
    heading: "Get the AED Wholesale Rate Card",
    subheading: "The full publication list with AED wholesale pricing, sent straight to WhatsApp.",
    bullets: [
      "Dubai & GCC, international and Indian publications",
      "Wholesale AED pricing per title",
      "White-label sample report included",
    ],
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email (we'll send the rate card here)",
    phonePlaceholder: "WhatsApp Number",
    submitLabel: "Send Me the Rate Card →",
    privacyNote: "100% confidential · We never contact your clients",
    deliveryPath: "/ae/thank-you/",
    page: {
      title: "AED Wholesale Rate Card | 01Wire",
      metaDescription: "AED wholesale PR rate card for UAE partner agencies.",
      intro: "",
      tip: "",
      ctaTitle: "",
      ctaBody: "",
      ctaButton: "",
    },
  },
  thankYou: {
    title: "✅ Opening WhatsApp…",
    subtitle:
      "Your AED wholesale rate card is on its way. If WhatsApp didn't open automatically, tap the green button below to message us directly.",
    whatsappCta: "Open WhatsApp",
    backHref: "/ae/",
  },
};
