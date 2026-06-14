import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";

// Lazy-load sections below the fold for better initial bundle size
const TransformationSlider = dynamic(() => import("@/components/sections/TransformationSlider"), {
  loading: () => <div className="h-96 skeleton" />,
});
const ImpactMetrics = dynamic(() => import("@/components/sections/ImpactMetrics"), {
  loading: () => <div className="h-64 skeleton" />,
});
const ServicesEcosystem = dynamic(() => import("@/components/sections/ServicesEcosystem"), {
  loading: () => <div className="h-80 skeleton" />,
});
const FounderStory = dynamic(() => import("@/components/sections/FounderStory"), {
  loading: () => <div className="h-96 skeleton" />,
});
const MicrogreensAcademy = dynamic(() => import("@/components/sections/MicrogreensAcademy"), {
  loading: () => <div className="h-80 skeleton" />,
});
const ProjectShowcase = dynamic(() => import("@/components/sections/ProjectShowcase"), {
  loading: () => <div className="h-96 skeleton" />,
});
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"), {
  loading: () => <div className="h-80 skeleton" />,
});
const VisionSection = dynamic(() => import("@/components/sections/VisionSection"), {
  loading: () => <div className="h-64 skeleton" />,
});
const FinalCtaSection = dynamic(() => import("@/components/sections/FinalCtaSection"), {
  loading: () => <div className="h-64 skeleton" />,
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <TransformationSlider />
      <ImpactMetrics />
      <ServicesEcosystem />
      <FounderStory />
      <MicrogreensAcademy />
      <ProjectShowcase />
      <TestimonialsSection />
      <VisionSection />
      <FinalCtaSection />
    </>
  );
}