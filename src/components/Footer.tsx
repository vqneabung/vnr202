import Link from "next/link";
import { Star, Book, Users, Award } from "lucide-react";

const footerLinks = [
  {
    title: "Nội Dung",
    links: [
      { name: "Tổng Quan Lịch Sử", href: "/tong-quan" },
      { name: "Kháng Chiến Chống Pháp", href: "/chi-tiet/khang-chien-chong-phap" },
      { name: "Kháng Chiến Chống Mỹ", href: "/chi-tiet/khang-chien-chong-my" },
    ],
  },
  {
    title: "Tài Nguyên",
    links: [
      { name: "Thư Viện Hình Ảnh", href: "/thu-vien" },
      { name: "Ý Nghĩa Lịch Sử", href: "/y-nghia" },
      { name: "Kiểm Tra Kiến Thức", href: "/quiz" },
    ],
  },
  {
    title: "Hỗ Trợ",
    links: [
      { name: "AI Chatbot", href: "/ai-ho-tro" },
    ],
  },
];

const features = [
  { icon: Book, label: "Kiến Thức" },
  { icon: Users, label: "Cộng Đồng" },
  { icon: Award, label: "Lịch Sử" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F1C3F" }} className="text-[#F5EDE0]">
      {/* Decorative top border */}
      <div className="h-1" style={{ background: "linear-gradient(90deg, #8B1A1A, #C9A227, #8B1A1A)" }}></div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded flex items-center justify-center border-2 border-[#C9A227]" style={{
                background: "linear-gradient(135deg, #C9A227, #8B1A1A)"
              }}>
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-[#F5EDE0]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Lịch Sử Đảng</span>
                <span className="text-[#C9A227] text-xs block tracking-widest">1945 — 1975</span>
              </div>
            </Link>
            <p className="text-[#F5EDE0]/70 text-sm leading-relaxed mb-4">
              Trang web cung cấp kiến thức trọng tâm về quá trình Đảng lãnh đạo hai cuộc kháng chiến, 
              hoàn thành giải phóng dân tộc, thống nhất đất nước.
            </p>
            <div className="flex gap-4">
              {features.map((feature) => (
                <div key={feature.label} className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(139, 26, 26, 0.3)" }}>
                    <feature.icon className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <span className="text-xs text-[#F5EDE0]/60">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-[#C9A227] mb-4 text-sm uppercase tracking-widest">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#F5EDE0]/70 hover:text-[#C9A227] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C9A227]/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#F5EDE0]/60 text-sm text-center md:text-left">
              © 2025 Lịch Sử Đảng Lãnh Đạo Cách Mạng Việt Nam. Dự án học tập.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[#F5EDE0]/60 text-xs">Được xây dựng với</span>
              <span className="text-[#8B1A1A]">❤</span>
              <span className="text-[#F5EDE0]/60 text-xs">bằng Next.js</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <div className="h-1" style={{ background: "linear-gradient(90deg, #8B1A1A, #C9A227, #8B1A1A)" }}></div>
    </footer>
  );
}
