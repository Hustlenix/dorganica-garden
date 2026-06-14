import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, localBusinessSchema, websiteSchema } from "@/lib/seo";

/* ═══════════════════════════════════════════════════
   Typography — Premium Editorial + Geometric Sans
   ═══════════════════════════════════════════════════ */

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

/* ═══════════════════════════════════════════════════
   SEO & Social Metadata
   ═══════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: {
    default:
      "D'Organica Garden — Urban Farming, Terrace Gardening & Microgreens Training in Chennai",
    template: "%s — D'Organica Garden",
  },
  description:
    "Farmer and Farming at Every Home. Transform your rooftop, balcony, or community into a thriving ecosystem. Expert urban farming, terrace gardening, hydroponics, landscaping, and microgreens training in Chennai since 2014.",
  metadataBase: new URL("https://hustlenix.github.io/dorganica-garden"),
  keywords: [
    "terrace gardening Chennai",
    "microgreens training Chennai",
    "urban farming Chennai",
    "hydroponics Chennai",
    "landscaping Chennai",
    "organic gardening Chennai",
    "vertical garden Chennai",
    "rooftop garden Chennai",
    "D'Organica Garden",
    "Jayasri Krishnan",
  ],
  openGraph: {
    title: "D'Organica Garden — Farmer and Farming at Every Home",
    description:
      "A movement helping people reconnect with nature, grow food, and build self-sustainable homes. Urban farming, terrace gardening & microgreens training in Chennai.",
    siteName: "D'Organica Garden",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "D'Organica Garden — Urban Farming in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D'Organica Garden — Farmer and Farming at Every Home",
    description:
      "Urban farming, terrace gardening, hydroponics & microgreens training in Chennai. Since 2014.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/site.webmanifest",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "D'Organica",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fefcf7" },
    { media: "(prefers-color-scheme: dark)", color: "#061506" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ═══════════════════════════════════════════════════
   Root Layout
   ═══════════════════════════════════════════════════ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        {/* Preconnect to font origins for performance */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col overflow-x-hidden bg-cream-50 text-charcoal-900 antialiased selection:bg-forest-200 selection:text-forest-900">
        {/* Accessibility: Skip to content */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        {/* Structured Data */}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />

        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Global Header */}
        <Header />

        {/* Main Content */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />

        {/* Toast Notifications */}
        <Toaster
          position="top-center"
          richColors
          toastOptions={{
            style: {
              fontFamily: "var(--font-sans)",
              borderRadius: "12px",
            },
          }}
        />
      </body>
    </html>
  );
}
