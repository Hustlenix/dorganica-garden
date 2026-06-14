"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Animation direction */
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  /** Only animate once (default: true) */
  once?: boolean;
}

const directionVariants = {
  up: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
  none: { hidden: {}, visible: {} },
};

/**
 * Scroll-triggered entrance animation wrapper.
 * Reveals children when they enter the viewport.
 */
export default function SectionReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: "-80px 0px",
  });

  const variant = directionVariants[direction];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: variant.hidden,
        visible: {
          ...variant.visible,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
