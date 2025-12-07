import { Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const partyRoles = [
  "Đề ra đường lối kháng chiến toàn dân, toàn diện",
  "Lãnh đạo xây dựng hậu phương vững mạnh",
  "Kết hợp sức mạnh dân tộc + sức mạnh thời đại",
  "Kiên định mục tiêu độc lập dân tộc gắn với CNXH",
  "Tổ chức lực lượng, phát huy đại đoàn kết",
];

export default function PartyLeadership() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]">
              4. Vai Trò Lãnh Đạo Của Đảng
            </h2>
          </div>

          <Card className="border-l-4 border-l-[var(--royal-burgundy)]">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {partyRoles.map((role, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--rustic-olive)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-muted)]">{role}</span>
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
