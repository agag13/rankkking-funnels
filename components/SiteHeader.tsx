"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import type { FunnelConfig } from "@/content/types";
import PhoneLink from "@/components/PhoneLink";
import { dataLayerPush } from "@/lib/track";

/**
 * Page header: logo, in-page nav, phone, audit CTA.
 *
 * The nav collapses behind a toggle below lg. Links are in-page anchors
 * only — nothing here navigates away from the funnel.
 */
export default function SiteHeader({ config }: { config: FunnelConfig }) {
  const { logo, nav } = config;
  const [open, setOpen] = useState(false);

  // Escape closes the panel, and it never survives a jump to desktop width.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onWide = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
    };
  }, [open]);

  const linkCls =
    "text-sm font-medium text-slate-300 transition hover:text-white focus-visible:text-white";

  return (
    <header className="mx-auto max-w-6xl px-5 pt-6">
      <div className="flex items-center justify-between gap-4">
        <a href="#top" aria-label={logo.alt} className="shrink-0">
          <img
            src={logo.src}
            alt={logo.alt}
            width={160}
            height={40}
            fetchPriority="high"
            decoding="async"
            className="h-9 w-auto"
          />
        </a>

        <nav aria-label="Page sections" className="hidden items-center gap-7 lg:flex">
          {nav.items.map((item) => (
            <a key={item.href} href={item.href} className={linkCls}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <PhoneLink
            config={config}
            source="header"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold text-white transition hover:border-brand-500/60 hover:bg-white/5"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-accent-400" aria-hidden="true">
              <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.25 1l-2.2 2.3Z" />
            </svg>
            <span className="hidden sm:inline">{config.phone.display}</span>
            <span className="sm:hidden">Call</span>
          </PhoneLink>

          <a
            href="#lead-form"
            onClick={() => dataLayerPush("nav_cta_click", { source: "header" })}
            className="hidden rounded-lg bg-brand-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-500 lg:inline-block"
          >
            {nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="header-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition hover:bg-white/5 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="header-menu"
        hidden={!open}
        className="mt-3 rounded-xl border border-white/10 bg-navy-900/95 p-2 backdrop-blur lg:hidden"
      >
        <nav aria-label="Page sections">
          <ul>
            {nav.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-[15px] font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#lead-form"
          onClick={() => {
            setOpen(false);
            dataLayerPush("nav_cta_click", { source: "header_menu" });
          }}
          className="mt-1 block rounded-lg bg-brand-600 px-4 py-3 text-center text-[15px] font-bold text-white transition hover:bg-brand-500"
        >
          {nav.cta}
        </a>
      </div>
    </header>
  );
}
