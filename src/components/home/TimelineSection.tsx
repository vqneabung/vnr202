"use client";

import { useState } from "react";
import { Clock, X, Calendar, MapPin, Users, BookOpen, ChevronRight } from "lucide-react";

// Interface cho timeline item
interface TimelineItem {
  year: string;
  event: string;
  image: string;
  date?: string;
  location?: string;
  leaders?: string[];
  description: string;
  significance: string[];
  casualties?: string;
}

const timeline: TimelineItem[] = [
  { 
    year: "1945–1946", 
    event: "Xây dựng & bảo vệ chính quyền cách mạng",
    image: "https://file3.qdnd.vn/data/images/0/2022/07/25/huyentrang_km/2.jpg",
    date: "19/08/1945 - 19/12/1946",
    location: "Toàn quốc",
    leaders: ["Hồ Chí Minh", "Võ Nguyên Giáp", "Trường Chinh"],
    description: "Giai đoạn từ Cách mạng Tháng Tám thành công đến khi phát động toàn quốc kháng chiến. Đảng và Chủ tịch Hồ Chí Minh lãnh đạo nhân dân giành chính quyền, xây dựng và bảo vệ chính quyền cách mạng non trẻ trong bối cảnh đối mặt với nhiều thách thức từ cả bên trong và bên ngoài.",
    significance: [
      "Chấm dứt chế độ quân chủ phong kiến tồn tại hàng nghìn năm",
      "Khai sinh nước Việt Nam Dân chủ Cộng hòa",
      "Khắc phục nạn đói, nạn dốt, nạn giặc",
      "Chuẩn bị lực lượng và tinh thần cho kháng chiến trường kỳ"
    ]
  },
  { 
    year: "1946–1950", 
    event: "Đường lối kháng chiến toàn quốc",
    image: "https://images.baodantoc.vn/uploads/2021/Th%C3%A1ng_12/Ng%C3%A0y_18/Nga/82F2C31D-4736-4A67-957E-BC39E1A49C10.jpg",
    date: "19/12/1946 - 1950",
    location: "Toàn quốc",
    leaders: ["Hồ Chí Minh", "Võ Nguyên Giáp"],
    description: "Giai đoạn đầu cuộc kháng chiến chống thực dân Pháp. Từ Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh, nhân dân cả nước đứng lên chiến đấu theo đường lối kháng chiến trường kỳ, toàn dân, toàn diện.",
    significance: [
      "Khẳng định ý chí quyết tâm bảo vệ độc lập",
      "Xây dựng lực lượng vũ trang và căn cứ địa kháng chiến",
      "Thực hiện chiến tranh du kích, tiêu hao sinh lực địch",
      "Thể hiện tinh thần \"Thà hy sinh tất cả chứ nhất định không chịu mất nước\""
    ]
  },
  { 
    year: "1951–1954", 
    event: "Đẩy mạnh kháng chiến, thắng lợi chống Pháp",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Victory_in_Battle_of_Dien_Bien_Phu.jpg/1200px-Victory_in_Battle_of_Dien_Bien_Phu.jpg",
    date: "1951 - 07/05/1954",
    location: "Toàn quốc, đỉnh cao tại Điện Biên Phủ",
    leaders: ["Hồ Chí Minh", "Võ Nguyên Giáp", "Hoàng Văn Thái"],
    description: "Giai đoạn đẩy mạnh kháng chiến từ chiến tranh du kích lên chiến tranh chính quy, đỉnh cao là chiến thắng Điện Biên Phủ. Sau 56 ngày đêm chiến đấu, quân ta đã giành thắng lợi hoàn toàn, buộc Pháp ký Hiệp định Genève, kết thúc ách thống trị thực dân.",
    significance: [
      "Chuyển từ phòng ngự sang tổng phản công chiến lược",
      "Chiến thắng Điện Biên Phủ \"lừng lẫy năm châu, chấn động địa cầu\"",
      "Buộc Pháp ký Hiệp định Genève, công nhận độc lập của Việt Nam",
      "Cổ vũ phong trào giải phóng dân tộc trên thế giới"
    ],
    casualties: "Tiêu diệt và bắt sống 16.200 địch tại Điện Biên Phủ"
  },
  { 
    year: "1954–1965", 
    event: "Lãnh đạo cách mạng hai miền",
    image: "https://file3.qdnd.vn/data/images/0/2021/12/16/thuyanh/mtdt.jpg?dpi=150&quality=100&w=870",
    date: "1954 - 1965",
    location: "Miền Bắc và miền Nam",
    leaders: ["Hồ Chí Minh", "Lê Duẩn", "Nguyễn Hữu Thọ"],
    description: "Giai đoạn miền Bắc xây dựng chủ nghĩa xã hội, miền Nam đấu tranh giải phóng. Thành lập Mặt trận Dân tộc Giải phóng miền Nam (1960), tập hợp lực lượng yêu nước chống Mỹ - Diệm, đấu tranh chính trị và vũ trang kết hợp.",
    significance: [
      "Miền Bắc hoàn thành cải cách ruộng đất, khôi phục kinh tế",
      "Thành lập Mặt trận Dân tộc Giải phóng miền Nam",
      "Phát động phong trào đồng khởi, giải phóng nhiều vùng nông thôn",
      "Chuẩn bị lực lượng cho cuộc kháng chiến chống Mỹ"
    ]
  },
  { 
    year: "1965–1975", 
    event: "Lãnh đạo kháng chiến chống Mỹ & giải phóng miền Nam",
    image: "https://special.vietnamplus.vn/wp-content/uploads/2021/03/ttxvntongt-1588123540-60.jpg",
    date: "1965 - 30/04/1975",
    location: "Toàn quốc",
    leaders: ["Hồ Chí Minh", "Lê Duẩn", "Võ Nguyên Giáp", "Văn Tiến Dũng"],
    description: "Giai đoạn kháng chiến chống Mỹ cứu nước, từ khi Mỹ đưa quân trực tiếp vào miền Nam đến Đại thắng mùa Xuân 1975. Đỉnh cao là Tổng tiến công Mậu Thân 1968 và Chiến dịch Hồ Chí Minh, giải phóng hoàn toàn miền Nam, thống nhất đất nước.",
    significance: [
      "Đánh thắng chiến lược \"chiến tranh cục bộ\" và \"Việt Nam hóa chiến tranh\" của Mỹ",
      "Tổng tiến công Mậu Thân tạo bước ngoặt chiến lược",
      "Giải phóng Sài Gòn ngày 30/4/1975, thống nhất đất nước",
      "Kết thúc 30 năm chiến tranh, mở ra kỷ nguyên độc lập, thống nhất"
    ]
  },
];

export default function TimelineSection() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineItem | null>(null);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#F5EDE0] to-[#E8DCC8]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-[#C9A227]/20">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A227] to-[#8B1A1A] flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-[#8B1A1A] uppercase tracking-wider">
                1945 — 1975
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C3F] mb-4">
              Dòng <span className="text-[#8B1A1A]">Thời Gian</span> Lịch Sử
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Những mốc son chói lọi của dân tộc Việt Nam trong hai cuộc kháng chiến vĩ đại
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A227] via-[#8B1A1A] to-[#0F1C3F] rounded-full transform -translate-x-1/2" />
            
            {/* Mobile line */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C9A227] via-[#8B1A1A] to-[#0F1C3F]" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year badge - center on desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A227] to-[#8B1A1A] flex items-center justify-center shadow-xl border-4 border-white">
                      <span className="text-white font-bold text-lg">{item.year}</span>
                    </div>
                  </div>

                  {/* Mobile year badge */}
                  <div className="md:hidden absolute left-4 top-0 w-5 h-5 rounded-full bg-[#C9A227] border-4 border-white shadow-lg z-10" />
                  
                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-14 md:pl-0`}>
                    <div 
                      className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white rounded-2xl"
                      onClick={() => setSelectedEvent(item)}
                    >
                      <div className="p-0">
                        {/* Image */}
                        <div className="relative aspect-video overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.event}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={(e) => {
                              e.currentTarget.src = "https://placehold.co/600x400?text=" + encodeURIComponent(item.event);
                            }}
                          />
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          
                          {/* Year on mobile */}
                          <div className="md:hidden absolute top-4 left-4 px-3 py-1 bg-[#C9A227] rounded-full">
                            <span className="text-white font-bold text-sm">{item.year}</span>
                          </div>
                          
                          {/* Content overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#C9A227] transition-colors">
                              {item.event}
                            </h3>
                            <div className="flex items-center gap-4 text-white/80 text-sm">
                              {item.date && (
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {item.date}
                                </span>
                              )}
                              {item.location && (
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {item.location}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Click indicator */}
                          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <ChevronRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.event}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Close button */}
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block px-4 py-2 bg-[#C9A227] rounded-full mb-3">
                  <span className="text-white font-bold">{selectedEvent.year}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {selectedEvent.event}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                  {selectedEvent.date && (
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {selectedEvent.date}
                    </span>
                  )}
                  {selectedEvent.location && (
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {selectedEvent.location}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-20rem)]">
              {/* Leaders */}
              {selectedEvent.leaders && selectedEvent.leaders.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-[#8B1A1A]" />
                    <h4 className="font-semibold text-[#0F1C3F]">Lãnh đạo tiêu biểu</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.leaders.map((leader, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-[#F5EDE0] text-[#0F1C3F] rounded-full text-sm font-medium"
                      >
                        {leader}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-[#8B1A1A]" />
                  <h4 className="font-semibold text-[#0F1C3F]">Diễn biến</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              {/* Significance */}
              <div className="mb-6">
                <h4 className="font-semibold text-[#0F1C3F] mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#C9A227] flex items-center justify-center text-white text-xs">★</span>
                  Ý nghĩa lịch sử
                </h4>
                <ul className="space-y-2">
                  {selectedEvent.significance.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[#8B1A1A] rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Casualties if available */}
              {selectedEvent.casualties && (
                <div className="p-4 bg-[#F5EDE0] rounded-xl">
                  <p className="text-sm text-[#0F1C3F]">
                    <strong>Kết quả:</strong> {selectedEvent.casualties}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
