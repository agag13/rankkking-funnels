import type { FunnelConfig } from "../types";

const WHATSAPP_NUMBER = "918630322204";

export const prReseller: FunnelConfig = {
  id: "pr-reseller",
  meta: {
    title: "White-Label PR Reseller Program for Agencies | Rankkking",
    description:
      "Resell PR under your brand across 2,500+ news sites & 60,000+ guest post sites. Keep ₹11,501+ per placement. Zero contracts, zero minimums. 300+ agencies in.",
    ogImage: "/logos/og-image.png",
    url: "https://lp.rankkking.com",
  },
  tracking: {
    gtmId: "GTM-MG9X9FR9",
    metaPixelId: "1036469968890220",
  },
  whatsapp: {
    number: WHATSAPP_NUMBER,
    prefill: "Hi Rankkking! I want to know more.",
  },
  webhookUrl:
    process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL ??
    "https://n8n-main-u34424.vm.elestio.app/webhook/rankkking-lead",
  announcement: {
    text: "300+ Indian agencies already reselling PR — limited slots per city",
    cta: "Get Started",
  },
  logo: { src: "/logos/rankkking-logo.png", alt: "Rankkking" },
  hero: {
    badge: "WHITE-LABEL PR · FOR AGENCIES IN INDIA",
    titlePre: "Add ",
    titleHighlight: "₹2–5L Monthly Revenue",
    titlePost: " Without Hiring Anyone",
    subtitle:
      "Resell PR placements in 2,500+ news sites and 60,000+ guest post sites — under your own brand. We handle outreach, writing, placement, and reporting. You collect the margin.",
    chips: ["Zero contracts", "Zero minimums", "Trusted by 300+ agencies"],
  },
  form: {
    heading: "Get the Free Wholesale Rate Card",
    subheading: "We'll send the full rate card + onboarding on WhatsApp in < 15 min.",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email ID",
    phonePlaceholder: "WhatsApp Number",
    agencyPlaceholder: "Agency Website (e.g. myagency.com)",
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
      "Jaipur",
      "Chandigarh",
      "Indore",
      "Other",
    ],
    submitLabel: "Send Me the Wholesale Rates →",
    popupSubmitLabel: "Get My Wholesale Rate Card",
    privacyNote: "100% confidential · We never contact your clients",
    chatPrompt: "Prefer to chat?",
  },
  pressLogos: {
    title: "TRUSTED BY INDIA'S LEADING MEDIA & PR NETWORKS",
    logos: [
      { src: "/logos/thehindu.svg", alt: "The Hindu", height: 26, invert: true },
      { src: "/logos/mint.png", alt: "Mint", height: 22, invert: true },
      { src: "/logos/hindustantimes.webp", alt: "Hindustan Times", height: 24, invert: true },
      { src: "/logos/yourstory.svg", alt: "YourStory", height: 24, invert: true },
      { src: "/logos/oneindia.svg", alt: "OneIndia", height: 24, invert: true },
      { src: "/logos/indiacom.svg", alt: "India.com", height: 22, invert: true },
      { src: "/logos/primex.png", alt: "Primex News Network", height: 28, invert: true },
      { src: "/logos/wordscloud.webp", alt: "Wordscloud", height: 22, invert: true },
      { src: "/logos/moneycontrol.png", alt: "Moneycontrol", height: 20, invert: false },
    ],
  },
  problem: {
    kicker: "THE PROBLEM",
    title: ["Your Clients Keep Asking for PR.", "You Keep Saying No."],
    cards: [
      {
        icon: "🚫",
        title: "No journalist network",
        body: "Building media contacts from scratch takes 5+ years — and that's if you know where to start.",
      },
      {
        icon: "💸",
        title: "In-house PR is expensive",
        body: "₹50K–1.5L/month for one PR hire. Six months before they place anything. Uncertain ROI.",
      },
      {
        icon: "⚠️",
        title: "PR firms steal your clients",
        body: "They quietly go direct. The relationship you spent years building walks right out the door.",
      },
    ],
  },
  howItWorks: {
    kicker: "HOW IT WORKS",
    title: ["Resell PR Under Your Brand.", "We Do Everything Else."],
    steps: [
      {
        number: "01",
        label: "Step 01",
        title: "You Sell",
        body: "Pitch PR as your own service. Use our co-marketing decks and proposal templates. Close at your retail price — you decide the margin.",
      },
      {
        number: "02",
        label: "Step 02",
        title: "We Deliver",
        body: "Our team handles journalist outreach, content writing, placement, and reporting. 24–48 hours for most placements. You don't lift a finger.",
      },
      {
        number: "03",
        label: "Step 03",
        title: "You Collect",
        body: "Your client gets a fully branded report with your logo on every page. They never see us. You bank the margin. Every single time.",
      },
    ],
    cta: "Become a Partner",
  },
  math: {
    kicker: "THE MATH",
    title: ["The Margin Is Yours.", "The Math Is Simple."],
    rows: [
      { label: "You pay Rankkking", value: "₹3,499" },
      { label: "You charge your client", value: "₹15,000" },
      { label: "You keep", value: "₹11,501", highlight: true },
    ],
    note: "And you decide your retail price. Some partners sell at ₹25,000+. Bulk pricing tiers available — the more you sell, the lower your wholesale.",
  },
  network: {
    kicker: "THE NETWORK",
    title: ["5 Years Building This Network.", "Use It Under Your Brand."],
    stats: [
      { value: "2,500+", label: "News & PR sites" },
      { value: "60,000+", label: "Guest post sites" },
      { value: "Tier 1–3", label: "All covered" },
    ],
    logosTitle: "YOUR CLIENTS GET COVERAGE IN",
    cta: "Start Reselling PR",
  },
  socialProof: {
    kicker: "SOCIAL PROOF",
    title: ["300+ Indian Agencies Already", "Resell Our PR. You're Next."],
    stats: [
      { value: "300+", label: "Active reseller agencies" },
      { value: "2,500+", label: "News & PR sites" },
      { value: "60,000+", label: "Guest post sites" },
      { value: "24–48hr", label: "Avg placement time" },
    ],
    testimonials: [
      {
        quote:
          "Integrating Rankkking's white-label PR completely transformed our agency. We added ₹3.8L in pure profit in just 45 days, and clients are thrilled with the instant media visibility.",
        name: "Rahul Desai",
        company: "Catalyst Digital, Mumbai",
        initials: "RD",
      },
      {
        quote:
          "Fulfillment used to be our biggest bottleneck. Now we're securing 50+ premium placements a month with zero extra headcount. Fast turnarounds make us look like rockstars to clients.",
        name: "Priya Sharma",
        company: "Elevate Growth Media, Bengaluru",
        initials: "PS",
      },
      {
        quote:
          "We shifted from SEO to leading with instant PR, and our closing rate literally doubled. We secured ₹5.2L in new retainers last month. Clients love the immediate results.",
        name: "Amit Patel",
        company: "RankHacker SEO, Ahmedabad",
        initials: "AP",
      },
    ],
    caseStudy: {
      stats: [
        { value: "₹8.5L+", label: "Monthly margin added" },
        { value: "120+", label: "Placements per month" },
        { value: "3 months", label: "Time to scale" },
      ],
      quote:
        "Before Rankkking, we struggled to justify high retainer costs. Once we started reselling their white-label PR, we had a high-ticket service that delivered undeniable results. Within three months we scaled to 120+ placements a month and stabilized our cash flow. We now lead every pitch with PR.",
      author: "— Vikram Singh, Apex Media Solutions, Delhi",
    },
    logosTitle: "TRUSTED BY 300+ PARTNER AGENCIES",
    partnerLogos: [
      { src: "/logos/partner1.png", alt: "OmniCart", height: 30, invert: true },
      { src: "/logos/wordscloud.webp", alt: "Wordscloud", height: 22, invert: true },
      { src: "/logos/partner2.png", alt: "Suflex Media", height: 30, invert: true },
      { src: "/logos/primex.png", alt: "Primex News Network", height: 28, invert: true },
      { src: "/logos/lusterpr.png", alt: "LusterPR", height: 26, invert: false },
    ],
  },
  features: {
    kicker: "WHAT YOU GET",
    title: "Everything Built for Resellers",
    cards: [
      {
        icon: "🏷️",
        title: "White-Labeled Reports",
        body: "Every report carries your branding. Our name appears nowhere. Your clients only ever see you.",
      },
      {
        icon: "📊",
        title: "Placement Tracker Dashboard",
        body: "Real-time status on every order. Live links and reports in one place — 24/7.",
      },
      {
        icon: "👤",
        title: "Dedicated Account Manager",
        body: "One direct contact who knows your account. No ticket queues, no waiting.",
      },
      {
        icon: "📁",
        title: "Co-Marketing Materials",
        body: "Sales decks, proposal templates, case study formats — pre-built to help you close faster.",
      },
      {
        icon: "⚡",
        title: "24–48hr Turnaround",
        body: "Most placements live within two business days. Tier-1 takes longer — we'll tell you upfront.",
      },
      {
        icon: "📉",
        title: "Bulk Pricing Tiers",
        body: "The more you sell, the lower your wholesale. Volume discounts kick in fast.",
      },
    ],
    cta: "Start Reselling PR",
  },
  comparison: {
    kicker: "COMPARE",
    title: "Rankkking vs Building It Yourself vs PR Firm",
    columns: ["Rankkking", "In-House PR", "PR Firm"],
    rows: [
      { label: "Setup time", values: ["10 minutes", "~6 months", "2–4 weeks"] },
      { label: "Monthly fixed cost", values: ["₹0", "₹50K–1.5L", "₹1–3L retainer"] },
      { label: "Your brand on report", values: ["yes:Yes", "yes:Yes", "no:No"] },
      { label: "Risk of losing client", values: ["None", "Low", "High"] },
      { label: "Margin per placement", values: ["₹11,501+", "Variable", "₹0"] },
      { label: "Content writing included", values: ["yes:Yes", "Depends", "no:Extra"] },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Questions Agencies Always Ask",
    items: [
      {
        q: "Can my clients find out I'm reselling?",
        a: "No. Every report carries your branding only. We never contact your client. Our name appears nowhere in any deliverable. You are the only point of contact they ever see.",
      },
      {
        q: "What if a placement fails?",
        a: "We replace it free. No questions, no paperwork, no delays. Your client never sees an issue — you maintain 100% confidence with them.",
      },
      {
        q: "Is there a minimum commitment?",
        a: "None. Pay per placement. Order one or order fifty. No retainer, no contract, no lock-in. You're in full control of your order volume.",
      },
      {
        q: "How do I get started?",
        a: "Fill the form above or DM us on WhatsApp. Onboarding takes 10 minutes — we'll send you the rate card, your dashboard login, and your account manager's direct number.",
      },
      {
        q: "Do you handle the content writing?",
        a: "Yes. Press release, guest post, or news angle — our editorial team writes it. Content writing is included in the placement price, no extra charges.",
      },
      {
        q: "What about international publications?",
        a: "Available on a separate rate card for US, UK, UAE, and other tier-1 international publications. Ask your account manager for the international rate card.",
      },
      {
        q: "What are the payment terms?",
        a: "Prepaid for the first 3 orders. After that, credit terms are available based on your order volume. Most partners graduate to credit terms within the first month.",
      },
    ],
  },
  finalCta: {
    title: ["Stop Turning Down PR Requests.", "Start Collecting Margins."],
    subtitle:
      "10 minutes to set up. Zero contracts. Zero minimums. Join 300+ agencies already in.",
    note: "Replies in < 15 minutes during business hours",
    cta: "Join as a Partner Agency",
  },
  footer: {
    about:
      "White-label PR distribution for digital marketing and PR agencies across India. Resell world-class PR under your own brand.",
    email: "info@rankkking.com",
    office: "Allahabad City, Allahabad, Uttar Pradesh, 211003",
    gstin: "GSTIN: 09FPPPK1285E1ZJ",
    legal: [
      { label: "Privacy Policy", href: "https://rankkking.com/privacy-policy/" },
      { label: "Terms of Service", href: "https://rankkking.com/terms-of-service/" },
    ],
    copyright: "© 2026 RANKKKING. All rights reserved.",
    disclaimer:
      "Income figures based on partner-reported averages. Individual results vary.",
  },
  popup: { heading: "Get the Free Wholesale Rate Card", delaySeconds: 14 },
  leadMagnet: {
    funnelId: "free-listing-sites",
    badge: "FREE DOWNLOAD · WORTH ₹15,000 IN AGENCY HOURS",
    heading: "Wait — Take the Free Listings Vault With You 🎁",
    subheading:
      "200+ hand-picked websites where you can list any brand or startup for FREE — launch platforms, review sites, and high-authority directories that bring backlinks, referral traffic, and AI-search visibility.",
    bullets: [
      "200+ sites, organised into 8 ready-to-work categories",
      "Use it for your own agency AND every client you manage",
      "Free backlinks + brand mentions that ChatGPT & Google actually pick up",
    ],
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email (we'll send the list here)",
    phonePlaceholder: "WhatsApp Number",
    submitLabel: "Send Me the Free List →",
    privacyNote: "Instant access. No spam, ever — unsubscribe anytime.",
    deliveryPath: "/free-listing-sites/",
    page: {
      title: "The Free Listings Vault — 200+ Sites to List Any Brand for Free",
      metaDescription:
        "200+ hand-picked directories, launch platforms and review sites where you can list any startup or brand free of cost.",
      intro:
        "Every site below lets you create a listing, profile, or launch post free of cost. Work through one category at a time — each listing is a permanent brand mention that compounds into backlinks, referral traffic, and visibility in Google and AI search engines like ChatGPT and Perplexity.",
      tip: "Pro tip: keep your brand name, one-liner, logo, and website URL in a doc, then batch 10–15 submissions per sitting. Most listings take under 5 minutes each.",
      ctaTitle: "Want PR placements in 2,500+ real news sites too?",
      ctaBody:
        "Directories build your base — press coverage builds your brand. Resell our white-label PR under your own agency's name and keep ₹11,501+ margin per placement.",
      ctaButton: "See the White-Label PR Program →",
    },
  },
  thankYou: {
    title: "✅ Opening WhatsApp…",
    subtitle:
      "Your wholesale rate card is on its way. If WhatsApp didn't open automatically, tap the green button below to message us directly.",
    whatsappCta: "Open WhatsApp",
  },
};
