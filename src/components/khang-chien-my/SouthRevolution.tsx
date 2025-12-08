"use client";

import { Flag, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const southPolicy = [
  "Đấu tranh chống \"chiến tranh đặc biệt\", \"cục bộ\", \"Việt Nam hóa chiến tranh\"",
  "Kết hợp đấu tranh chính trị và quân sự",
  "Thành lập Mặt trận Dân tộc Giải phóng miền Nam (1960)",
];

const keyPhases = [
  { 
    year: "1959-1960", 
    name: "Đồng Khởi", 
    desc: "Phong trào nổi dậy toàn miền Nam",
    image: "https://image.sggp.org.vn/w1000/Uploaded/2025/ohpohuo/2020_01_06/f6b_GUSY.jpg.webp" 
  },
  { 
    year: "1968", 
    name: "Tổng tiến công Mậu Thân", 
    desc: "Thay đổi cục diện chiến tranh",
    image: "https://file3.qdnd.vn/data/images/0/2024/11/11/upload_2059/mau%20than%201968.jpg?dpi=150&quality=100&w=870" 
  },
  { 
    year: "1971", 
    name: "Chiến thắng Đường 9 – Nam Lào", 
    desc: "Đánh bại cuộc hành quân Lam Sơn 719",
    image: "https://file3.qdnd.vn/data/images/0/2024/11/17/upload_2087/doi_khong_ten.jpg" 
  },
  { 
    year: "1972", 
    name: "\"Điện Biên Phủ trên không\"", 
    desc: "Đập tan cuộc tập kích B-52",
    image: "https://file3.qdnd.vn/data/images/0/2025/04/27/upload_2134/1.png?dpi=150&quality=100&w=870" 
  },
  { 
    year: "1975", 
    name: "Tổng tiến công mùa Xuân", 
    desc: "Giải phóng hoàn toàn miền Nam",
    image: "https://dbndnghean.vn/dbndna-media/23/4/30/them-tieu-de-1682706046023.jpg"
  },
];

export default function SouthRevolution() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
              <Flag className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]">
              2. Lãnh Đạo Cách Mạng Miền Nam
            </h2>
          </div>

          <Card className="mb-8 border-l-4 border-l-[var(--royal-burgundy)]">
            <CardHeader>
              <CardTitle className="text-lg text-[var(--royal-burgundy)]">Chủ Trương</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {southPolicy.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-[var(--antique-gold)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <h3 className="text-xl font-bold text-[var(--timeless-navy)] mb-6">Các Giai Đoạn Nổi Bật</h3>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--antique-gold)] to-[var(--royal-burgundy)]"></div>
            
            <div className="space-y-6">
              {keyPhases.map((phase, index) => (
                <div key={index} className="relative pl-16">
                  <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-[var(--antique-gold)] border-4 border-white shadow-md"></div>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="py-4">
                      {phase.image && (
                        <div className="mb-4 text-center">
                          <div className="relative aspect-video w-full overflow-hidden rounded-lg mx-auto">
                            <img 
                              src={phase.image} 
                              alt={phase.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none'; // Hide broken images
                              }}
                            />
                          </div>
                        </div>
                      )}
                      
                      <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="text-sm font-bold text-[var(--royal-burgundy)] bg-[var(--royal-burgundy)]/10 px-2 py-1 rounded">
                          {phase.year}
                        </span>
                        <h4 className="font-semibold text-[var(--timeless-navy)]">{phase.name}</h4>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] mt-1">{phase.desc}</p>
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
