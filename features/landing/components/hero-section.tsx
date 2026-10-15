import Image from "next/image";
import * as motion from "framer-motion/client";
import { Button } from "@/components/shared/button";
import { getHeroDiamonds, heroDescription, type HeroDiamond } from "@/data/landing";
import { stagger, lineUp, fadeUp, diamondIn, EASE } from "@/lib/motion";

const VIEW_W = 1200;
const VIEW_H = 1250;
const CORNER_RATIO = 0.14; // corner roundness relative to each diamond's size

// Diamond with rounded corners: straight edges, quadratic curve at each tip.
function roundedDiamond({ cx, cy, r }: HeroDiamond) {
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

function HeroDiamonds({ diamonds }: { diamonds: HeroDiamond[] }) {
  return (
    <motion.svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className="h-full w-full"
      role="img"
      aria-label={diamonds.map((diamond) => diamond.imageAlt).join(". ")}
      variants={stagger(0.12, 0.2)}
      initial="hidden"
      animate="show"
    >
      <defs>
        {diamonds.map((d) => (
          <clipPath key={d.id} id={`hero-diamond-${d.id}`}>
            <path d={roundedDiamond(d)} />
          </clipPath>
        ))}
      </defs>

      {diamonds.map((d) => (
        <motion.g
          key={d.id}
          clipPath={`url(#hero-diamond-${d.id})`}
          variants={diamondIn}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          <image
            href={d.imageSrc}
            x={d.cx - d.r}
            y={d.cy - d.r}
            width={d.r * 2}
            height={d.r * 2}
            preserveAspectRatio="xMidYMid slice"
            aria-label={d.imageAlt}
          />
        </motion.g>
      ))}
    </motion.svg>
  );
}
export async function HeroSection() {
  const diamonds = await getHeroDiamonds();

  return (
    <section className="relative h-auto min-h-[calc(100svh-72px)] w-full overflow-hidden bg-background md:min-h-0 md:h-[calc(100svh-88px)]">
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
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-72px)] w-full max-w-[1440px] items-start px-4 pt-10 sm:px-6 sm:pt-12 md:px-8 md:min-h-0 md:pt-[clamp(3rem,8vh,6rem)] lg:px-[clamp(1.5rem,7vw,100px)]">
        <motion.div
          className="flex w-full max-w-[760px] flex-col gap-8 py-6 lg:gap-[clamp(1.5rem,5vh,3.5rem)] md:py-0"
          variants={stagger(0.09)}
          initial="hidden"
          animate="show"
        >
          <motion.div className="flex flex-col gap-2" variants={stagger(0.09)}>
            <h1 className="text-[length:clamp(2rem,min(5vw,7vh),3.75rem)] font-semibold leading-[1.2] text-foreground">
              <span className="block overflow-hidden pb-1">
                <motion.span className="block" variants={lineUp}>
                  Professional Event Support.
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span className="block" variants={lineUp}>
                  <span className="relative inline-block text-[#C9870A]">
                    Quality
                    <motion.span
                      aria-hidden
                      className="absolute left-0 -bottom-0.5 h-[3px] w-full origin-left rounded-full bg-[#C9870A]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, ease: EASE, delay: 0.8 }}
                    />
                  </span>{" "}
                  Refreshments.
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span className="block" variants={lineUp}>
                  Meaningful Experiences.
                </motion.span>
              </span>
            </h1>

            <motion.p
              className="max-w-[700px] text-[16px] leading-relaxed text-foreground"
              variants={fadeUp(16)}
            >
              {heroDescription.join(" ")}
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:gap-6"
            variants={stagger(0.08)}
          >
            <motion.div variants={fadeUp(12)}>
              <Button>Explore Our Services</Button>
            </motion.div>
            <motion.div variants={fadeUp(12)}>
              <Button variant="outline">Contact Us</Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* One image, three diamond windows */}
      <div className="hidden lg:block absolute z-10 right-[3%] top-1/2 -translate-y-1/2 h-[92%] aspect-[1200/1250]">
        <HeroDiamonds diamonds={diamonds} />
      </div>
    </section>
  );
}