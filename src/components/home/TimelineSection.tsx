"use client";

import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const timeline = [
  { 
    year: "1945", 
    event: "Cách mạng Tháng Tám thành công",
    image: "https://file3.qdnd.vn/data/images/0/2022/07/25/huyentrang_km/2.jpg"
  },
  { 
    year: "1946", 
    event: "Toàn quốc kháng chiến",
    image: "https://images.baodantoc.vn/uploads/2021/Th%C3%A1ng_12/Ng%C3%A0y_18/Nga/82F2C31D-4736-4A67-957E-BC39E1A49C10.jpg" 
  },
  { 
    year: "1954", 
    event: "Chiến thắng Điện Biên Phủ",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Victory_in_Battle_of_Dien_Bien_Phu.jpg/1200px-Victory_in_Battle_of_Dien_Bien_Phu.jpg"
  },
  { 
    year: "1960", 
    event: "Thành lập Mặt trận DTGPMN",
    image: "https://file3.qdnd.vn/data/images/0/2021/12/16/thuyanh/mtdt.jpg?dpi=150&quality=100&w=870"
  },
  { 
    year: "1968", 
    event: "Tổng tiến công Mậu Thân",
    image: "https://file3.qdnd.vn/data/images/0/2024/11/11/upload_2059/mau%20than%201968.jpg?dpi=150&quality=100&w=870"
  },
  { 
    year: "1975", 
    event: "Đại thắng mùa Xuân",
    image: "https://special.vietnamplus.vn/wp-content/uploads/2021/03/ttxvntongt-1588123540-60.jpg"
  },
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
                      <div className="flex flex-col gap-4">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                          <img 
                            src={item.image} 
                            alt={item.event}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              // Fallback if image fails
                              e.currentTarget.src = "https://placehold.co/600x400?text=" + encodeURIComponent(item.event);
                            }}
                          />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-3">
                          <span className="text-2xl font-bold text-[var(--royal-burgundy)] min-w-[80px]">
                            {item.year}
                          </span>
                          <span className="text-[var(--timeless-navy)] font-medium">
                            {item.event}
                          </span>
                        </div>
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
