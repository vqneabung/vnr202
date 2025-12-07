import { Clock, Shield, Flag, Award, BookOpen, CheckCircle, Lightbulb, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const difficulties = [
  "Giặc đói, giặc dốt, tài chính kiệt quệ",
  "Thù trong: Việt Quốc – Việt Cách",
  "Giặc ngoài: quân Tưởng, quân Pháp",
];

const partyPolicies1 = [
  "Củng cố chính quyền mới",
  "Tổ chức Tổng tuyển cử",
  "Giải quyết nạn đói, nạn dốt",
  "Đối ngoại mềm dẻo: \"hòa để tiến\"",
];

const results1 = [
  "Lập Quốc hội khóa I",
  "Xây dựng Hiến pháp 1946",
  "Chính quyền được quốc tế ghi nhận",
  "Đặt nền tảng để bước vào kháng chiến lâu dài",
];

const resistanceLine = [
  "Kháng chiến toàn dân – toàn diện – trường kỳ – tự lực cánh sinh",
  "Kết hợp quân sự – chính trị – ngoại giao",
  "Xây dựng căn cứ địa Việt Bắc",
];

const congress2 = [
  "Hoàn chỉnh đường lối cách mạng",
  "Thành lập Đảng Lao động Việt Nam",
  "Xác định rõ nhiệm vụ: \"Dân tộc dân chủ nhân dân\"",
];

const development = [
  "Đẩy mạnh sản xuất",
  "Xây dựng quân đội chính quy",
  "Mở các chiến dịch lớn: Hòa Bình, Tây Bắc, Thượng Lào",
];

const dbpSignificance = [
  "Đòn quyết chiến chiến lược",
  "Buộc Pháp ký Hiệp định Giơnevơ",
  "Chấm dứt chiến tranh, lập lại hòa bình ở Đông Dương",
];

const historicalMeaning = [
  "Lật đổ ách thống trị của thực dân Pháp",
  "Khẳng định đường lối đúng đắn của Đảng",
  "Mở ra thời kỳ mới: xây dựng CNXH ở miền Bắc",
];

const experiences = [
  "Giữ vững sự lãnh đạo thống nhất của Đảng",
  "Kết hợp đấu tranh chính trị – quân sự – ngoại giao",
  "Phát huy sức mạnh đại đoàn kết",
  "Nghệ thuật quân sự nhân dân Việt Nam",
];

const images = [
  "https://tulieuvankien.dangcongsan.vn/upload/3000006/20251024/1627d404874954f72444224748490b4911180583913_959dbf349f_o.jpg",
  "https://file3.qdnd.vn/data/images/0/2024/05/08/upload_2072/dien%20bien%20phu%201954.jpg",
  "https://file3.qdnd.vn/data/images/0/2024/04/09/upload_2165/keo%20-%20phao-dien-bien-phu-2612-15-46-40.jpg",
];

export default function KhangChienChongPhapPage() {
  return (
    <div className="min-h-screen bg-[var(--antique-parchment)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--timeless-navy)] to-[var(--royal-burgundy)] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4 text-[var(--antique-gold)]" />
              <span className="text-white/80 text-sm">1945 - 1954</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Lãnh Đạo Xây Dựng, Bảo Vệ Chính Quyền <br />
              <span className="text-[var(--antique-gold)]">Và Kháng Chiến Chống Pháp</span>
            </h1>
            
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Giai đoạn đầu tiên trong hai cuộc kháng chiến vĩ đại, 
              kết thúc bằng chiến thắng lịch sử Điện Biên Phủ.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Xây dựng và bảo vệ chính quyền */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]">
                1. Xây Dựng Và Bảo Vệ Chính Quyền (1945–1946)
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Khó khăn */}
              <Card className="border-t-4 border-t-[var(--royal-burgundy)] bg-white">
                <CardHeader className="bg-[var(--royal-burgundy)]/5">
                  <CardTitle className="text-lg flex items-center gap-2 text-[var(--royal-burgundy)]">
                    <span className="w-8 h-8 rounded-full bg-[var(--royal-burgundy)] text-white text-sm flex items-center justify-center">a</span>
                    Khó Khăn
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    {difficulties.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--royal-burgundy)] mt-2 flex-shrink-0"></span>
                        <span className="text-[var(--text-secondary)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Chủ trương */}
              <Card className="border-t-4 border-t-[var(--antique-gold)] bg-white">
                <CardHeader className="bg-[var(--antique-gold)]/5">
                  <CardTitle className="text-lg flex items-center gap-2 text-[var(--timeless-navy)]">
                    <span className="w-8 h-8 rounded-full bg-[var(--antique-gold)] text-white text-sm flex items-center justify-center">b</span>
                    Chủ Trương Của Đảng
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    {partyPolicies1.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[var(--rustic-olive)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--text-secondary)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Kết quả */}
              <Card className="border-t-4 border-t-[var(--rustic-olive)] bg-white">
                <CardHeader className="bg-[var(--rustic-olive)]/5">
                  <CardTitle className="text-lg flex items-center gap-2 text-[var(--rustic-olive)]">
                    <span className="w-8 h-8 rounded-full bg-[var(--rustic-olive)] text-white text-sm flex items-center justify-center">c</span>
                    Kết Quả
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    {results1.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Award className="w-4 h-4 text-[var(--antique-gold)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--text-secondary)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Đường lối kháng chiến toàn quốc */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
                <Flag className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]">
                2. Đường Lối Kháng Chiến Toàn Quốc (1946–1950)
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <Card className="mb-6 border-l-4 border-l-[var(--royal-burgundy)] bg-[var(--card-background)]">
                  <CardHeader>
                    <CardTitle className="text-lg text-[var(--royal-burgundy)]">
                      Hoàn Cảnh Bùng Nổ Kháng Chiến
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[var(--text-secondary)]">
                      Pháp tái xâm lược, Hiệp định Sơ bộ và Tạm ước bị phá vỡ → chiến tranh không thể tránh khỏi.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[var(--antique-gold)] bg-[var(--card-background)]">
                  <CardHeader>
                    <CardTitle className="text-lg text-[var(--antique-gold)]">Đường Lối</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {resistanceLine.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[var(--rustic-olive)] flex-shrink-0 mt-0.5" />
                          <span className="text-[var(--text-secondary)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-[var(--timeless-navy)] text-white">
                <CardHeader>
                  <CardTitle className="text-lg text-[var(--antique-gold)]">Ý Nghĩa</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-[var(--antique-gold)] flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">Tạo cơ sở lý luận cho kháng chiến chống Pháp</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-[var(--antique-gold)] flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">Huy động toàn dân tham gia kháng chiến</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-[var(--antique-gold)] flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">Khẳng định vai trò lãnh đạo của Đảng</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Đẩy mạnh kháng chiến */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]">
                3. Đẩy Mạnh Kháng Chiến Đến Thắng Lợi (1951–1954)
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white">
                <CardHeader className="bg-[var(--royal-burgundy)]/5">
                  <CardTitle className="text-lg text-[var(--timeless-navy)]">Đại Hội II (1951)</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    {congress2.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="w-5 h-5 rounded-full bg-[var(--antique-gold)] text-white text-xs flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-[var(--text-secondary)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader className="bg-[var(--antique-gold)]/5">
                  <CardTitle className="text-lg text-[var(--timeless-navy)]">Phát Triển Lực Lượng</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    {development.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="w-5 h-5 rounded-full bg-[var(--rustic-olive)] text-white text-xs flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-[var(--text-secondary)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[var(--royal-burgundy)] to-[var(--timeless-navy)] text-white">
                <CardHeader>
                  <CardTitle className="text-lg text-[var(--antique-gold)]">
                    🏆 Chiến Thắng Điện Biên Phủ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {dbpSignificance.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[var(--antique-gold)] flex-shrink-0 mt-0.5" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Hình ảnh Điện Biên Phủ */}
            <div className="grid md:grid-cols-3 gap-4">
              {images.map((src, index) => (
                <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={src}
                    alt={`Điện Biên Phủ ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Ý nghĩa và kinh nghiệm */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]">
                4. Ý Nghĩa Và Kinh Nghiệm Lãnh Đạo
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-[var(--royal-burgundy)] bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-[var(--royal-burgundy)]">Ý Nghĩa Lịch Sử</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {historicalMeaning.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-[var(--antique-gold)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--timeless-navy)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[var(--antique-gold)] bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-[var(--antique-gold)]">Kinh Nghiệm</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {experiences.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-[var(--rustic-olive)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--timeless-navy)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
