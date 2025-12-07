import { Award, Target, BookOpen } from "lucide-react";

export default function SignificanceSection() {
  return (
    <section 
      className="py-16 md:py-20"
      style={{ background: "linear-gradient(135deg, #0F1C3F 0%, #1A2D5A 50%, #8B1A1A 100%)" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ý Nghĩa Đối Với Người Học
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Hiểu rõ lịch sử để trân trọng hiện tại và xây dựng tương lai
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div 
              className="rounded-lg p-6"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(201, 162, 39, 0.3)" }}
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--antique-gold)] flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg">Quá Trình Lãnh Đạo</h3>
              <p className="text-white/70 text-sm leading-relaxed">Đảng lãnh đạo cách mạng từ 1945–1975</p>
            </div>

            <div 
              className="rounded-lg p-6"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(201, 162, 39, 0.3)" }}
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--antique-gold)] flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg">Thắng Lợi Lịch Sử</h3>
              <p className="text-white/70 text-sm leading-relaxed">Hoàn thành độc lập, thống nhất đất nước</p>
            </div>

            <div 
              className="rounded-lg p-6"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(201, 162, 39, 0.3)" }}
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--antique-gold)] flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg">Bài Học Quý Báu</h3>
              <p className="text-white/70 text-sm leading-relaxed">Giá trị lịch sử cho thế hệ hôm nay</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
