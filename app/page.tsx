import FinalSection from "@/components/FinalSection";
import UltraWorkflow from "@/components/hero";
import ProcessSection from "@/components/ProcessSection";
import ServiceGrid from "@/components/ServiceGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <UltraWorkflow />
      <ServiceGrid />
      <ProcessSection />
      <FinalSection />
    </div>
  );
}
