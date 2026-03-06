import HeroSection from "@/components/hero";
import ServicesGrid from "@/components/ServiceGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesGrid />
    </div>
  );
}
