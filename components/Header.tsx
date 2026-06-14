"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, BRAND, CONTACT } from "@/lib/constants";
import Button from "@/components/ui/Button";

/**
 * Focus trap for accessible modal menus.
 * Cycles Tab/Shift+Tab within the provided container element.
 */
function useFocusTrap(
  containerRef: React.RefObject<HTMLElement | null>,
  isActive: boolean
) {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const getFocusableElements = () =>
      Array.from(container.querySelectorAll<HTMLElement>(focusableSelector));

    // Focus the first focusable element
    const elements = getFocusableElements();
    if (elements.length > 0) {
      elements[0].focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const focusable = getFocusableElements();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, containerRef]);
}

/**
 * D'ORGANICA HEADER
 *
 * Behavior:
 * - Transparent at top -> glassmorphism on scroll
 * - Hidden on scroll down, shown on scroll up
 * - Mobile menu with smooth slide-in animation
 * - CTA button in desktop nav
 * - Active page indicator
 * - Focus trap in mobile menu for accessibility
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useFocusTrap(mobileMenuRef, isMenuOpen);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;
          setIsScrolled(current > 40);

          if (current > prevScroll && current > 100) {
            setVisible(false);
          } else {
            setVisible(true);
          }

          setPrevScroll(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRoute = () => setIsMenuOpen(false);
    window.addEventListener("popstate", handleRoute);
    return () => window.removeEventListener("popstate", handleRoute);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-cream-50/85 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]"
          : "bg-transparent",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* - Logo - */}
        <Link
          href="/"
          className="relative z-10 flex items-center gap-2.5 group"
          aria-label={`${BRAND.name} - Home`}
        >
          {/* Leaf icon */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-500 group-hover:scale-110"
            aria-hidden="true"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              fill={isScrolled ? "#3a8a3a" : "rgba(255,255,255,0.15)"}
              className="transition-colors duration-500"
            />
            <path
              d="M18 6C18 6 18 13 22.5 18C27 23 29 25.5 29 30C29 32.5 27 35 24 35C19 35 18 29 18 24C18 29 15 35 11 35C8 35 7 32.5 7 30C7 25.5 9 23 13.5 18C18 13 18 6 18 6Z"
              fill={isScrolled ? "#3a8a3a" : "rgba(255,255,255,0.9)"}
              className="transition-colors duration-500"
              opacity="0.85"
            />
          </svg>
          <span
            className={cn(
              "text-lg font-bold tracking-tight transition-colors duration-500",
              isScrolled || isMenuOpen
                ? "text-forest-800"
                : "text-white"
            )}
          >
            {BRAND.shortName}
          </span>
        </Link>

        {/* - Desktop Navigation - */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300",
                isScrolled
                  ? "text-charcoal-700 hover:bg-forest-50 hover:text-forest-700"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-3">
            <Button
              href="/contact"
              variant={isScrolled ? "primary" : "white"}
              size="sm"
              withArrow
            >
              Book Consultation
            </Button>
          </div>
        </nav>

        {/* - Mobile Menu Button - */}
        <button
          type="button"
          className={cn(
            "relative z-10 inline-flex items-center justify-center rounded-lg p-2 transition-colors md:hidden",
            isScrolled || isMenuOpen
              ? "text-charcoal-700 hover:bg-forest-50 hover:text-forest-700"
              : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* - Mobile Menu Overlay - */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            ref={mobileMenuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-0 bg-forest-950/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-cream-50 p-6 pt-24 shadow-2xl overflow-y-auto"
              aria-label="Mobile navigation"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-xl px-4 py-3 text-lg font-medium text-charcoal-800 transition-colors hover:bg-forest-50 hover:text-forest-700"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-6 border-t border-cream-200 pt-6">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="xl"
                    className="w-full"
                    withArrow
                  >
                    Book Consultation
                  </Button>
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}?text=Hi!%20I'm%20interested%20in%20D'Organica's%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-forest-200 px-6 py-3 text-sm font-semibold text-forest-700 transition-colors hover:bg-forest-50"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
