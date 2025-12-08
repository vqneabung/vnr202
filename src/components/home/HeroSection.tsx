import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden py-20 md:py-32"
    >
      {/* Background Image Frame */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img 
          src="https://tapchilichsudang.vn/pic/AboutUs/images/2cb5b0f57bc1be148ac5f6170fb8b93a-ttxvn_giai_phong_mien_nam_2.jpg" /* TODO: Add background image URL here */
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative top border - kept on top of image but below content? Or just z-index handling */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 z-20" 
        style={{ background: "linear-gradient(90deg, #8B1A1A, #C9A227, #8B1A1A)" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4 text-[#C9A227]" />
            <span className="text-[#C9A227] text-sm font-semibold tracking-wider">1945 — 1975</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Đảng Lãnh Đạo{" "}
            <span className="text-[#C9A227]">Hai Cuộc Kháng Chiến</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-4 max-w-2xl mx-auto font-semibold tracking-wide">
            HOÀN THÀNH GIẢI PHÓNG DÂN TỘC, THỐNG NHẤT ĐẤT NƯỚC
          </p>
          
          <p className="text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Giai đoạn 1945–1975 là thời kỳ bản lề trong lịch sử Việt Nam hiện đại. 
            Dưới sự lãnh đạo đúng đắn của Đảng Cộng sản Việt Nam, nhân dân ta đã tiến hành 
            kháng chiến toàn dân – toàn diện – lâu dài, đưa đất nước tới thắng lợi trọn vẹn.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="gold">
              <Link href="/tong-quan">
                Khám Phá Lịch Sử
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F1C3F] font-semibold" style={{ borderColor: '#FFFFFF', color: '#FFFFFF', backgroundColor: 'transparent' }}>
              <Link href="/quiz">Kiểm Tra Kiến Thức</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
