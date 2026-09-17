"use client";

import type { ReactNode } from "react";
import type { FunnelConfig } from "@/content/types";
import { dataLayerPush } from "@/lib/track";

/** wa.me link with a whatsapp_click event, so WhatsApp leads are counted
 *  rather than disappearing into an untracked channel. */
export default function WhatsAppLink({
  config,
  source,
  className = "",
  children,
}: {
  config: FunnelConfig;
  source: string;
  className?: string;
  children: ReactNode;
}) {
  const href = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(config.whatsapp.prefill)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      onClick={() => dataLayerPush("whatsapp_click", { source })}
      className={className}
    >
      {children}
    </a>
  );
}
