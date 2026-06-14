import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import TransformationSlider from "@/components/sections/TransformationSlider";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import ServicesEcosystem from "@/components/sections/ServicesEcosystem";
import FounderStory from "@/components/sections/FounderStory";
import MicrogreensAcademy from "@/components/sections/MicrogreensAcademy";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VisionSection from "@/components/sections/VisionSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

/**
 * D'ORGANICA GARDEN — Homepage
 *
 * An 11-section cinematic narrative journey.
 * Each section creates curiosity that pulls the user to the next.
 *
 * Emotional arc:
 *   Curiosity → Inspiration → Trust → Authority → Possibility → Action
 */
export default function HomePage() {
  return (
    <>
      {/* 01 — IMMERSIVE HERO */}
      {/* Goal: Immediate emotional impact. Full viewport. */}
      <HeroSection />

      {/* 02 — THE PROBLEM */}
      {/* Goal: Show how cities disconnected us from food. */}
      <ProblemSection />

      {/* 03 — THE TRANSFORMATION */}
      {/* Goal: Interactive before/after. Real proof. */}
      <TransformationSlider />

      {/* 04 — IMPACT METRICS */}
      {/* Goal: Build credibility through numbers. */}
      <ImpactMetrics />

      {/* 05 — SERVICES ECOSYSTEM */}
      {/* Goal: Show services as a connected living system. */}
      <ServicesEcosystem />

      {/* 06 — FOUNDER STORY */}
      {/* Goal: Create emotional connection with the founder. */}
      <FounderStory />

      {/* 07 — MICROGREENS ACADEMY */}
      {/* Goal: Present training as a premium opportunity. */}
      <MicrogreensAcademy />

      {/* 08 — PROJECT SHOWCASE */}
      {/* Goal: Case-study driven portfolio. */}
      <ProjectShowcase />

      {/* 09 — TESTIMONIALS */}
      {/* Goal: Social proof through real stories. */}
      <TestimonialsSection />

      {/* 10 — VISION OF THE FUTURE */}
      {/* Goal: Inspire. Show what's possible. */}
      <VisionSection />

      {/* 11 — FINAL CONVERSION */}
      {/* Goal: Clear CTA. No friction. Earned trust converts. */}
      <FinalCtaSection />
    </>
  );
}
