/** Shared client-side field validation/normalization for lead forms. */

/** Indian mobile: 10 digits starting 6-9 */
export const INDIAN_MOBILE = /^[6-9]\d{9}$/;

/** Basic email format */
export const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Letters (incl. common Indian name chars), spaces, dots, apostrophes, hyphens */
export const NAME_ALLOWED = /[^A-Za-zÀ-ɏ\s.'-]/g;

export function sanitizeName(raw: string): string {
  return raw.replace(NAME_ALLOWED, "");
}

export function isValidName(name: string): boolean {
  const letters = name.replace(/[^A-Za-zÀ-ɏ]/g, "");
  return letters.length >= 2;
}

export function normalizePhone(raw: string): string {
  return raw.replace(/\D/g, "").replace(/^(91|0)(?=[6-9]\d{9}$)/, "");
}

/**
 * Extract the bare domain from whatever the user typed:
 * "https://www.myagency.co.in/about?x=1" -> "myagency.co.in"
 * Returns null if no plausible domain is present.
 */
export function extractDomain(raw: string): string | null {
  let s = raw.trim().toLowerCase();
  if (!s) return null;
  s = s.replace(/^[a-z]+:\/\//, ""); // scheme
  s = s.split(/[/?#\s]/)[0]; // path/query/space
  s = s.replace(/^www\./, "");
  s = s.replace(/:\d+$/, ""); // port
  const DOMAIN = /^[a-z0-9][a-z0-9-]*(\.[a-z0-9][a-z0-9-]*)+$/;
  if (!DOMAIN.test(s)) return null;
  const tld = s.split(".").pop() as string;
  if (tld.length < 2 || /^\d+$/.test(tld)) return null;
  return s;
}

/* ---------------------------------------------------------------------------
 * International lead forms (used by the Masdar / business-setup funnel).
 * Kept separate from the India-only helpers above so existing funnels are
 * unchanged.
 * ------------------------------------------------------------------------- */

export interface DialCountry {
  label: string; // e.g. "UAE"
  dial: string; // e.g. "+971"
  flag: string; // e.g. "🇦🇪"
}

/** Default dial-code list for the Middle East / India outbound audience. */
export const DIAL_COUNTRIES: DialCountry[] = [
  { label: "UAE", dial: "+971", flag: "🇦🇪" },
  { label: "India", dial: "+91", flag: "🇮🇳" },
  { label: "Saudi Arabia", dial: "+966", flag: "🇸🇦" },
  { label: "Qatar", dial: "+974", flag: "🇶🇦" },
  { label: "Kuwait", dial: "+965", flag: "🇰🇼" },
  { label: "Oman", dial: "+968", flag: "🇴🇲" },
  { label: "Bahrain", dial: "+973", flag: "🇧🇭" },
  { label: "Pakistan", dial: "+92", flag: "🇵🇰" },
  { label: "Egypt", dial: "+20", flag: "🇪🇬" },
  { label: "UK", dial: "+44", flag: "🇬🇧" },
  { label: "USA / Canada", dial: "+1", flag: "🇺🇸" },
  { label: "Other", dial: "+", flag: "🌍" },
];

/** Local part of an international number: 6–13 digits (no country code). */
export const INTL_LOCAL = /^\d{6,13}$/;

/** Keep digits only — strips spaces, dashes, brackets, leading zeros handled by caller. */
export function normalizeIntlLocal(raw: string): string {
  return raw.replace(/\D/g, "");
}

/** Validate a local mobile number (country code chosen separately). */
export function isValidIntlLocal(local: string): boolean {
  return INTL_LOCAL.test(normalizeIntlLocal(local));
}
