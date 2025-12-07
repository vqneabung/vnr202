import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Award, Users, Flag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Tổng Quan Lịch Sử",
    description: "Khái quát về hai cuộc kháng chiến vĩ đại chống Pháp và Mỹ từ 1945-1975.",
    href: "/tong-quan",
  },
  {
    icon: Flag,
    title: "Kháng Chiến Chống Pháp",
    description: "Chi tiết về cuộc kháng chiến 1945-1954 với đỉnh cao Điện Biên Phủ.",
    href: "/chi-tiet/khang-chien-chong-phap",
  },
  {
    icon: Star,
    title: "Kháng Chiến Chống Mỹ",
    description: "Quá trình đấu tranh 1954-1975, kết thúc bằng Đại thắng mùa Xuân.",
    href: "/chi-tiet/khang-chien-chong-my",
  },
  {
    icon: Award,
    title: "Ý Nghĩa Lịch Sử",
    description: "Giá trị và bài học lịch sử còn vẹn nguyên đến hôm nay.",
    href: "/y-nghia",
  },
];

const partyRoles = [
  "Đề ra đường lối kháng chiến đúng đắn",
  "Huy động sức mạnh đại đoàn kết dân tộc",
  "Kết hợp sức mạnh dân tộc với sức mạnh thời đại",
  "Tổ chức và lãnh đạo lực lượng vũ trang",
  "Kiên định mục tiêu độc lập dân tộc gắn với CNXH",
];

const timeline = [
  { year: "1945", event: "Cách mạng Tháng Tám thành công" },
  { year: "1946", event: "Toàn quốc kháng chiến" },
  { year: "1954", event: "Chiến thắng Điện Biên Phủ" },
  { year: "1960", event: "Thành lập Mặt trận DTGPMN" },
  { year: "1968", event: "Tổng tiến công Mậu Thân" },
  { year: "1975", event: "Đại thắng mùa Xuân" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden py-20 md:py-32"
        style={{ background: "linear-gradient(135deg, #0F1C3F 0%, #1A2D5A 50%, #8B1A1A 100%)" }}
      >
        {/* Decorative top border */}
        <div 
          className="absolute top-0 left-0 right-0 h-1" 
          style={{ background: "linear-gradient(90deg, #8B1A1A, #C9A227, #8B1A1A)" }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4 text-[#C9A227]" />
              <span className="text-[#C9A227] text-sm font-semibold tracking-wider">1945 — 1975</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Đảng Lãnh Đạo{" "}
              <span className="text-[#C9A227]">Hai Cuộc Kháng Chiến</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white mb-4 max-w-2xl mx-auto font-semibold tracking-wide">
              HOÀN THÀNH GIẢI PHÓNG DÂN TỘC, THỐNG NHẤT ĐẤT NƯỚC
            </p>
            
            <p className="text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Giai đoạn 1945–1975 là thời kỳ bản lề trong lịch sử Việt Nam hiện đại. 
              Dưới sự lãnh đạo đúng đắn của Đảng Cộng sản Việt Nam, nhân dân ta đã tiến hành 
              kháng chiến toàn dân – toàn diện – lâu dài, đưa đất nước tới thắng lợi trọn vẹn.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="gold">
                <Link href="/tong-quan">
                  Khám Phá Lịch Sử
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F1C3F] font-semibold" style={{ borderColor: '#FFFFFF', color: '#FFFFFF', backgroundColor: 'transparent' }}>
                <Link href="/quiz">Kiểm Tra Kiến Thức</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#F5EDE0" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C3F] mb-6">
              Giới Thiệu Tổng Quan
            </h2>
            <p className="text-[#3D3D3D] leading-relaxed text-lg">
              Sau thắng lợi của Cách mạng Tháng Tám 1945, nước Việt Nam Dân chủ Cộng hòa ra đời, 
              mở ra kỷ nguyên độc lập dân tộc và tiến lên chủ nghĩa xã hội. Tuy nhiên, dân tộc 
              phải đối mặt với hai cuộc kháng chiến trường kỳ chống thực dân Pháp và đế quốc Mỹ.
            </p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Link key={feature.title} href={feature.href}>
                <Card className="h-full cursor-pointer group bg-white border border-[#D4C8B5]">
                  <CardHeader>
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ background: "linear-gradient(135deg, #8B1A1A, #6B1010)" }}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-lg text-[#0F1C3F] group-hover:text-[#8B1A1A] transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#5A5A5A] text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Party Role Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded mb-6"
                style={{ backgroundColor: "rgba(139, 26, 26, 0.1)", borderLeft: "4px solid #8B1A1A" }}
              >
                <Users className="w-4 h-4 text-[#8B1A1A]" />
                <span className="text-[#8B1A1A] text-sm font-semibold">Vai Trò Lãnh Đạo</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C3F] mb-6">
                Vai Trò Của Đảng Trong{" "}
                <span className="text-[#8B1A1A]">Hai Cuộc Kháng Chiến</span>
              </h2>
              
              <p className="text-[#3D3D3D] mb-8 leading-relaxed">
                Đảng Cộng sản Việt Nam giữ vai trò quyết định trong việc lãnh đạo nhân dân 
                đấu tranh giành độc lập và thống nhất đất nước.
              </p>
              
              <ul className="space-y-4">
                {partyRoles.map((role, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #C9A227, #8B1A1A)" }}
                    >
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-[#1A1A1A] font-medium pt-1">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://nads.1cdn.vn/2024/08/19/W_tong-khoi-nghia-gianh-chinh-quyen-o-ha-noi-8-1945%281%29.jpg"
                  alt="Cách mạng Tháng Tám 1945"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="absolute -bottom-6 -left-6 p-5 rounded-lg shadow-xl"
                style={{ backgroundColor: "#0F1C3F", border: "2px solid #C9A227" }}
              >
                <p className="text-[#C9A227] font-bold text-3xl">30</p>
                <p className="text-sm text-white">năm kháng chiến</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#E8DCC8" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C3F] mb-4">
              Những Mốc Lịch Sử Quan Trọng
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ borderBottom: "4px solid #C9A227" }}
                >
                  <p className="text-3xl font-bold text-[#8B1A1A] mb-2">
                    {item.year}
                  </p>
                  <p className="text-xs text-[#3D3D3D] font-medium leading-snug">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Significance for Learners */}
      <section 
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(135deg, #0F1C3F 0%, #1A2D5A 50%, #8B1A1A 100%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ý Nghĩa Đối Với Người Học
            </h2>
            <p className="text-white/90 mb-10 text-lg">
              Trang web cung cấp kiến thức trọng tâm, mạch lạc, hỗ trợ sinh viên nắm vững:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div 
                className="rounded-lg p-6"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(201, 162, 39, 0.3)" }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg, #C9A227, #D4B43C)" }}
                >
                  <BookOpen className="w-6 h-6 text-[#0F1C3F]" />
                </div>
                <h3 className="text-white font-bold mb-2 text-lg">Quá Trình Lãnh Đạo</h3>
                <p className="text-white/80 text-sm leading-relaxed">Đảng lãnh đạo cách mạng từ 1945–1975</p>
              </div>
              
              <div 
                className="rounded-lg p-6"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(201, 162, 39, 0.3)" }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg, #C9A227, #D4B43C)" }}
                >
                  <Flag className="w-6 h-6 text-[#0F1C3F]" />
                </div>
                <h3 className="text-white font-bold mb-2 text-lg">Hai Nhiệm Vụ</h3>
                <p className="text-white/80 text-sm leading-relaxed">Xây dựng CNXH – Giải phóng miền Nam</p>
              </div>
              
              <div 
                className="rounded-lg p-6"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(201, 162, 39, 0.3)" }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg, #C9A227, #D4B43C)" }}
                >
                  <Award className="w-6 h-6 text-[#0F1C3F]" />
                </div>
                <h3 className="text-white font-bold mb-2 text-lg">Bài Học Lịch Sử</h3>
                <p className="text-white/80 text-sm leading-relaxed">Những giá trị lâu dài cho thế hệ sau</p>
              </div>
            </div>
            
            <div className="mt-12">
              <Button asChild size="lg" variant="gold">
                <Link href="/ai-ho-tro">
                  Hỏi Đáp Với AI Chatbot
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
