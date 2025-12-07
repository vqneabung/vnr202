import { BookOpen, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const context = [
  "Chính quyền cách mạng non trẻ đối mặt với nội thù – ngoại xâm – đói nghèo – giặc dốt",
  "Đế quốc, thực dân tiếp tục âm mưu xâm lược, biến Việt Nam thành thuộc địa kiểu mới",
  "Đảng phải giải quyết đồng thời: Kháng chiến chống xâm lược và Xây dựng chế độ mới",
];

export default function HistoricalContext() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]">
              1. Bối Cảnh Lịch Sử
            </h2>
          </div>

          <Card className="border-l-4 border-l-[var(--timeless-navy)]">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {context.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--rustic-olive)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
