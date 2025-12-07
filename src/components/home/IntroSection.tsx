import Link from "next/link";
import { BookOpen, Flag, Star, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Tổng Quan Lịch Sử",
    description: "Khái quát về hai cuộc kháng chiến vĩ đại chống Pháp và Mỹ từ 1945-1975.",
    href: "/tong-quan",
  },
  {
    icon: Flag,
    title: "Kháng Chiến Chống Pháp",
    description: "Chi tiết về cuộc kháng chiến 1945-1954 với đỉnh cao Điện Biên Phủ.",
    href: "/chi-tiet/khang-chien-chong-phap",
  },
  {
    icon: Star,
    title: "Kháng Chiến Chống Mỹ",
    description: "Quá trình đấu tranh 1954-1975, kết thúc bằng Đại thắng mùa Xuân.",
    href: "/chi-tiet/khang-chien-chong-my",
  },
  {
    icon: Award,
    title: "Ý Nghĩa Lịch Sử",
    description: "Giá trị và bài học lịch sử còn vẹn nguyên đến hôm nay.",
    href: "/y-nghia",
  },
];

export default function IntroSection() {
  return (
    <section className="py-16 md:py-20 bg-[var(--antique-parchment)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--timeless-navy)] mb-4">
              Khám Phá Lịch Sử Dân Tộc
            </h2>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
              Tìm hiểu chi tiết về hai cuộc kháng chiến vĩ đại và vai trò lãnh đạo của Đảng
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 border-transparent hover:border-[var(--antique-gold)]">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center mb-3">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-[var(--timeless-navy)]">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
