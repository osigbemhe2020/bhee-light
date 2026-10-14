import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Guzape+Extension+Abuja+Nigeria";

export function LocationMapSection() {
  return (
    <section className="w-full bg-[#F7F1E5]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-[clamp(1rem,7vw,100px)] py-8 sm:gap-10 sm:py-12 xl:flex-row xl:items-center xl:gap-16">
        {/* Location copy */}
        <div className="flex w-full shrink-0 flex-col items-start gap-8 sm:gap-12 xl:w-[400px]">
          <div className="flex flex-col gap-[22px]">
            <SectionHeading
              size="wide"
              eyebrow="Find Us"
              title="Guzape Extension, Abuja, Nigeria"
            />
            <p className="text-[16px] leading-[19px] text-[#111110]">
              Use Google Maps for directions to Guzape Extension, Abuja. Contact us before visiting so we can support
              your enquiry appropriately.
            </p>
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-[10px] border border-[#0D733A] px-[22px] py-[14px] text-[14px] leading-[17px] text-[#0D733A] transition-colors hover:bg-[#0D733A]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D733A]"
          >
            Open Google Maps
          </a>
        </div>

        {/* Google Maps placeholder */}
        <div
          role="img"
          aria-label="Map placeholder showing Guzape Extension, Abuja"
          className="relative h-[260px] w-full min-w-0 flex-1 overflow-hidden rounded-[22px] border border-[#D6CCBA] bg-[#DCE8DF] sm:h-[430px]"
        >
          {/* Roads: drawn in a 776x430 space and cropped to fit */}
          <svg
            aria-hidden
            viewBox="0 0 776 430"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full"
            fill="none"
            strokeLinecap="round"
          >
            {/* Vertical side road (sits behind the main roads) */}
            <line x1="214" y1="0" x2="214" y2="430" stroke="#C5D7CB" strokeWidth="8" strokeLinecap="butt" />
            {/* Main roads */}
            <line x1="56" y1="80" x2="683" y2="267" stroke="#FFFCF6" strokeWidth="28" />
            <line x1="130" y1="320" x2="668" y2="84" stroke="#FFFCF6" strokeWidth="18" />
          </svg>

          {/* Pin */}
          <div className="absolute left-1/2 top-[calc(50%-10px)] flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#123D32] shadow-[0_12px_32px_rgba(18,61,50,0.094)] sm:size-[70px]">
            <MapPin aria-hidden size={24} strokeWidth={1.7} className="text-[#E8CF98] sm:size-[30px]" />
          </div>

          {/* Map label */}
          <div className="absolute bottom-3 left-3 flex max-w-[calc(100%-1.5rem)] flex-wrap items-center gap-x-2 gap-y-1 rounded-md bg-[#FFFCF6] px-3 py-2 shadow-[0_12px_32px_rgba(18,61,50,0.094)] sm:bottom-[22px] sm:left-[22px] sm:gap-[10px] sm:px-4 sm:py-3">
            <span className="font-[family-name:var(--font-inter)] text-[12px] font-bold uppercase leading-[15px] text-[#092A22]">
              Google Maps
            </span>
            <span className="font-[family-name:var(--font-inter)] text-[12px] leading-[15px] text-[#625F56]">
              Guzape Extension, Abuja
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}