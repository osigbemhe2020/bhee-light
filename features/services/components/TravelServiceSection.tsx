import Image from "next/image";
import { Compass } from "lucide-react";
import { Button } from "@/components/shared/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { getTravelPillars } from "@/data/services";

export async function TravelServiceSection({ id }: { id: string }) {
  const pillars = await getTravelPillars();

  return (
    <section id={id} className="w-full bg-[#E5F9ED]">
      <RevealGroup className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-[clamp(1.5rem,7vw,100px)] py-14 lg:flex-row lg:gap-[72px]">
        {/* Service imagery: framed photo, tilted */}
        <RevealItem className="w-full max-w-[560px] shrink-0 rotate-1 rounded-[22px] bg-[#FFFCF6] p-3 lg:w-[560px]">
          <div className="relative aspect-[536/482] w-full rotate-1 overflow-hidden rounded-xl">
            <Image
              src="/images/service-image-3.jpg"
              alt="Tour guide sharing the story of a pottery centre with a small group of visitors"
              fill
              sizes="(min-width: 1024px) 536px, 100vw"
              className="object-cover"
            />
          </div>
        </RevealItem>

        {/* Service copy */}
        <RevealItem className="flex w-full min-w-0 flex-1 flex-col items-start gap-12">
          <div className="flex w-full flex-col gap-4">
            <SectionHeading
              eyebrow="Travel Planning & Tour Services"
              title="Plan Your Journey. Experience Your Destination."
              titleColor="foreground"
            />

            <p className="text-[18px] leading-[22px] text-[#111110]">
              We provide travel consultancy, travel planning, client support, and professional tour guiding. Our
              approach is influenced by an appreciation for history, culture, tourism, and meaningful experiences. We
              help individuals and groups plan and experience destinations in an engaging and well organised way.
            </p>

            {/* Travel pillars */}
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {pillars.map((label) => (
                <li
                  key={label}
                  className="flex flex-col gap-3 rounded-xl border border-white/[0.14] bg-white/5 p-4"
                >
                  <Compass aria-hidden size={20} strokeWidth={1.6} className="text-[#C9870A]" />
                  <span className="font-[family-name:var(--font-inter)] text-[12px] font-semibold leading-[1.4] text-[#111110]">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <a href="/contact">
            <Button>Enquire About Travel Services</Button>
          </a>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}