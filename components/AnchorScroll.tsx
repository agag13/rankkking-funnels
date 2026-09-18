"use client";

import { useEffect } from "react";

/** Below this, a smooth glide reads well; above it, it is just a long wait. */
const SMOOTH_LIMIT_PX = 1200;

/**
 * Distance-aware in-page scrolling.
 *
 * The page is ~14,000px tall, and CSS `scroll-behavior: smooth` animates
 * every jump at the same rate — measured at 6 seconds from the header nav
 * down to the FAQ, which is unusable. So the CSS rule is gone and one
 * delegated listener decides per click: smooth for a short hop, instant
 * for anything long. Reduced-motion users always get instant.
 *
 * With JavaScript off, anchors fall back to the browser's own jump.
 */
export default function AnchorScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      const href = link?.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;

      const id = decodeURIComponent(href.slice(1));
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const distance = Math.abs(target.getBoundingClientRect().top);
      target.scrollIntoView({
        behavior: reduced || distance > SMOOTH_LIMIT_PX ? "auto" : "smooth",
        block: "start",
      });
      history.replaceState(null, "", href);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
