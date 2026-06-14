import type { Metadata } from "next";
import { BRAND, CONTACT, SOCIAL } from "@/lib/constants";
import ContactCta from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${BRAND.name} in Chennai. Book a consultation, enquire about services, or join our microgreens training program.`,
};

/**
 * Contact page — conversion-first design.
 * Split layout: Contact info (left) + WhatsApp/Email CTA cards (right).
 */
export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-forest-950 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-950 to-forest-950" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-forest-500/5 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-400/60">
            Get in Touch
          </p>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Grow Together
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-forest-200/70">
            Whether you&apos;re looking for a consultation, training program, or
            just have a question — we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* ── Contact Content ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left — Contact Info (2 cols) */}
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-500/70">
                Contact Information
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-forest-900">
                Reach Out
              </h2>
              <p className="mt-4 leading-relaxed text-charcoal-600">
                We&apos;re always happy to hear from you. Choose the channel
                that works best for you.
              </p>

              {/* Contact details */}
              <div className="mt-10 space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-100 text-forest-600">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal-800">Phone</p>
                    <a href={`tel:${CONTACT.phoneRaw}`} className="text-sm text-charcoal-600 hover:text-forest-600 transition-colors">
                      {CONTACT.phone}
                    </a>
                    <br />
                    <a href={`tel:${CONTACT.phoneAltRaw}`} className="text-sm text-charcoal-600 hover:text-forest-600 transition-colors">
                      {CONTACT.phoneAlt}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-100 text-forest-600">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal-800">Email</p>
                    <a href={`mailto:${CONTACT.email}`} className="text-sm text-charcoal-600 hover:text-forest-600 transition-colors">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-100 text-forest-600">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal-800">Location</p>
                    <p className="text-sm text-charcoal-600">{BRAND.location}</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal-800">WhatsApp</p>
                    <a
                      href={`https://wa.me/${CONTACT.whatsapp}?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#25D366] hover:text-[#1DA851] transition-colors font-medium"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10 border-t border-cream-200 pt-8">
                <p className="text-sm font-semibold text-charcoal-800">Follow Us</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-cream-100 text-charcoal-500 transition-colors hover:bg-forest-100 hover:text-forest-600"
                    aria-label="Instagram"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </a>
                  <a
                    href={SOCIAL.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-cream-100 text-charcoal-500 transition-colors hover:bg-forest-100 hover:text-forest-600"
                    aria-label="Facebook"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                  <a
                    href={SOCIAL.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-cream-100 text-charcoal-500 transition-colors hover:bg-forest-100 hover:text-forest-600"
                    aria-label="YouTube"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Contact CTA (3 cols) */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-cream-200 bg-cream-50/50 p-6 sm:p-10">
                <h3 className="text-xl font-bold text-forest-900">
                  Get in Touch
                </h3>
                <p className="mt-2 text-sm text-charcoal-500">
                  Choose your preferred way to connect with us.
                </p>
                <div className="mt-8">
                  <ContactCta />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
