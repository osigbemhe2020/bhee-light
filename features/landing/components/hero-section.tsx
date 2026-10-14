import Image from "next/image";
import { Button } from "@/components/shared/button";

const IMG = "/images/landing/hero-image-main.jpg";
const IMG_SIZE = 1024; // source image is 1024x1024; change if yours differs
const VIEW_W = 1200;
const VIEW_H = 1250;
const CORNER_RATIO = 0.14; // corner roundness relative to each diamond's size

/**
 * cx / cy / r  -> position and size of the diamond in the 1200x1250 space
 * crop         -> which square of the source image it shows (source px).
 *                 Smaller `size` = more zoomed in. x/y move the crop window.
 */
const DIAMONDS = [
  { id: "large", cx: 720, cy: 480, r: 480, crop: { x: 516, y: 6, size: 500 } }, // top-right photo
  { id: "medium", cx: 225, cy: 747, r: 225, crop: { x: 6, y: 516, size: 500 } }, // bottom-left photo
  { id: "small", cx: 478, cy: 1000, r: 225, crop: { x: 6, y: 6, size: 500 } }, // top-left photo
];

// Diamond with rounded corners: straight edges, quadratic curve at each tip.
function roundedDiamond({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const d = (r * CORNER_RATIO) / Math.SQRT2;
  const [tx, ty] = [cx, cy - r]; // top
  const [rx, ry] = [cx + r, cy]; // right
  const [bx, by] = [cx, cy + r]; // bottom
  const [lx, ly] = [cx - r, cy]; // left
  return [
    `M${tx - d},${ty + d}`,
    `Q${tx},${ty} ${tx + d},${ty + d}`,
    `L${rx - d},${ry - d}`,
    `Q${rx},${ry} ${rx - d},${ry + d}`,
    `L${bx + d},${by - d}`,
    `Q${bx},${by} ${bx - d},${by - d}`,
    `L${lx + d},${ly + d}`,
    `Q${lx},${ly} ${lx + d},${ly - d}`,
    "Z",
  ].join(" ");
}

function HeroDiamonds() {
  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className="h-full w-full"
      role="img"
      aria-label="Bhee Light staff assisting guests at an airport desk and an event"
    >
      <defs>
        {DIAMONDS.map((d) => (
          <clipPath key={d.id} id={`hero-diamond-${d.id}`}>
            <path d={roundedDiamond(d)} />
          </clipPath>
        ))}
      </defs>

      {DIAMONDS.map((d) => (
        <g key={d.id} clipPath={`url(#hero-diamond-${d.id})`}>
          {/* Nested svg = the crop window: it shows only d.crop of the image */}
          <svg
            x={d.cx - d.r}
            y={d.cy - d.r}
            width={d.r * 2}
            height={d.r * 2}
            viewBox={`${d.crop.x} ${d.crop.y} ${d.crop.size} ${d.crop.size}`}
          >
            <image href={IMG} width={IMG_SIZE} height={IMG_SIZE} />
          </svg>
        </g>
      ))}
    </svg>
  );
}
export function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100svh-72px)] md:h-[calc(100svh-88px)] bg-background overflow-hidden">
      {/* Cream background shape (your path) */}
      <svg
        aria-hidden
        viewBox="0 0 1440 771"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full text-light-orange"
        fill="currentColor"
      >
        <path d="M0 0H1440V644.211C1440 1050.34 0 322.106 0 644.211V0Z" />
      </svg>

      {/* Faint background image (decorative) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(524px,100vw)] h-[388px] opacity-10">
        <Image
          src="/images/landing/Travel.png"
          alt=""
          fill
          sizes="524px"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[clamp(1.5rem,7vw,100px)] flex items-start pt-10 sm:pt-12 md:pt-[clamp(3rem,8vh,6rem)]">
        <div className="flex flex-col gap-8 lg:gap-[clamp(1.5rem,5vh,3.5rem)] max-w-[760px] w-full py-6 md:py-0">
          <div className="flex flex-col gap-2">
            <h1 className="text-[length:clamp(2rem,min(5vw,7vh),3.75rem)] font-semibold leading-[1.2] text-foreground">
              <span className="block">Professional Event Support.</span>
              <span className="block">
                <span className="text-[#C9870A]">Quality</span> Refreshments.
              </span>
              <span className="block">Meaningful Experiences.</span>
            </h1>
            <p className="text-[16px] leading-relaxed text-foreground max-w-[700px]">
              Bhee Light Unique Global Ventures provides professional event staffing, hospitality support, travel and
              tour services, business development solutions, and natural refreshments. We are committed to
              professionalism, reliability, quality, and creating positive experiences for the people and organisations
              we serve.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <Button>Explore Our Services</Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </div>

      {/* One image, three diamond windows */}
      <div className="hidden lg:block absolute z-10 right-[3%] top-1/2 -translate-y-1/2 h-[92%] aspect-[1200/1250]">
        <HeroDiamonds />
      </div>
    </section>
  );
}