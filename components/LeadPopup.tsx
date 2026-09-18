"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { FunnelConfig } from "@/content/types";
import LeadMagnetForm from "./LeadMagnetForm";
import { dataLayerPush } from "@/lib/track";

const SEEN_KEY = "lead_popup_seen";

/**
 * Exit-intent popup carrying the 3-point self-audit checklist.
 *
 * It is deliberately NOT a second copy of the hero form: the checklist is
 * readable without giving anything up, and the form underneath is the
 * optional next step. v1 fired a duplicate of the hero form on a 15-second
 * timer, which interrupted readers without offering them anything new.
 *
 * Three leave signals, because no single one covers every device:
 *   - the pointer leaving through the top of the viewport (desktop);
 *   - a decisive scroll back up after reading most of the page (touch,
 *     which has no pointer to watch);
 *   - the tab being hidden — switching tabs or windows is a real exit,
 *     and it is the one a keyboard-driven visitor actually performs.
 * All three wait out popup.minSecondsOnPage first, so someone who
 * bounces in three seconds is left alone.
 *
 * It shows once per tab session. That is deliberate, and it is also why
 * it can look broken while you are testing: once it has appeared, the
 * `lead_popup_seen` flag suppresses it for the rest of that tab. Open a
 * new tab, or load the page with ?popup=1 to force it open and ignore
 * both the flag and the delay.
 */
export default function LeadPopup({ config }: { config: FunnelConfig }) {
  const [open, setOpen] = useState(false);
  const { leadMagnet: lm } = config;
  const dialogRef = useRef<HTMLDivElement>(null);

  const show = useCallback(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* private mode — show at most once per page load instead */
    }
    setOpen(true);
    dataLayerPush("exit_intent_popup_shown", { funnel_id: config.id });
  }, [config.id]);

  useEffect(() => {
    // ?popup=1 — for review and QA: skip the delay and the seen flag.
    if (new URLSearchParams(window.location.search).has("popup")) {
      setOpen(true);
      return;
    }

    const armedAt = Date.now() + config.popup.minSecondsOnPage * 1000;
    const engaged = () => Date.now() >= armedAt;

    // Desktop: pointer leaves through the top of the window.
    const onMouseOut = (e: MouseEvent) => {
      if (engaged() && e.relatedTarget === null && e.clientY <= 0) show();
    };

    // Touch: read most of the page, then scroll decisively back up.
    let lastY = window.scrollY;
    let deepest = 0;
    const onScroll = () => {
      const y = window.scrollY;
      const depth = (y + window.innerHeight) / document.documentElement.scrollHeight;
      deepest = Math.max(deepest, depth);
      if (engaged() && deepest > 0.6 && lastY - y > 400) show();
      lastY = y;
    };

    // Leaving for another tab or window counts as leaving.
    const onHidden = () => {
      if (engaged() && document.visibilityState === "hidden") show();
    };

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onHidden);
    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onHidden);
    };
  }, [config.popup.minSecondsOnPage, show]);

  // Escape closes; focus moves into the dialog when it opens.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    dialogRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-heading"
        className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl outline-none sm:p-8"
      >
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
        <h2 id="popup-heading" className="mt-3 pr-6 text-xl font-extrabold leading-snug text-slate-900">
          {lm.heading}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{lm.subheading}</p>
        <ol className="mt-4 space-y-3">
          {lm.bullets.map((b, i) => (
            <li key={b} className="flex gap-3 text-[13px] leading-snug text-slate-700">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[11px] font-bold text-white">
                {i + 1}
              </span>
              {b}
            </li>
          ))}
        </ol>
        {lm.checklistCta && (
          <p className="mt-5 border-t border-slate-200 pt-4 text-[13px] font-medium leading-snug text-slate-700">
            {lm.checklistCta}
          </p>
        )}
        <div className="mt-4">
          <LeadMagnetForm config={config} />
        </div>
      </div>
    </div>
  );
}
