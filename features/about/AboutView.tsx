import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/shared/page-hero";
import { OurStorySection } from "./components/OurStorySection";
import { LeadershipSection } from "./components/LeadershipSection";
import { EducationSection } from "./components/EducationSection";
import { ApproachSection } from "./components/ApproachSection";
import { getNavigationItems } from "@/data/navigation";


export async function AboutView() {
  const navItems = await getNavigationItems();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader activePage="about" navItems={navItems} />

      <main className="flex-1 pt-[72px] md:pt-[88px]">
        <PageHero
          eyebrow="ABOUT US"
          title="Building Experiences Through Service"
          description="A people-centred Nigerian business bringing together hospitality, travel, entrepreneurship, and a commitment to genuine value."
        />
        <OurStorySection />
        <LeadershipSection />
        <EducationSection />
        <ApproachSection />
        
      </main>

      <SiteFooter />
    </div>
  );
}
