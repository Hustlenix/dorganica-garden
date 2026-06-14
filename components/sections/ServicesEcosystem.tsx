"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Leaf,
  Layers,
  Trees,
  Droplets,
  Sprout,
  GraduationCap,
  Handshake,
} from "lucide-react";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * SECTION 05 — Services Ecosystem
 *
 * A living, connected visualization of services.
 * Not a grid of cards — an organic node-based layout
 * with interactive hover states and relational connections.
 */

const serviceIcons = [
  Leaf,
  Layers,
  Trees,
  Droplets,
  Sprout,
  GraduationCap,
  Handshake,
];

export default function ServicesEcosystem() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-forest-50 py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
              What We Do
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-forest-900 sm:text-4xl lg:text-5xl">
              A Living Ecosystem of Services
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-charcoal-500">
              Every service connects. Terrace gardens lead to vertical walls.
              Hydroponics feeds into microgreens. Everything works together.
            </p>
          </div>
        </SectionReveal>

        {/* Ecosystem nodes */}
        <div className="relative mt-16">
          {/* Connecting lines (decorative) */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
            aria-hidden="true"
          >
            <line
              x1="30%" y1="20%" x2="50%" y2="40%"
              stroke="currentColor"
              className="text-forest-300"
              strokeWidth="1"
            />
            <line
              x1="70%" y1="20%" x2="50%" y2="40%"
              stroke="currentColor"
              className="text-forest-300"
              strokeWidth="1"
            />
            <line
              x1="50%" y1="40%" x2="50%" y2="60%"
              stroke="currentColor"
              className="text-forest-300"
              strokeWidth="1"
            />
            <line
              x1="20%" y1="60%" x2="50%" y2="60%"
              stroke="currentColor"
              className="text-forest-300"
              strokeWidth="1"
            />
            <line
              x1="80%" y1="60%" x2="50%" y2="60%"
              stroke="currentColor"
              className="text-forest-300"
              strokeWidth="1"
            />
            <line
              x1="35%" y1="80%" x2="50%" y2="60%"
              stroke="currentColor"
              className="text-forest-300"
              strokeWidth="1"
            />
            <line
              x1="65%" y1="80%" x2="50%" y2="60%"
              stroke="currentColor"
              className="text-forest-300"
              strokeWidth="1"
            />
          </svg>

          {/* Service nodes in organic layout */}
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const Icon = serviceIcons[i];
              const isActive = activeIndex === i;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.08 * i,
                  }}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onFocus={() => setActiveIndex(i)}
                  onBlur={() => setActiveIndex(null)}
                  className={cn(
                    "group relative cursor-pointer rounded-2xl border-2 p-6 transition-all duration-500 sm:p-8",
                    isActive
                      ? "border-forest-400 bg-white shadow-xl shadow-forest-500/10"
                      : "border-transparent bg-white/70 hover:bg-white hover:shadow-lg hover:border-forest-200"
                  )}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isActive}
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500",
                      isActive
                        ? "bg-forest-600 text-white shadow-lg shadow-forest-600/25"
                        : "bg-forest-100 text-forest-600 group-hover:bg-forest-50"
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-forest-900">
                    {service.title}
                  </h3>

                  {/* Tagline — visible by default */}
                  <p className="mt-2 text-sm leading-relaxed text-forest-700">
                    {service.tagline}
                  </p>

                  {/* Description — expand on hover/active */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                      {service.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <SectionReveal delay={0.3}>
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-forest-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-forest-600/25 transition-all hover:bg-forest-500"
            >
              Explore All Services
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
