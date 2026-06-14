"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOutExpo } from "@/lib/animation";

/* ═══════════════════════════════════════════════════
   Button — Polymorphic, Premium, Purposeful
   ═══════════════════════════════════════════════════ */

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "gold"
  | "white";

type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  /** Show a subtle arrow icon */
  withArrow?: boolean;
  /** Full width on mobile */
  mobileFull?: boolean;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-forest-600 text-white shadow-lg shadow-forest-600/25 hover:bg-forest-500 hover:shadow-forest-500/30 active:bg-forest-700",
  secondary:
    "bg-cream-100 text-forest-700 hover:bg-cream-200 active:bg-cream-300",
  outline:
    "border border-forest-300 text-forest-700 hover:bg-forest-50 active:bg-forest-100",
  ghost:
    "text-forest-600 hover:bg-forest-50 active:bg-forest-100",
  gold:
    "bg-gold-500 text-white shadow-lg shadow-gold-500/25 hover:bg-gold-400 active:bg-gold-600",
  white:
    "bg-white text-forest-700 shadow-lg shadow-black/5 hover:bg-cream-50 active:bg-cream-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-6 py-3 text-sm gap-2",
  xl: "px-8 py-4 text-base gap-2.5",
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = "primary",
      size = "md",
      className,
      children,
      withArrow = false,
      mobileFull = false,
      ...rest
    } = props;

    const baseStyles = cn(
      "inline-flex items-center justify-center rounded-xl font-semibold",
      "transition-all duration-300 ease-out",
      "focus-visible:outline-2 focus-visible:outline-forest-500 focus-visible:outline-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",
      "select-none",
      variantStyles[variant],
      sizeStyles[size],
      mobileFull && "w-full sm:w-auto",
      className
    );

    const content = (
      <>
        {children}
        {withArrow && (
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        )}
      </>
    );

    // Render as Link
    if ("href" in rest && rest.href) {
      const { href, ...linkRest } = rest as ButtonAsLink;
      return (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="group inline-flex"
        >
          <Link
            href={href}
            className={baseStyles}
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...linkRest}
          >
            {content}
          </Link>
        </motion.div>
      );
    }

    // Render as button
    const { onClick, type = "button", disabled } = rest as ButtonAsButton;
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="group inline-flex"
      >
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={baseStyles}
          ref={ref as React.Ref<HTMLButtonElement>}
        >
          {content}
        </button>
      </motion.div>
    );
  }
);

Button.displayName = "Button";

export default Button;
