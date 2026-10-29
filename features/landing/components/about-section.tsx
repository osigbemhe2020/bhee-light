import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/shared/button";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { aboutDescription } from "@/data/about";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="w-full py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-[100px] bg-background">
      <RevealGroup className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10">
        <RevealItem>
          <SectionHeading eyebrow="About the Business" title="Building Experience Through Service" />
        </RevealItem>

        <div className="flex flex-col items-start gap-8 lg:gap-14">
          <RevealItem>
            <div className="space-y-4 text-[16px] leading-[19px] text-foreground">
              {aboutDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </RevealItem>
          <RevealItem>
            <Link href="/about">
              <Button>Read Our Story</Button>
            </Link>
          </RevealItem>
        </div>
      </RevealGroup>
    </section>
  );
}