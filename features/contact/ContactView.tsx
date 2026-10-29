import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/shared/page-hero";
import { EnquiryCalloutSection } from "@/components/shared/enquiry-callout-section";
import { ContactInfoSection } from "./components/ContactInfoSection";
import { EnquiryFormSection } from "./components/EnquiryFormSection";
import { LocationMapSection } from "./components/LocationMapSection";
import { getNavigationItems } from "@/data/navigation";
import { getEnquiryServiceOptions } from "@/data/services";
import { contactContent } from "@/data/contact";

export async function ContactView() {
  const [navItems, serviceOptions] = await Promise.all([
    getNavigationItems(),
    getEnquiryServiceOptions(),
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader activePage="contact" navItems={navItems} />

      <main className="flex-1 pt-[72px] md:pt-[88px]">
        <PageHero
          {...contactContent.hero}
        />
        <ContactInfoSection />
        <EnquiryFormSection serviceOptions={serviceOptions} />
        <EnquiryCalloutSection
          eyebrow={contactContent.whatsapp.eyebrow}
          title={contactContent.whatsapp.title}
          description={contactContent.whatsapp.description}
          buttonText={contactContent.whatsapp.buttonText}
          backgroundColor="#DCE8DF"
          phoneNumber={contactContent.whatsapp.phoneNumber}
        />
        <LocationMapSection />
      </main>

      <SiteFooter />
    </div>
  );
}
