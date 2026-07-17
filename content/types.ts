export interface LogoItem {
  src: string;
  alt: string;
  /** relative visual height in px at desktop */
  height?: number;
  invert?: boolean;
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
  logo: { src: string; alt: string };
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
  };
  pressLogos: { title: string; logos: LogoItem[] };
  problem: { kicker: string; title: string[]; cards: IconCard[] };
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
  thankYou: {
    title: string;
    subtitle: string;
    whatsappCta: string;
  };
}
