import { SectionHeading } from "@/components/shared/section-heading";

interface PurposeCardProps {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  accentColor: "white" | "black";
  cardClassName: string;
  numberClassName: string;
}

function PurposeCard({
  number,
  eyebrow,
  title,
  description,
  accentColor,
  cardClassName,
  numberClassName,
}: PurposeCardProps) {
  const descriptionColor = accentColor === "white" ? "text-[#EAF0EC]" : "text-foreground";

  return (
    <div className={`p-6 sm:p-8 lg:p-10 ${cardClassName}`}>
      <span className={`text-[32px] sm:text-[40px] font-semibold ${numberClassName}`}>{number}</span>
      <SectionHeading eyebrow={eyebrow} title={title} accentColor={accentColor} />
      <p className={`mt-6 text-[16px] ${descriptionColor} leading-[19px]`}>{description}</p>
    </div>
  );
}

const PURPOSE_CARDS: PurposeCardProps[] = [
  {
    number: "01",
    eyebrow: "Our Mission",
    title: "Creating Value Through Professional Service.",
    description:
      "To provide professional, reliable, and customer focused event and refreshment services while maintaining high standards of presentation, service delivery, and client satisfaction. We aim to create memorable experiences through professionalism, attention to detail, quality products, and dependable service.",
    accentColor: "white",
    cardClassName: "bg-light-green gap-6 rounded-t-[20px] md:rounded-l-[20px] md:rounded-tr-none border border-white/20",
    numberClassName: "text-white",
  },
  {
    number: "02",
    eyebrow: "Our Vision",
    title: "Building a Recognised Nigerian Brand.",
    description:
      "To become a recognised Nigerian brand in professional event staffing, hospitality support, and natural refreshments, known for excellence, reliability, and exceptional customer experience both locally and internationally.",
    accentColor: "black",
    cardClassName: "bg-light-orange gap-6 rounded-b-[20px] md:rounded-r-[20px] md:rounded-bl-none",
    numberClassName: "text-foreground",
  },
];

export function PurposeSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[100px] bg-lighter-green">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {PURPOSE_CARDS.map((card) => (
          <PurposeCard key={card.number} {...card} />
        ))}
      </div>
    </section>
  );
}
