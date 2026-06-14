import type { Metadata } from "next";
import Link from "next/link";
import { BRAND, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Founder",
  description: `Meet ${BRAND.founder} — Founder & CEO of ${BRAND.name}. Entrepreneur, urban farming specialist, trainer, award-winning business leader in Chennai.`,
};

const AWARDS = [
  {
    title: "Best Women Entrepreneur Excellence Award",
    year: "2024",
  },
  {
    title: "Best Homepreneur Award",
    year: "2023",
  },
  {
    title: "Top 150 SMEs Around the World",
    year: "2023",
  },
  {
    title: "Multiple National & International Awards",
    subtitle: "Entrepreneurship & Urban Farming",
    year: "2022-2025",
  },
];

const TIMELINE = [
  {
    year: "2014",
    title: "The Beginning",
    desc: "Started helping neighbors set up organic terrace gardens in Chennai. One garden at a time.",
  },
  {
    year: "2016",
    title: "First Major Projects",
    desc: "Expanded from residential to commercial projects. Started landscaping and vertical garden installations.",
  },
  {
    year: "2018",
    title: "Training Programs Launch",
    desc: "Launched the Microgreens Mastery Program. Started training aspiring urban farmers and entrepreneurs.",
  },
  {
    year: "2020",
    title: "Digital Expansion",
    desc: "Adapted training programs for online delivery. Reached students across India during the pandemic.",
  },
  {
    year: "2024",
    title: "Today",
    desc: "2,500+ gardens built. 500+ students trained. 8,000+ families served. Still growing, still teaching.",
  },
];

export default function FounderPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-charcoal-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-charcoal-950" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-forest-500/5 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-400/60">
            Meet the Founder
          </p>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {BRAND.founder}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-charcoal-300/70">
            {BRAND.founderRole} &mdash; {BRAND.name}
          </p>
          <p className="mt-2 text-sm text-charcoal-500">
            Entrepreneur &bull; Urban Farming Specialist &bull; Trainer &bull; Business Consultant
          </p>
        </div>
      </section>

      {/* ── Story + Photo ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-80 w-80 overflow-hidden rounded-3xl bg-gradient-to-br from-forest-100 to-forest-200 shadow-2xl sm:h-96 sm:w-96">
                  <div className="flex h-full items-center justify-center">
                    <svg className="h-24 w-24 text-forest-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>
                {/* Decorative badge */}
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-gold-500 px-5 py-3 shadow-xl">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white">
                    Since 2014
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
                The Journey
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
                A Life Dedicated to Greener Cities
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-charcoal-600">
                <p>
                  {BRAND.founder} founded {BRAND.shortName} with a vision of bringing
                  farming back into everyday life. Through hundreds of gardening
                  projects, training programs, and awareness initiatives, she has
                  helped promote sustainable food production and urban agriculture
                  across Chennai and beyond.
                </p>
                <p>
                  As an experienced entrepreneur and trainer, she has guided
                  thousands of individuals and families in setting up their own
                  gardens and has trained aspiring microgreens entrepreneurs to
                  build successful businesses from home.
                </p>
                <p>
                  Her approach combines deep practical knowledge with a genuine
                  passion for making urban farming accessible, productive, and
                  profitable for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-cream-50 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
              Timeline
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
              The Story So Far
            </h2>
          </div>

          <div className="relative mt-16">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-forest-200 sm:left-1/2 sm:-translate-x-px" />

            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
                className={`relative mb-12 pl-12 sm:mb-16 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0
                    ? "sm:pr-12 sm:text-right"
                    : "sm:ml-auto sm:pl-12"
                }`}
              >
                {/* Year badge */}
                <div
                  className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-forest-300 bg-white text-xs font-bold text-forest-700 sm:left-auto sm:right-auto ${
                    i % 2 === 0 ? "sm:right-[-1rem]" : "sm:left-[-1rem]"
                  }`}
                  style={{ top: "2px" }}
                >
                  <span className="sr-only">{item.year}</span>
                </div>

                {/* Content */}
                <div className="rounded-xl border border-cream-200 bg-white p-5 shadow-sm sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-forest-500">
                    {item.year}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-forest-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
              Recognition
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
              Awards &amp; Recognition
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {AWARDS.map((award) => (
              <div
                key={award.title}
                className="flex items-center gap-4 rounded-xl border border-cream-200 bg-cream-50/50 p-5 transition-all hover:border-gold-200 hover:bg-gold-50/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal-800">
                    {award.title}
                  </p>
                  {award.subtitle && (
                    <p className="text-xs text-charcoal-500">{award.subtitle}</p>
                  )}
                  <p className="text-xs text-charcoal-400">{award.year}</p>
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
            Want to Work With {BRAND.founder}?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-forest-200/80">
            Book a consultation or training session directly. Let&apos;s discuss
            your vision for a greener home or business.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-forest-800 shadow-lg transition-all hover:bg-cream-50"
            >
              Book a Session
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-xl border border-forest-400/50 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-forest-700/50"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
