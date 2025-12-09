"use client";

import { useState } from "react";
import { Flag, Zap, Flame, X, Calendar, MapPin, Users, Target, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const southPolicy = [
  "Đấu tranh chống \"chiến tranh đặc biệt\", \"cục bộ\", \"Việt Nam hóa chiến tranh\"",
  "Kết hợp đấu tranh chính trị và quân sự",
  "Thành lập Mặt trận Dân tộc Giải phóng miền Nam (1960)",
];

const keyPhases = [
  { 
    year: "1959-1960", 
    name: "Phong trào Đồng Khởi", 
    desc: "Phong trào nổi dậy toàn miền Nam, mở đầu thời kỳ đấu tranh vũ trang",
    image: "https://image.sggp.org.vn/w1000/Uploaded/2025/ohpohuo/2020_01_06/f6b_GUSY.jpg.webp",
    color: "#4CAF50",
    details: {
      location: "Toàn miền Nam Việt Nam",
      forces: "Nhân dân miền Nam",
      significance: [
        "Đánh dấu bước ngoặt của cách mạng miền Nam",
        "Mở đầu thời kỳ đấu tranh vũ trang kết hợp với đấu tranh chính trị",
        "Phá vỡ chính quyền ngụy ở nhiều vùng nông thôn",
        "Tạo tiền đề cho việc thành lập Mặt trận Dân tộc Giải phóng miền Nam"
      ],
      result: "Phong trào đã làm sụp đổ bộ máy kìm kẹp của địch ở nhiều vùng nông thôn Nam Bộ, mở ra thời kỳ mới trong cuộc đấu tranh giải phóng miền Nam."
    }
  },
  { 
    year: "1968", 
    name: "Tổng tiến công Mậu Thân", 
    desc: "Đòn tiến công chiến lược, làm thay đổi cục diện chiến tranh",
    image: "https://file3.qdnd.vn/data/images/0/2024/11/11/upload_2059/mau%20than%201968.jpg?dpi=150&quality=100&w=870",
    color: "#FF9800",
    details: {
      location: "Toàn miền Nam, tập trung vào các đô thị lớn",
      forces: "Quân Giải phóng miền Nam",
      significance: [
        "Đánh thẳng vào sào huyệt của Mỹ-ngụy tại các thành phố",
        "Làm lung lay ý chí xâm lược của đế quốc Mỹ",
        "Buộc Mỹ phải ngồi vào bàn đàm phán tại Paris",
        "Đánh dấu sự thất bại của chiến lược 'chiến tranh cục bộ'"
      ],
      result: "Cuộc tổng tiến công đã giáng đòn quyết định vào ý chí xâm lược của Mỹ, buộc Johnson tuyên bố không tái tranh cử và mở đầu đàm phán Paris."
    }
  },
  { 
    year: "1971", 
    name: "Chiến thắng Đường 9 – Nam Lào", 
    desc: "Đánh bại cuộc hành quân Lam Sơn 719 của địch",
    image: "https://file3.qdnd.vn/data/images/0/2024/11/17/upload_2087/doi_khong_ten.jpg",
    color: "#2196F3",
    details: {
      location: "Đường 9 - Nam Lào",
      forces: "Quân đội Nhân dân Việt Nam",
      significance: [
        "Đập tan cuộc hành quân Lam Sơn 719 của Mỹ-ngụy",
        "Bảo vệ an toàn tuyến đường Trường Sơn",
        "Chứng minh sự thất bại của chiến lược 'Việt Nam hóa chiến tranh'",
        "Tiêu diệt và bắt sống hàng nghìn quân địch"
      ],
      result: "Chiến thắng đã chứng minh quân ngụy không thể tự đứng vững nếu không có sự hỗ trợ trực tiếp của quân Mỹ, đánh dấu thất bại của 'Việt Nam hóa chiến tranh'."
    }
  },
  { 
    year: "1972", 
    name: "\"Điện Biên Phủ trên không\"", 
    desc: "Đập tan cuộc tập kích B-52, buộc Mỹ ký Hiệp định Paris",
    image: "https://file3.qdnd.vn/data/images/0/2025/04/27/upload_2134/1.png?dpi=150&quality=100&w=870",
    color: "#9C27B0",
    details: {
      location: "Hà Nội, Hải Phòng và các tỉnh miền Bắc",
      forces: "Quân chủng Phòng không - Không quân",
      significance: [
        "Bắn rơi 81 máy bay Mỹ, trong đó có 34 chiếc B-52",
        "Đập tan cuộc tập kích chiến lược bằng B-52 của Mỹ",
        "Buộc Mỹ phải ký Hiệp định Paris về chấm dứt chiến tranh",
        "Tạo tiền đề quan trọng cho thắng lợi cuối cùng"
      ],
      result: "Chiến thắng 'Điện Biên Phủ trên không' đã buộc Mỹ phải ký Hiệp định Paris (27/1/1973), rút quân khỏi miền Nam Việt Nam."
    }
  },
  { 
    year: "1975", 
    name: "Chiến dịch Hồ Chí Minh", 
    desc: "Tổng tiến công mùa Xuân - Giải phóng hoàn toàn miền Nam",
    image: "https://dbndnghean.vn/dbndna-media/23/4/30/them-tieu-de-1682706046023.jpg",
    color: "#F44336",
    details: {
      location: "Sài Gòn và toàn miền Nam",
      forces: "Toàn bộ lực lượng vũ trang cách mạng",
      significance: [
        "Giải phóng hoàn toàn miền Nam, thống nhất đất nước",
        "Kết thúc 21 năm kháng chiến chống Mỹ",
        "Đánh dấu thắng lợi vĩ đại nhất của dân tộc trong thế kỷ XX",
        "Mở ra kỷ nguyên mới - cả nước đi lên CNXH"
      ],
      result: "11h30 ngày 30/4/1975, xe tăng quân giải phóng tiến vào Dinh Độc Lập, Tổng thống Dương Văn Minh tuyên bố đầu hàng vô điều kiện. Miền Nam hoàn toàn giải phóng!"
    }
  },
];

export default function SouthRevolution() {
  const [selectedPhase, setSelectedPhase] = useState<typeof keyPhases[0] | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8B1A1A] to-[#6B1414] flex items-center justify-center shadow-lg">
                <Flag className="w-7 h-7 text-white" />
              </div>
            </div>
            <span className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-wider">Giai đoạn 2</span>
            <h2 className="text-2xl md:text-4xl font-bold text-[#0F1C3F] mt-2 mb-4">
              Lãnh Đạo Cách Mạng Miền Nam
            </h2>
          </div>

          {/* Policy Card */}
          <Card className="mb-12 border-0 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#8B1A1A] to-[#6B1414] text-white">
              <CardTitle className="flex items-center gap-3">
                <Flame className="w-6 h-6 text-[#FFD700]" />
                Chủ Trương Đấu Tranh
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                {southPolicy.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-[#8B1A1A]/5 hover:bg-[#8B1A1A]/10 transition-colors">
                    <Zap className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <h3 className="text-2xl font-bold text-[#0F1C3F] mb-8 text-center">
            Các Mốc Lịch Sử Quan Trọng
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyPhases.map((phase, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedPhase(phase)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={phase.image} 
                    alt={phase.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Ảnh+lịch+sử';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div 
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-bold"
                    style={{ backgroundColor: phase.color }}
                  >
                    {phase.year}
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold flex items-center gap-2">
                      Xem chi tiết <ChevronRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h4 className="font-bold text-[#0F1C3F] mb-2 group-hover:text-[#8B1A1A] transition-colors">
                    {phase.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{phase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPhase && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedPhase(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-64">
              <img 
                src={selectedPhase.image} 
                alt={selectedPhase.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              
              {/* Close button */}
              <button 
                onClick={() => setSelectedPhase(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div 
                  className="inline-block px-3 py-1 rounded-full text-white text-sm font-bold mb-3"
                  style={{ backgroundColor: selectedPhase.color }}
                >
                  {selectedPhase.year}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedPhase.name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
              {/* Info Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                  <MapPin className="w-5 h-5 text-[#8B1A1A] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Địa điểm</p>
                    <p className="text-[#0F1C3F] font-medium">{selectedPhase.details.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                  <Users className="w-5 h-5 text-[#8B1A1A] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Lực lượng</p>
                    <p className="text-[#0F1C3F] font-medium">{selectedPhase.details.forces}</p>
                  </div>
                </div>
              </div>

              {/* Significance */}
              <div className="mb-6">
                <h4 className="flex items-center gap-2 text-lg font-bold text-[#0F1C3F] mb-4">
                  <Target className="w-5 h-5 text-[#C9A227]" />
                  Ý Nghĩa Lịch Sử
                </h4>
                <ul className="space-y-3">
                  {selectedPhase.details.significance.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-xs font-bold"
                        style={{ backgroundColor: selectedPhase.color }}
                      >
                        {idx + 1}
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0F1C3F] to-[#1a2d5a]">
                <h4 className="flex items-center gap-2 text-white font-bold mb-2">
                  <Calendar className="w-5 h-5 text-[#C9A227]" />
                  Kết Quả
                </h4>
                <p className="text-white/90 leading-relaxed">
                  {selectedPhase.details.result}
                </p>
              </div>

              {/* Close button */}
              <div className="mt-6 flex justify-center">
                <Button 
                  onClick={() => setSelectedPhase(null)}
                  className="bg-gradient-to-r from-[#C9A227] to-[#8B6914] hover:from-[#8B6914] hover:to-[#C9A227] px-8"
                >
                  Đóng
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
