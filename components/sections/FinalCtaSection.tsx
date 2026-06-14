"use client";

import { motion } from "framer-motion";
import { CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { CONTACT } from "@/lib/constants";

/**
 * SECTION 11 — Final Conversion Section
 *
 * Most persuasive section. Clear value proposition.
 * Simple CTAs. No friction.
 * Sequence: Curiosity → Inspiration → Trust → Authority → Possibility → Action
 */
export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest-800 via-forest-700 to-forest-900 py-24 sm:py-32">
      {/* Decorative */}
      <div
        className="pointer-events-none absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-forest-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-[400px] w-[400px] rounded-full bg-gold-500/8 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* Trust builder */}
        <SectionReveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-forest-500/30 bg-forest-800/50 px-4 py-1.5 backdrop-blur-sm">
            <CheckCircle className="h-3.5 w-3.5 text-forest-300" />
            <span className="text-xs font-medium text-forest-200">
              Trusted by 8,000+ families across Chennai
            </span>
          </div>
        </SectionReveal>

        {/* Headline */}
        <SectionReveal delay={0.1}>
          <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Transform Your Space?
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-forest-200/80">
            Whether you want a terrace garden, hydroponic setup, landscaping
            project, or microgreens business — let&apos;s create something
            extraordinary together.
          </p>
        </SectionReveal>

        {/* Value props */}
        <SectionReveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-sm text-forest-200">
              <svg
                className="h-4 w-4 text-forest-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Free consultation
              <span className="hidden text-forest-500 sm:inline">·</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-forest-200">
              <svg
                className="h-4 w-4 text-forest-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
              Customized plan
              <span className="hidden text-forest-500 sm:inline">·</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-forest-200">
              <svg
                className="h-4 w-4 text-forest-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              End-to-end support
            </div>
          </div>
        </SectionReveal>

        {/* CTAs */}
        <SectionReveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-10 py-4 text-base font-semibold text-forest-800 shadow-2xl shadow-black/20 transition-all hover:bg-cream-50"
              >
                Book Your Consultation
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                  "Hi! I'd like to book a consultation. Can you help?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-forest-400/50 bg-forest-800/50 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-forest-700/50"
              >
                <MessageCircle className="h-5 w-5 text-forest-300" />
                WhatsApp Now
              </a>
            </motion.div>
          </div>
        </SectionReveal>

        {/* Trust note */}
        <SectionReveal delay={0.35}>
          <p className="mt-6 text-xs text-forest-400/60">
            No commitment required. We&apos;ll understand your space and suggest
            the best options.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
