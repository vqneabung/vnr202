import { Clock, Building, Flag, Award, Target, CheckCircle, Lightbulb, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const northTasks = [
  "Khôi phục kinh tế",
  "Cải tạo quan hệ sản xuất",
  "Phát triển CN – NN – VH – GD",
  "Xây dựng hệ thống chính trị XHCN",
];

const northAchievements = [
  "Cải cách ruộng đất, hợp tác hoá nông nghiệp",
  "Công nghiệp được khôi phục",
  "Văn hóa – giáo dục phát triển mạnh",
  "Miền Bắc trở thành hậu phương lớn",
];

const southPolicy = [
  "Đấu tranh chống \"chiến tranh đặc biệt\", \"cục bộ\", \"Việt Nam hóa chiến tranh\"",
  "Kết hợp đấu tranh chính trị và quân sự",
  "Thành lập Mặt trận Dân tộc Giải phóng miền Nam (1960)",
];

const keyPhases = [
  { year: "1959-1960", name: "Đồng Khởi", desc: "Phong trào nổi dậy toàn miền Nam" },
  { year: "1968", name: "Tổng tiến công Mậu Thân", desc: "Thay đổi cục diện chiến tranh" },
  { year: "1971", name: "Chiến thắng Đường 9 – Nam Lào", desc: "Đánh bại cuộc hành quân Lam Sơn 719" },
  { year: "1972", name: "\"Điện Biên Phủ trên không\"", desc: "Đập tan cuộc tập kích B-52" },
  { year: "1975", name: "Tổng tiến công mùa Xuân", desc: "Giải phóng hoàn toàn miền Nam" },
];

const significance = [
  "Hoàn thành thống nhất đất nước",
  "Đập tan ý đồ xâm lược của Mỹ",
  "Nâng cao uy tín Việt Nam trên thế giới",
  "Tạo tiền đề cho công cuộc xây dựng CNXH",
];

const experiences = [
  "Lãnh đạo đúng đắn của Đảng",
  "Kết hợp quân sự – chính trị – ngoại giao",
  "Phát huy sức mạnh toàn dân",
  "Sự giúp đỡ của phong trào cách mạng thế giới",
];

const images = [
  "https://bandothegioikholon.com/wp-content/uploads/2018/08/b%E1%BA%A3n-%C4%91%E1%BB%93-chi%E1%BA%BFn-d%E1%BB%8Bch-HCM.jpg",
  "https://file3.qdnd.vn/data/images/0/2025/04/18/upload_2183/dd46912614pm.jpg?dpi=150&quality=100&w=870",
  "https://danviet.ex-cdn.com/files/f1/2021/4/28/11-161959012348422416202.jpg",
];

export default function KhangChienChongMyPage() {
  return (
    <div className="min-h-screen bg-[var(--antique-parchment)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--royal-burgundy)] to-[var(--timeless-navy)] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4 text-[var(--antique-gold)]" />
              <span className="text-white/80 text-sm">1954 - 1975</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Lãnh Đạo Xây Dựng CNXH Ở Miền Bắc <br />
              <span className="text-[var(--antique-gold)]">Và Kháng Chiến Chống Mỹ</span>
            </h1>
            
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              21 năm đấu tranh anh dũng, kết thúc bằng Đại thắng mùa Xuân 1975, 
              thống nhất hoàn toàn đất nước.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Xây dựng CNXH ở miền Bắc */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                1. Xây Dựng CNXH Ở Miền Bắc (1954–1975)
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-[var(--timeless-navy)]">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="w-5 h-5 text-[var(--timeless-navy)]" />
                    Nhiệm Vụ Chung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {northTasks.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="w-5 h-5 rounded-full bg-[var(--timeless-navy)] text-white text-xs flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-[var(--text-muted)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[var(--antique-gold)]">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="w-5 h-5 text-[var(--antique-gold)]" />
                    Thành Tựu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {northAchievements.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[var(--rustic-olive)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--text-muted)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Lãnh đạo cách mạng miền Nam */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
                <Flag className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                2. Lãnh Đạo Cách Mạng Miền Nam
              </h2>
            </div>

            <Card className="mb-8 border-l-4 border-l-[var(--royal-burgundy)]">
              <CardHeader>
                <CardTitle className="text-lg text-[var(--royal-burgundy)]">Chủ Trương</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {southPolicy.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-[var(--antique-gold)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Các giai đoạn nổi bật */}
            <h3 className="text-xl font-bold text-[var(--timeless-navy)] mb-6">Các Giai Đoạn Nổi Bật</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--antique-gold)] to-[var(--royal-burgundy)]"></div>
              
              <div className="space-y-6">
                {keyPhases.map((phase, index) => (
                  <div key={index} className="relative pl-16">
                    <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-[var(--antique-gold)] border-4 border-white shadow-md"></div>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="py-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                          <span className="text-sm font-bold text-[var(--royal-burgundy)] bg-[var(--royal-burgundy)]/10 px-2 py-1 rounded">
                            {phase.year}
                          </span>
                          <h4 className="font-semibold text-[var(--timeless-navy)]">{phase.name}</h4>
                        </div>
                        <p className="text-sm text-[var(--text-muted)] mt-1">{phase.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hình ảnh chiến dịch Hồ Chí Minh */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-[var(--timeless-navy)] mb-6 text-center">
              Chiến Dịch Hồ Chí Minh - 1975
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {images.map((src, index) => (
                <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={src}
                    alt={`Chiến dịch Hồ Chí Minh ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Ý nghĩa và kinh nghiệm */}
      <section className="py-16 bg-gradient-to-br from-[var(--timeless-navy)] to-[var(--royal-burgundy)]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[var(--antique-gold)] flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
                3. Ý Nghĩa Thắng Lợi & Kinh Nghiệm
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-lg text-[var(--antique-gold)]">Ý Nghĩa</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {significance.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[var(--antique-gold)] flex-shrink-0 mt-0.5" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-lg text-[var(--antique-gold)]">Kinh Nghiệm</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {experiences.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-[var(--antique-gold)] flex-shrink-0 mt-0.5" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Quote */}
            <div className="mt-12 text-center">
              <blockquote className="text-xl md:text-2xl text-white/90 italic max-w-3xl mx-auto">
                &ldquo;Đại thắng mùa Xuân 1975 - Thắng lợi vĩ đại của dân tộc Việt Nam 
                trong thế kỷ XX&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
