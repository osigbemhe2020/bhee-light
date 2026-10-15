"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp, EASE } from "@/lib/motion";

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

// One trigger for the whole group. Nothing happens until the section is actually on screen.
export function RevealGroup({
  children,
  className,
  gap = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={stagger(gap)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      {children}
    </motion.div>
  );
}

// Child of a RevealGroup. It inherits the trigger, so it needs no props of its own.
export function RevealItem({
  children,
  className,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div className={className} variants={fadeUp(y, 1)}>
      {children}
    </motion.div>
  );
}