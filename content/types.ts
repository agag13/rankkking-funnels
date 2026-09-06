export interface LogoItem {
  src: string;
  alt: string;
  /** relative visual height in px at desktop */
  height?: number;
  invert?: boolean;
  /** OPTIONAL: render a styled text wordmark instead of an image (src is ignored; pass "") */
  text?: string;
}

export interface IconCard {
  icon: string;
  title: string;
  body: string;
}

export interface Step {
  number: string;
  label: string;
  title: string;
  body: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  initials: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ComparisonRow {
  label: string;
  /** [us, inHouse, prFirm] — prefix with "yes:" / "no:" for check/cross styling */
  values: [string, string, string];
}

/** OPTIONAL non-Indian phone-field config for LeadForm. Omit for the default 🇮🇳 +91 behavior. */
export interface PhoneCountry {
  /** flag emoji shown in the input prefix, e.g. "🇦🇪" */
  flag: string;
  /** dial code prepended to the stored lead phone, e.g. "+971" */
  dialCode: string;
  /** regex source the national number must match after normalization, e.g. "^5\\d{8}$" */
  pattern: string;
  /** regex source stripped off the front of the typed digits, e.g. "^(?:971|0)(?=5)" */
  stripPrefix?: string;
  /** validation error shown under the field */
  errorMessage: string;
}

/** Market card for the ThreeMarkets section. */
export interface MarketCard {
  icon: string;
  title: string;
  subtitle: string;
  points: string[];
}

/** Tier card for the PartnerTiers section. */
export interface PartnerTier {
  name: string;
  tagline: string;
  /** small pill shown above the card, e.g. "★ RECOMMENDED" */
  badge?: string;
  /** highlights the card (accent border + raised background) */
  recommended?: boolean;
  features: string[];
}

/** Placement-screenshot placeholder slot rendered as a browser-frame mockup. */
export interface ScreenshotSlot {
  outlet: string;
  /** address-bar text, e.g. "khaleejtimes.com/business/…" */
  url: string;
  caption: string;
}

export interface FunnelConfig {
  id: string;
  meta: {
    title: string;
    description: string;
    ogImage: string;
    url: string;
  };
  tracking: {
    gtmId: string;
    metaPixelId: string;
  };
  whatsapp: {
    number: string; // digits only, with country code
    prefill: string;
  };
  webhookUrl: string;
  announcement: { text: string; cta: string };
  /** wordmark (OPTIONAL): render styled text instead of the image logo (src is then ignored) */
  logo: { src: string; alt: string; wordmark?: string };
  hero: {
    badge: string;
    /** parts of the H1; `highlight` gets accent color */
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    subtitle: string;
    chips: string[];
  };
  form: {
    heading: string;
    subheading: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    agencyPlaceholder: string;
    cityLabel: string;
    cities: string[];
    submitLabel: string;
    popupSubmitLabel: string;
    privacyNote: string;
    chatPrompt: string;
    /** OPTIONAL: non-Indian phone prefix + validation; omit for 🇮🇳 +91 */
    phoneCountry?: PhoneCountry;
    /** OPTIONAL: "domain" (default) validates a website; "name" accepts a plain agency name */
    agencyMode?: "domain" | "name";
    /** OPTIONAL: hide the email field */
    hideEmail?: boolean;
    /** OPTIONAL: radio group (e.g. start timeline); sent as `timeline` in the payload */
    timeline?: { label: string; options: string[] };
    /** OPTIONAL: extra select (e.g. clients who'd buy PR); sent as `client_count` */
    clientCount?: { label: string; options: string[] };
    /** OPTIONAL: post-submit redirect (default "/thank-you/") */
    thankYouPath?: string;
  };
  pressLogos: { title: string; logos: LogoItem[] };
  /** columns (OPTIONAL): 4 renders a 2×2 → 4-across grid; default is 3-across */
  problem: { kicker: string; title: string[]; cards: IconCard[]; columns?: 3 | 4 };
  howItWorks: { kicker: string; title: string[]; steps: Step[]; cta: string };
  math: {
    kicker: string;
    title: string[];
    rows: { label: string; value: string; highlight?: boolean }[];
    note: string;
  };
  network: {
    kicker: string;
    title: string[];
    stats: Stat[];
    logosTitle: string;
    cta: string;
  };
  socialProof: {
    kicker: string;
    title: string[];
    stats: Stat[];
    testimonials: Testimonial[];
    caseStudy: { stats: Stat[]; quote: string; author: string };
    logosTitle: string;
    partnerLogos: LogoItem[];
  };
  /** OPTIONAL SECTION: "One Partner. Three Markets." (used by /ae) */
  threeMarkets?: {
    kicker: string;
    title: string[];
    markets: MarketCard[];
    note: string;
  };
  /** OPTIONAL SECTION: partner program tiers (used by /ae) */
  partnerTiers?: {
    kicker: string;
    title: string[];
    subtitle?: string;
    tiers: PartnerTier[];
    /** CTA label used on every tier card */
    cta: string;
    note: string;
  };
  /** OPTIONAL SECTION: money-back guarantee statement (used by /ae) */
  guarantee?: {
    kicker: string;
    icon: string;
    title: string;
    body: string;
    note: string;
  };
  /** OPTIONAL SECTION: stats + placement-screenshot slots + testimonials (used by /ae) */
  socialProofAe?: {
    kicker: string;
    title: string[];
    stats: Stat[];
    screenshots: ScreenshotSlot[];
    testimonials: Testimonial[];
  };
  features: { kicker: string; title: string; cards: IconCard[]; cta: string };
  comparison: {
    kicker: string;
    title: string;
    columns: [string, string, string];
    rows: ComparisonRow[];
  };
  faq: { kicker: string; title: string; items: FaqItem[] };
  finalCta: { title: string[]; subtitle: string; note: string; cta: string };
  footer: {
    about: string;
    email: string;
    office: string;
    gstin: string;
    legal: { label: string; href: string }[];
    copyright: string;
    disclaimer: string;
  };
  popup: { heading: string; delaySeconds: number };
  leadMagnet: {
    /** internal funnel id sent to the webhook so n8n can branch on it */
    funnelId: string;
    badge: string;
    heading: string;
    subheading: string;
    bullets: string[];
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    submitLabel: string;
    privacyNote: string;
    /** page the visitor is redirected to (and emailed) */
    deliveryPath: string;
    page: {
      title: string;
      metaDescription: string;
      intro: string;
      tip: string;
      ctaTitle: string;
      ctaBody: string;
      ctaButton: string;
    };
  };
  thankYou: {
    title: string;
    subtitle: string;
    whatsappCta: string;
    /** OPTIONAL: "back to page" link target (default "/") */
    backHref?: string;
  };
}
