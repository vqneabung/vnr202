import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function DienBienPhu() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]">
              3. Chiến Thắng Điện Biên Phủ (1954)
            </h2>
          </div>
          <Card className="border-l-4 border-l-[var(--antique-gold)]">
            <CardContent className="p-6">
              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                Chiến dịch Điện Biên Phủ (13/3 - 7/5/1954) là đòn quyết chiến chiến lược, 
                "lừng lẫy năm châu, chấn động địa cầu".
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                <strong>Kết quả:</strong> Tiêu diệt toàn bộ tập đoàn cứ điểm Điện Biên Phủ, 
                buộc Pháp ký Hiệp định Giơnevơ (1954), chấm dứt chiến tranh Đông Dương.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                <strong>Ý nghĩa:</strong> Mở ra kỷ nguyên mới cho dân tộc Việt Nam, 
                góp phần vào phong trào giải phóng dân tộc thế giới.
              </p>
            </CardContent>
            <div className="relative h-64 md:h-auto w-full overflow-hidden rounded-b-xl">
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Victory_in_Battle_of_Dien_Bien_Phu.jpg/1200px-Victory_in_Battle_of_Dien_Bien_Phu.jpg"
                 alt="Chiến thắng Điện Biên Phủ"
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
               />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
