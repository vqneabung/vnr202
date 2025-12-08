import { Clock } from "lucide-react";

export default function KhangChienMyHero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://special.vietnamplus.vn/wp-content/uploads/2021/03/ttxvntongt-1588123540-60.jpg"
          alt="Xe tăng tiến vào Dinh Độc Lập"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
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
