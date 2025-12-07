import { Flag } from "lucide-react";

export default function ResistanceLine() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
              <Flag className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]">
              2. Đường Lối Kháng Chiến Toàn Dân
            </h2>
          </div>
          <div className="prose max-w-none">
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              <strong>Đường lối:</strong> Kháng chiến toàn dân, toàn diện, lâu dài, tự lực cánh sinh.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Kết hợp đấu tranh quân sự, chính trị, ngoại giao. 
              Phát huy sức mạnh toàn dân tộc, kết hợp với sức mạnh thời đại.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
