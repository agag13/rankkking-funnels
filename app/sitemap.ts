import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteUrl";

// Static export: these metadata routes must be pre-rendered at build time.
export const dynamic = "force-static";

/** Only the landing page belongs in the index — /thank-you/ is noindex. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
