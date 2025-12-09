"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const storyEntries = [
  {
    date: "Ngày 15 tháng 3, 1969",
    title: "Lên đường",
    content: "Hôm nay, đoàn chúng tôi rời Hà Nội. Mẹ khóc, em gái chạy theo xe một đoạn rồi dừng lại vẫy tay. Tôi không dám quay đầu nhìn lại — sợ mình sẽ khóc trước mặt đồng đội. Con đường phía trước dài lắm, nhưng trong tim tôi chỉ có một suy nghĩ: đất nước cần, là đi.",
    image: "https://baoquangbinh.vn/dataimages/201412/original/images575987_71473_tt.jpg",
    imagePosition: "right"
  },
  {
    date: "Ngày 28 tháng 4, 1969",
    title: "Những đêm Trường Sơn",
    content: "Đêm nay trăng sáng quá, sáng đến mức phải giấu mình dưới tán rừng mà đi. Muỗi nhiều như trấu, vắt bám đầy chân. Anh Hùng bảo: \"Cứ đi đi, miền Nam đang chờ mình.\" Câu nói đơn giản ấy, không hiểu sao lại khiến tôi thấy ấm lòng giữa đêm lạnh thế này.",
    image: "https://files.bienphong.com.vn//bbpmedia/media/730/2022/10/24/image001_2.jpg",
    imagePosition: "left"
  },
  {
    date: "Ngày 12 tháng 7, 1969",
    title: "Cơn sốt rét đầu tiên",
    content: "Sốt rét quật ngã tôi ba ngày liền. Nằm võng giữa rừng, người run như cầy sấy, mồ hôi ướt đẫm áo. Chị Lan y tá đút cho tôi từng thìa cháo loãng. Chị bảo: \"Cố lên em, còn phải về gặp mẹ chứ.\" Tôi gật đầu, nuốt nước mắt cùng thìa cháo.",
    image: "https://file3.qdnd.vn/data/images/13/2019/06/11/tvthuonghuyen/8.jpg",
    imagePosition: "right"
  },
  {
    date: "Ngày 3 tháng 11, 1970",
    title: "Trận bom đầu tiên",
    content: "B-52 rải thảm lúc chạng vạng. Đất rung, tai ù đặc. Khi khói tan, tôi thấy anh Tâm nằm đó, mắt vẫn mở, tay vẫn giữ chặt bức thư chưa kịp gửi về cho vợ. Tối đó, cả tiểu đội không ai nói lời nào. Chỉ có tiếng rừng và nước mắt.",
    image: "https://baotanglichsu.vn/DataFiles/Uploaded/image/data%20Hung/thang%2012%20nam%202016/hai%20phong%2012%20ngay%20dem/1.jpg",
    imagePosition: "left"
  },
  {
    date: "Ngày 20 tháng 1, 1972",
    title: "Thư từ quê nhà",
    content: "Nhận được thư mẹ sau 8 tháng. Mẹ viết: \"Con ơi, nhà vẫn khỏe. Cây khế con trồng năm nào giờ ra trái rồi. Mẹ để dành, đợi con về.\" Tôi đọc đi đọc lại không biết bao nhiêu lần, cho đến khi chữ nhòe hết vì nước mắt.",
    image: "https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2023/5/8/nhun-trang-thu-am-ap-yeu-thuong-tu-chien-truong-cua-dang-thuy-tram-gui-nguoi-than-16835185921891923044685.jpg",
    imagePosition: "right"
  },
  {
    date: "Ngày 30 tháng 4, 1975",
    title: "Ngày toàn thắng",
    content: "Xe tăng tiến vào Dinh Độc Lập. Cờ đỏ sao vàng tung bay. Tôi đứng giữa Sài Gòn, nước mắt chảy dài mà cười. 6 năm, hàng ngàn cây số, bao nhiêu đồng đội nằm lại dọc đường... Cuối cùng, chúng ta đã về đến đây. Đất nước thống nhất rồi, mẹ ơi!",
    image: "https://file3.qdnd.vn/data/images/0/2025/04/18/upload_2183/dd46912614pm.jpg",
    imagePosition: "left"
  },
  {
    date: "Lời cuối",
    title: "Gửi thế hệ mai sau",
    content: "Nếu các em đọc được những dòng này, xin hãy nhớ: hòa bình không tự nhiên mà có. Nó được đổi bằng máu, bằng nước mắt, bằng tuổi xuân của hàng triệu người. Chúng tôi đã đi để các em được ở lại. Hãy sống xứng đáng với sự hy sinh ấy.",
    image: "https://cdn2.tuoitre.vn/471584752817336320/2025/5/1/hoa-binh-2-1746072836959431014511.jpg",
    imagePosition: "right"
  }
];

export default function StoryMode() {
  const [visibleEntries, setVisibleEntries] = useState<number[]>([]);
  const [showBanner, setShowBanner] = useState(false);
  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -10% 0px",
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index") || "0");
          setVisibleEntries((prev) => {
            if (!prev.includes(index)) {
              return [...prev, index];
            }
            return prev;
          });
        }
      });
    }, observerOptions);

    entryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Banner observer
    const bannerObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowBanner(true);
        }
      },
      { threshold: 0.5 }
    );

    if (bannerRef.current) {
      bannerObserver.observe(bannerRef.current);
    }

    return () => {
      observer.disconnect();
      bannerObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grain overlay */}
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Smoke effect layers */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(100, 100, 100, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(80, 80, 80, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(60, 60, 60, 0.15) 0%, transparent 70%)
            `,
            animation: "smokeMove 20s ease-in-out infinite alternate"
          }}
        />

        {/* Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)"
          }}
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-white/10">
          <BookOpen className="w-4 h-4 text-[#C9A227]" />
          <span className="text-[#C9A227] text-sm font-semibold tracking-wider">Nhật Ký Chiến Trường</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Những Trang Nhật Ký{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#FFD700]">
            Trường Sơn
          </span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto px-4">
          Lắng nghe câu chuyện từ những người lính đã đi qua con đường huyền thoại
        </p>
        
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="w-16 md:w-32 h-px bg-gradient-to-r from-transparent to-[#C9A227]/50" />
          <div className="w-2 h-2 rotate-45 bg-[#C9A227]" />
          <div className="w-16 md:w-32 h-px bg-gradient-to-l from-transparent to-[#C9A227]/50" />
        </div>
      </div>

      {/* Story Entries */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-20">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A227]/30 to-transparent hidden md:block" />

        {storyEntries.map((entry, index) => (
          <div
            key={index}
            ref={(el) => { entryRefs.current[index] = el; }}
            data-index={index}
            className={`relative mb-20 md:mb-32 ${
              visibleEntries.includes(index) ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000`}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#C9A227] shadow-lg shadow-[#C9A227]/50 hidden md:block z-20" />

            <div className={`flex flex-col ${
              entry.imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-8 md:gap-12`}>
              
              {/* Text Content */}
              <div className={`flex-1 ${
                entry.imagePosition === "left" ? "md:pl-12" : "md:pr-12"
              }`}>
                <div 
                  className={`transform transition-all duration-1000 delay-300 ${
                    visibleEntries.includes(index) 
                      ? "translate-x-0 opacity-100" 
                      : entry.imagePosition === "left" ? "translate-x-12 opacity-0" : "-translate-x-12 opacity-0"
                  }`}
                >
                  {/* Date badge */}
                  <div className="inline-block px-4 py-1.5 bg-[#8B1A1A]/30 border border-[#8B1A1A]/50 rounded-full mb-4">
                    <span className="text-[#C9A227] text-sm font-medium tracking-wide">{entry.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {entry.title}
                  </h3>
                  
                  {/* Content with typewriter feel */}
                  <div className="relative">
                    <p 
                      className="text-white/80 text-lg leading-relaxed italic"
                      style={{ 
                        fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
                        textShadow: "0 0 30px rgba(201, 162, 39, 0.1)"
                      }}
                    >
                      "{entry.content}"
                    </p>
                    
                    {/* Paper texture overlay */}
                    <div className="absolute -inset-4 -z-10 bg-white/[0.02] rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 w-full md:w-auto">
                <div 
                  className={`transform transition-all duration-1000 delay-500 ${
                    visibleEntries.includes(index) 
                      ? "translate-x-0 opacity-100 scale-100" 
                      : entry.imagePosition === "left" ? "-translate-x-12 opacity-0 scale-95" : "translate-x-12 opacity-0 scale-95"
                  }`}
                >
                  <div className="relative group">
                    {/* Image frame */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-[#C9A227]/20 to-[#8B1A1A]/20 rounded-lg blur-sm" />
                    <div className="relative overflow-hidden rounded-lg border-2 border-white/10">
                      <img
                        src={entry.image}
                        alt={entry.title}
                        className="w-full h-64 md:h-80 object-cover filter sepia-[0.3] contrast-[1.1] group-hover:sepia-0 transition-all duration-700"
                      />
                      
                      {/* Vintage overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                      
                      {/* Film grain on image */}
                      <div 
                        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        }}
                      />
                      
                      {/* Corner accents */}
                      <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-[#C9A227]/50" />
                      <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-[#C9A227]/50" />
                      <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-[#C9A227]/50" />
                      <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-[#C9A227]/50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final Banner */}
      <div 
        ref={bannerRef}
        className={`relative z-10 py-20 transition-all duration-1000 ${
          showBanner ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Banner background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B1A1A]/20 to-[#8B1A1A]/30" />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          {/* Star decoration */}
          <div className={`mb-8 transform transition-all duration-1000 delay-300 ${
            showBanner ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-[#C9A227] blur-2xl opacity-30 animate-pulse" />
              <svg 
                className="w-16 h-16 text-[#C9A227] relative z-10"
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

          {/* Quote */}
          <blockquote className={`transform transition-all duration-1000 delay-500 ${
            showBanner ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <p 
              className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight"
              style={{ textShadow: "0 0 40px rgba(201, 162, 39, 0.3)" }}
            >
              "Họ đã hy sinh
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#FFD700]">
                để ta được hòa bình hôm nay"
              </span>
            </p>
          </blockquote>

          {/* Decorative line */}
          <div className={`flex items-center justify-center gap-4 mb-8 transform transition-all duration-1000 delay-700 ${
            showBanner ? "opacity-100" : "opacity-0"
          }`}>
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-[#C9A227]" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A227]" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-[#C9A227]" />
          </div>

          {/* CTA Button */}
          <div className={`transform transition-all duration-1000 delay-1000 ${
            showBanner ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <Button 
              asChild 
              size="lg" 
              className="gap-3 bg-gradient-to-r from-[#C9A227] to-[#8B6914] hover:from-[#8B6914] hover:to-[#C9A227]
                         px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#C9A227]/20 hover:shadow-xl hover:shadow-[#C9A227]/30 
                         transition-all duration-300 group"
            >
              <Link href="/tong-quan">
                Tiếp Tục Khám Phá Lịch Sử
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Bottom note */}
          <p className={`mt-8 text-white/40 text-sm transform transition-all duration-1000 delay-1200 ${
            showBanner ? "opacity-100" : "opacity-0"
          }`}>
            Tưởng nhớ hàng triệu anh hùng liệt sĩ đã ngã xuống vì độc lập tự do
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes smokeMove {
          0% {
            transform: translateX(-5%) translateY(0);
          }
          100% {
            transform: translateX(5%) translateY(-3%);
          }
        }
      `}</style>
    </section>
  );
}
