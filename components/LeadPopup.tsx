"use client";

import { useCallback, useEffect, useState } from "react";
import type { FunnelConfig } from "@/content/types";
import LeadForm from "./LeadForm";

const SEEN_KEY = "lead_popup_seen";

export default function LeadPopup({ config }: { config: FunnelConfig }) {
  const [open, setOpen] = useState(false);

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
      aria-label={config.popup.heading}
    >
      <div className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-3 text-2xl leading-none text-slate-400 transition hover:text-slate-700"
        >
          ×
        </button>
        <h2 className="pr-6 text-xl font-bold text-slate-900">{config.popup.heading}</h2>
        <p className="mt-1.5 text-sm text-slate-600">{config.form.subheading}</p>
        <div className="mt-5">
          <LeadForm config={config} sourceForm="popup" submitLabel={config.form.popupSubmitLabel} />
        </div>
      </div>
    </div>
  );
}
