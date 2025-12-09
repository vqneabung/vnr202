import { Star, Heart, Flag, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Conclusion() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0F1C3F 0%, #1A2D5A 40%, #8B1A1A 100%)" }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A227] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B1A1A] rounded-full blur-3xl opacity-20"></div>
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-[#C9A227]" />
              <span className="text-sm font-medium text-white/90">Kết Luận</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trang Sử <span className="text-[#C9A227]">Vàng Chói Lọi</span>
            </h2>
          </div>

          {/* Content Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                Giai đoạn 1945-1975 là <strong className="text-[#C9A227]">trang sử vàng chói lọi</strong> của dân tộc Việt Nam. 
                Dưới sự lãnh đạo sáng suốt của Đảng và Chủ tịch Hồ Chí Minh vĩ đại, nhân dân ta đã vượt qua muôn vàn khó khăn, 
                gian khổ, hy sinh anh dũng để giành lại độc lập, tự do, thống nhất đất nước.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B1A1A] to-[#5a1111] flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                Những giá trị và bài học từ giai đoạn này vẫn còn nguyên giá trị, 
                là <strong className="text-white">nguồn cảm hứng bất tận</strong> và động lực mạnh mẽ cho các thế hệ hôm nay và mai sau 
                trong sự nghiệp xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa.
              </p>
            </div>
          </div>

          {/* Final Quote */}
          <div className="text-center mb-12">
            <Star className="w-10 h-10 text-[#C9A227] mx-auto mb-4" />
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl italic text-white/90 mb-4 leading-relaxed">
                &ldquo;Không có gì quý hơn độc lập, tự do&rdquo;
              </p>
              <cite className="text-[#C9A227] font-semibold text-lg not-italic">
                — Chủ tịch Hồ Chí Minh
              </cite>
            </blockquote>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/tong-quan"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] hover:bg-[#b8922a] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Flag className="w-5 h-5" />
              Xem Tổng Quan Lịch Sử
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/quiz"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              Kiểm Tra Kiến Thức
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
