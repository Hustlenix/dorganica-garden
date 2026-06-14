import { BRAND, CONTACT, SOCIAL } from "@/lib/constants";

/* ═══════════════════════════════════════════════════
   D'ORGANICA GARDEN — Structured Data (JSON-LD)
   ═══════════════════════════════════════════════════ */

/**
 * Organization schema for the homepage
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BRAND.url}/#organization`,
    name: BRAND.name,
    alternateName: BRAND.shortName,
    url: BRAND.url,
    foundingDate: "2014",
    founder: {
      "@type": "Person",
      name: BRAND.founder,
    },
    description: BRAND.tagline,
    slogan: BRAND.tagline,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: CONTACT.phoneRaw,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "ta"],
      },
    ],
    sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.youtube],
    areaServed: [
      {
        "@type": "City",
        name: "Chennai",
        sameAs: "https://en.wikipedia.org/wiki/Chennai",
      },
    ],
  };
}

/**
 * LocalBusiness schema for local SEO
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BRAND.url}/#localbusiness`,
    parentOrganization: { "@id": `${BRAND.url}/#organization` },
    name: `${BRAND.name} Shoppee`,
    image: `${BRAND.url}/og-image.jpg`,
    telephone: CONTACT.phoneRaw,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0827,
      longitude: 80.2707,
    },
    openingHours: "Mo-Sa 09:00-18:00",
    priceRange: "₹₹",
    description:
      "Urban farming, terrace gardening, hydroponics, landscaping, and microgreens training in Chennai.",
    areaServed: "Chennai, Tamil Nadu, India",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gardening Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Terrace Gardening",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vertical Gardening",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hydroponics",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landscaping",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Microgreens Training",
          },
        },
      ],
    },
  };
}

/**
 * Person schema for the founder page
 */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: BRAND.founder,
    jobTitle: BRAND.founderRole,
    worksFor: { "@id": `${BRAND.url}/#organization` },
    description:
      "Entrepreneur, urban farming specialist, trainer, and business consultant. Founder of D'Organica Garden.",
    award: [
      "Best Women Entrepreneur Excellence Award",
      "Best Homepreneur Award",
      "Top 150 SMEs around the world",
    ],
    knowsAbout: [
      "Urban Farming",
      "Terrace Gardening",
      "Hydroponics",
      "Microgreens",
      "Landscaping",
      "Sustainable Living",
    ],
  };
}

/**
 * WebSite schema for enhanced SEO
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BRAND.url}/#website`,
    url: BRAND.url,
    name: BRAND.name,
    description:
      "Farmer and Farming at Every Home. Urban farming, terrace gardening, hydroponics, and microgreens training in Chennai.",
    publisher: { "@id": `${BRAND.url}/#organization` },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BRAND.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * FAQ schema for the training page
 */
export function faqSchema(questions: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
