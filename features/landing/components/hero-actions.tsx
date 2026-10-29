"use client";

import { useRouter } from "next/navigation";
import * as motion from "framer-motion/client";
import { Button } from "@/components/shared/button";
import { stagger, fadeUp } from "@/lib/motion";

export function HeroActions() {
  const router = useRouter();

  return (
    <motion.div
      className="flex flex-col gap-3 sm:flex-row sm:gap-6"
      variants={stagger(0.08)}
    >
      <motion.div variants={fadeUp(12)}>
        <Button onClick={() => router.push("/services")}>
          Explore Our Services
        </Button>
      </motion.div>
      <motion.div variants={fadeUp(12)}>
        <Button variant="outline" onClick={() => router.push("/contact")}>
          Contact Us
        </Button>
      </motion.div>
    </motion.div>
  );
}