import { Flag, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const resistanceWar1 = {
  title: "Kháng Chiến Chống Thực Dân Pháp (1945–1954)",
  policy: "Kháng chiến toàn dân, toàn diện, lâu dài; tự lực cánh sinh",
  achievements: [
    "Xây dựng chính quyền dân chủ nhân dân",
    "Củng cố Mặt trận Việt Minh",
    "Chỉnh huấn, xây dựng lực lượng vũ trang",
    "Đỉnh cao: Chiến thắng Điện Biên Phủ (1954)",
  ],
};

const resistanceWar2 = {
  title: "Kháng Chiến Chống Mỹ Cứu Nước (1954–1975)",
  points: [
    "Miền Bắc xây dựng CNXH, là hậu phương chiến lược",
    "Miền Nam tiến hành đấu tranh chính trị – vũ trang chống Mỹ",
    "Các chiến lược chiến tranh của Mỹ đều thất bại",
    "Đỉnh cao: Đại thắng mùa Xuân 1975, thống nhất đất nước",
  ],
};

export default function TwoResistances() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
              <Flag className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]">
              2. Hai Cuộc Kháng Chiến
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-[var(--royal-burgundy)]">
              <CardHeader>
                <CardTitle className="text-lg text-[var(--royal-burgundy)]">
                  {resistanceWar1.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--text-muted)] mb-4 italic">
                  <strong>Đường lối:</strong> {resistanceWar1.policy}
                </p>
                <ul className="space-y-2">
                  {resistanceWar1.achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-[var(--rustic-olive)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[var(--antique-gold)]">
              <CardHeader>
                <CardTitle className="text-lg text-[var(--antique-gold)]">
                  {resistanceWar2.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {resistanceWar2.points.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-[var(--rustic-olive)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-muted)]">{item}</span>
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
