"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";

/**
 * SECTION 02 — The Problem
 *
 * Visual storytelling showing how modern cities disconnected
 * people from food production. Minimal text, powerful contrast.
 */
export default function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-charcoal-950 py-28 sm:py-36 lg:py-44"
    >
      {/* Subtle texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-400/60">
            The Disconnection
          </p>
        </SectionReveal>

        <div className="mt-12 grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — The "Then" (problem) */}
          <motion.div className="relative" style={{ y: leftY }}>
            <div className="relative overflow-hidden rounded-3xl">
              {/* Placeholder for city/urban imagery */}
              <div className="aspect-[4/3] bg-gradient-to-br from-charcoal-800 to-charcoal-900">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-16 w-16 text-charcoal-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                      <path d="M9 22v-4h6v4" />
                      <path d="M8 6h.01" />
                      <path d="M16 6h.01" />
                      <path d="M12 6h.01" />
                      <path d="M12 10h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 10h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 10h.01" />
                      <path d="M8 14h.01" />
                    </svg>
                    <p className="mt-4 text-sm text-charcoal-500">
                      Concrete. Plastic. Distance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Label overlay */}
            <div className="absolute -bottom-3 -left-3 rounded-xl bg-charcoal-800 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-charcoal-400">
              Then
            </div>
          </motion.div>

          {/* Right — The "Now" (solution/aspiration) */}
          <motion.div className="relative" style={{ y: rightY }}>
            <div className="relative overflow-hidden rounded-3xl">
              {/* Placeholder for garden imagery */}
              <div className="aspect-[4/3] bg-gradient-to-br from-forest-800 to-forest-900">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-16 w-16 text-forest-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <p className="mt-4 text-sm text-forest-400">
                      Soil. Sunlight. Life.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 rounded-xl bg-forest-700 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-forest-200">
              Now
            </div>
          </motion.div>
        </div>

        {/* Narrative text */}
        <SectionReveal delay={0.2}>
          <div className="mx-auto mt-20 max-w-3xl text-center lg:mt-28">
            <p className="text-lg leading-relaxed text-charcoal-300/80 sm:text-xl">
              Our cities have disconnected us from where food comes from.
            </p>
            <div className="mt-6 h-px w-16 mx-auto bg-forest-500/30" />
            <p className="mt-6 font-serif text-2xl font-medium italic leading-snug text-white/90 sm:text-3xl">
              It&apos;s time to reconnect.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
