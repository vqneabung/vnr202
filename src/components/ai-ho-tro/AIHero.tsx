import { Sparkles } from "lucide-react";

export default function AIHero() {
  return (
    <section className="bg-gradient-to-br from-[var(--timeless-navy)] to-[var(--royal-burgundy)] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[var(--antique-gold)]" />
            <span className="text-white/80 text-sm">AI Hỗ Trợ</span>
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Trợ Lý AI Lịch Sử
          </h1>
          
          <p className="text-white/80">
            Đặt câu hỏi về lịch sử Đảng 1945-1975 và nhận câu trả lời ngay lập tức
          </p>
        </div>
      </div>
    </section>
  );
}
