import { Award, CheckCircle, Lightbulb, Star, Trophy, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const significance = [
  "Hoàn thành sự nghiệp thống nhất đất nước",
  "Đập tan ý đồ xâm lược của đế quốc Mỹ",
  "Nâng cao uy tín Việt Nam trên trường quốc tế",
  "Tạo tiền đề cho công cuộc xây dựng CNXH",
];

const experiences = [
  "Lãnh đạo đúng đắn, sáng suốt của Đảng",
  "Kết hợp chặt chẽ quân sự – chính trị – ngoại giao",
  "Phát huy sức mạnh đại đoàn kết toàn dân tộc",
  "Tranh thủ sự ủng hộ của phong trào cách mạng thế giới",
];

export default function VictorySignificance() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1C3F] via-[#1a2d5a] to-[#8B1A1A]"></div>
      
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A227] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFD700] rounded-full blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-4 border border-white/20">
              <Trophy className="w-4 h-4 text-[#FFD700]" />
              <span className="text-[#FFD700] text-sm font-semibold">Tổng kết</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ý Nghĩa Thắng Lợi & Kinh Nghiệm Lịch Sử
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Đại thắng mùa Xuân 1975 - Thắng lợi vĩ đại nhất của dân tộc Việt Nam trong thế kỷ XX
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Significance */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden">
              <CardHeader className="border-b border-white/10 pb-4">
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl">Ý Nghĩa Lịch Sử</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {significance.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-[#C9A227]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227]/40 transition-colors">
                        <CheckCircle className="w-5 h-5 text-[#C9A227]" />
                      </div>
                      <span className="text-white/90 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden">
              <CardHeader className="border-b border-white/10 pb-4">
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#C9A227] flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl">Kinh Nghiệm Lịch Sử</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {experiences.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD700]/40 transition-colors">
                        <Lightbulb className="w-5 h-5 text-[#FFD700]" />
                      </div>
                      <span className="text-white/90 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Quote */}
          <div className="text-center">
            <div className="inline-block bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 max-w-4xl">
              <Star className="w-10 h-10 text-[#FFD700] mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl text-white font-medium italic leading-relaxed mb-4">
                &ldquo;Đại thắng mùa Xuân 1975 - Thắng lợi vĩ đại của dân tộc Việt Nam trong thế kỷ XX&rdquo;
              </blockquote>
              <p className="text-[#C9A227] font-semibold">30/4/1975 - Ngày Thống Nhất Đất Nước</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
