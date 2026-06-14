import type { Variants } from "framer-motion";

/* ═══════════════════════════════════════════════════
   D'ORGANICA GARDEN — Shared Animation Variants
   Purposeful motion that guides attention.
   ═══════════════════════════════════════════════════ */

/* ── Easing Curves ── */

/** Custom cubic bezier — smooth, natural, premium feel */
export const easeOutExpo = [0.22, 1, 0.36, 1] as const;
export const easeInOut = [0.76, 0, 0.24, 1] as const;

/* ── Entrance Variants ── */

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOutExpo,
    },
  },
};

export const fadeInUpDelayed = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo, delay },
  },
});

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const revealMask: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 1, ease: easeOutExpo },
  },
};

/* ── Stagger ── */

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/* ── Micro-interactions ── */

export const hoverScale = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
};

export const hoverLift = {
  whileHover: { y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.08)" },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

/* ── Counter ── */

export const counterReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo, delay: i * 0.08 },
  }),
};

/* ── Page Transition ── */

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: easeOutExpo } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};
