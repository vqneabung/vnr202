import KhangChienPhapHero from "@/components/khang-chien-phap/KhangChienPhapHero";
import GovernmentEstablishment from "@/components/khang-chien-phap/GovernmentEstablishment";
import ResistanceLine from "@/components/khang-chien-phap/ResistanceLine";
import DienBienPhu from "@/components/khang-chien-phap/DienBienPhu";
import SignificanceLessons from "@/components/khang-chien-phap/SignificanceLessons";

export default function KhangChienChongPhapPage() {
  return (
    <div className="min-h-screen bg-[var(--antique-parchment)]">
      <KhangChienPhapHero />
      <GovernmentEstablishment />
      <ResistanceLine />
      <DienBienPhu />
      <SignificanceLessons />
    </div>
  );
}
