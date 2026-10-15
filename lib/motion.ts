import type { Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

// Parent: staggers its children
export const stagger = (staggerChildren = 0.09, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

// Headline line: slides up from behind a mask
export const lineUp: Variants = {
  hidden: { y: "105%" },
  show: { y: 0, transition: { duration: 0.7, ease: EASE } },
};

// Generic fade + rise
export const fadeUp = (distance = 16, duration = 0.6): Variants => ({
  hidden: { opacity: 0, y: distance },
  show: { opacity: 1, y: 0, transition: { duration, ease: EASE } },
});

// Diamond pop-in
export const diamondIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE } },
};