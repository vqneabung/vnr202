import { Clock, Flag, Users, Building, Award, Target, BookOpen, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const context = [
  "Chính quyền cách mạng non trẻ đối mặt với nội thù – ngoại xâm – đói nghèo – giặc dốt",
  "Đế quốc, thực dân tiếp tục âm mưu xâm lược, biến Việt Nam thành thuộc địa kiểu mới",
  "Đảng phải giải quyết đồng thời: Kháng chiến chống xâm lược và Xây dựng chế độ mới",
];

const resistanceWar1 = {
  title: "Kháng Chiến Chống Thực Dân Pháp (1945–1954)",
  policy: "Kháng chiến toàn dân, toàn diện, lâu dài; tự lực cánh sinh",
  achievements: [
    "Xây dựng chính quyền dân chủ nhân dân",
    "Củng cố Mặt trận Việt Minh",
    "Chỉnh huấn, xây dựng lực lượng vũ trang",
    "Đỉnh cao: Chiến thắng Điện Biên Phủ (1954)",
  ],
};

const resistanceWar2 = {
  title: "Kháng Chiến Chống Mỹ Cứu Nước (1954–1975)",
  points: [
    "Miền Bắc xây dựng CNXH, là hậu phương chiến lược",
    "Miền Nam tiến hành đấu tranh chính trị – vũ trang chống Mỹ",
    "Các chiến lược chiến tranh của Mỹ đều thất bại",
    "Đỉnh cao: Đại thắng mùa Xuân 1975, thống nhất đất nước",
  ],
};

const strategicTasks = [
  {
    title: "Xây dựng CNXH ở miền Bắc",
    icon: Building,
    items: [
      "Cải cách ruộng đất, khôi phục kinh tế",
      "Phát triển công nghiệp – nông nghiệp – văn hoá – giáo dục",
      "Miền Bắc trở thành căn cứ địa của cả nước",
    ],
  },
  {
    title: "Giải phóng miền Nam, thống nhất đất nước",
    icon: Flag,
    items: [
      "Đề ra đường lối đấu tranh chính trị kết hợp vũ trang",
      "Xây dựng Mặt trận Dân tộc Giải phóng miền Nam",
      "Kết hợp quân sự – chính trị – ngoại giao, tiến tới tổng tiến công 1975",
    ],
  },
];

const partyRoles = [
  "Đề ra đường lối kháng chiến toàn dân, toàn diện",
  "Lãnh đạo xây dựng hậu phương vững mạnh",
  "Kết hợp sức mạnh dân tộc + sức mạnh thời đại",
  "Kiên định mục tiêu độc lập dân tộc gắn với CNXH",
  "Tổ chức lực lượng, phát huy đại đoàn kết",
];

const results = [
  "Hoàn thành sự nghiệp giải phóng dân tộc",
  "Thống nhất đất nước",
  "Tạo nền tảng để cả nước đi lên chủ nghĩa xã hội",
  "Nâng cao vị thế Việt Nam trên trường quốc tế",
  "Góp phần vào phong trào giải phóng dân tộc thế giới",
];

export default function TongQuanPage() {
  return (
    <div className="min-h-screen bg-[var(--antique-parchment)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--timeless-navy)] to-[var(--royal-burgundy)] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4 text-[var(--antique-gold)]" />
              <span className="text-white/80 text-sm">1945 - 1975</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Tổng Quan Lịch Sử
            </h1>
            
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Hai cuộc kháng chiến chống Pháp và Mỹ diễn ra liên tục trong 30 năm, 
              đưa dân tộc Việt Nam đến thắng lợi vĩ đại.
            </p>
          </div>
        </div>
      </section>

      {/* Bối cảnh chung */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                1. Bối Cảnh Chung
              </h2>
            </div>
            
            <Card className="border-l-4 border-l-[var(--antique-gold)]">
              <CardHeader>
                <CardTitle className="text-xl text-[var(--royal-burgundy)]">
                  Sau Cách mạng Tháng Tám 1945
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {context.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--rustic-olive)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hai cuộc kháng chiến */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
                <Flag className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                2. Hai Cuộc Kháng Chiến Vĩ Đại
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Kháng chiến chống Pháp */}
              <Card className="border-t-4 border-t-[var(--royal-burgundy)]">
                <CardHeader className="bg-[var(--royal-burgundy)]/5">
                  <CardTitle className="text-lg text-[var(--royal-burgundy)]">
                    {resistanceWar1.title}
                  </CardTitle>
                  <p className="text-sm text-[var(--text-muted)]">
                    <strong>Chủ trương:</strong> {resistanceWar1.policy}
                  </p>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="font-semibold text-[var(--timeless-navy)] mb-3">Thành tựu lớn:</p>
                  <ul className="space-y-2">
                    {resistanceWar1.achievements.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="w-5 h-5 rounded-full bg-[var(--antique-gold)] text-white text-xs flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-[var(--text-muted)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Kháng chiến chống Mỹ */}
              <Card className="border-t-4 border-t-[var(--antique-gold)]">
                <CardHeader className="bg-[var(--antique-gold)]/5">
                  <CardTitle className="text-lg text-[var(--royal-burgundy)]">
                    {resistanceWar2.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    {resistanceWar2.points.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="w-5 h-5 rounded-full bg-[var(--antique-gold)] text-white text-xs flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </span>
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

      {/* Hai nhiệm vụ chiến lược */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                3. Hai Nhiệm Vụ Chiến Lược
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {strategicTasks.map((task, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--timeless-navy)] flex items-center justify-center">
                        <task.icon className="w-5 h-5 text-[var(--antique-gold)]" />
                      </div>
                      <CardTitle className="text-lg">{task.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {task.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-[var(--rustic-olive)] flex-shrink-0 mt-0.5" />
                          <span className="text-[var(--text-muted)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vai trò của Đảng */}
      <section className="py-16 bg-[var(--timeless-navy)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[var(--antique-gold)] flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
                4. Vai Trò Của Đảng
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {partyRoles.map((role, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[var(--antique-gold)] text-white text-xs flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-white/90 text-sm">{role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kết quả và ý nghĩa */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                5. Kết Quả Và Ý Nghĩa Lịch Sử
              </h2>
            </div>
            
            <Card className="bg-gradient-to-br from-[var(--antique-parchment)] to-white">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[var(--timeless-navy)] font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
