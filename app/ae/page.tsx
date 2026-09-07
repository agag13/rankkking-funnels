import { prResellerAe as funnel } from "@/content/funnels/pr-reseller-ae";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import ProblemCards from "@/components/sections/ProblemCards";
import HowItWorks from "@/components/sections/HowItWorks";
import MarginMath from "@/components/sections/MarginMath";
import ThreeMarkets from "@/components/sections/ThreeMarkets";
import AgencyTypes from "@/components/sections/AgencyTypes";
import SocialProofAe from "@/components/sections/SocialProofAe";
import PartnerTiers from "@/components/sections/PartnerTiers";
import Guarantee from "@/components/sections/Guarantee";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ComparisonTable from "@/components/sections/ComparisonTable";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import SiteFooter from "@/components/sections/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function AePage() {
  return (
    <main>
      <AnnouncementBar config={funnel} />
      <Hero config={funnel} />
      <LogoStrip title={funnel.pressLogos.title} logos={funnel.pressLogos.logos} className="border-y border-white/5" />
      <ProblemCards config={funnel} />
      <HowItWorks config={funnel} />
      <MarginMath config={funnel} />
      <ThreeMarkets config={funnel} />
      <AgencyTypes config={funnel} />
      <SocialProofAe config={funnel} />
      <PartnerTiers config={funnel} />
      <Guarantee config={funnel} />
      <FeatureGrid config={funnel} />
      <ComparisonTable config={funnel} />
      <Faq config={funnel} />
      <FinalCta config={funnel} />
      <SiteFooter config={funnel} />
      <WhatsAppFloat config={funnel} />
    </main>
  );
}
