import TongQuanHero from "@/components/tong-quan/TongQuanHero";
import HistoricalContext from "@/components/tong-quan/HistoricalContext";
import TwoResistances from "@/components/tong-quan/TwoResistances";
import StrategicTasks from "@/components/tong-quan/StrategicTasks";
import PartyLeadership from "@/components/tong-quan/PartyLeadership";
import HistoricalResults from "@/components/tong-quan/HistoricalResults";

export default function TongQuanPage() {
  return (
    <div className="min-h-screen bg-[var(--antique-parchment)]">
      <TongQuanHero />
      <HistoricalContext />
      <TwoResistances />
      <StrategicTasks />
      <PartyLeadership />
      <HistoricalResults />
    </div>
  );
}
