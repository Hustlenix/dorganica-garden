import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog — Urban Farming Tips",
  description: "Read D'Organica Garden's blog for practical urban farming tips, microgreens growing guides, terrace gardening advice, and sustainable living insights.",
};

const POSTS = [
  {
    title: "Getting Started with Microgreens: A Complete Beginner's Guide",
    excerpt:
      "Everything you need to know to start growing microgreens at home — from selecting seeds to harvesting your first crop.",
    category: "Microgreens",
    date: "May 15, 2026",
    readTime: "8 min read",
    slug: "getting-started-microgreens",
  },
  {
    title: "How to Transform Your Terrace into a Productive Vegetable Garden",
    excerpt:
      "A step-by-step guide to planning, designing, and building a terrace garden that produces fresh vegetables year-round.",
    category: "Terrace Gardening",
    date: "April 28, 2026",
    readTime: "10 min read",
    slug: "terrace-vegetable-garden-guide",
  },
  {
    title: "Hydroponics vs Soil Gardening: Which is Right for You?",
    excerpt:
      "Compare the pros and cons of hydroponic and soil-based growing systems to find the best fit for your space and goals.",
    category: "Hydroponics",
    date: "April 10, 2026",
    readTime: "6 min read",
    slug: "hydroponics-vs-soil-gardening",
  },
  {
    title: "5 Vertical Garden Designs for Small Apartments",
    excerpt:
      "Space-saving vertical garden ideas that transform blank walls into lush, living ecosystems — even in the smallest apartments.",
    category: "Vertical Gardens",
    date: "March 22, 2026",
    readTime: "5 min read",
    slug: "vertical-garden-small-apartment",
  },
  {
    title: "The Business of Microgreens: How to Start Selling from Home",
    excerpt:
      "A practical guide to turning your microgreens hobby into a profitable business — pricing, packaging, and finding customers.",
    category: "Business",
    date: "March 5, 2026",
    readTime: "7 min read",
    slug: "microgreens-business-guide",
  },
  {
    title: "Organic Pest Control: Natural Solutions for Your Urban Garden",
    excerpt:
      "Effective, chemical-free pest control methods that protect your garden without harming beneficial insects or the environment.",
    category: "Organic Gardening",
    date: "February 18, 2026",
    readTime: "6 min read",
    slug: "organic-pest-control-urban-garden",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-forest-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-950 to-forest-950" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-forest-500/5 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-400/60">
            Resources
          </p>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Urban Farming Tips
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-forest-200/70">
            Practical guides, expert advice, and inspiration for growing food
            in urban spaces.
          </p>
        </div>
      </section>

      {/* ── Featured Post ── */}
      <section className="bg-white pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-2xl bg-cream-50 transition-all hover:shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-forest-200 to-forest-300 md:aspect-auto flex items-center justify-center">
                <svg className="h-16 w-16 text-forest-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <span className="inline-block rounded-full bg-forest-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest-700 w-fit">
                  Featured
                </span>
                <h2 className="mt-3 text-xl font-bold text-forest-900 sm:text-2xl">
                  {POSTS[0].title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  {POSTS[0].excerpt}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-charcoal-400">
                  <span>{POSTS[0].date}</span>
                  <span>·</span>
                  <span>{POSTS[0].readTime}</span>
                </div>
                <Link
                  href={`/blog/${POSTS[0].slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-forest-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-forest-500 w-fit"
                >
                  Read Article
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Post Grid ── */}
      <section className="bg-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.slice(1).map((post) => (
              <div
                key={post.slug}
                className="group rounded-2xl border border-cream-200 bg-cream-50/50 p-6 transition-all hover:border-forest-200 hover:bg-white hover:shadow-lg sm:p-8"
              >
                <span className="inline-block rounded-full bg-forest-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest-700">
                  {post.category}
                </span>
                <h2 className="mt-3 text-lg font-bold text-forest-900 group-hover:text-forest-700 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-charcoal-400">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-forest-600 transition-colors hover:text-forest-500"
                >
                  Read More
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-forest-800 to-forest-900 p-8 text-center sm:p-12">
            <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Get Tips Delivered to Your Inbox
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-forest-200/70">
              Subscribe for weekly urban farming tips, guides, and inspiration.
            </p>
            <div className="mx-auto mt-6 max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
