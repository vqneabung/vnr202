import { Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  "Tinh thần yêu nước, tự hào dân tộc",
  "Ý chí tự lực, tự cường",
  "Đoàn kết, thống nhất",
  "Kiên trì, bền bỉ trong đấu tranh",
];

export default function ModernValues() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]">
              3. Giá Trị Cho Ngày Hôm Nay
            </h2>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Bài Học Quý Báu</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-[var(--antique-gold)] text-white text-xs flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-[var(--text-muted)] pt-0.5">{value}</span>
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
