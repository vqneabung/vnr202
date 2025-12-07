import { Building, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const tasks = [
  "Xây dựng chính quyền dân chủ nhân dân",
  "Củng cố Mặt trận Việt Minh",
  "Chỉnh huấn, xây dựng lực lượng vũ trang",
  "Phát động phong trào kháng chiến toàn dân",
];

export default function GovernmentEstablishment() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]">
              1. Thiết Lập & Bảo Vệ Chính Quyền
            </h2>
          </div>
          <Card className="border-l-4 border-l-[var(--timeless-navy)]">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {tasks.map((task, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--rustic-olive)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-muted)]">{task}</span>
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
