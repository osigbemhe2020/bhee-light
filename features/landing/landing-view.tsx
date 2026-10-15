import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { EnquiryCalloutSection } from "@/components/shared/enquiry-callout-section";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { WhatWeDoSection } from "./components/what-we-do-section";
import { PurposeSection } from "./components/purpose-section";
import { WhyChooseUsSection } from "./components/why-choose-us-section";
import { WhoWeServeSection } from "./components/who-we-serve-section";
import { getNavigationItems } from "@/data/navigation";

export async function LandingView() {
  const navItems = await getNavigationItems();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader activePage="home" navItems={navItems} />

      <main className="flex-1 pt-[72px] md:pt-[88px]">
        <HeroSection />
        <AboutSection />
        <WhatWeDoSection />
        <PurposeSection />
        <WhyChooseUsSection />
        <WhoWeServeSection />
        <EnquiryCalloutSection
          eyebrow="We Are Always Available For You"
          title="Which Service Can We Help You With ?"
          description="Share your requirements and we’ll help you take the next step with clarity, professionalism, and care."
        />
      </main>

      <SiteFooter />
    </div>
  );
}
