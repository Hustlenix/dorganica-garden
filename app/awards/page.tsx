import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Awards & Recognition",
  description: "D'Organica Garden's awards and recognition — Best Women Entrepreneur, Best Homepreneur, Top 150 SMEs worldwide, and more.",
};

const AWARDS = [
  {
    title: "Best Women Entrepreneur Excellence Award",
    year: "2024",
    description:
      "Recognized for outstanding leadership and contribution to the urban farming industry.",
  },
  {
    title: "Best Homepreneur Award",
    year: "2023",
    description:
      "Awarded for building a successful home-based business that inspires others.",
  },
  {
    title: "Top 150 SMEs Around the World",
    year: "2023",
    description:
      "Selected as one of the top 150 small and medium enterprises globally for innovation and impact.",
  },
  {
    title: "National Entrepreneurship Award",
    year: "2022",
    description:
      "Recognized at the national level for promoting urban agriculture and sustainable living.",
  },
  {
    title: "Women in Business Leadership Award",
    year: "2024",
    description:
      "Honored for leadership in building a purpose-driven business that empowers communities.",
  },
];

export default function AwardsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-forest-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-950 to-forest-950" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold-500/5 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-400/60">
            Recognition
          </p>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Awards &amp; Recognition
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-forest-200/70">
            We&apos;re honored to be recognized for our work in urban farming,
            sustainability, and entrepreneurship.
          </p>
        </div>
      </section>

      {/* ── Awards Grid ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {AWARDS.map((award, i) => (
              <div
                key={award.title}
                className="group flex items-start gap-5 rounded-2xl border border-cream-200 bg-cream-50/50 p-6 transition-all hover:border-gold-200 hover:bg-gold-50/30 hover:shadow-md sm:p-8"
              >
                {/* Trophy icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-lg font-bold text-forest-900">
                      {award.title}
                    </h2>
                    <span className="shrink-0 rounded-full bg-forest-100 px-3 py-1 text-[10px] font-semibold text-forest-600">
                      {award.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-900 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Your Green Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-forest-200/80">
            Join thousands of families who&apos;ve transformed their spaces with
            D&apos;Organica. Let&apos;s create something extraordinary together.
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
