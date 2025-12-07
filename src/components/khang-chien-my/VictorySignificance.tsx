import { Award, CheckCircle, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const significance = [
  "Hoàn thành thống nhất đất nước",
  "Đập tan ý đồ xâm lược của Mỹ",
  "Nâng cao uy tín Việt Nam trên thế giới",
  "Tạo tiền đề cho công cuộc xây dựng CNXH",
];

const experiences = [
  "Lãnh đạo đúng đắn của Đảng",
  "Kết hợp quân sự – chính trị – ngoại giao",
  "Phát huy sức mạnh toàn dân",
  "Sự giúp đỡ của phong trào cách mạng thế giới",
];

export default function VictorySignificance() {
  return (
    <section className="py-16 bg-gradient-to-br from-[var(--timeless-navy)] to-[var(--royal-burgundy)]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--antique-gold)] flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              3. Ý Nghĩa Thắng Lợi & Kinh Nghiệm
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-lg text-[var(--antique-gold)]">Ý Nghĩa</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {significance.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--antique-gold)] flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-lg text-[var(--antique-gold)]">Kinh Nghiệm</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {experiences.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-[var(--antique-gold)] flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <blockquote className="text-xl md:text-2xl text-white/90 italic max-w-3xl mx-auto">
              &ldquo;Đại thắng mùa Xuân 1975 - Thắng lợi vĩ đại của dân tộc Việt Nam 
              trong thế kỷ XX&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
