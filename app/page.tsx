import FinalSection from "@/components/FinalSection";
import HeroSection from "@/components/hero";
import ProcessSection from "@/components/ProcessSection";
import ServiceGrid from "@/components/ServiceGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceGrid />
      <ProcessSection />
      <FinalSection />
    </div>
  );
}
