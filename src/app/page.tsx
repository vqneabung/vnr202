import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import PartyRoleSection from "@/components/home/PartyRoleSection";
import TimelineSection from "@/components/home/TimelineSection";
import SignificanceSection from "@/components/home/SignificanceSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <PartyRoleSection />
      <TimelineSection />
      <SignificanceSection />
    </div>
  );
}
