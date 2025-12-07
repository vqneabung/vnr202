import { Clock } from "lucide-react";

export default function KhangChienMyHero() {
  return (
    <section className="bg-gradient-to-br from-[var(--royal-burgundy)] to-[var(--timeless-navy)] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4 text-[var(--antique-gold)]" />
            <span className="text-white/80 text-sm">1954 - 1975</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Lãnh Đạo Xây Dựng CNXH Ở Miền Bắc <br />
            <span className="text-[var(--antique-gold)]">Và Kháng Chiến Chống Mỹ</span>
          </h1>
          
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            21 năm đấu tranh anh dũng, kết thúc bằng Đại thắng mùa Xuân 1975, 
            thống nhất hoàn toàn đất nước.
          </p>
        </div>
      </div>
    </section>
  );
}
