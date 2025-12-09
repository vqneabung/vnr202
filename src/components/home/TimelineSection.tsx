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
    year: "1945", 
    event: "Cách mạng Tháng Tám thành công",
    image: "https://file3.qdnd.vn/data/images/0/2022/07/25/huyentrang_km/2.jpg",
    date: "19/08/1945",
    location: "Toàn quốc",
    leaders: ["Hồ Chí Minh", "Võ Nguyên Giáp", "Trường Chinh"],
    description: "Cách mạng Tháng Tám là cuộc cách mạng giành chính quyền do Đảng Cộng sản Việt Nam lãnh đạo, đập tan ách thống trị của phát xít Nhật và thực dân Pháp, lập nên nước Việt Nam Dân chủ Cộng hòa - Nhà nước công nông đầu tiên ở Đông Nam Á.",
    significance: [
      "Chấm dứt chế độ quân chủ phong kiến tồn tại hàng nghìn năm",
      "Khai sinh nước Việt Nam Dân chủ Cộng hòa",
      "Mở ra kỷ nguyên mới - kỷ nguyên độc lập, tự do",
      "Cổ vũ phong trào giải phóng dân tộc trên thế giới"
    ]
  },
  { 
    year: "1946", 
    event: "Toàn quốc kháng chiến",
    image: "https://images.baodantoc.vn/uploads/2021/Th%C3%A1ng_12/Ng%C3%A0y_18/Nga/82F2C31D-4736-4A67-957E-BC39E1A49C10.jpg",
    date: "19/12/1946",
    location: "Hà Nội và các tỉnh thành",
    leaders: ["Hồ Chí Minh"],
    description: "Đêm 19/12/1946, Chủ tịch Hồ Chí Minh ra Lời kêu gọi Toàn quốc kháng chiến, mở đầu cuộc kháng chiến chống thực dân Pháp xâm lược. Đây là quyết định lịch sử của toàn dân tộc.",
    significance: [
      "Khẳng định ý chí quyết tâm bảo vệ độc lập",
      "Mở đầu 9 năm kháng chiến trường kỳ",
      "Động viên toàn dân đứng lên chiến đấu",
      "Thể hiện tinh thần \"Thà hy sinh tất cả chứ nhất định không chịu mất nước\""
    ]
  },
  { 
    year: "1954", 
    event: "Chiến thắng Điện Biên Phủ",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Victory_in_Battle_of_Dien_Bien_Phu.jpg/1200px-Victory_in_Battle_of_Dien_Bien_Phu.jpg",
    date: "07/05/1954",
    location: "Điện Biên Phủ, Tây Bắc Việt Nam",
    leaders: ["Võ Nguyên Giáp"],
    description: "Chiến thắng Điện Biên Phủ là trận đánh quyết định kết thúc cuộc kháng chiến chống Pháp. Sau 56 ngày đêm chiến đấu anh dũng, quân ta đã tiêu diệt hoàn toàn tập đoàn cứ điểm Điện Biên Phủ.",
    significance: [
      "Đánh bại hoàn toàn kế hoạch Navarre",
      "Buộc Pháp ký Hiệp định Genève",
      "Chấm dứt ách thống trị của thực dân Pháp",
      "Chiến thắng \"lừng lẫy năm châu, chấn động địa cầu\""
    ],
    casualties: "Tiêu diệt và bắt sống 16.200 địch"
  },
  { 
    year: "1960", 
    event: "Thành lập Mặt trận DTGPMN",
    image: "https://file3.qdnd.vn/data/images/0/2021/12/16/thuyanh/mtdt.jpg?dpi=150&quality=100&w=870",
    date: "20/12/1960",
    location: "Tây Ninh, miền Nam Việt Nam",
    leaders: ["Nguyễn Hữu Thọ", "Huỳnh Tấn Phát"],
    description: "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập, đánh dấu bước phát triển mới của cách mạng miền Nam, tập hợp rộng rãi các lực lượng yêu nước chống Mỹ-Diệm.",
    significance: [
      "Tập hợp sức mạnh đại đoàn kết dân tộc",
      "Lãnh đạo phong trào đấu tranh ở miền Nam",
      "Được quốc tế công nhận",
      "Tiền thân của Chính phủ Cách mạng Lâm thời"
    ]
  },
  { 
    year: "1968", 
    event: "Tổng tiến công Mậu Thân",
    image: "https://file3.qdnd.vn/data/images/0/2024/11/11/upload_2059/mau%20than%201968.jpg?dpi=150&quality=100&w=870",
    date: "30/01/1968 - 23/09/1968",
    location: "Toàn miền Nam",
    leaders: ["Lê Duẩn", "Võ Nguyên Giáp"],
    description: "Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân 1968 là chiến dịch quân sự lớn nhất trong chiến tranh Việt Nam, tấn công đồng loạt vào các thành phố, thị xã trên toàn miền Nam.",
    significance: [
      "Đánh bại ý chí xâm lược của Mỹ",
      "Buộc Mỹ xuống thang chiến tranh",
      "Bắt đầu đàm phán Paris",
      "Bước ngoặt chiến lược của cuộc kháng chiến"
    ]
  },
  { 
    year: "1975", 
    event: "Đại thắng mùa Xuân",
    image: "https://special.vietnamplus.vn/wp-content/uploads/2021/03/ttxvntongt-1588123540-60.jpg",
    date: "30/04/1975",
    location: "Sài Gòn",
    leaders: ["Lê Duẩn", "Võ Nguyên Giáp", "Văn Tiến Dũng"],
    description: "Chiến dịch Hồ Chí Minh lịch sử kết thúc thắng lợi với việc giải phóng Sài Gòn, thống nhất đất nước sau 30 năm chiến tranh. Xe tăng quân giải phóng húc đổ cổng Dinh Độc Lập lúc 11h30 ngày 30/4/1975.",
    significance: [
      "Kết thúc 30 năm chiến tranh giải phóng",
      "Thống nhất đất nước",
      "Hoàn thành cách mạng dân tộc dân chủ nhân dân",
      "Mở ra kỷ nguyên độc lập, thống nhất, đi lên chủ nghĩa xã hội"
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
