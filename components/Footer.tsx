import Link from "next/link";
import { BRAND, CONTACT, SOCIAL, NAV_ITEMS } from "@/lib/constants";

const FOOTER_SERVICES = [
  { label: "Terrace Gardening", href: "/services" },
  { label: "Vertical Gardens", href: "/services" },
  { label: "Landscaping", href: "/services" },
  { label: "Hydroponics", href: "/services" },
  { label: "Microgreens", href: "/services" },
];

const FOOTER_TRAINING = [
  { label: "Microgreens Mastery", href: "/training" },
  { label: "Online Training", href: "/training" },
  { label: "In-Person Training", href: "/training" },
  { label: "Free Resources", href: "/blog" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: SOCIAL.facebook, icon: (<svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>) },
  { label: "Instagram", href: SOCIAL.instagram, icon: (<svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>) },
  { label: "YouTube", href: SOCIAL.youtube, icon: (<svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>) },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-forest-100 bg-forest-950 text-forest-200">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]" aria-hidden="true">
        <div className="absolute -top-40 -right-20 h-80 w-80 rounded-full bg-forest-400 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-gold-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="18" cy="18" r="16" fill="#3a8a3a" opacity="0.3" />
                <path d="M18 6C18 6 18 13 22.5 18C27 23 29 25.5 29 30C29 32.5 27 35 24 35C19 35 18 29 18 24C18 29 15 35 11 35C8 35 7 32.5 7 30C7 25.5 9 23 13.5 18C18 13 18 6 18 6Z" fill="#3a8a3a" opacity="0.9" />
              </svg>
              <span>{BRAND.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-forest-300">
              {BRAND.mission}
            </p>
            <p className="mt-2 text-xs font-medium italic text-forest-300">
              &ldquo;{BRAND.tagline}&rdquo;
            </p>

            {/* Social links - improved contrast: bg-forest-700 text-forest-200 */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-800 text-forest-200 transition-all hover:bg-forest-600 hover:text-white"
                  aria-label={`Follow us on ${link.label}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-forest-200">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-forest-300 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-forest-200">
              Services
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-forest-300 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-forest-200">
              Programs
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_TRAINING.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-forest-300 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar - improved contrast */}
        <div className="mt-12 grid gap-4 border-t border-forest-800 pt-8 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-forest-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-sm text-forest-300">{BRAND.location}</span>
          </div>
          <div className="flex items-start gap-3">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-forest-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div className="text-sm text-forest-300">
              <a href={`tel:${CONTACT.phoneRaw}`} className="block hover:text-white transition-colors">{CONTACT.phone}</a>
              <a href={`tel:${CONTACT.phoneAltRaw}`} className="block hover:text-white transition-colors">{CONTACT.phoneAlt}</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-forest-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <a href={`mailto:${CONTACT.email}`} className="text-sm text-forest-300 hover:text-white transition-colors">{CONTACT.email}</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-forest-800 pt-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-forest-300">
            &copy; {new Date().getFullYear()} {BRAND.name} Shoppee. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-forest-400 sm:mt-0">
            Farmer and Farming at Every Home.
          </p>
        </div>
      </div>
    </footer>
  );
}
