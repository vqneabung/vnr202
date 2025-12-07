import { Target, Building, Flag, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const strategicTasks = [
  {
    title: "Xây dựng CNXH ở miền Bắc",
    icon: Building,
    items: [
      "Cải cách ruộng đất, khôi phục kinh tế",
      "Phát triển công nghiệp – nông nghiệp – văn hoá – giáo dục",
      "Miền Bắc trở thành căn cứ địa của cả nước",
    ],
  },
  {
    title: "Giải phóng miền Nam, thống nhất đất nước",
    icon: Flag,
    items: [
      "Đề ra đường lối đấu tranh chính trị kết hợp vũ trang",
      "Xây dựng Mặt trận Dân tộc Giải phóng miền Nam",
      "Kết hợp quân sự – chính trị – ngoại giao, tiến tới tổng tiến công 1975",
    ],
  },
];

export default function StrategicTasks() {
  return (
    <section className="py-16 md:py-20 bg-[var(--antique-parchment)]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]">
              3. Nhiệm Vụ Chiến Lược
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {strategicTasks.map((task, index) => (
              <Card key={index} className="border-l-4 border-l-[var(--timeless-navy)]">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <task.icon className="w-5 h-5 text-[var(--timeless-navy)]" />
                    {task.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {task.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[var(--rustic-olive)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--text-muted)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
