"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// 1. Import Font từ Google (Hỗ trợ tiếng Việt đầy đủ)
import { Inter, Playfair_Display, Merriweather, Dancing_Script } from 'next/font/google';

// Cấu hình font
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

const dancing = Dancing_Script({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

// Đăng ký plugin GSAP
gsap.registerPlugin(ScrollTrigger, useGSAP);

const storyEntries = [
  {
    date: "Ngày 15 tháng 3, 1969",
    title: "Lên đường",
    content: "Hôm nay, đoàn chúng tôi rời Hà Nội. Mẹ khóc, em gái chạy theo xe một đoạn rồi dừng lại vẫy tay. Tôi không dám quay đầu nhìn lại — sợ mình sẽ khóc trước mặt đồng đội. Con đường phía trước dài lắm, nhưng trong tim tôi chỉ có một suy nghĩ: đất nước cần, là đi.",
    image: "https://baoquangbinh.vn/dataimages/201412/original/images575987_71473_tt.jpg",
  },
  {
    date: "Ngày 28 tháng 4, 1969",
    title: "Những đêm Trường Sơn",
    content: "Đêm nay trăng sáng quá, sáng đến mức phải giấu mình dưới tán rừng mà đi. Muỗi nhiều như trấu, vắt bám đầy chân. Anh Hùng bảo: \"Cứ đi đi, miền Nam đang chờ mình.\" Câu nói đơn giản ấy, không hiểu sao lại khiến tôi thấy ấm lòng giữa đêm lạnh thế này.",
    image: "https://files.bienphong.com.vn//bbpmedia/media/730/2022/10/24/image001_2.jpg",
  },
  {
    date: "Ngày 12 tháng 7, 1969",
    title: "Cơn sốt rét đầu tiên",
    content: "Sốt rét quật ngã tôi ba ngày liền. Nằm võng giữa rừng, người run như cầy sấy, mồ hôi ướt đẫm áo. Chị Lan y tá đút cho tôi từng thìa cháo loãng. Chị bảo: \"Cố lên em, còn phải về gặp mẹ chứ.\" Tôi gật đầu, nuốt nước mắt cùng thìa cháo.",
    image: "https://file3.qdnd.vn/data/images/13/2019/06/11/tvthuonghuyen/8.jpg",
  },
  {
    date: "Ngày 3 tháng 11, 1970",
    title: "Trận bom đầu tiên",
    content: "B-52 rải thảm lúc chạng vạng. Đất rung, tai ù đặc. Khi khói tan, tôi thấy anh Tâm nằm đó, mắt vẫn mở, tay vẫn giữ chặt bức thư chưa kịp gửi về cho vợ. Tối đó, cả tiểu đội không ai nói lời nào. Chỉ có tiếng rừng và nước mắt.",
    image: "https://baotanglichsu.vn/DataFiles/Uploaded/image/data%20Hung/thang%2012%20nam%202016/hai%20phong%2012%20ngay%20dem/1.jpg",
  },
  {
    date: "Ngày 20 tháng 1, 1972",
    title: "Thư từ quê nhà",
    content: "Nhận được thư mẹ sau 8 tháng. Mẹ viết: \"Con ơi, nhà vẫn khỏe. Cây khế con trồng năm nào giờ ra trái rồi. Mẹ để dành, đợi con về.\" Tôi đọc đi đọc lại không biết bao nhiêu lần, cho đến khi chữ nhòe hết vì nước mắt.",
    image: "https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2023/5/8/nhun-trang-thu-am-ap-yeu-thuong-tu-chien-truong-cua-dang-thuy-tram-gui-nguoi-than-16835185921891923044685.jpg",
  },
  {
    date: "Ngày 30 tháng 4, 1975",
    title: "Ngày toàn thắng",
    content: "Xe tăng tiến vào Dinh Độc Lập. Cờ đỏ sao vàng tung bay. Tôi đứng giữa Sài Gòn, nước mắt chảy dài mà cười. 6 năm, hàng ngàn cây số, bao nhiêu đồng đội nằm lại dọc đường... Cuối cùng, chúng ta đã về đến đây. Đất nước thống nhất rồi, mẹ ơi!",
    image: "https://file3.qdnd.vn/data/images/0/2025/04/18/upload_2183/dd46912614pm.jpg",
  },
];

export default function StoryModeProMax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const textsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = panelsRef.current.filter(Boolean);
    const totalPanels = panels.length;

    // 1. Intro Animation
    gsap.from(".intro-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2
    });

    // 2. Main Timeline Layered Pinning
    panels.forEach((panel, i) => {
        const image = imagesRef.current[i];
        const textContent = textsRef.current[i];
        const nextPanel = panels[i + 1];

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: panel,
                start: "top top",
                end: "+=150%", 
                pin: true, 
                pinSpacing: true, 
                scrub: 1, 
                onUpdate: (self) => {
                    const totalProgress = (i + self.progress) / totalPanels;
                     if (progressBarRef.current) {
                        gsap.to(progressBarRef.current, {
                            height: `${totalProgress * 100}%`,
                            duration: 0.5,
                            ease: "power2.out"
                        });
                    }
                }
            }
        });

        // Effect when active
        tl.to(image, {
            scale: 1.15, 
            ease: "none", 
        }, 0); 

        tl.fromTo(textContent, 
            { y: 100, opacity: 0, filter: "blur(10px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.5, ease: "power2.out" },
            0.1 
        );

        // Effect when leaving
        if (nextPanel) {
             tl.to([image, textContent], {
                opacity: 0,
                filter: "blur(20px) brightness(0.5)",
                scale: 1.2, 
                duration: 0.5,
                ease: "power2.in"
            }, 0.5); 
        }
    });

  }, { scope: containerRef });

  return (
    // Áp dụng font Inter làm mặc định cho toàn section
    <section ref={containerRef} className={`${inter.className} bg-[#030303] overflow-hidden relative`}>
        
      {/* Global Grain Texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.15] mix-blend-overlay"
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`}}
      />

      {/* Progress Bar */}
      <div className="fixed right-0 top-0 h-full w-1 bg-white/10 z-50 hidden md:block">
          <div ref={progressBarRef} className="w-full bg-[#C9A227] h-0 transition-all ease-out relative">
              <div className="absolute bottom-0 right-0 w-2 h-6 bg-[#C9A227] shadow-[0_0_20px_#C9A227]"></div>
          </div>
      </div>

      {/* Intro Section */}
      <div className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10">
         <div className="intro-text inline-flex items-center gap-2 bg-[#C9A227]/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-[#C9A227]/30">
          <BookOpen className="w-4 h-4 text-[#C9A227]" />
          <span className="text-[#C9A227] text-xs md:text-sm font-semibold tracking-widest uppercase">Hồi Ký Chiến Trường</span>
        </div>
        {/* Tiêu đề Intro dùng font Playfair để mạnh mẽ */}
        <h1 className={`intro-text text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none ${playfair.className}`}>
          NHỮNG TRANG<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#C9A227] to-[#8B6914] relative z-10">
             HÓA LỊCH SỬ
          </span>
        </h1>
        {/* Đoạn dẫn dùng Merriweather nghiêng */}
        <p className={`intro-text text-white/60 max-w-md mx-auto mb-12 text-lg md:text-xl italic ${merriweather.className}`}>
           "Máu và hoa trên con đường huyền thoại."
        </p>
        <div className="intro-text animate-bounce text-[#C9A227]/50">
            <ArrowRight className="rotate-90 w-6 h-6" />
        </div>
        
        {/* Background Intro */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Ho_Chi_Minh_trail_Laos.jpg" alt="" className="w-full h-full object-cover opacity-30 filter grayscale blur-sm" />
        </div>
      </div>

      {/* Main Story Container */}
      <div className="relative z-10">
        {storyEntries.map((entry, index) => (
          <div
            key={index}
            ref={(el) => { panelsRef.current[index] = el; }}
            className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-black panel-item"
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 w-full h-full z-0">
               <div className="absolute inset-0 bg-black/40 z-10 mix-blend-multiply" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-10" />
               
               <img 
                 ref={(el) => { imagesRef.current[index] = el; }}
                 src={entry.image} 
                 alt={entry.title}
                 className="w-full h-full object-cover origin-center"
                 style={{ transform: 'scale(1)' }} 
               />
            </div>

            {/* Content Layer */}
            <div 
                ref={(el) => { textsRef.current[index] = el; }}
                className="relative z-20 max-w-5xl px-6 md:px-12 w-full opacity-0"
            >
               <div className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-8 relative">
                   <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-[#C9A227]/50 hidden md:block"></div>
                   <div className="inline-block px-3 py-1 bg-[#C9A227] text-black font-bold text-xs md:text-sm tracking-widest uppercase shadow-lg shadow-[#C9A227]/20 transform -skew-x-12">
                       {entry.date}
                   </div>
               </div>

               {/* Tiêu đề panel dùng font Playfair */}
               <h2 className={`text-5xl md:text-7xl font-black text-white mb-10 leading-none tracking-tight drop-shadow-2xl ${playfair.className}`}>
                 {entry.title.split(' ').map((word, i) => (
                    <span key={i} className="inline-block mr-3">{word}</span>
                 ))}
               </h2>

               {/* Nội dung nhật ký dùng font Merriweather */}
               <div className="relative p-6 md:p-10 bg-black/30 backdrop-blur-xl border border-white/10 rounded-xl max-w-3xl ml-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                 <Quote className="absolute -top-6 -left-6 w-12 h-12 text-[#C9A227] fill-[#C9A227]/20" />
                 <p 
                    className={`text-xl md:text-3xl text-white/90 leading-relaxed italic ${merriweather.className}`}
                    style={{ textShadow: "0 2px 5px rgba(0,0,0,0.8)" }}
                 >
                    "{entry.content}"
                 </p>
                 
                 {/* Chữ ký dùng font Dancing Script */}
                 <div className={`text-right mt-6 text-[#C9A227]/70 text-2xl md:text-3xl ${dancing.className}`}>
                    - Người lính Trường Sơn -
                 </div>
               </div>
            </div>
          </div>
        ))}

        {/* Final CTA Section */}
        <div className="h-screen w-full bg-[#050505] flex items-center justify-center z-20 relative overflow-hidden">
             <div className="absolute inset-0 opacity-30">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A227] rounded-full blur-[150px] animate-pulse"></div>
             </div>

             <div className="text-center px-4 max-w-3xl relative z-10">
                <BookOpen className="w-16 h-16 text-[#C9A227] mx-auto mb-8 opacity-50" />
                <h3 className={`text-4xl md:text-6xl font-bold text-white mb-8 leading-tight ${playfair.className}`}>
                    Lịch sử đang chờ bạn<br/>viết tiếp.
                </h3>
                <Button 
                    asChild 
                    size="lg" 
                    className="group bg-gradient-to-r from-[#C9A227] to-[#b08d21] text-black font-bold text-lg px-10 py-8 rounded-none transform skew-x-[-10deg] hover:skew-x-0 transition-all duration-500 shadow-[0_0_40px_rgba(201,162,39,0.3)] hover:shadow-[0_0_80px_rgba(201,162,39,0.6)]"
                >
                    <Link href="/tong-quan" className="gap-3 transform skew-x-[10deg] group-hover:skew-x-0 transition-all">
                        Khám Phá Bảo Tàng <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </Button>
             </div>
        </div>
      </div>
    </section>
  );
}