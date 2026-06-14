import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type SectionBackground =
  | "cream"
  | "white"
  | "forest"
  | "forest-dark"
  | "charcoal"
  | "gradient";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  /** Background variant */
  background?: SectionBackground;
  /** Remove default padding */
  noPadding?: boolean;
  /** Use narrow max-width (editorial) */
  narrow?: boolean;
  /** Remove max-width constraint (full bleed) */
  fullBleed?: boolean;
  /** Add decorative gradient mesh background */
  withMesh?: boolean;
  /** Add organic shape decoration */
  decorated?: boolean;
}

const backgroundStyles: Record<SectionBackground, string> = {
  cream: "bg-cream-50",
  white: "bg-white",
  forest: "bg-forest-700 text-white",
  "forest-dark": "bg-forest-900 text-white",
  charcoal: "bg-charcoal-950 text-white",
  gradient:
    "bg-gradient-to-br from-forest-50 via-cream-50 to-forest-50",
};

/**
 * Consistent section wrapper with background, padding, and max-width.
 */
export default function Section({
  children,
  className,
  background = "cream",
  noPadding = false,
  narrow = false,
  fullBleed = false,
  withMesh = false,
  decorated = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative",
        backgroundStyles[background],
        !noPadding && "py-16 sm:py-20 lg:py-28",
        withMesh && "bg-mesh",
        className
      )}
      {...props}
    >
      {/* Decorative organic shape */}
      {decorated && (
        <div
          className="pointer-events-none absolute -top-32 right-0 h-64 w-64 opacity-[0.03]"
          aria-hidden="true"
        >
          <div className="org-shape h-full w-full bg-forest-500" />
        </div>
      )}

      {/* Content container */}
      <div
        className={cn(
          "w-full",
          !fullBleed && "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          narrow && "max-w-3xl",
          noPadding && "px-0"
        )}
      >
        {children}
      </div>
    </section>
  );
}
