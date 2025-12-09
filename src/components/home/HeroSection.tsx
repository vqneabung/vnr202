import Link from "next/link";
import { ArrowRight, Clock, Star, Flag, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroStats = [
  { icon: Clock, value: "30", label: "Năm đấu tranh" },
  { icon: Flag, value: "2", label: "Cuộc kháng chiến" },
  { icon: Award, value: "1975", label: "Thống nhất" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>
        <img 
          src="https://i.pinimg.com/736x/2c/c4/b6/2cc4b64cbef72c22dbb55a6cbb124af9.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#C9A227] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#8B1A1A] rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Top decorative border */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 z-20" 
        style={{ background: "linear-gradient(90deg, #8B1A1A, #C9A227, #8B1A1A)" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-[#C9A227]" />
              <span className="text-[#C9A227] text-sm font-semibold tracking-wider">1945 — 1975</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Đảng Lãnh Đạo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#FFD700]">
                Hai Cuộc Kháng Chiến
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-medium tracking-wide">
              HOÀN THÀNH GIẢI PHÓNG DÂN TỘC, THỐNG NHẤT ĐẤT NƯỚC
            </p>
            
            <p className="text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed text-lg">
              Giai đoạn 1945–1975 là thời kỳ bản lề trong lịch sử Việt Nam hiện đại. 
              Dưới sự lãnh đạo đúng đắn của Đảng Cộng sản Việt Nam, nhân dân ta đã tiến hành 
              kháng chiến toàn dân – toàn diện – lâu dài, đưa đất nước tới thắng lợi trọn vẹn.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {heroStats.map((stat, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20
                           hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2 bg-gradient-to-r from-[#C9A227] to-[#8B6914] hover:from-[#8B6914] hover:to-[#C9A227]
                                                   px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/tong-quan">
                Khám Phá Lịch Sử
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="gap-2 bg-gradient-to-r from-[#C9A227] to-[#8B6914] hover:from-[#8B6914] hover:to-[#C9A227]
                                                   px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/quiz">
                <Star className="w-5 h-5" />
                Kiểm Tra Kiến Thức
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#F5EDE0" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
