import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ValueBar } from "@/components/site/ValueBar";
import { ProblemSection } from "@/components/site/ProblemSection";
import { PlatformSection } from "@/components/site/PlatformSection";
import { RiskEngine } from "@/components/site/RiskEngine";
import { RiskIntelligence } from "@/components/site/RiskIntelligence";
import { UseCases } from "@/components/site/UseCases";
import { Workflow } from "@/components/site/Workflow";
import { Comparison } from "@/components/site/Comparison";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValueBar />
        <ProblemSection />
        <PlatformSection />
        <RiskEngine />
        <RiskIntelligence />
        <UseCases />
        <Workflow />
        <Comparison />
        <DashboardPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
