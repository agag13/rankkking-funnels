"use client";

import { useEffect } from "react";
import { dataLayerPush, fbqTrack } from "@/lib/track";

/** Fires the lead-magnet-delivered conversion signal for GTM / Meta. */
export default function VaultViewTracker() {
  useEffect(() => {
    const src = new URLSearchParams(window.location.search).get("src") ?? "direct";
    dataLayerPush("lead_magnet_delivered", { funnel_id: "free-listing-sites", src });
    if (src !== "direct") {
      fbqTrack("CompleteRegistration", { content_name: "free-listing-sites" });
    }
  }, []);
  return null;
}
