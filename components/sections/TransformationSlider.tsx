"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { TRANSFORMATIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * SECTION 03 — Transformation Slider
 *
 * Interactive before/after comparison.
 * Shows real project outcomes with a draggable slider handle.
 */
export default function TransformationSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const active = TRANSFORMATIONS[activeIndex];

  const handleInteraction = useCallback(
    (clientX: number) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = clientX - rect.left;
      const percent = (x / rect.width) * 100;
      setSliderPos(Math.min(100, Math.max(0, percent)));
    },
    []
  );

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    handleInteraction(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleInteraction(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const next = () =>
    setActiveIndex((i) => (i + 1) % TRANSFORMATIONS.length);
  const prev = () =>
    setActiveIndex((i) =>
      i === 0 ? TRANSFORMATIONS.length - 1 : i - 1
    );

  if (!active) return null;

  return (
    <section className="relative bg-cream-50 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
              Real Transformations
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-forest-900 sm:text-4xl lg:text-5xl">
              Before <span className="text-forest-400">&amp;</span> After
            </h2>
            <p className="mt-4 max-w-lg mx-auto text-base text-charcoal-500">
              See the difference we make. Every project tells a story of
              transformation.
            </p>
          </div>
        </SectionReveal>

        {/* Slider */}
        <div className="mt-16" ref={containerRef}>
          <SectionReveal delay={0.2}>
            <div
              className="relative mx-auto max-w-4xl cursor-ew-resize select-none overflow-hidden rounded-3xl shadow-2xl"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              role="slider"
              aria-label="Before and after comparison"
              aria-valuenow={Math.round(sliderPos)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") setSliderPos((p) => Math.min(100, p + 5));
                if (e.key === "ArrowLeft") setSliderPos((p) => Math.max(0, p - 5));
              }}
            >
              {/* "After" layer */}
              <div className="aspect-[16/10] bg-gradient-to-br from-forest-700 to-forest-800">
                <div className="flex h-full items-center justify-center">
                  <p className="text-lg font-medium text-forest-200">
                    Thriving Garden
                  </p>
                </div>
              </div>

              {/* "Before" layer (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-charcoal-700 to-charcoal-800">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-lg font-medium text-charcoal-400">
                      Empty Space
                    </p>
                  </div>
                </div>
              </div>

              {/* Slider handle */}
              <div
                className={cn(
                  "absolute top-0 bottom-0 w-1 -translate-x-1/2 transition-none",
                  isDragging ? "bg-white" : "bg-white/80"
                )}
                style={{ left: `${sliderPos}%` }}
              >
                <div
                  className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    "flex h-12 w-12 items-center justify-center rounded-full",
                    "shadow-xl transition-transform",
                    isDragging ? "scale-110 bg-white" : "bg-white/90"
                  )}
                >
                  <div className="flex gap-1.5">
                    <ArrowLeft className="h-4 w-4 text-charcoal-600" />
                    <ArrowRight className="h-4 w-4 text-charcoal-600" />
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Project info & navigation */}
          <div className="mx-auto mt-8 max-w-4xl">
            <SectionReveal delay={0.3}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-forest-800">
                    {active.title}
                  </h3>
                  <p className="mt-1 text-sm text-charcoal-500">
                    {active.location} &mdash; {active.date}
                  </p>
                </div>

                {/* Navigation arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-200 text-forest-600 transition-colors hover:bg-forest-50"
                    aria-label="Previous transformation"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={next}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-200 text-forest-600 transition-colors hover:bg-forest-50"
                    aria-label="Next transformation"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Problem → Result */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-charcoal-100 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                    Problem
                  </p>
                  <p className="mt-1 text-sm text-charcoal-600">
                    {active.problem}
                  </p>
                </div>
                <div className="rounded-xl border border-forest-100 bg-forest-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-forest-500">
                    Result
                  </p>
                  <p className="mt-1 text-sm font-medium text-forest-700">
                    {active.result}
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* CTA */}
        <SectionReveal delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-xl border border-forest-200 px-6 py-3 text-sm font-semibold text-forest-700 transition-all hover:bg-forest-50"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
