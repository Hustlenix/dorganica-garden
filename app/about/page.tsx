import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${BRAND.name} — Chennai's trusted urban farming company founded by ${BRAND.founder}. Transforming urban spaces into thriving ecosystems since 2014.`,
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-forest-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-950 to-forest-950" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-forest-500/5 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-400/60">
            About Us
          </p>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Growing a Movement
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-forest-200/70">
            We&apos;re not just building gardens. We&apos;re rebuilding humanity&apos;s
            connection to food, nature, and self-sufficiency.
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
                Since 2014
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-charcoal-600">
                <p>
                  {BRAND.name} began around 2014 with a simple idea: help people
                  grow their own food. Founder {BRAND.founder} started by
                  helping neighbors set up organic terrace gardens in Chennai.
                </p>
                <p>
                  What began as small residential projects grew into a
                  comprehensive urban farming movement. Today, we&apos;ve helped
                  thousands of families, businesses, and institutions transform
                  their spaces into thriving ecosystems.
                </p>
                <p>
                  Our mission remains unchanged: make urban farming practical,
                  productive, and accessible to everyone — regardless of space
                  or experience.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="rounded-2xl bg-cream-50 p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2014", label: "Founded" },
                  { value: "2,500+", label: "Gardens Built" },
                  { value: "8,000+", label: "Families Served" },
                  { value: "100%", label: "Organic Focus" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-white p-5 text-center shadow-sm"
                  >
                    <p className="font-serif text-2xl font-bold text-forest-700 sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-charcoal-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-cream-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-cream-200 bg-white p-8 sm:p-10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-600">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-forest-900">Our Mission</h2>
              <p className="mt-3 leading-relaxed text-charcoal-600">
                To help people grow their own chemical-free food and adopt a
                healthy, self-sustainable lifestyle.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-200 bg-white p-8 sm:p-10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 12h20" />
                  <path d="M12 2v20" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-forest-900">Our Vision</h2>
              <p className="mt-3 font-serif text-2xl font-semibold italic leading-snug text-forest-700">
                &ldquo;{BRAND.tagline}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
              Why Us
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
              Why D&apos;Organica?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Experience-Driven Solutions",
                desc: "Founded and led by an experienced entrepreneur, trainer, and urban farming advocate with over a decade of hands-on expertise.",
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                title: "Innovation In Limited Spaces",
                desc: "Specialists in helping urban residents grow more with less. Our solutions are designed for apartments, balconies, terraces, and small commercial spaces.",
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                ),
              },
              {
                title: "End-To-End Support",
                desc: "From the first consultation to ongoing maintenance — we support every stage of your journey. We don't just build gardens. We build relationships.",
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-cream-200 bg-cream-50/50 p-6 transition-all hover:border-forest-200 hover:bg-cream-50 hover:shadow-lg sm:p-8"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-forest-100 text-forest-600 transition-colors group-hover:bg-forest-200">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-forest-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-900 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Want to be part of the movement?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-forest-200/80">
            Get in touch for a free consultation. Let&apos;s create your green space
            together.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-forest-800 shadow-lg transition-all hover:bg-cream-50"
          >
            Get in Touch
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
