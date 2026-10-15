import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/shared/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { getUsheringIncluded, getUsheringValues } from "@/data/services";

export async function UsheringServiceSection() {
  const [included, values] = await Promise.all([
    getUsheringIncluded(),
    getUsheringValues(),
  ]);

  return (
    <section className="w-full bg-[#FFFCF6]">
      <RevealGroup className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-[clamp(1.5rem,7vw,100px)] py-14 lg:flex-row lg:gap-14">
        {/* Service imagery */}
        <RevealItem className="w-full shrink-0 lg:w-[440px]">
          <div className="relative aspect-[520/610] w-full max-w-[440px] overflow-hidden rounded-[22px]">
            <Image
              src="/images/bhee-light-img-5.jpeg"
              alt="Bhee Light ushers welcoming guests at a conference"
              fill
              sizes="(min-width: 1024px) 440px, 100vw"
              className="object-cover"
            />
          </div>
        </RevealItem>

        {/* Service copy */}
        <RevealItem className="flex w-full min-w-0 flex-1 flex-col items-start gap-14">
          <div className="flex w-full flex-col gap-6">
            <SectionHeading
              size="wide"
              eyebrow="Event Ushering & Guest Management"
              title="Make Every Guest Feel Welcome"
            />

            <p className="text-[18px] leading-[22px] text-[#625F56]">
              We provide elegant, well trained, and well behaved ushers for events, organisations, companies, and event
              planners. Our event staffing service is designed to support a professional and welcoming guest experience.
            </p>

            {/* Included services */}
            <ul className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-[10px]">
                  <span className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-[#F9E7C7]">
                    <Check aria-hidden size={14} strokeWidth={2} className="text-[#C9870A]" />
                  </span>
                  <span className="font-[family-name:var(--font-inter)] text-[14px] leading-[17px] text-[#111110]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Core values: one line from lg up, wraps on small screens */}
            <ul className="flex flex-wrap justify-between gap-x-4 gap-y-2 rounded-xl bg-[#F7F1E5] px-[18px] py-[14px] xl:flex-nowrap">
              {values.map((value) => (
                <li key={value} className="whitespace-nowrap text-[14px] font-semibold leading-[17px] text-[#111110]">
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <Button>Enquire About Ushering</Button>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}