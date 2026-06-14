"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { TRANSFORMATIONS } from "@/lib/constants"; import { easeOutExpo } from "@/lib/animation";

/**
 * SECTION 08 — Project Showcase
 *
 * Case-study driven portfolio. Each project shows:
 * Problem → Solution → Result.
 * Interactive cards with hover depth.
 */
export default function ProjectShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-cream-50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
              Our Work
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-forest-900 sm:text-4xl lg:text-5xl">
              Projects That Speak
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-charcoal-500">
              Every project has a story. A problem. A transformation. A result.
            </p>
          </div>
        </SectionReveal>

        {/* Project cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {TRANSFORMATIONS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: easeOutExpo,
                delay: 0.15 * i,
              }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image placeholder */}
              <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-forest-100 to-forest-200">
                <div className="flex h-full items-center justify-center">
                  <svg
                    className="h-12 w-12 text-forest-300 transition-transform group-hover:scale-110"
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
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-forest-900">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-forest-400 opacity-0 transition-all group-hover:opacity-100" />
                </div>

                <div className="mt-2 flex items-center gap-1.5 text-xs text-charcoal-400">
                  <MapPin className="h-3 w-3" />
                  {project.location}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-charcoal-50 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-400">
                      Problem
                    </p>
                    <p className="mt-0.5 text-xs text-charcoal-600">
                      {project.problem.length > 50
                        ? project.problem.slice(0, 50) + "..."
                        : project.problem}
                    </p>
                  </div>
                  <div className="rounded-lg bg-forest-50 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-forest-500">
                      Result
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-forest-700">
                      {project.result}
                    </p>
                  </div>
                </div>

                <Link
                  href="/gallery"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-forest-600 transition-colors hover:text-forest-500"
                >
                  View Case Study
                  <svg
                    className="h-3 w-3"
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
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <SectionReveal delay={0.3}>
          <div className="mt-14 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-xl border border-forest-200 px-6 py-3 text-sm font-semibold text-forest-700 transition-all hover:bg-forest-50"
            >
              View All Projects
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
    </section>
  );
}
