"use client";

import { useEffect, useState } from "react";
import type { FunnelConfig } from "@/content/types";
import WhatsAppLink from "@/components/WhatsAppLink";

/**
 * Mobile-only bottom bar. It appears once the hero CTA has scrolled away,
 * so there is always one tap to the form and one to WhatsApp. On desktop
 * the floating WhatsApp button covers this job instead.
 */
export default function StickyCta({ config }: { config: FunnelConfig }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-950/95 px-3 py-3 backdrop-blur transition-transform duration-200 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2.5">
        <a
          href="#lead-form"
          className="flex-1 rounded-lg bg-brand-600 px-4 py-3 text-center text-[15px] font-bold text-white"
        >
          {config.stickyCta.formLabel}
        </a>
        <WhatsAppLink
          config={config}
          source="sticky_bar"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-3 text-center text-[15px] font-bold text-white"
        >
          <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current" aria-hidden="true">
            <path d="M16.004 3C8.832 3 3 8.83 3 16.002c0 2.29.6 4.53 1.74 6.5L3 29l6.66-1.72a13.03 13.03 0 0 0 6.34 1.62h.01c7.17 0 13-5.83 13-13S23.175 3 16.004 3Z" />
          </svg>
          {config.stickyCta.whatsappLabel}
        </WhatsAppLink>
      </div>
    </div>
  );
}
