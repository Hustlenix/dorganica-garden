import type { Metadata } from "next";
import Link from "next/link";
import { TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Hear from D'Organica Garden's clients — real stories of urban farming transformations, microgreens business success, and terrace garden journeys.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-forest-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-950 to-forest-950" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold-500/5 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-400/60">
            Testimonials
          </p>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Voices of Transformation
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-forest-200/70">
            The only opinion that matters — from the people we&apos;ve helped
            transform their spaces and lives.
          </p>

          {/* Aggregate rating */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-forest-600/30 bg-forest-800/50 px-5 py-2 backdrop-blur-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 fill-gold-400 text-gold-400" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-forest-200">4.9/5 from 200+ reviews</span>
          </div>
        </div>
      </section>

      {/* ── Testimonials Grid ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="group rounded-2xl border border-cream-200 bg-cream-50/50 p-6 transition-all hover:border-forest-200 hover:bg-white hover:shadow-lg sm:p-8"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="h-4 w-4 fill-gold-400 text-gold-400" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 text-sm leading-relaxed text-charcoal-700">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3 border-t border-cream-200 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-100 text-sm font-bold text-forest-600">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-forest-800">
                      {t.name}
                    </p>
                    <p className="text-xs text-charcoal-500">
                      {t.role}, {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Share Your Story ── */}
      <section className="bg-cream-50 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
            Share Your Story
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-charcoal-500">
            Have you worked with us? We&apos;d love to hear about your
            transformation. Your story inspires others to start their journey.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-forest-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-forest-500"
          >
            Share Your Experience
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
