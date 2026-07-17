"use client";

import { useCallback, useEffect, useState } from "react";
import type { FunnelConfig } from "@/content/types";
import LeadMagnetForm from "./LeadMagnetForm";

const SEEN_KEY = "lead_popup_seen";

/**
 * Timed + exit-intent popup offering the free listings lead magnet
 * (email + WhatsApp gate). Shows once per session.
 */
export default function LeadPopup({ config }: { config: FunnelConfig }) {
  const [open, setOpen] = useState(false);
  const { leadMagnet: lm } = config;

  const show = useCallback(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* private mode — show at most once per page load instead */
    }
    setOpen(true);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(show, config.popup.delaySeconds * 1000);
    const onMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget === null && e.clientY <= 0) show();
    };
    document.addEventListener("mouseout", onMouseOut);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [config.popup.delaySeconds, show]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
      role="dialog"
      aria-modal="true"
      aria-label={lm.heading}
    >
      <div className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-3 text-2xl leading-none text-slate-400 transition hover:text-slate-700"
        >
          ×
        </button>
        <span className="inline-block rounded-full bg-accent-500/15 px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-emerald-700">
          {lm.badge}
        </span>
        <h2 className="mt-3 pr-6 text-xl font-extrabold leading-snug text-slate-900">{lm.heading}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{lm.subheading}</p>
        <ul className="mt-3 space-y-1.5">
          {lm.bullets.map((b) => (
            <li key={b} className="flex gap-2 text-[13px] leading-snug text-slate-700">
              <span className="text-emerald-600">✓</span> {b}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <LeadMagnetForm config={config} />
        </div>
      </div>
    </div>
  );
}
