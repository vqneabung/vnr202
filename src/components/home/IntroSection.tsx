import Link from "next/link";
import { BookOpen, Flag, Star, Award, ArrowRight, Sparkles } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Tổng Quan Lịch Sử",
    description: "Khái quát về hai cuộc kháng chiến vĩ đại chống Pháp và Mỹ từ 1945-1975.",
    href: "/tong-quan",
    color: "from-[#0F1C3F] to-[#1a2d5a]",
  },
  {
    icon: Flag,
    title: "Kháng Chiến Chống Pháp",
    description: "Chi tiết về cuộc kháng chiến 1945-1954 với đỉnh cao Điện Biên Phủ.",
    href: "/chi-tiet/khang-chien-chong-phap",
    color: "from-[#8B1A1A] to-[#5a1111]",
  },
  {
    icon: Star,
    title: "Kháng Chiến Chống Mỹ",
    description: "Quá trình đấu tranh 1954-1975, kết thúc bằng Đại thắng mùa Xuân.",
    href: "/chi-tiet/khang-chien-chong-my",
    color: "from-[#C9A227] to-[#8B6914]",
  },
  {
    icon: Award,
    title: "Ý Nghĩa Lịch Sử",
    description: "Giá trị và bài học lịch sử còn vẹn nguyên đến hôm nay.",
    href: "/y-nghia",
    color: "from-[#2E7D32] to-[#1b5e20]",
  },
];

export default function IntroSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F5EDE0]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F1C3F]/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#C9A227]" />
              <span className="text-sm font-medium text-[#0F1C3F]">Khám phá ngay</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C3F] mb-4">
              Khám Phá <span className="text-[#8B1A1A]">Lịch Sử Dân Tộc</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Tìm hiểu chi tiết về hai cuộc kháng chiến vĩ đại và vai trò lãnh đạo của Đảng
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href} className="group">
                <div className="h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100
                                hover:shadow-xl hover:border-[#C9A227]/30 transition-all duration-300
                                hover:transform hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5
                                  shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#0F1C3F] mb-2 group-hover:text-[#8B1A1A] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  {/* Arrow */}
                  <div className="flex items-center gap-1 text-[#C9A227] text-sm font-medium">
                    <span>Tìm hiểu thêm</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
