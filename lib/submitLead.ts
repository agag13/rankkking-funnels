import { getAttribution } from "./attribution";

export interface LeadFields {
  name: string;
  email: string;
  phone: string;
  city: string;
  agency: string;
}

export interface AntiSpamFields {
  /** honeypot — must be empty for real users */
  website: string;
  /** seconds between form render and submit */
  form_seconds: number;
}

export interface LeadPayload extends LeadFields {
  funnel: string;
  source_form: string;
  page: string;
  submitted_at: string;
  user_agent: string;
  website: string;
  form_seconds: number;
  [key: string]: string | number;
}

/**
 * POST the lead to the n8n webhook. Throws on network/HTTP failure so the
 * form can show the WhatsApp fallback — a lead must never be silently lost.
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

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`Lead webhook responded ${res.status}`);
  }
}
