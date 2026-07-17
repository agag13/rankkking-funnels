/* Lightweight wrappers around GTM dataLayer and the Meta Pixel. */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function dataLayerPush(event: string, data: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}

export function fbqTrack(event: string, data: Record<string, unknown> = {}): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, data);
}

/** Fire all lead-conversion events (GA4 via GTM + Meta Pixel). */
export function trackLead(funnelId: string, extra: Record<string, unknown> = {}): void {
  dataLayerPush("generate_lead", { funnel_id: funnelId, ...extra });
  fbqTrack("Lead", { content_name: funnelId });
}
