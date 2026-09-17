import { ormIndia } from "@/content/funnels/orm-india";

/**
 * Canonical origin for this deployment.
 *
 * Set NEXT_PUBLIC_SITE_URL at build time when the page moves to
 * lp.fameninja.com — canonical, og:url and the sitemap all follow it, so
 * the domain is never hardcoded in more than this one place.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? ormIndia.meta.url).replace(/\/$/, "");
