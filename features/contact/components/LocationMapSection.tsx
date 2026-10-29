import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { contactContent } from "@/data/contact";

export function LocationMapSection() {
  const content = contactContent.location;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(content.address)}&output=embed`;
  return (
    <section className="w-full bg-[#F7F1E5]">
      <RevealGroup className="mx-auto flex max-w-[1440px] flex-col gap-8 px-[clamp(1rem,7vw,100px)] py-8 sm:gap-10 sm:py-12 xl:flex-row xl:items-center xl:gap-16">
        {/* Location copy */}
        <RevealItem className="flex w-full shrink-0 flex-col items-start gap-8 sm:gap-12 xl:w-[400px]">
          <div className="flex flex-col gap-[22px]">
            <SectionHeading
              size="wide"
              eyebrow={content.eyebrow}
              title={content.title}
            />
            <p className="text-[16px] leading-[19px] text-[#111110]">
              {content.description}
            </p>
          </div>

          <a
            href={content.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-[10px] border border-[#0D733A] px-[22px] py-[14px] text-[14px] leading-[17px] text-[#0D733A] transition-colors hover:bg-[#0D733A]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D733A]"
          >
            {content.mapButton}
          </a>
        </RevealItem>

        <RevealItem className="h-[260px] w-full min-w-0 flex-1 overflow-hidden rounded-[22px] border border-[#D6CCBA] bg-[#DCE8DF] sm:h-[430px]">
          <iframe
            title={`Google Maps location: ${content.address}`}
            src={embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
        </RevealItem>
        </RevealGroup>
    </section>
  );
}
