import { SectionHeading } from "@/components/shared/section-heading";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="w-full bg-light-orange px-4 py-10 sm:px-6 md:px-8 lg:px-[100px]">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          size="hero"
          as="h1"
          titleColor="foreground"
        />
      </div>
    </section>
  );
}
