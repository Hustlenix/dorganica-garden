"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Quote } from "lucide-react";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { BRAND } from "@/lib/constants";

/**
 * SECTION 06 — Founder Story
 *
 * Documentary-style founder narrative.
 * Not a biography — an emotional journey.
 * Challenges, mission, vision, impact, recognition.
 */
export default function FounderStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-charcoal-950 py-24 sm:py-32 lg:py-40"
    >
      {/* Ambient light */}
      <div
        className="pointer-events-none absolute -left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-forest-500/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-5">
          {/* Left — Portrait area */}
          <motion.div
            className="relative lg:col-span-2"
            style={{ y: imageY }}
          >
            <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-3xl">
              {/* Founder photo placeholder */}
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-forest-800 to-forest-950">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-forest-700/50">
                    <svg
                      className="h-12 w-12 text-forest-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="mt-4 text-sm font-medium text-forest-300">
                    {BRAND.founder}
                  </p>
                  <p className="text-xs text-forest-400">{BRAND.founderRole}</p>
                </div>
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-gold-500 px-5 py-3 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-white">
                Since 2014
              </p>
            </div>
          </motion.div>

          {/* Right — Narrative */}
          <div className="lg:col-span-3">
            <SectionReveal direction="right">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-400/60">
                The Founder
              </p>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.1}>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {BRAND.founder}
              </h2>
              <p className="mt-2 text-base text-forest-300/80">
                {BRAND.founderRole} &mdash; {BRAND.name}
              </p>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.2}>
              {/* Pull quote */}
              <div className="relative mt-8 border-l-2 border-forest-500/50 pl-6">
                <Quote className="absolute -top-2 -left-3 h-6 w-6 text-forest-500/30" />
                <p className="font-serif text-lg italic leading-relaxed text-white/80 sm:text-xl">
                  &ldquo;I started D&apos;Organica because I believe every home
                  should be a farm. We don&apos;t just build gardens — we rebuild
                  our connection to food, nature, and each other.&rdquo;
                </p>
              </div>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.3}>
              <p className="mt-8 leading-relaxed text-charcoal-300/70">
                Jayasri Krishnan founded D&apos;Organica with a vision of
                bringing farming back into everyday life. Through hundreds of
                gardening projects, training programs, and awareness initiatives,
                she has helped make urban farming practical, productive, and
                profitable across Chennai and beyond.
              </p>
            </SectionReveal>

            {/* Awards mini section */}
            <SectionReveal direction="right" delay={0.35}>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Best Women Entrepreneur",
                  "Best Homepreneur",
                  "Top 150 SMEs Worldwide",
                ].map((award) => (
                  <span
                    key={award}
                    className="inline-flex items-center gap-1.5 rounded-full border border-forest-700/50 bg-forest-800/30 px-3 py-1.5 text-xs font-medium text-forest-300"
                  >
                    <Award className="h-3 w-3" />
                    {award}
                  </span>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.4}>
              <div className="mt-10">
                <Link
                  href="/founder"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Read Full Story
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
