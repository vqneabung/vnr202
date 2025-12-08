import KhangChienMyHero from "@/components/khang-chien-my/KhangChienMyHero";
import NorthConstruction from "@/components/khang-chien-my/NorthConstruction";
import SouthRevolution from "@/components/khang-chien-my/SouthRevolution";
import HoChiMinhCampaign from "@/components/khang-chien-my/HoChiMinhCampaign";
import VictorySignificance from "@/components/khang-chien-my/VictorySignificance";

export default function KhangChienChongMyPage() {
  return (
    <div className="min-h-screen bg-[var(--antique-parchment)]">
      <KhangChienMyHero />
      <NorthConstruction />
      <SouthRevolution />
      {/* <HoChiMinhCampaign /> */}
      <VictorySignificance />
    </div>
  );
}
