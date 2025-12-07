import { Globe } from "lucide-react";

export default function InternationalImpact() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]">
              4. Ý Nghĩa Quốc Tế
            </h2>
          </div>
          <div className="prose max-w-none">
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Thắng lợi của cách mạng Việt Nam đã góp phần to lớn vào phong trào giải phóng dân tộc trên thế giới, 
              khẳng định sức mạnh của các dân tộc nhỏ khi đoàn kết và kiên cường đấu tranh.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Đây là minh chứng sống động cho chân lý: "Không có gì quý hơn độc lập, tự do" 
              và tinh thần tự lực, tự cường của dân tộc Việt Nam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
