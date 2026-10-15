import { SectionHeading } from "@/components/shared/section-heading";
import { getPurposeCards, type PurposeCard } from "@/data/landing";

function PurposeCardView({
  number,
  eyebrow,
  title,
  description,
  accentColor,
  cardClassName,
  numberClassName,
}: PurposeCard) {
  const descriptionColor = accentColor === "white" ? "text-[#EAF0EC]" : "text-foreground";

  return (
    <div className={`p-6 sm:p-8 lg:p-10 ${cardClassName}`}>
      <span className={`text-[32px] sm:text-[40px] font-semibold ${numberClassName}`}>{number}</span>
      <SectionHeading eyebrow={eyebrow} title={title} accentColor={accentColor} />
      <p className={`mt-6 text-[16px] ${descriptionColor} leading-[19px]`}>{description}</p>
    </div>
  );
}

export async function PurposeSection() {
  const purposeCards = await getPurposeCards();

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[100px] bg-lighter-green">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {purposeCards.map((card) => (
          <PurposeCardView key={card.number} {...card} />
        ))}
      </div>
    </section>
  );
}
