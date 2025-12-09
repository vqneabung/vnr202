import { Trophy, Calendar, Target, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const battleStats = [
  { icon: Calendar, value: "56", label: "Ngày đêm chiến đấu" },
  { icon: Target, value: "16.200", label: "Quân địch bị tiêu diệt" },
  { icon: Star, value: "7/5", label: "Ngày chiến thắng" },
];

export default function DienBienPhu() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1 mb-16">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A227]/20 to-[#8B1A1A]/20 rounded-3xl blur-2xl"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Victory_in_Battle_of_Dien_Bien_Phu.jpg/1200px-Victory_in_Battle_of_Dien_Bien_Phu.jpg"
                  alt="Chiến thắng Điện Biên Phủ"
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Caption - giữ nguyên vị trí */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-medium">Lá cờ "Quyết chiến quyết thắng" tung bay trên nóc hầm Đờ Cát</p>
                  <p className="text-white/70 text-sm">7/5/1954 - Điện Biên Phủ</p>
                </div>
              </div>

              {/* Battle Stats - đẩy xuống dưới ảnh */}
              <div className="flex gap-2 md:gap-4 justify-center mt-6">
                {battleStats.map((stat, idx) => (
                  <div key={idx} className="bg-white shadow-xl rounded-xl px-3 md:px-4 py-2 md:py-3 text-center flex-1 max-w-[120px]">
                    <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-[#C9A227] mx-auto mb-1" />
                    <p className="text-base md:text-xl font-bold text-[#0F1C3F]">{stat.value}</p>
                    <p className="text-[10px] md:text-xs text-gray-500 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center shadow-lg">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-wider">Giai đoạn 3</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F1C3F]">
                    Chiến Thắng Điện Biên Phủ (1954)
                  </h2>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-[#C9A227] bg-gradient-to-r from-[#C9A227]/5 to-transparent">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-[#0F1C3F] mb-2">Chiến dịch quyết định</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Chiến dịch Điện Biên Phủ (13/3 - 7/5/1954) là đòn quyết chiến chiến lược, 
                      <span className="text-[#8B1A1A] font-semibold"> "lừng lẫy năm châu, chấn động địa cầu"</span>.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#0F1C3F] bg-gradient-to-r from-[#0F1C3F]/5 to-transparent">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-[#0F1C3F] mb-2">Kết quả</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Tiêu diệt toàn bộ tập đoàn cứ điểm Điện Biên Phủ, 
                      buộc Pháp ký Hiệp định Giơnevơ (1954), chấm dứt chiến tranh Đông Dương.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#8B1A1A] bg-gradient-to-r from-[#8B1A1A]/5 to-transparent">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-[#0F1C3F] mb-2">Ý nghĩa lịch sử</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Mở ra kỷ nguyên mới cho dân tộc Việt Nam, 
                      góp phần vào phong trào giải phóng dân tộc thế giới.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
