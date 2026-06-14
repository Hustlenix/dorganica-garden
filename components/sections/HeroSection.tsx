"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { easeOutExpo } from "@/lib/animation";

/**
 * SECTION 01 — Immersive Hero
 *
 * Full viewport cinematic entry point.
 * - Gradient mesh background with ambient particles
 * - Layered depth with parallax
 * - Staggered entrance animations
 * - Scroll indicator
 * - Dual CTAs — consultation + transformations
 */
export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-dvh min-h-[600px] max-h-[900px] overflow-hidden bg-forest-950"
    >
      {/* ── Animated Background Mesh ── */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        {/* Deep gradient layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950" />

        {/* Ambient glow — top */}
        <div className="absolute -top-1/2 left-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-forest-500/10 blur-[120px]" />

        {/* Ambient glow — right */}
        <div className="absolute -right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-gold-500/8 blur-[100px]" />

        {/* Ambient glow — bottom */}
        <div className="absolute -bottom-1/4 left-1/3 h-[500px] w-[500px] rounded-full bg-forest-400/8 blur-[100px]" />

        {/* Floating leaf particles (CSS only — performant) */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-3 w-2 rounded-full bg-forest-400/20"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
                animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`,
                opacity: 0.3 + i * 0.05,
              }}
            />
          ))}
        </div>

        {/* Organic decorative shapes */}
        <div
          className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-forest-500/10"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full border border-forest-400/8"
          aria-hidden="true"
        />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        style={{ y: contentY, opacity }}
      >
        {/* Since 2014 label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-forest-300/80"
        >
          Since 2014 &mdash; Chennai, India
        </motion.p>

        {/* Main Headline — Editorial Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOutExpo, delay: 0.4 }}
          className="max-w-4xl font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {BRAND.tagline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.7 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-forest-200/80 sm:text-lg"
        >
          Transforming rooftops, balconies, and communities into thriving
          ecosystems. One garden at a time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 1 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-forest-800 shadow-xl shadow-black/10 transition-all hover:bg-cream-50 hover:shadow-2xl"
          >
            Book Consultation
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

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
          >
            Explore Transformations
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-forest-300/60">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 text-forest-300/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
