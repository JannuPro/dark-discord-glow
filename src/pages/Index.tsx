import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { JoinSection } from "@/components/JoinSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-hero">
        <HeroSection />
        <FeaturesSection />
        <JoinSection />
      </div>
    </div>
  );
};

export default Index;
