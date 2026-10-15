"use client";

import { MotionConfig } from "framer-motion";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  // "user" = respects prefers-reduced-motion (drops movement, keeps opacity)
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}