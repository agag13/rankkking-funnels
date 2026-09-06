import { ormIndia as funnel } from "@/content/funnels/orm-india";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import ProblemCards from "@/components/sections/ProblemCards";
import HowItWorks from "@/components/sections/HowItWorks";
import MarginMath from "@/components/sections/MarginMath";
import NetworkStats from "@/components/sections/NetworkStats";
import SocialProof from "@/components/sections/SocialProof";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ComparisonTable from "@/components/sections/ComparisonTable";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import SiteFooter from "@/components/sections/SiteFooter";
import LeadPopup from "@/components/LeadPopup";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <AnnouncementBar config={funnel} />
      <Hero config={funnel} />
      <LogoStrip title={funnel.pressLogos.title} logos={funnel.pressLogos.logos} className="border-y border-white/5" />
      <ProblemCards config={funnel} />
      <HowItWorks config={funnel} />
      <MarginMath config={funnel} />
      <NetworkStats config={funnel} />
      <SocialProof config={funnel} />
      <FeatureGrid config={funnel} />
      <ComparisonTable config={funnel} />
      <Faq config={funnel} />
      <FinalCta config={funnel} />
      <SiteFooter config={funnel} />
      <LeadPopup config={funnel} />
      <WhatsAppFloat config={funnel} />
    </main>
  );
}
