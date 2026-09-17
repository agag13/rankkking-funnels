import type { FunnelConfig } from "@/content/types";
import { SITE_URL } from "@/lib/siteUrl";

/**
 * Organization + Service + FAQPage JSON-LD.
 *
 * The FAQ entries are read from the same config the visible FAQ renders
 * from, so the markup can never drift from what is on the page — which is
 * what Google requires of FAQ structured data.
 */
export default function StructuredData({ config }: { config: FunnelConfig }) {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "FameNinja",
    url: SITE_URL,
    logo: `${SITE_URL}${config.logo.src}`,
    description: config.footer.about,
    telephone: config.phone.tel,
    areaServed: ["IN", "AE"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: config.phone.tel,
        contactType: "customer service",
        areaServed: ["IN", "AE"],
        availableLanguage: ["en", "hi"],
      },
    ],
  };

  const service = {
    "@type": "Service",
    "@id": `${SITE_URL}/#service`,
    name: "Online Reputation Management",
    serviceType: "Online reputation management",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["IN", "AE"],
    description: config.meta.description,
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: config.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, service, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
