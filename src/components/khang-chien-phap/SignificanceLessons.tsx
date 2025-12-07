import { Award, Lightbulb, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const significance = [
  "Chấm dứt ách thống trị của thực dân Pháp",
  "Khẳng định vai trò lãnh đạo của Đảng",
  "Nâng cao vị thế Việt Nam trên thế giới",
];

const lessons = [
  "Đường lối kháng chiến đúng đắn",
  "Phát huy sức mạnh toàn dân",
  "Kết hợp quân sự - chính trị - ngoại giao",
];

export default function SignificanceLessons() {
  return (
    <section 
      className="py-16"
      style={{ background: "linear-gradient(135deg, #0F1C3F 0%, #1A2D5A 50%, #8B1A1A 100%)" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[var(--antique-gold)]">
                  <Award className="w-5 h-5" />
                  Ý Nghĩa
                </CardTitle>
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
                <CardTitle className="flex items-center gap-2 text-[var(--antique-gold)]">
                  <Lightbulb className="w-5 h-5" />
                  Bài Học
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {lessons.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--antique-gold)] flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
