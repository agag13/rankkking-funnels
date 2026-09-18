import { getAttribution } from "./attribution";

export interface LeadFields {
  name: string;
  email: string;
  phone: string;
  /** what the visitor picked in the service/problem dropdown */
  service: string;
  city: string;
  agency: string;
}

export interface AntiSpamFields {
  /** honeypot — must be empty for real users */
  website: string;
  /** seconds between form render and submit */
  form_seconds: number;
  /** Cloudflare Turnstile token; empty when the widget is not configured.
   *  n8n must verify it against the secret key — sending it is not enough. */
  turnstile_token?: string;
}

export interface LeadPayload extends LeadFields {
  funnel: string;
  source_form: string;
  page: string;
  submitted_at: string;
  user_agent: string;
  website: string;
  form_seconds: number;
  turnstile_token?: string;
  [key: string]: string | number | undefined;
}

/**
 * How long to wait for the webhook before giving up on it.
 *
 * Without this the fetch waits as long as the browser will allow. When the
 * n8n instance stopped answering its /webhook/* routes while the API stayed
 * healthy, the button sat on "Sending…" indefinitely and the visitor never
 * reached the WhatsApp fallback — the one thing that must not happen. A
 * lead is worth more than a tidy request, so an unanswered webhook is
 * treated as a failure and the visitor is handed the fallback.
 */
const WEBHOOK_TIMEOUT_MS = 12_000;

/**
 * POST the lead to the n8n webhook. Throws on network failure, HTTP failure
 * or timeout so the form can show the WhatsApp fallback — a lead must never
 * be silently lost.
 */
export async function submitLead(
  webhookUrl: string,
  funnelId: string,
  sourceForm: string,
  fields: LeadFields,
  antiSpam: AntiSpamFields,
): Promise<void> {
  const attribution = getAttribution();
  const payload: LeadPayload = {
    funnel: funnelId,
    source_form: sourceForm,
    ...fields,
    ...antiSpam,
    page: typeof window !== "undefined" ? window.location.href : "",
    submitted_at: new Date().toISOString(),
    user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    ...Object.fromEntries(
      Object.entries(attribution).map(([k, v]) => [k, String(v)]),
    ),
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);
  let res: Response;
  try {
    res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
      keepalive: true,
    });
  } finally {
    clearTimeout(timer);
  }
  if (!res.ok) {
    throw new Error(`Lead webhook responded ${res.status}`);
  }
}
