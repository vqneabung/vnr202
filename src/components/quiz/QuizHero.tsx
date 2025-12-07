import { HelpCircle } from "lucide-react";

export default function QuizHero() {
  return (
    <section className="bg-gradient-to-br from-[var(--timeless-navy)] to-[var(--royal-burgundy)] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-[var(--antique-gold)]" />
            <span className="text-white/80 text-sm">Kiểm Tra Kiến Thức</span>
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Quiz Lịch Sử Đảng (1945-1975)
          </h1>
          
          <p className="text-white/80">
            Trả lời 10 câu hỏi để kiểm tra kiến thức của bạn
          </p>
        </div>
      </div>
    </section>
  );
}
