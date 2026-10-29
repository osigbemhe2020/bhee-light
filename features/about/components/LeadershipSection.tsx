import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { aboutContent } from "@/data/about";

export function LeadershipSection() {
  const content = aboutContent.leadership;
  return (
    <section className="w-full bg-[#E5F9ED]">
      <RevealGroup className="mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-[clamp(1.5rem,7vw,100px)] py-14 lg:flex-row lg:gap-16">
        {/* Founder portrait */}
        <RevealItem className="flex w-full max-w-[500px] shrink-0 flex-col gap-[18px] lg:w-[500px]">
          <div className="relative aspect-[500/395] w-full overflow-hidden rounded-[20px]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover object-top"
            />
          </div>

          {/* Role card */}
          <div className="flex flex-col gap-2 rounded-[10px] bg-[#F9E7C7] p-[22px]">
            <h3 className="text-[24px] font-semibold leading-[29px] text-[#092A22]">
              {content.name}
            </h3>
            <p className="text-[14px] leading-[17px] text-[#123D32]">
              {content.role}
            </p>
          </div>
        </RevealItem>

        {/* Profile copy */}
        <RevealItem className="flex w-full flex-1 flex-col gap-[22px]">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
          />

          <div className="flex flex-col gap-[22px] text-[16px] leading-[19px] text-[#111110]">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          </RevealItem>
          </RevealGroup>
    </section>
  );
}
