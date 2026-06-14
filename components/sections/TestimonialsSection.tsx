"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * SECTION 09 — Testimonials
 *
 * Video-first testimonial cards with carousel.
 * Focus on outcomes and transformations, not praise.
 */
export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
    startAutoplay();
  };

  const next = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    startAutoplay();
  };

  const prev = () => {
    setDirection(-1);
    setActive(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
    startAutoplay();
  };

  const current = TESTIMONIALS[active];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Decorative */}
      <div
        className="pointer-events-none absolute -right-40 -bottom-40 h-[400px] w-[400px] rounded-full bg-forest-50/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
              Testimonials
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-forest-900 sm:text-4xl lg:text-5xl">
              Real People, Real Results
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-charcoal-500">
              The only opinion that matters — from the people we&apos;ve helped.
            </p>
          </div>
        </SectionReveal>

        {/* Carousel */}
        <div className="relative mt-16">
          {/* Quote decoration */}
          <div
            className="pointer-events-none absolute -top-10 left-0 text-forest-100 select-none"
            aria-hidden="true"
          >
            <Quote className="h-24 w-24" />
          </div>

          {/* Card */}
          <div className="relative mx-auto max-w-3xl overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="rounded-2xl bg-cream-50 p-8 sm:p-12"
              >
                {/* Video placeholder */}
                <div className="mb-6 aspect-video rounded-xl bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 shadow-lg cursor-pointer hover:bg-white transition-colors">
                    <svg
                      className="ml-0.5 h-6 w-6 text-forest-700"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg leading-relaxed text-charcoal-700 sm:text-xl">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-forest-100 flex items-center justify-center">
                    <span className="font-serif text-lg font-bold text-forest-600">
                      {current.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-forest-800">
                      {current.name}
                    </p>
                    <p className="text-sm text-charcoal-500">
                      {current.role}, {current.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-200 text-charcoal-500 transition-colors hover:border-forest-200 hover:text-forest-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500",
                    i === active
                      ? "w-8 bg-forest-600"
                      : "w-2 bg-cream-300 hover:bg-cream-400"
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-200 text-charcoal-500 transition-colors hover:border-forest-200 hover:text-forest-600"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <SectionReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 rounded-xl border border-forest-200 px-6 py-3 text-sm font-semibold text-forest-700 transition-all hover:bg-forest-50"
            >
              Read All Testimonials
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
