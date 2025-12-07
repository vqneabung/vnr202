import { Award, CheckCircle } from "lucide-react";

const results = [
  "Hoàn thành sự nghiệp giải phóng dân tộc",
  "Thống nhất đất nước",
  "Tạo nền tảng để cả nước đi lên chủ nghĩa xã hội",
  "Nâng cao vị thế Việt Nam trên trường quốc tế",
  "Góp phần vào phong trào giải phóng dân tộc thế giới",
];

export default function HistoricalResults() {
  return (
    <section 
      className="py-16 md:py-20"
      style={{ background: "linear-gradient(135deg, #0F1C3F 0%, #1A2D5A 50%, #8B1A1A 100%)" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--antique-gold)] flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              5. Kết Quả Lịch Sử
            </h2>
          </div>

          <div 
            className="rounded-lg p-6"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(201, 162, 39, 0.3)" }}
          >
            <ul className="space-y-3">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--antique-gold)] flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
