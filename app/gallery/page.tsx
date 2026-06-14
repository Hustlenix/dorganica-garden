import type { Metadata } from "next";
import Link from "next/link";
import { TRANSFORMATIONS, SOCIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Browse real transformations by D'Organica Garden — terrace gardens, vertical gardens, hydroponics, and landscaping projects in Chennai.",
};

const PROJECT_CATEGORIES = [
  {
    title: "Terrace Gardens",
    desc: "Lush vegetable and herb gardens on residential and commercial terraces across Chennai. Empty rooftops transformed into food-producing ecosystems.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    gradient: "from-forest-100 to-forest-200",
    iconColor: "text-forest-600 bg-forest-100",
  },
  {
    title: "Vertical Gardens",
    desc: "Space-saving vertical installations transforming blank walls into living ecosystems. Perfect for apartments and compact urban spaces.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    gradient: "from-emerald-100 to-emerald-200",
    iconColor: "text-emerald-600 bg-emerald-100",
  },
  {
    title: "Hydroponics",
    desc: "Soil-free cultivation systems for year-round fresh produce. Efficient, clean, and highly productive — even in limited spaces.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    gradient: "from-sky-100 to-sky-200",
    iconColor: "text-sky-600 bg-sky-100",
  },
  {
    title: "Landscaping",
    desc: "Complete outdoor transformations for homes, villas, and commercial properties. Creating eco-friendly environments that inspire.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    gradient: "from-lime-100 to-lime-200",
    iconColor: "text-lime-600 bg-lime-100",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-forest-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-950 to-forest-950" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-forest-500/5 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-400/60">
            Our Work
          </p>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Transformations That Speak
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-forest-200/70">
            Every project has a story. Every transformation has a before and after.
          </p>
        </div>
      </section>

      {/* ── Featured Transformations ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
              Featured Projects
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
              Case Studies
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {TRANSFORMATIONS.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image area */}
                <div className="aspect-[16/10] bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center">
                  <svg className="h-12 w-12 text-forest-300 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-forest-900">
                    {project.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-charcoal-50 px-2.5 py-0.5 text-[10px] font-medium text-charcoal-500">
                      {project.location}
                    </span>
                    <span className="rounded-full bg-forest-50 px-2.5 py-0.5 text-[10px] font-medium text-forest-600">
                      {project.date}
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-charcoal-50 p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-400">
                        Problem
                      </p>
                      <p className="mt-0.5 text-xs text-charcoal-600">
                        {project.problem}
                      </p>
                    </div>
                    <div className="rounded-lg bg-forest-50 p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-forest-500">
                        Result
                      </p>
                      <p className="mt-0.5 text-xs font-medium text-forest-700">
                        {project.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="bg-cream-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
              Categories
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
              What We Build
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {PROJECT_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="group relative overflow-hidden rounded-2xl p-6 transition-all hover:shadow-lg sm:p-8"
                style={{
                  background: `linear-gradient(135deg, var(--color-${cat.gradient.split("-")[1]}-50), var(--color-${cat.gradient.split("-")[2]}-100))`,
                }}
              >
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${cat.iconColor}`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-forest-900">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social + CTA ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
            Follow Our Journey
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-charcoal-500">
            See our latest projects, behind-the-scenes content, and daily
            inspiration on social media.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              Instagram
            </a>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              Facebook
            </a>
            <a
              href={SOCIAL.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-900 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Want a Transformation Like This?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-forest-200/80">
            Let&apos;s discuss your project and create something beautiful together.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-forest-800 shadow-lg transition-all hover:bg-cream-50"
          >
            Start Your Project
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
