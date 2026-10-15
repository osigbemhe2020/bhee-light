import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

export function LeadershipSection() {
  return (
    <section className="w-full bg-[#E5F9ED]">
      <RevealGroup className="mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-[clamp(1.5rem,7vw,100px)] py-14 lg:flex-row lg:gap-16">
        {/* Founder portrait */}
        <RevealItem className="flex w-full max-w-[500px] shrink-0 flex-col gap-[18px] lg:w-[500px]">
          <div className="relative aspect-[500/395] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/images/CEO-image.PNG"
              alt="Bhee Light founder Blessing Chikaodi"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover object-top"
            />
          </div>

          {/* Role card */}
          <div className="flex flex-col gap-2 rounded-[10px] bg-[#F9E7C7] p-[22px]">
            <h3 className="text-[24px] font-semibold leading-[29px] text-[#092A22]">
              Blessing Chikaodi
            </h3>
            <p className="text-[14px] leading-[17px] text-[#123D32]">
              Entrepreneur | Travel Consultant | Tour Guide | Business Development Professional
            </p>
          </div>
        </RevealItem>

        {/* Profile copy */}
        <RevealItem className="flex w-full flex-1 flex-col gap-[22px]">
          <SectionHeading
            eyebrow="Meet Blessing Chikaodi"
            title="The Person Behind the Business"
          />

          <div className="flex flex-col gap-[22px] text-[16px] leading-[19px] text-[#111110]">
            <p>
              Blessing Chikaodi is a Nigerian entrepreneur and multidisciplinary professional with experience spanning
              travel and tourism, business development, marketing, events, education, and the production of healthy
              natural beverages.
            </p>
            <p>
              With a background in Biology Education, Blessing has built a diverse professional journey driven by her
              passion for learning, creating opportunities, serving people, and developing businesses that provide
              genuine value. She is a professional in the hospitality space, a travel consultant, and a tour guide. Her
              experience includes working in a museum, where she developed an appreciation for history, culture,
              tourism, and creating meaningful experiences for visitors. Blessing brings this experience into her work
              as a tour guide, helping individuals and groups discover destinations through well planned and engaging
              experiences.
            </p>
            <p>
              She also has experience in travel consultancy, marketing, client relations, sales, and business
              development, working with clients and organisations while identifying opportunities for partnerships,
              growth, and collaboration.
            </p>
            <p>
              Beyond travel and tourism, Blessing is an entrepreneur with interests in the food and wellness space. She
              produces healthy, naturally made drinks and edible products, with a focus on providing refreshing and
              wholesome options to consumers. She also provides elegant, well trained, and well behaved ushers for
              events, helping organisations, companies, and event planners create a professional and welcoming
              experience for their guests. Her approach to event staffing emphasises good presentation, courtesy,
              discipline, confidence, and professionalism.
            </p>
          </div>
          </RevealItem>
          </RevealGroup>
    </section>
  );
}