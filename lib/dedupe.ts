/** Per-browser block on re-submitting the same lead (phone or email). */

const KEY = "rk_submitted_leads";

function load(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

function save(list: string[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(list.slice(-200)));
  } catch {
    /* private mode / storage full — ignore */
  }
}

/** Match keys: phone digits + lowercased email. */
export function leadKeys(phone: string, email: string): string[] {
  const keys: string[] = [];
  const digits = phone.replace(/\D/g, "");
  if (digits) keys.push(`p:${digits}`);
  const em = email.trim().toLowerCase();
  if (em) keys.push(`e:${em}`);
  return keys;
}

/** True if this phone OR email already submitted from this browser. */
export function alreadySubmitted(phone: string, email: string): boolean {
  const seen = new Set(load());
  return leadKeys(phone, email).some((k) => seen.has(k));
}

/** Remember a submission so the same phone/email can't submit again. */
export function markSubmitted(phone: string, email: string): void {
  const seen = new Set(load());
  leadKeys(phone, email).forEach((k) => seen.add(k));
  save([...seen]);
}
