import { Clock } from "lucide-react";

export default function TongQuanHero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://quocphongthudo.vn/upload/2001606/fck/files/anhnhahatlon44-09_46_34_624(1).jpg"
          alt="Bác Hồ đọc tuyên ngôn độc lập"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4 text-[var(--antique-gold)]" />
            <span className="text-white/80 text-sm">1945 - 1975</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Tổng Quan Lịch Sử{" "}
            <span className="text-[var(--antique-gold)]">1945 - 1975</span>
          </h1>
          
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Đảng lãnh đạo hai cuộc kháng chiến vĩ đại, hoàn thành sự nghiệp giải phóng dân tộc, thống nhất đất nước
          </p>
        </div>
      </div>
    </section>
  );
}
