"use client";

import { Clock, Sparkles, ChevronDown, Flag, Shield, Star } from "lucide-react";

export default function TongQuanHero() {
  const scrollToContent = () => {
    document.getElementById('historical-context')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://quocphongthudo.vn/upload/2001606/fck/files/anhnhahatlon44-09_46_34_624(1).jpg"
          alt="Bác Hồ đọc tuyên ngôn độc lập"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C3F]/90 via-[#0F1C3F]/80 to-[#0F1C3F]/95"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-[1] opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#C9A227] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#8B1A1A] rounded-full blur-3xl"></div>
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 z-[2] opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-[#C9A227]" />
            <span className="text-white/90 text-sm font-medium">Lịch sử Việt Nam</span>
            <span className="text-white/50">•</span>
            <Clock className="w-4 h-4 text-[#C9A227]" />
            <span className="text-white/90 text-sm">1945 - 1975</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Tổng Quan <span className="text-[#C9A227]">Lịch Sử</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">Hai Cuộc Kháng Chiến</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Ba mươi năm đấu tranh anh dũng dưới sự lãnh đạo của Đảng, 
            dân tộc Việt Nam đã viết nên những trang sử hào hùng nhất trong lịch sử dân tộc
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
              <Flag className="w-6 h-6 text-[#C9A227]" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">2</p>
                <p className="text-xs text-white/70">Cuộc kháng chiến</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
              <Shield className="w-6 h-6 text-[#C9A227]" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">30</p>
                <p className="text-xs text-white/70">Năm đấu tranh</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
              <Star className="w-6 h-6 text-[#C9A227]" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">1975</p>
                <p className="text-xs text-white/70">Thống nhất đất nước</p>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={scrollToContent}
            className="inline-flex flex-col items-center gap-2 text-white/60 hover:text-[#C9A227] transition-colors cursor-pointer group"
          >
            <span className="text-sm">Khám phá</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
