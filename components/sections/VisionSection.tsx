"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";

/**
 * SECTION 10 — Vision Of The Future
 *
 * Present D'Organica as a movement.
 * Show what cities could become when every rooftop grows food.
 * Cinematic, inspiring, forward-looking.
 */
export default function VisionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textReveal = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative h-[80vh] min-h-[500px] overflow-hidden bg-forest-950"
    >
      {/* Cinematic background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-900/60 to-forest-950/40" />

        {/* Abstract city-garden blend */}
        <div className="absolute inset-0">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Ambient glows */}
          <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-forest-500/10 blur-[100px]" />
          <div className="absolute top-1/4 right-1/4 h-[200px] w-[200px] rounded-full bg-gold-500/8 blur-[80px]" />

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-forest-400/20"
              style={{
                left: `${10 + i * 12}%`,
                top: `${30 + Math.sin(i * 1.5) * 20}%`,
                animation: `float ${5 + i * 0.8}s ease-in-out infinite`,
                animationDelay: `${i * 0.6}s`,
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="mx-auto max-w-4xl text-center">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-400/60">
              The Future
            </p>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Imagine a city where{" "}
              <span className="text-gradient">every rooftop grows food</span>.
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-forest-200/70 sm:text-lg">
              Where apartment balconies become miniature farms. Where empty
              plots become community gardens. Where food travels from rooftop to
              table — not from across the world. This isn&apos;t a dream. It&apos;s a
              movement. And it starts with one garden at a time.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.4}>
            <div className="mt-10">
              <p className="font-serif text-lg font-medium italic text-forest-300/60">
                &mdash; {`${"Jayasri Krishnan"}, ${"Founder, D'Organica Garden"}`}
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
