import { Button } from "@/components/shared/button";
import { SectionHeading } from "@/components/shared/section-heading";

interface EnquiryCalloutSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  backgroundColor?: string;
  phoneNumber?: string;
}

export function EnquiryCalloutSection({
  eyebrow,
  title,
  description,
  buttonText,
  backgroundColor,
  phoneNumber,
}: EnquiryCalloutSectionProps) {
  const finalButtonText = buttonText || "Contact Us";
  const finalBackgroundColor = backgroundColor || "#F9E7C7";
  return (
    <section className="w-full">
      {/* Frame: 100px side inset, white either side of the panel */}
      <div className="mx-auto max-w-[1440px] px-[clamp(1rem,7vw,100px)]">
        {/* Callout panel */}
        <div
          className="flex flex-col items-start gap-10 px-[clamp(1.5rem,7vw,100px)] py-10 my-4"
          style={{ backgroundColor: finalBackgroundColor || "#F9E7C7" }}
        >
          <SectionHeading
            size="compact"
            eyebrow={eyebrow ?? ""}
            title={title ?? ""}
            description={description ?? ""}
          />
          <div className="flex flex-col gap-2">
            <Button className="w-full sm:w-auto">{finalButtonText || "Contact Us"}</Button>
            {phoneNumber && (
              <p className="text-[24px] mt-4 font-semibold leading-[17px] text-[#111110]">
                {phoneNumber}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

