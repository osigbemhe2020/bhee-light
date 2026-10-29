import Image from "next/image";
import { Button } from "@/components/shared/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { servicesContent } from "@/data/services";

export function RefreshmentsServiceSection() {
  const content = servicesContent.refreshments;
  return (
    <section id={content.id} className="w-full bg-lighter-orange-2 px-4 py-10 sm:px-6 md:px-8 md:py-14 lg:px-[100px]">
      <RevealGroup className="mx-auto flex max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-[72px]">
        <RevealItem className="flex min-w-0 flex-1 flex-col gap-8 lg:gap-14">
          <div className="flex flex-col gap-4">
            <SectionHeading
              eyebrow={content.eyebrow}
              title={content.title}
            />
            <p className="text-[18px] text-gray-2 leading-[22px]">
              {content.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-[12px] bg-light-orange p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
            <div className="flex shrink-0 flex-col gap-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">{content.quantityLabel}</span>
              <span className="text-[32px] font-semibold leading-[38px] text-foreground">{content.quantity}</span>
              <span className="text-sm text-gray-2">{content.quantityCaption}</span>
            </div>
            <div className="hidden h-[72px] w-px bg-gray-2 sm:block" />
            <p className="text-[16px] text-foreground">
              {content.highlight}
            </p>
          </div>

          <a href="/contact">
            <Button>{content.button}</Button>
          </a>
        </RevealItem>

        <RevealItem className="w-full max-w-[560px] self-center rounded-[22px] bg-background p-3.5 shadow-lg -rotate-1 lg:shrink-0">
          <div className="relative aspect-[532/452] w-full overflow-hidden rounded-[12px] -rotate-1">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              sizes="(min-width: 1024px) 532px, 90vw"
              className="object-cover"
            />
          </div>
          </RevealItem>
        </RevealGroup>
    </section>
  );
}
