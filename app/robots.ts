import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteUrl";

// Static export: these metadata routes must be pre-rendered at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you/", "/free-listing-sites/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
