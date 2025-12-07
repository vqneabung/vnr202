import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const significance = [
  "Hoàn thành sự nghiệp giải phóng dân tộc, thống nhất đất nước",
  "Chấm dứt ách thống trị của chủ nghĩa thực dân, đế quốc",
  "Mở ra kỷ nguyên mới - độc lập, tự do, xây dựng CNXH",
  "Khẳng định vai trò lãnh đạo của Đảng Cộng sản Việt Nam",
];

export default function HistoricalSignificance() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)] mb-8">
            1. Ý Nghĩa Lịch Sử
          </h2>
          <Card className="border-l-4 border-l-[var(--royal-burgundy)]">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {significance.map((item, index) => (
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
