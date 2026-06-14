import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Microgreens Mastery Training",
  description: "Learn microgreens cultivation and start your own business with D'Organica's Microgreens Mastery Program in Chennai. Online and in-person training from 500+ graduates.",
};

const CURRICULUM = [
  {
    phase: "01",
    title: "Introduction & Basics",
    items: [
      "What are microgreens & why they matter",
      "Nutritional benefits & market potential",
      "Seed selection, storage, and sourcing",
      "Equipment & setup planning",
    ],
  },
  {
    phase: "02",
    title: "Cultivation Mastery",
    items: [
      "Growing mediums and tray selection",
      "Sowing techniques for maximum yield",
      "Watering, misting, and humidity control",
      "Light and temperature management",
    ],
  },
  {
    phase: "03",
    title: "Harvesting & Packaging",
    items: [
      "Optimal harvest timing by variety",
      "Harvesting techniques for quality",
      "Packaging for freshness and shelf life",
      "Branding and labeling your product",
    ],
  },
  {
    phase: "04",
    title: "Business & Marketing",
    items: [
      "Pricing strategy and profit margins",
      "Finding your first customers",
      "Building a brand that sells",
      "Scaling from balcony to business",
    ],
  },
];

const BENEFITS = [
  {
    title: "Low Investment",
    desc: "Start with minimal capital. Microgreens need only trays, seeds, and a small space.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 2v20" />
      </svg>
    ),
  },
  {
    title: "Quick Harvests",
    desc: "7-14 day harvest cycles mean faster revenue and rapid iteration.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Growing Demand",
    desc: "Restaurants, gyms, and health-conscious consumers actively seek fresh microgreens.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Work From Home",
    desc: "No farmland needed. Grow on your balcony, terrace, or even a spare room.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function TrainingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-forest-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-950 to-forest-950" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold-500/5 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-400/60">
            Learn &bull; Grow &bull; Build a Business
          </p>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Microgreens Mastery Program
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-forest-200/70">
            A complete training program that takes you from zero to microgreens
            entrepreneur. Learn cultivation, harvesting, packaging, and how to
            build a profitable business from home.
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <div>
              <p className="font-serif text-3xl font-bold text-white">500+</p>
              <p className="text-xs text-forest-300/70">Students Trained</p>
            </div>
            <div className="h-10 w-px bg-forest-700" aria-hidden="true" />
            <div>
              <p className="font-serif text-3xl font-bold text-white">4.9★</p>
              <p className="text-xs text-forest-300/70">Program Rating</p>
            </div>
            <div className="h-10 w-px bg-forest-700" aria-hidden="true" />
            <div>
              <p className="font-serif text-3xl font-bold text-white">₹300-600</p>
              <p className="text-xs text-forest-300/70">Price/kg of microgreens</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
            Who Is This For?
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "Home Gardeners",
              "Health Enthusiasts",
              "Women Entrepreneurs",
              "Students",
              "Small Business Owners",
              "Urban Farmers",
              "Chefs",
              "Retirees",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-forest-200 bg-forest-50 px-4 py-2 text-sm font-medium text-forest-700 transition-colors hover:bg-forest-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-cream-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
              Why Microgreens?
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
              A Business That Fits on a Balcony
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-cream-200 bg-white p-6 text-center transition-all hover:shadow-md sm:p-8"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-forest-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
              Curriculum
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
              What You&apos;ll Learn
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CURRICULUM.map((phase) => (
              <div
                key={phase.phase}
                className="group rounded-2xl border border-cream-200 bg-cream-50/50 p-6 transition-all hover:border-forest-200 hover:bg-white hover:shadow-lg sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-forest-500">
                  Phase {phase.phase}
                </p>
                <h3 className="mt-2 text-lg font-bold text-forest-900">
                  {phase.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal-600">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-forest-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Training Formats ── */}
      <section className="bg-cream-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
              Formats
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
              Choose Your Path
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-cream-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-600">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-forest-900">
                Online Training
              </h3>
              <p className="mt-2 text-charcoal-600">
                Learn from anywhere with structured online sessions, video
                demonstrations, and one-on-one support.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Structured video modules",
                  "Live Q&A sessions",
                  "WhatsApp support group",
                  "Resource materials & guides",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-charcoal-600">
                    <svg className="h-4 w-4 text-forest-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-forest-200 bg-forest-50 p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-200 text-forest-700">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-forest-900">
                In-Person Training
              </h3>
              <p className="mt-2 text-charcoal-600">
                Hands-on training at our Chennai location. Get practical
                experience with real growing setups.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Practical hands-on sessions",
                  "Real growing demonstrations",
                  "Direct mentor interaction",
                  "Networking with fellow growers",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-charcoal-600">
                    <svg className="h-4 w-4 text-forest-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-900 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Growing?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-forest-200/80">
            Enroll in the Microgreens Mastery Program and take the first step
            toward a rewarding business from home.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-forest-800 shadow-lg transition-all hover:bg-cream-50"
            >
              Enquire Now
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hi!%20I'm%20interested%20in%20the%20Microgreens%20Mastery%20Program.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-forest-400/50 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-forest-700/50"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
