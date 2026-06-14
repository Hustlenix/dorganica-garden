"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, motion } from "framer-motion";

interface AnimatedCounterProps {
  /** Target number to count up to */
  target: number;
  /** Duration of the animation in seconds */
  duration?: number;
  /** Suffix after the number (e.g., "+") */
  suffix?: string;
  /** Prefix before the number (e.g., "₹") */
  prefix?: string;
  /** CSS class for styling */
  className?: string;
  /** Whether to show decimal places */
  decimals?: number;
}

/**
 * Scroll-triggered animated counter.
 * Counts up from 0 to target when it enters the viewport.
 */
export default function AnimatedCounter({
  target,
  duration = 2,
  suffix = "",
  prefix = "",
  className,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic for natural feel
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      aria-label={`${prefix}${target.toLocaleString("en-IN")}${suffix}`}
    >
      {prefix}
      {count.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </motion.span>
  );
}
