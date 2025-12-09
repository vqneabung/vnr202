import { Award, Lightbulb, CheckCircle, Star, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const significance = [
  "Chấm dứt ách thống trị của thực dân Pháp",
  "Khẳng định vai trò lãnh đạo của Đảng",
  "Nâng cao vị thế Việt Nam trên thế giới",
  "Cổ vũ phong trào giải phóng dân tộc toàn cầu",
];

const lessons = [
  "Đường lối kháng chiến đúng đắn, sáng tạo",
  "Phát huy sức mạnh đại đoàn kết toàn dân",
  "Kết hợp quân sự – chính trị – ngoại giao",
  "Xây dựng lực lượng vũ trang nhân dân vững mạnh",
];

export default function SignificanceLessons() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1C3F] via-[#1a2d5a] to-[#8B1A1A]"></div>
      
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A227] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFD700] rounded-full blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-4 border border-white/20">
              <Star className="w-4 h-4 text-[#C9A227]" />
              <span className="text-[#C9A227] text-sm font-semibold">Tổng kết</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ý Nghĩa Lịch Sử & Bài Học Kinh Nghiệm
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl">Ý Nghĩa Lịch Sử</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {significance.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-[#C9A227]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#C9A227]/40 transition-colors">
                        <CheckCircle className="w-4 h-4 text-[#C9A227]" />
                      </div>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#C9A227] flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl">Bài Học Kinh Nghiệm</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {lessons.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#FFD700]/40 transition-colors">
                        <Lightbulb className="w-4 h-4 text-[#FFD700]" />
                      </div>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Quote */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <blockquote className="text-xl md:text-2xl text-white/90 italic max-w-3xl mx-auto">
                &ldquo;Chiến thắng Điện Biên Phủ như một mốc son chói lọi, 
                đánh dấu sự thất bại hoàn toàn của chủ nghĩa thực dân cũ&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
