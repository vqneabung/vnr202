import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const timeline = [
  { year: "1945", event: "Cách mạng Tháng Tám thành công" },
  { year: "1946", event: "Toàn quốc kháng chiến" },
  { year: "1954", event: "Chiến thắng Điện Biên Phủ" },
  { year: "1960", event: "Thành lập Mặt trận DTGPMN" },
  { year: "1968", event: "Tổng tiến công Mậu Thân" },
  { year: "1975", event: "Đại thắng mùa Xuân" },
];

export default function TimelineSection() {
  return (
    <section className="py-16 md:py-20 bg-[var(--antique-parchment)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]">
              Dòng Thời Gian Lịch Sử
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--antique-gold)] via-[var(--royal-burgundy)] to-[var(--timeless-navy)]" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-6 top-3 w-5 h-5 rounded-full bg-[var(--antique-gold)] border-4 border-white shadow-lg" />
                  
                  <Card className="hover:shadow-xl transition-shadow">
                    <CardContent className="p-5">
                      <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <span className="text-2xl font-bold text-[var(--royal-burgundy)] min-w-[80px]">
                          {item.year}
                        </span>
                        <span className="text-[var(--timeless-navy)] font-medium">
                          {item.event}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
