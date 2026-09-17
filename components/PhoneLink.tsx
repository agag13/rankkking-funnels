"use client";

import type { FunnelConfig } from "@/content/types";
import { dataLayerPush } from "@/lib/track";

/** tel: link with a call event on the dataLayer, so calls can be counted
 *  as a conversion the same way form submits and wa.me clicks are. */
export default function PhoneLink({
  config,
  source,
  className = "",
  children,
}: {
  config: FunnelConfig;
  source: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={`tel:${config.phone.tel}`}
      onClick={() => dataLayerPush("phone_click", { source })}
      className={className}
    >
      {children ?? config.phone.display}
    </a>
  );
}
