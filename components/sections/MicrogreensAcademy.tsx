"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sprout,
  TrendingUp,
  Clock,
  Home,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal"
import { easeOutExpo } from "@/lib/animation";

/**
 * SECTION 07 — Microgreens Academy
 *
 * Premium product presentation (Apple-style).
 * Opportunity | Program | Outcomes — three pillars.
 * Shows business potential, curriculum, and transformation.
 */
export default function MicrogreensAcademy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const pillars = [
    {
      icon: TrendingUp,
      title: "The Opportunity",
      items: [
        "Microgreens sell for ₹300–600/kg",
        "7-14 day harvest cycles",
        "Minimal space — start on a balcony",
        "Growing demand from restaurants & health consumers",
      ],
      gradient: "from-amber-50 to-amber-100/50",
      iconBg: "bg-amber-100 text-amber-700",
    },
    {
      icon: Sprout,
      title: "The Program",
      items: [
        "4-phase curriculum from seed to sale",
        "Hands-on practical training",
        "Online & in-person formats",
        "One-on-one mentorship",
      ],
      gradient: "from-forest-50 to-forest-100/50",
      iconBg: "bg-forest-100 text-forest-700",
    },
    {
      icon: CheckCircle,
      title: "The Outcome",
      items: [
        "Start your own microgreens business",
        "Supply local restaurants & stores",
        "Earn from home with low investment",
        "Join 500+ successful graduates",
      ],
      gradient: "from-gold-50 to-gold-100/50",
      iconBg: "bg-gold-100 text-gold-700",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-forest-50/50 blur-3xl"
        aria-hidden="true"
      />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
              Microgreens Mastery
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-forest-900 sm:text-4xl lg:text-5xl">
              From Your Balcony to a Business
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-charcoal-500">
              Learn how ordinary people are building profitable microgreens
              businesses from home. No farmland required. Just the will to grow.
            </p>
          </div>
        </SectionReveal>

        {/* Three pillars */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: easeOutExpo,
                  delay: 0.15 * i,
                }}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-b ${pillar.gradient} p-6 sm:p-8 transition-all hover:shadow-xl`}
              >
                {/* Icon */}
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${pillar.iconBg}`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-forest-900">
                  {pillar.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-forest-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-charcoal-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Stats + CTA */}
        <SectionReveal delay={0.3}>
          <div className="mt-14 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center sm:text-left">
            <div className="flex items-center gap-8">
              <div>
                <p className="font-serif text-3xl font-bold text-forest-700">
                  500+
                </p>
                <p className="text-xs text-charcoal-500">Students Trained</p>
              </div>
              <div className="hidden h-12 w-px bg-cream-200 sm:block" />
              <div>
                <p className="font-serif text-3xl font-bold text-forest-700">
                  4.9★
                </p>
                <p className="text-xs text-charcoal-500">Program Rating</p>
              </div>
              <div className="hidden h-12 w-px bg-cream-200 sm:block" />
              <div>
                <p className="font-serif text-3xl font-bold text-forest-700">
                  7-14
                </p>
                <p className="text-xs text-charcoal-500">Day Harvest Cycle</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/training"
              className="inline-flex items-center gap-2 rounded-xl bg-forest-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-forest-600/25 transition-all hover:bg-forest-500"
            >
              Enroll in the Program
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-forest-200 px-8 py-3.5 text-sm font-semibold text-forest-700 transition-all hover:bg-forest-50"
            >
              Request Brochure
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
