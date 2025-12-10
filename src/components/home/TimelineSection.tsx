"use client";

import { useState, useRef } from "react";
import { Clock, X, Calendar, MapPin, Users, BookOpen, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Inter, Playfair_Display, Merriweather } from 'next/font/google';

// 1. Cấu hình Font (Giống component trước để đồng bộ)
const inter = Inter({ 
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

// Đăng ký GSAP
gsap.registerPlugin(ScrollTrigger, useGSAP);

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
    event: "Xây dựng & bảo vệ chính quyền cách mạng", // Tiêu đề giật gân hơn
    image: "https://file3.qdnd.vn/data/images/0/2022/07/25/huyentrang_km/2.jpg",
    date: "19/08/1945 - 19/12/1946",
    location: "Bắc Bộ và Nam Bộ",
    leaders: ["Hồ Chí Minh", "Võ Nguyên Giáp", "Trường Chinh"],
    description: "Sau niềm vui Độc lập chưa được bao lâu, chính quyền cách mạng non trẻ phải đối mặt với tình thế nguy nan chưa từng có: 'Giặc đói, giặc dốt và giặc ngoại xâm'. Trong vòng vây của thù trong giặc ngoài, Chủ tịch Hồ Chí Minh đã chèo lái con thuyền dân tộc bằng những sách lược ngoại giao mềm dẻo nhưng kiên quyết.",
    significance: [
      "Khai sinh nước Việt Nam Dân chủ Cộng hòa, chấm dứt đêm trường nô lệ.",
      "Diệt 'giặc đói', xóa 'giặc dốt', tổ chức Tổng tuyển cử đầu tiên.",
      "Tranh thủ thời gian hòa hoãn để chuẩn bị lực lượng cho cuộc chiến không thể tránh khỏi."
    ]
  },
  { 
    year: "1946–1950", 
    event: "Đường lối kháng chiến toàn quốc",
    image: "https://images.baodantoc.vn/uploads/2021/Th%C3%A1ng_12/Ng%C3%A0y_18/Nga/82F2C31D-4736-4A67-957E-BC39E1A49C10.jpg",
    date: "19/12/1946 - 1950",
    location: "Hà Nội - Chiến khu Việt Bắc",
    leaders: ["Hồ Chí Minh", "Võ Nguyên Giáp", "Phạm Văn Đồng"],
    description: "Đêm 19/12/1946, pháo đài Láng nổ súng, báo hiệu toàn quốc kháng chiến. Hưởng ứng lời kêu gọi thiêng liêng của Bác, hàng vạn người con Hà Nội 'Quyết tử để Tổ quốc quyết sinh', cầm chân địch để Trung ương rút về căn cứ địa Việt Bắc an toàn, bắt đầu cuộc trường chinh 'Chín năm làm một Điện Biên'.",
    significance: [
      "Lời thề quyết tử vang vọng non sông, khơi dậy lòng yêu nước tột độ.",
      "Thực hiện chiến lược 'vườn không nhà trống', tiêu hao sinh lực địch.",
      "Chiến thắng Việt Bắc - Thu Đông 1947 đập tan âm mưu 'đánh nhanh thắng nhanh' của Pháp."
    ]
  },
  { 
    year: "1951–1954", 
    event: "Đẩy mạnh kháng chiến, thắng lợi chống Pháp ",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Victory_in_Battle_of_Dien_Bien_Phu.jpg/1200px-Victory_in_Battle_of_Dien_Bien_Phu.jpg",
    date: "1951 - 07/05/1954",
    location: "Điện Biên Phủ",
    leaders: ["Hồ Chí Minh", "Võ Nguyên Giáp", "Hoàng Văn Thái"],
    description: "56 ngày đêm khoét núi, ngủ hầm, mưa dầm, cơm vắt. Máu trộn bùn non. Bộ đội ta đã làm nên điều không tưởng: Kéo pháo vào rồi lại kéo pháo ra, chuyển từ 'đánh nhanh' sang 'đánh chắc, tiến chắc'. Chiều 7/5/1954, lá cờ 'Quyết chiến Quyết thắng' tung bay trên nóc hầm De Castries, báo hiệu sự sụp đổ của chủ nghĩa thực dân cũ.",
    significance: [
      "Đòn quyết định buộc Pháp phải ký Hiệp định Genève.",
      "Chứng minh chân lý: Một dân tộc nhỏ bé nhưng đoàn kết có thể đánh bại đế quốc to lớn.",
      "Nguồn cảm hứng bất tận cho phong trào giải phóng dân tộc trên toàn thế giới."
    ],
    casualties: "Tiêu diệt và bắt sống 16.200 tên địch, bắn rơi 62 máy bay."
  },
  { 
    year: "1954–1965", 
    event: "Lãnh đạo cách mạng hai miền ",
    image: "https://file3.qdnd.vn/data/images/0/2021/12/16/thuyanh/mtdt.jpg?dpi=150&quality=100&w=870",
    date: "1954 - 1965",
    location: "Miền Bắc (Hậu phương) - Miền Nam (Tiền tuyến)",
    leaders: ["Lê Duẩn", "Nguyễn Thị Định", "Nguyễn Hữu Thọ"],
    description: "Hiệp định Genève bị phá hoại, sông Bến Hải trở thành vết sẹo chia cắt đất nước. Dưới luật 10/59 đẫm máu, máy chém lê khắp miền Nam. Nhưng 'tức nước vỡ bờ', từ Bến Tre, ngọn lửa Đồng Khởi bùng lên dữ dội, chuyển cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công mạnh mẽ.",
    significance: [
      "Miền Bắc trở thành hậu phương lớn xã hội chủ nghĩa.",
      "Phong trào Đồng Khởi (1960) làm phá sản chiến lược chiến tranh đơn phương của Mỹ.",
      "Thành lập Mặt trận Dân tộc Giải phóng miền Nam Việt Nam."
    ]
  },
  { 
    year: "1965–1975", 
    event: "Lãnh đạo kháng chiến chống Mỹ & giải phóng miền Nam ",
    image: "https://special.vietnamplus.vn/wp-content/uploads/2021/03/ttxvntongt-1588123540-60.jpg",
    date: "1965 - 30/04/1975",
    location: "Dọc tuyến đường Trường Sơn & Sài Gòn",
    leaders: ["Lê Duẩn", "Võ Nguyên Giáp", "Văn Tiến Dũng", "Phạm Hùng"],
    description: "Giai đoạn khốc liệt nhất khi Mỹ trực tiếp đổ quân vào Việt Nam. Nhưng bom đạn không ngăn được dòng người 'xẻ dọc Trường Sơn đi cứu nước'. Từ Mậu Thân 1968 làm lung lay ý chí Nhà Trắng, đến 'Điện Biên Phủ trên không' 1972 buộc Mỹ ký Hiệp định Paris. Và cuối cùng, 11h30 ngày 30/4/1975, xe tăng húc đổ cổng Dinh Độc Lập, non sông thu về một mối.",
    significance: [
      "Đánh bại cường quốc quân sự hùng mạnh nhất thế giới.",
      "Kết thúc 21 năm chia cắt, 30 năm chiến tranh giải phóng.",
      "Mở ra kỷ nguyên Độc lập, Tự do và đi lên Chủ nghĩa Xã hội."
    ],
    casualties: "Hơn 3 triệu người Việt Nam đã ngã xuống vì độc lập tự do."
  },
];

export default function TimelineSection() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineItem | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // 1. Header Animation
    gsap.from(".timeline-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // 2. Line Drawing Animation
    // Hiệu ứng vẽ đường line từ trên xuống dưới đồng bộ với scroll
    if (lineRef.current) {
        gsap.fromTo(lineRef.current, 
            { scaleY: 0, transformOrigin: "top center" }, 
            { 
                scaleY: 1, 
                ease: "none",
                scrollTrigger: {
                    trigger: ".timeline-wrapper",
                    start: "top 60%", // Bắt đầu vẽ khi top của timeline chạm 60% màn hình
                    end: "bottom 60%", 
                    scrub: 1, // Mượt mà theo scroll
                }
            }
        );
    }

    // 3. Items Animation (Staggered Reveal)
    itemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        const isLeft = index % 2 === 0; // Xác định hướng bay vào
        
        gsap.fromTo(item,
            { 
                opacity: 0, 
                x: isLeft ? -100 : 100, // Bay từ trái hoặc phải vào
                y: 50 
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%", // Kích hoạt khi item chạm vào 85% chiều cao màn hình
                    toggleActions: "play none none reverse" // Lùi lại thì ẩn đi
                }
            }
        );
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={`py-20 md:py-28 bg-[#F5EDE0] relative overflow-hidden ${inter.className}`}>
      
      {/* Texture Grain Background (Nhẹ hơn bản Dark mode) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.4] mix-blend-multiply"
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`}}
      />
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A227]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B1A1A]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 timeline-header">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-[#C9A227]/30">
              <div className="w-8 h-8 rounded-full bg-[#8B1A1A] flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-[#8B1A1A] tracking-widest uppercase">
                1945 — 1975
              </span>
            </div>
            <h2 className={`text-4xl md:text-6xl font-black text-[#0F1C3F] mb-6 ${playfair.className}`}>
              Dòng <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1A1A] to-[#C9A227]">Thời Gian</span> Lịch Sử
            </h2>
            <p className={`text-[#0F1C3F]/70 max-w-2xl mx-auto text-lg md:text-xl italic ${merriweather.className}`}>
              "Những mốc son chói lọi của dân tộc Việt Nam trong hai cuộc kháng chiến vĩ đại."
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative timeline-wrapper">
            {/* Timeline Center Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#C9A227]/20 transform -translate-x-1/2">
                 {/* Animated Progress Line */}
                <div ref={lineRef} className="w-full h-full bg-gradient-to-b from-[#8B1A1A] via-[#C9A227] to-[#0F1C3F]" />
            </div>
            
            {/* Mobile line */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8B1A1A] via-[#C9A227] to-[#0F1C3F]" />
            
            <div className="space-y-16 md:space-y-24">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  ref={el => { itemsRef.current[index] = el }} // Attach ref for GSAP
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year badge - center on desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-24 h-24 rounded-full bg-[#F5EDE0] border-4 border-[#C9A227] items-center justify-center shadow-[0_0_20px_rgba(201,162,39,0.3)]">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8B1A1A] to-[#6d1313] flex items-center justify-center px-1">
                      {/* --- SỬA Ở ĐÂY --- */}
                      {/* 1. Bỏ .split('–')[0] để hiện full chuỗi */}
                      {/* 2. Giảm size chữ xuống text-sm hoặc text-base để vừa vặn */}
                      <span className={`text-[#C9A227] font-bold text-sm md:text-base text-center leading-tight ${playfair.className}`}>
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Mobile year badge */}
                  <div className="md:hidden absolute left-4 top-0 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-white shadow-lg z-10 transform -translate-x-[5px]" />
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:pr-0' : 'md:pl-0'} pl-12 md:pl-0`}>
                    <div 
                      className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(139,26,26,0.2)] transition-all duration-500 transform hover:-translate-y-2 border border-[#C9A227]/10"
                      onClick={() => setSelectedEvent(item)}
                    >
                      {/* Image Area */}
                      <div className="relative h-48 md:h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                        <img 
                          src={item.image} 
                          alt={item.event}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale-[30%] group-hover:grayscale-0"
                        />
                        {/* Date Badge Overlay */}
                        <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-[#8B1A1A] uppercase tracking-wider shadow-sm">
                            {item.year}
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 md:p-8 relative">
                         {/* Decorative Quote Icon */}
                         <BookOpen className="absolute top-6 right-6 w-8 h-8 text-[#C9A227]/10 group-hover:text-[#C9A227]/30 transition-colors" />

                        <h3 className={`text-2xl md:text-3xl font-bold text-[#0F1C3F] mb-3 group-hover:text-[#8B1A1A] transition-colors leading-tight ${playfair.className}`}>
                          {item.event}
                        </h3>
                        
                        <p className={`text-gray-600 line-clamp-3 mb-4 leading-relaxed ${merriweather.className}`}>
                            {item.description}
                        </p>

                        <div className="flex items-center text-[#8B1A1A] font-medium text-sm gap-2 group/btn">
                           Xem chi tiết <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
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

{/* Modal - Compact & Cinematic */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050A15]/90 backdrop-blur-md"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            // 1. Thay đổi max-w-5xl -> max-w-4xl (hoặc 3xl) để nhỏ lại
            // 2. max-h-[85vh] để không quá cao
            className="bg-[#FDFBF7] rounded-none md:rounded-sm max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-500 relative border border-[#C9A227]/30 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 1. IMAGE SIDE - Giảm tỷ lệ xuống còn 40% (w-2/5) */}
            <div className="w-full md:w-2/5 h-48 md:h-auto relative group overflow-hidden bg-black shrink-0">
                <img 
                    src={selectedEvent.image} 
                    alt={selectedEvent.event}
                    className="w-full h-full object-cover transition-all duration-1000 ease-out 
                               scale-100 group-hover:scale-110 
                               sepia-[0.4] group-hover:sepia-0 
                               brightness-90 group-hover:brightness-100"
                />

                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-10" />
                
                <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay z-20"
                     style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`}}
                />

                <button 
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-3 right-3 md:hidden z-50 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 active:scale-95 transition-transform"
                >
                    <X className="w-4 h-4" />
                </button>

                 <div className="absolute bottom-4 left-4 z-30">
                    <span className={`inline-block px-3 py-1 bg-[#C9A227] text-[#0F1C3F] font-bold text-xs tracking-widest uppercase shadow-lg ${playfair.className}`}>
                        {selectedEvent.year}
                    </span>
                </div>
            </div>

            {/* 2. CONTENT SIDE - Tăng tỷ lệ lên 60% (w-3/5) */}
            <div className="w-full md:w-3/5 flex flex-col h-full bg-[#FDFBF7] relative">
                 <div className="absolute top-4 right-4 z-10 hidden md:block">
                    <button 
                        onClick={() => setSelectedEvent(null)}
                        className="w-8 h-8 hover:bg-[#0F1C3F]/5 rounded-full flex items-center justify-center transition-colors group/close"
                    >
                        <X className="w-5 h-5 text-[#0F1C3F]/40 group-hover/close:text-[#8B1A1A] transition-colors" />
                    </button>
                 </div>

                 {/* Giảm padding để tiết kiệm diện tích */}
                 <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                     <h3 className={`text-2xl md:text-3xl font-black text-[#0F1C3F] mb-4 leading-tight mt-2 ${playfair.className}`}>
                        {selectedEvent.event}
                     </h3>

                     <div className="flex flex-wrap gap-3 text-xs text-[#0F1C3F]/60 mb-6 font-medium border-b border-[#C9A227]/20 pb-4">
                        {selectedEvent.date && (
                            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#8B1A1A]" /> {selectedEvent.date}</span>
                        )}
                        {selectedEvent.location && (
                            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#8B1A1A]" /> {selectedEvent.location}</span>
                        )}
                     </div>

                     <div className="space-y-6">
                        {/* Diễn biến */}
                        <div>
                             <h4 className="text-[10px] font-bold uppercase text-[#8B1A1A] tracking-[0.2em] mb-2 flex items-center gap-2 opacity-80">
                                Diễn biến
                            </h4>
                            <p className={`text-[#0F1C3F]/80 text-base leading-relaxed text-justify ${merriweather.className}`}>
                                {selectedEvent.description}
                            </p>
                        </div>

                        {/* Lãnh đạo */}
                        {selectedEvent.leaders && (
                             <div>
                                <h4 className="text-[10px] font-bold uppercase text-[#8B1A1A] tracking-[0.2em] mb-2 flex items-center gap-2 opacity-80">
                                    <Users className="w-3.5 h-3.5" /> Lãnh đạo
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedEvent.leaders.map((l, i) => (
                                        <div key={i} className="flex items-center gap-2 px-3 py-1 bg-[#F5EDE0] text-[#0F1C3F] rounded-sm border-l-2 border-[#C9A227] text-xs font-semibold shadow-sm">
                                            {l}
                                        </div>
                                    ))}
                                </div>
                             </div>
                        )}

                        {/* Ý nghĩa */}
                        <div className="bg-[#0F1C3F]/5 p-4 rounded-lg border border-[#0F1C3F]/5">
                            <h4 className="text-[10px] font-bold uppercase text-[#8B1A1A] tracking-[0.2em] mb-3 flex items-center gap-2 opacity-80">
                                <BookOpen className="w-3.5 h-3.5" /> Ý nghĩa lịch sử
                            </h4>
                            <ul className="space-y-2">
                                {selectedEvent.significance.map((s, i) => (
                                    <li key={i} className="flex gap-3 text-[#0F1C3F]/80">
                                        <span className="text-[#C9A227] text-lg leading-none mt-0.5">❖</span>
                                        <span className={`text-sm leading-relaxed ${merriweather.className}`}>{s}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                     </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}