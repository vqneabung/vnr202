import YNghiaHero from "@/components/y-nghia/YNghiaHero";
import HistoricalSignificance from "@/components/y-nghia/HistoricalSignificance";
import QuotesSection from "@/components/y-nghia/QuotesSection";
import ModernValues from "@/components/y-nghia/ModernValues";
import InternationalImpact from "@/components/y-nghia/InternationalImpact";
import Conclusion from "@/components/y-nghia/Conclusion";

export default function YNghiaPage() {
  return (
    <div className="min-h-screen bg-[var(--antique-parchment)]">
      <YNghiaHero />
      <HistoricalSignificance />
      <QuotesSection />
      <ModernValues />
      <InternationalImpact />
      <Conclusion />
    </div>
  );
}
