import type { Metadata } from "next";
import Link from "next/link";

const POSTS: Record<string, { title: string; content: string[]; category: string; date: string }> = {
  "getting-started-microgreens": {
    title: "Getting Started with Microgreens: A Complete Beginner's Guide",
    category: "Microgreens",
    date: "May 15, 2026",
    content: [
      "Microgreens are young vegetable greens harvested just after the cotyledon leaves have developed. They are packed with nutrients and can be grown in small spaces.",
      "To get started, you need: seeds (radish, broccoli, sunflower), growing trays, a growing medium (coco peat or soil), and a spray bottle for watering.",
      "Step 1: Soak your seeds for 4-8 hours to speed up germination.",
      "Step 2: Fill your tray with 1-2 inches of growing medium and moisten it.",
      "Step 3: Spread seeds evenly across the surface and press them gently into the medium.",
      "Step 4: Cover with a humidity dome or another tray for 3-4 days until germination.",
      "Step 5: Once sprouted, provide indirect sunlight or grow lights for 12-16 hours daily.",
      "Step 6: Harvest when the first true leaves appear - typically 7-14 days after sowing.",
      "Microgreens are ready to harvest when they are 1-3 inches tall. Use clean scissors to cut just above the soil line.",
      "Start with easy varieties like radish or sunflower. Experiment with different seeds as you gain confidence.",
    ],
  },
  "terrace-vegetable-garden-guide": {
    title: "How to Transform Your Terrace into a Productive Vegetable Garden",
    category: "Terrace Gardening",
    date: "April 28, 2026",
    content: [
      "Your terrace has untapped potential to become a thriving vegetable garden. With proper planning, you can grow fresh produce year-round.",
      "Start by assessing your terrace: check sunlight exposure (6+ hours daily is ideal), weight capacity, and water access.",
      "Choose the right containers: grow bags, raised beds, or large pots. Ensure proper drainage holes.",
      "Select vegetables that thrive in your climate: tomatoes, chillies, brinjal, spinach, and herbs are excellent choices for Chennai's weather.",
      "Use quality potting mix: combine garden soil, coco peat, and compost in a 1:1:1 ratio.",
      "Set up a drip irrigation system for consistent watering. This saves water and reduces maintenance.",
      "Apply organic mulch to retain moisture and suppress weeds. Coconut husk or dried leaves work well.",
      "Fertilize regularly with organic compost or liquid seaweed fertilizer every 2 weeks.",
      "Monitor for pests daily. Use neem oil spray for organic pest control.",
      "With consistent care, your terrace garden can supply 60% of your family's vegetable needs within 3-4 months.",
    ],
  },
  "hydroponics-vs-soil-gardening": {
    title: "Hydroponics vs Soil Gardening: Which is Right for You?",
    category: "Hydroponics",
    date: "April 10, 2026",
    content: [
      "Choosing between hydroponics and soil gardening depends on your space, budget, and growing goals.",
      "Hydroponics grows plants without soil, using nutrient-rich water. It uses 90% less water than soil gardening and produces faster growth.",
      "Soil gardening is more traditional and forgiving. It requires lower initial investment and is ideal for beginners.",
      "Hydroponics pros: faster growth, higher yields, no weeding, water-efficient, can be set up indoors.",
      "Hydroponics cons: higher setup cost, needs electricity for pumps, requires monitoring of pH and nutrients.",
      "Soil gardening pros: lower cost, natural ecosystem, less monitoring, works with most plants.",
      "Soil gardening cons: slower growth, weeding required, more pests, heavier for rooftops.",
      "For beginners in Chennai, we recommend starting with soil gardening and gradually experimenting with hydroponics.",
      "Many urban farmers combine both methods - soil for leafy greens and hydroponics for herbs and microgreens.",
      "D'Organica offers consultation to help you choose and set up the right system for your space.",
    ],
  },
  "vertical-garden-small-apartment": {
    title: "5 Vertical Garden Designs for Small Apartments",
    category: "Vertical Gardens",
    date: "March 22, 2026",
    content: [
      "Vertical gardens are perfect for apartment dwellers with limited floor space. Here are 5 designs that work beautifully.",
      "1. Pallet Wall Garden: Repurpose a wooden pallet, attach landscape fabric, fill with soil, and plant herbs and succulents.",
      "2. Pocket Planter System: Felt pockets mounted on walls. Ideal for herbs, strawberries, and small flowers.",
      "3. Tiered Shelf Garden: Use multi-level shelving units to create a vertical growing tower. Great for microgreens.",
      "4. Hanging Bottle Garden: Upcycle plastic bottles as hanging planters. Perfect for kitchen herbs.",
      "5. Living Wall Panels: Pre-fabricated panels with built-in irrigation. Professional look for living rooms or balconies.",
      "Key tip: Choose plants that share similar light and water requirements for each vertical section.",
      "Use lightweight growing medium to reduce wall load. A mix of coco peat and perlite works well.",
      "Install a drip tray at the bottom to catch excess water and protect your floor.",
      "Start small - even a 2x3 ft vertical garden can grow enough herbs for daily cooking.",
    ],
  },
  "microgreens-business-guide": {
    title: "The Business of Microgreens: How to Start Selling from Home",
    category: "Business",
    date: "March 5, 2026",
    content: [
      "Turning your microgreens hobby into a business is easier than you think. Here's a practical roadmap.",
      "Step 1: Master your craft. Grow at least 10 successful batches before selling to others.",
      "Step 2: Identify your target market: restaurants, gyms, juice bars, health food stores, and individual customers.",
      "Step 3: Price your products. Microgreens sell for Rs 300-600 per kg in Chennai depending on variety and season.",
      "Step 4: Packaging matters. Use eco-friendly clamshell boxes or paper bags with proper ventilation.",
      "Step 5: Build your brand. Create a simple logo, label your products, and maintain consistent quality.",
      "Step 6: Start with local restaurants. Visit chefs directly with free samples to demonstrate quality.",
      "Step 7: Use social media. Instagram and WhatsApp are powerful tools for showcasing your fresh produce daily.",
      "A 6x4 ft balcony can produce microgreens worth Rs 15,000-25,000 per month with proper planning.",
      "Join D'Organica's Microgreens Mastery Program to get complete training on cultivation and business building.",
    ],
  },
  "organic-pest-control-urban-garden": {
    title: "Organic Pest Control: Natural Solutions for Your Urban Garden",
    category: "Organic Gardening",
    date: "February 18, 2026",
    content: [
      "Keeping your urban garden pest-free without chemicals is achievable with these natural methods.",
      "Prevention is better than cure. Healthy plants naturally resist pests. Focus on good soil, proper watering, and adequate sunlight.",
      "Neem oil spray: Mix 5ml neem oil with 1 liter water and a few drops of mild soap. Spray weekly to prevent aphids and mites.",
      "Garlic and chilli spray: Blend 10 garlic cloves and 5 green chillies in 1 liter water. Strain and spray on affected plants.",
      "Companion planting: Grow marigolds, basil, and mint alongside vegetables to naturally repel pests.",
      "Introduce beneficial insects: Ladybugs and lacewings eat aphids. You can attract them by planting flowers like dill and fennel.",
      "Sticky traps: Yellow sticky cards catch whiteflies and fungus gnats. Place them near your plants.",
      "Handpicking: For larger pests like caterpillars, simply remove them by hand in the early morning.",
      "Copper tape: Place around pots to deter snails and slugs. Works well in Chennai's humid conditions.",
      "Regular inspection is key. Check the undersides of leaves daily to catch infestations early.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.content[0].substring(0, 160),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <div className="max-w-md">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-500/60">404</p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-forest-900">Post Not Found</h1>
          <p className="mt-4 text-charcoal-500">This blog post doesn&apos;t exist or has been removed.</p>
          <Link href="/blog" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-forest-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-forest-500">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-32">
        <Link href="/blog" className="mb-8 inline-flex items-center gap-1 text-sm text-charcoal-500 hover:text-forest-600 transition-colors">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
        <span className="inline-block rounded-full bg-forest-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest-700">
          {post.category}
        </span>
        <h1 className="mt-4 font-serif text-3xl font-bold text-forest-900 sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-sm text-charcoal-400">{post.date}</p>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-charcoal-700">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
