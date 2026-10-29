import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { aboutContent } from "@/data/about";

export function OurStorySection() {
  const content = aboutContent.story;
  return (
    <section className="w-full bg-[#FFFCF6]">
      <RevealGroup className="mx-auto flex min-h-[600px] max-w-[1440px] flex-col items-center gap-8 px-[clamp(1.5rem,5vw,100px)] py-10 lg:flex-row lg:gap-[72px]">
        <RevealItem className="flex w-full flex-1 flex-col items-start gap-6">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            accentColor="orange"
          />

          <p className="text-[18px] font-semibold leading-[22px] text-[#092A22]">
            {content.paragraphs[0]}
          </p>

          <p className="text-[16px] leading-[19px] text-[#625F56]">
            {content.paragraphs[1]}
          </p>

          {/* Commitment */}
          <figure className="flex items-center gap-4 self-stretch rounded-xl border border-[#D6CCBA] bg-[#F7F1E5] p-6">
            <Quote
              aria-hidden
              size={26}
              strokeWidth={1.5}
              className="shrink-0 text-[#C69A4A]"
            />
            <blockquote className="font-[family-name:var(--font-lora)] text-[length:clamp(1.125rem,1.7vw,1.5rem)] italic leading-[1.4] text-[#123D32]">
              &ldquo;{content.commitment}&rdquo;
            </blockquote>
          </figure>
        </RevealItem>

        {/* Story images: 520 box, everything inside is a percentage so it scales */}
        <RevealItem className="relative aspect-square w-full max-w-[520px] shrink-0 lg:w-[520px]">
          {/* Main image: 430 / 520 */}
          <div className="absolute left-0 top-0 h-[82.7%] w-[82.7%] overflow-hidden rounded-[22px]">
            <Image
              src={content.images[0].src}
              alt={content.images[0].alt}
              fill
              sizes="(min-width: 1024px) 430px, 80vw"
              className="object-cover"
            />
          </div>

          {/* Detail image: 250x230, cream border cuts into the main image */}
          <div className="absolute bottom-0 right-0 z-10 h-[44.2%] w-[48.1%] overflow-hidden rounded-[22px] border-[10px] border-[#FFFCF6]">
            <Image
              src={content.images[1].src}
              alt={content.images[1].alt}
              fill
              sizes="(min-width: 1024px) 250px, 45vw"
              className="object-cover"
            />
          </div>
          </RevealItem>
          </RevealGroup>
    </section>
  );
}
