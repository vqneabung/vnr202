"use client";

import { Award, Target, BookOpen, Lightbulb, Heart, Users, Sparkles } from "lucide-react";

const significanceItems = [
  {
    icon: Target,
    title: "Khẳng định vai trò lãnh đạo",
    description: "Đảng Cộng sản Việt Nam đã chứng minh năng lực lãnh đạo xuất sắc, đưa dân tộc từ nô lệ đến tự do, từ chia cắt đến thống nhất.",
    highlight: "30 năm đấu tranh",
    color: "from-[#C9A227] to-[#8B6914]"
  },
  {
    icon: Award,
    title: "Chiến thắng vẻ vang",
    description: "Đánh bại hai đế quốc lớn nhất thời đại: Pháp và Mỹ. Điện Biên Phủ và Đại thắng mùa Xuân 1975 là những chiến công lừng lẫy.",
    highlight: "2 đế quốc thất bại",
    color: "from-[#8B1A1A] to-[#5a1111]"
  },
  {
    icon: Heart,
    title: "Tinh thần đoàn kết",
    description: "Sức mạnh đại đoàn kết toàn dân tộc, từ Bắc chí Nam, từ miền xuôi đến miền ngược, cùng chung một lòng quyết tâm.",
    highlight: "Toàn dân một ý chí",
    color: "from-[#2E7D32] to-[#1b5e20]"
  },
  {
    icon: Users,
    title: "Sức mạnh nhân dân",
    description: "Chiến tranh nhân dân Việt Nam đã trở thành bài học kinh điển cho các phong trào giải phóng dân tộc trên thế giới.",
    highlight: "Bài học cho thế giới",
    color: "from-[#0F1C3F] to-[#1a2d5a]"
  },
  {
    icon: Lightbulb,
    title: "Bài học cho hôm nay",
    description: "Tinh thần yêu nước, ý chí tự lực tự cường, khát vọng độc lập tự do vẫn là kim chỉ nam cho thế hệ trẻ Việt Nam.",
    highlight: "Giá trị trường tồn",
    color: "from-[#C9A227] to-[#8B6914]"
  },
  {
    icon: BookOpen,
    title: "Trách nhiệm thế hệ",
    description: "Học lịch sử không chỉ để biết mà còn để hành động, để xây dựng và bảo vệ Tổ quốc trong thời đại mới.",
    highlight: "Học để hành động",
    color: "from-[#8B1A1A] to-[#5a1111]"
  }
];

export default function SignificanceSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0F1C3F 0%, #1A2D5A 40%, #0F1C3F 70%, #8B1A1A 100%)" }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A227] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B1A1A] rounded-full blur-3xl"></div>
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-[#C9A227]" />
              <span className="text-sm font-medium text-white/90">Giá trị lịch sử</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ý Nghĩa <span className="text-[#C9A227]">Lịch Sử</span> Vĩ Đại
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Hai cuộc kháng chiến chống Pháp và chống Mỹ không chỉ mang lại độc lập, thống nhất 
              mà còn để lại những bài học quý báu cho các thế hệ mai sau
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {significanceItems.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 
                           hover:bg-white/10 hover:border-[#C9A227]/50 transition-all duration-300
                           hover:transform hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 
                                shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Highlight badge */}
                <div className="inline-block px-3 py-1 bg-[#C9A227]/20 rounded-full mb-3">
                  <span className="text-xs font-semibold text-[#C9A227]">{item.highlight}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9A227] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#C9A227]/20 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className="mt-16 text-center">
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
    </section>
  );
}
