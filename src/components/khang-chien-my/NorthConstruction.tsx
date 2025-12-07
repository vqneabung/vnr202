import { Building, Target, Award, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const northTasks = [
  "Khôi phục kinh tế",
  "Cải tạo quan hệ sản xuất",
  "Phát triển CN – NN – VH – GD",
  "Xây dựng hệ thống chính trị XHCN",
];

const northAchievements = [
  "Cải cách ruộng đất, hợp tác hoá nông nghiệp",
  "Công nghiệp được khôi phục",
  "Văn hóa – giáo dục phát triển mạnh",
  "Miền Bắc trở thành hậu phương lớn",
];

export default function NorthConstruction() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]">
              1. Xây Dựng CNXH Ở Miền Bắc (1954–1975)
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-[var(--timeless-navy)]">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="w-5 h-5 text-[var(--timeless-navy)]" />
                  Nhiệm Vụ Chung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {northTasks.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[var(--timeless-navy)] text-white text-xs flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-[var(--text-muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[var(--antique-gold)]">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="w-5 h-5 text-[var(--antique-gold)]" />
                  Thành Tựu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {northAchievements.map((item, index) => (
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
