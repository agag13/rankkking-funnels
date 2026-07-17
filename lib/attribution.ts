const KEY = "funnel_attribution";

const PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

export type Attribution = Partial<Record<(typeof PARAMS)[number], string>> & {
  landing_page?: string;
  referrer?: string;
};

/** Capture ad-click attribution from the landing URL once per session. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const existing = sessionStorage.getItem(KEY);
    const url = new URL(window.location.href);
    const found: Attribution = {};
    for (const p of PARAMS) {
      const v = url.searchParams.get(p);
      if (v) found[p] = v;
    }
    // First page of the session wins; later pages only add missing params
    const base: Attribution = existing ? JSON.parse(existing) : {
      landing_page: url.pathname + url.search,
      referrer: document.referrer || undefined,
    };
    sessionStorage.setItem(KEY, JSON.stringify({ ...found, ...base }));
  } catch {
    // sessionStorage unavailable (private mode etc.) — attribution is best-effort
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(sessionStorage.getItem(KEY) ?? "{}");
  } catch {
    return {};
  }
}
