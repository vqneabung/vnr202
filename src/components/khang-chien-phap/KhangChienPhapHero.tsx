import { Clock } from "lucide-react";

export default function KhangChienPhapHero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Victory_in_Battle_of_Dien_Bien_Phu.jpg/1200px-Victory_in_Battle_of_Dien_Bien_Phu.jpg"
          alt="Chiến thắng Điện Biên Phủ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4 text-[var(--antique-gold)]" />
            <span className="text-white/80 text-sm">1945 - 1954</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Kháng Chiến{" "}
            <span className="text-[var(--antique-gold)]">Chống Thực Dân Pháp</span>
          </h1>
          
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            9 năm kháng chiến toàn dân, toàn diện, lâu dài, 
            kết thúc bằng chiến thắng lừng lẫy Điện Biên Phủ
          </p>
        </div>
      </div>
    </section>
  );
}
