"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sprout, Building2, Users, GraduationCap, Hammer, TrendingUp } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

/**
 * SECTION 04 — Impact Metrics
 *
 * Elegantly animated statistics that demonstrate D'Organica's reach.
 * Each stat has an icon, animated counter, and label.
 * Scroll-triggered entrance with staggered reveal.
 */

const statIcons = [
  Sprout,
  Building2,
  Users,
  GraduationCap,
  Hammer,
  TrendingUp,
];

export default function ImpactMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Subtle decorative background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-forest-50 blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
            Our Impact
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-forest-900 sm:text-4xl">
            Growing Since 2014
          </h2>
          <p className="mt-4 text-base text-charcoal-500">
            Numbers don&apos;t tell the whole story, but they show the reach of a movement.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {STATS.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1 * i,
                }}
                className="group relative rounded-2xl border border-cream-200 bg-cream-50/50 p-6 sm:p-8 transition-all hover:border-forest-200 hover:bg-cream-50 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-forest-50 text-forest-600 transition-colors group-hover:bg-forest-100">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Animated number */}
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  className="font-serif text-3xl font-bold tracking-tight text-forest-800 sm:text-4xl"
                />

                {/* Label */}
                <p className="mt-1.5 text-sm text-charcoal-500">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
