import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import DemoSection from "@/components/sections/DemoSection";
import WhySection from "@/components/sections/WhySection";
import VisionSection from "@/components/sections/VisionSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import FounderSection from "@/components/sections/FounderSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-electric-blue selection:text-white">
      <HeroSection />
      <StorySection />
      <ProblemSection />
      <SolutionSection />
      <DemoSection />
      <WhySection />
      <VisionSection />
      <WaitlistSection />
      <FounderSection />
      <Footer />
    </main>
  );
}
