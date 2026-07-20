// AI Video funnel — served at /ai-video-page
//
// This funnel has a different shape from the PR-reseller funnel (no margin math,
// no press logos, no lead magnet), so it uses its own config type rather than
// FunnelConfig. Leads still post to the shared n8n webhook with funnel id
// "ai-video" so n8n can branch on it.

export const AI_VIDEO_FUNNEL_ID = "ai-video";

export const aiVideo = {
  id: AI_VIDEO_FUNNEL_ID,

  meta: {
    title: "AI Video Production for Brands & Agencies | Rankkking",
    description:
      "AI UGC ads, brand commercials, and e-commerce product photoshoots — produced in days, not weeks. Frontier LLMs and automation pipelines, human-directed. Get a quote.",
    url: "https://lp.rankkking.com/ai-video-page/",
    ogImage: "/logos/og-image.png",
  },

  webhookUrl:
    process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL ??
    "https://n8n-main-u34424.vm.elestio.app/webhook/rankkking-lead",

  whatsapp: {
    number: "918630322204",
    prefill: "Hi Rankkking! I want to know more about AI video production.",
  },

  logo: { src: "/logos/rankkking-logo.png", alt: "Rankkking" },

  nav: [
    { label: "What we make", href: "#pillars" },
    { label: "Process", href: "#process" },
    { label: "Why AI-first", href: "#compare" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    badge: "AI-FIRST VIDEO STUDIO",
    titlePre: "Studio-grade video, ",
    titleHighlight: "at the speed",
    titlePost: " of AI",
    subtitle:
      "We fuse frontier LLMs, custom automation pipelines, and tools like CapCut and Photoshop to turn a weeks-long shoot into a same-week deliverable — without losing the craft.",
    chips: [
      "UGC ads, commercials & product shoots",
      "Built for enterprise brands & agencies",
      "Human-directed, AI-accelerated",
    ],
    ctaPrimary: "Get a Quote",
    ctaSecondary: "See what we make",
  },

  // Gradient placeholders for the hero reel wall — swap for real reel thumbnails
  reelGradients: [
    "linear-gradient(135deg,#0c1e4a,#3b82f6)",
    "linear-gradient(135deg,#12295f,#60a5fa)",
    "linear-gradient(135deg,#0c1e4a,#22c55e)",
    "linear-gradient(135deg,#081431,#2563eb)",
    "linear-gradient(135deg,#1e1b4b,#818cf8)",
    "linear-gradient(135deg,#0f3d4d,#22d3ee)",
    "linear-gradient(135deg,#12295f,#4ade80)",
    "linear-gradient(135deg,#050b1d,#3b82f6)",
  ],

  stack: {
    label: "One orchestrated pipeline of frontier models & production tools",
    tools: [
      "GPT", "Claude", "Gemini", "Midjourney", "Runway", "Sora",
      "CapCut", "Photoshop", "ElevenLabs", "Flux", "Kling", "n8n",
    ],
  },

  pillars: {
    kicker: "THREE PILLARS",
    title: ["One studio.", "Three AI production lines."],
    subtitle:
      "Each pillar runs on its own tuned workflow of LLMs, automations, and creative tools.",
    items: [
      {
        num: "01 / UGC",
        title: "AI UGC Ads",
        thumb: "linear-gradient(135deg,#0c1e4a,#3b82f6)",
        body:
          "Scroll-stopping, creator-style ads at scale. AI actors, hooks, scripts, and edits — dozens of variants per concept, ready for paid social.",
        points: ["AI creators & voices", "Hook + script generation", "Batch variant production"],
      },
      {
        num: "02 / FILM",
        title: "AI Brand Commercials",
        thumb: "linear-gradient(135deg,#12295f,#60a5fa)",
        body:
          "Cinematic brand films without the crew. Concept-to-cut commercials generated and edited through our directed AI pipeline.",
        points: ["Cinematic AI generation", "Brand-consistent styling", "Broadcast-ready delivery"],
      },
      {
        num: "03 / SHOOT",
        title: "AI Product Photoshoots",
        thumb: "linear-gradient(135deg,#0c1e4a,#22c55e)",
        body:
          "E-commerce imagery — every angle, background, and lifestyle scene — generated and retouched without a physical studio.",
        points: ["On-model & lifestyle scenes", "Infinite backgrounds", "Retouch via Photoshop AI"],
      },
    ],
  },

  process: {
    kicker: "THE PIPELINE",
    title: ["Human-directed.", "AI-accelerated."],
    steps: [
      {
        number: "01",
        title: "Brief & strategy",
        body: "You share the goal, brand, and assets. We map it to the right pillar and workflow.",
      },
      {
        number: "02",
        title: "AI production run",
        body: "Our LLM + automation pipeline generates scripts, visuals, and cuts — human-directed at every gate.",
      },
      {
        number: "03",
        title: "Polish & deliver",
        body: "Final edits in CapCut and Photoshop, QA'd by our team, delivered in your formats — in days, not weeks.",
      },
    ],
  },

  comparison: {
    kicker: "WHY AI-FIRST WINS",
    title: "The math of an AI studio",
    columns: ["Rankkking AI Studio", "In-House Team", "Traditional Agency"] as const,
    rows: [
      { label: "Turnaround", values: ["Days", "Weeks", "Weeks–months"] },
      { label: "Cost per asset", values: ["Low", "High (fixed staff)", "High"] },
      { label: "Variant volume", values: ["Unlimited", "Limited", "Limited"] },
      { label: "No physical shoot", values: ["yes:", "no:", "no:"] },
      { label: "Scales across markets", values: ["yes:", "no:", "no:"] },
      { label: "Human creative direction", values: ["yes:", "yes:", "yes:"] },
    ],
  },

  socialProof: {
    kicker: "SIGNAL",
    title: "What brands & agencies say",
    testimonials: [
      {
        quote:
          "40 UGC ad variants in the time our old studio took to book a shoot. Paid social CPA dropped 30%.",
        name: "Head of Growth",
        company: "DTC Skincare Brand",
        initials: "HG",
      },
      {
        quote:
          "We white-label their pipeline for our clients. The product photoshoot output is indistinguishable from studio work.",
        name: "Founder",
        company: "Performance Agency",
        initials: "F",
      },
      {
        quote:
          "A full brand commercial concept-to-cut in under a week. This is how enterprise video should work now.",
        name: "Brand Marketing Lead",
        company: "Consumer Electronics",
        initials: "BM",
      },
    ],
  },

  faq: {
    kicker: "QUESTIONS",
    title: "Questions brands always ask",
    items: [
      {
        q: "Is this fully automated, or is there a human involved?",
        a: "Human-directed, AI-accelerated. Our team owns strategy, creative direction, and final QA at every stage — AI does the heavy lifting in between.",
      },
      {
        q: "Which tools and models do you use?",
        a: "A tuned stack of frontier LLMs plus generative video and image models, orchestrated with custom automations and finished in CapCut and Photoshop. We pick the right tool per pillar.",
      },
      {
        q: "Can you match our brand guidelines?",
        a: "Yes. We lock styling, tone, colour, and voice to your brand kit so every output is on-brand and consistent across variants.",
      },
      {
        q: "What formats do you deliver?",
        a: "Whatever you run — vertical UGC for paid social, 16:9 commercials, and full product image sets sized per channel.",
      },
      {
        q: "How fast is turnaround?",
        a: "Most projects ship in days, not weeks. Exact timelines depend on scope — we confirm on your quote.",
      },
    ],
  },

  form: {
    heading: "Get a Quote",
    subheading: "Tell us what you need. We reply within one business day.",
    services: [
      "AI UGC Ads",
      "AI Brand Commercials",
      "AI Product Photoshoots",
      "Multiple / not sure",
    ],
    submitLabel: "Get My Quote",
    privacyNote: "No spam. We only use your details to send your quote.",
    chatPrompt: "Prefer WhatsApp?",
  },

  finalCta: {
    title: ["Ship more video.", "In less time. For less."],
    subtitle:
      "Tell us your brand, pillars, and volume. We reply within one business day with a scoped quote.",
    cta: "Get a Quote",
  },
} as const;

export type AiVideoConfig = typeof aiVideo;
