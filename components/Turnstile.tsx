"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      remove: (id: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

const SCRIPT_ID = "cf-turnstile-script";
const SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad";

/** Widgets that mounted before the script finished loading. */
const pending = new Set<() => void>();
let ready = false;

function loadScript() {
  if (typeof document === "undefined" || document.getElementById(SCRIPT_ID)) return;
  window.onTurnstileLoad = () => {
    ready = true;
    pending.forEach((fn) => fn());
    pending.clear();
  };
  const el = document.createElement("script");
  el.id = SCRIPT_ID;
  el.src = SRC;
  el.async = true;
  el.defer = true;
  document.head.appendChild(el);
}

/**
 * Cloudflare Turnstile, rendered explicitly so it also works inside the
 * popup (implicit rendering only scans the DOM once, at script load).
 *
 * Renders nothing at all without a site key, so the page behaves exactly
 * as it does today until the key is configured. The widget drops a hidden
 * `cf-turnstile-response` input into the surrounding form, which the lead
 * forms read and forward to n8n — n8n must verify it with the secret key
 * for this to be worth anything.
 *
 * appearance=interaction-only keeps it invisible unless Cloudflare decides
 * the visitor needs a challenge.
 */
export default function Turnstile({ siteKey }: { siteKey?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!siteKey) return;
    const host = hostRef.current;
    if (!host) return;
    let widgetId: string | undefined;

    const render = () => {
      if (!window.turnstile || !hostRef.current) return;
      widgetId = window.turnstile.render(hostRef.current, {
        sitekey: siteKey,
        appearance: "interaction-only",
        theme: "light",
      });
    };

    if (ready) render();
    else {
      pending.add(render);
      loadScript();
    }

    return () => {
      pending.delete(render);
      if (widgetId) window.turnstile?.remove(widgetId);
    };
  }, [siteKey]);

  if (!siteKey) return null;
  return <div ref={hostRef} className="flex justify-center empty:hidden" />;
}
