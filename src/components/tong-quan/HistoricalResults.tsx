import { Award, Flag, Globe, Heart, Sparkles, Trophy, Star } from "lucide-react";

const results = [
  {
    icon: Flag,
    title: "Hoàn thành giải phóng dân tộc",
    description: "Đánh đuổi thực dân Pháp và đế quốc Mỹ, kết thúc hơn 100 năm đô hộ"
  },
  {
    icon: Heart,
    title: "Thống nhất đất nước",
    description: "Non sông thu về một mối sau 21 năm chia cắt (1954-1975)"
  },
  {
    icon: Sparkles,
    title: "Mở ra kỷ nguyên mới",
    description: "Cả nước cùng đi lên chủ nghĩa xã hội, xây dựng tương lai"
  },
  {
    icon: Globe,
    title: "Nâng cao vị thế quốc tế",
    description: "Việt Nam trở thành biểu tượng của phong trào giải phóng dân tộc"
  },
  {
    icon: Trophy,
    title: "Bài học cho thế giới",
    description: "Chiến tranh nhân dân Việt Nam trở thành điển hình cho các dân tộc bị áp bức"
  },
];

const stats = [
  { number: "30", label: "Năm đấu tranh", suffix: "" },
  { number: "2", label: "Đế quốc bị đánh bại", suffix: "" },
  { number: "1975", label: "Thống nhất đất nước", suffix: "" },
];

export default function HistoricalResults() {
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
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Award className="w-4 h-4 text-[#C9A227]" />
              <span className="text-sm font-medium text-white/90">Phần 5</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Kết Quả <span className="text-[#C9A227]">Lịch Sử</span> Vĩ Đại
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Những thành tựu hào hùng của dân tộc Việt Nam sau 30 năm kháng chiến
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl md:text-6xl font-bold text-[#C9A227]">{stat.number}</span>
                  <span className="text-2xl text-[#C9A227] ml-1">{stat.suffix}</span>
                </div>
                <p className="text-white/70 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.slice(0, 3).map((result, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10
                           hover:bg-white/20 hover:border-[#C9A227]/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center mb-5
                                shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <result.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C9A227] transition-colors">
                  {result.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {result.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {results.slice(3).map((result, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10
                           hover:bg-white/20 hover:border-[#C9A227]/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center mb-5
                                shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <result.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C9A227] transition-colors">
                  {result.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {result.description}
                </p>
              </div>
            ))}
          </div>

          {/* Final Quote */}
          <div className="mt-16 text-center">
            <div className="inline-block">
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
          </div>
        </div>
      </div>
    </section>
  );
}
