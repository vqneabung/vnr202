import { Flag, Sword, Target, Trophy, Calendar, MapPin, Users, Star, ChevronRight } from "lucide-react";
import Link from "next/link";

const resistanceWar1 = {
  period: "1945 - 1954",
  title: "Kháng Chiến Chống Thực Dân Pháp",
  subtitle: "9 năm trường kỳ kháng chiến",
  policy: "Toàn dân, toàn diện, lâu dài, tự lực cánh sinh",
  color: "from-[#8B1A1A] to-[#5a1111]",
  borderColor: "border-[#8B1A1A]",
  textColor: "text-[#8B1A1A]",
  milestones: [
    { year: "1946", event: "Toàn quốc kháng chiến" },
    { year: "1950", event: "Chiến thắng Biên giới" },
    { year: "1954", event: "Chiến thắng Điện Biên Phủ" },
  ],
  achievements: [
    "Xây dựng chính quyền dân chủ nhân dân vững mạnh",
    "Củng cố và phát triển Mặt trận Việt Minh",
    "Xây dựng lực lượng vũ trang ba thứ quân",
    "Tiến hành cải cách ruộng đất ở vùng tự do",
  ],
  highlight: "Chiến thắng Điện Biên Phủ \"lừng lẫy năm châu, chấn động địa cầu\"",
  link: "/chi-tiet/khang-chien-chong-phap"
};

const resistanceWar2 = {
  period: "1954 - 1975",
  title: "Kháng Chiến Chống Đế Quốc Mỹ",
  subtitle: "21 năm đấu tranh giành thống nhất",
  policy: "Kết hợp đấu tranh chính trị với đấu tranh vũ trang",
  color: "from-[#C9A227] to-[#8B6914]",
  borderColor: "border-[#C9A227]",
  textColor: "text-[#C9A227]",
  milestones: [
    { year: "1960", event: "Thành lập MTDTGPMN" },
    { year: "1968", event: "Tổng tiến công Mậu Thân" },
    { year: "1975", event: "Đại thắng mùa Xuân" },
  ],
  achievements: [
    "Miền Bắc xây dựng CNXH, là hậu phương vững chắc",
    "Miền Nam đấu tranh chính trị kết hợp vũ trang",
    "Đánh bại 4 chiến lược chiến tranh của Mỹ",
    "Thống nhất đất nước, non sông thu về một mối",
  ],
  highlight: "Chiến dịch Hồ Chí Minh lịch sử - 30/4/1975",
  link: "/chi-tiet/khang-chien-chong-my"
};

export default function TwoResistances() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F1C3F]/10 rounded-full mb-6">
              <Flag className="w-4 h-4 text-[#0F1C3F]" />
              <span className="text-sm font-medium text-[#0F1C3F]">Phần 2</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C3F] mb-4">
              Hai Cuộc <span className="text-[#8B1A1A]">Kháng Chiến</span> Vĩ Đại
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              30 năm liên tục đấu tranh, dân tộc Việt Nam đã đánh bại hai đế quốc lớn nhất thế kỷ XX
            </p>
          </div>

          {/* Two Wars Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {[resistanceWar1, resistanceWar2].map((war, idx) => (
              <div 
                key={idx}
                className={`relative bg-white rounded-3xl overflow-hidden border-2 ${war.borderColor} 
                           shadow-lg hover:shadow-2xl transition-all duration-300 group`}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${war.color} p-6 text-white`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{war.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{war.title}</h3>
                  <p className="text-white/80 text-sm">{war.subtitle}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Policy */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm">
                      <span className="font-semibold text-[#0F1C3F]">Đường lối:</span>{" "}
                      <span className="text-gray-600 italic">{war.policy}</span>
                    </p>
                  </div>

                  {/* Milestones */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#0F1C3F] mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Các mốc quan trọng
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {war.milestones.map((m, i) => (
                        <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg text-sm">
                          <span className={`font-bold ${war.textColor}`}>{m.year}</span>
                          <span className="text-gray-600">{m.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#0F1C3F] mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Thành tựu nổi bật
                    </h4>
                    <ul className="space-y-2">
                      {war.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${war.color}`}></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlight */}
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${war.color} text-white mb-4`}>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      <p className="font-medium text-sm">{war.highlight}</p>
                    </div>
                  </div>

                  {/* Link */}
                  <Link 
                    href={war.link}
                    className={`inline-flex items-center gap-2 ${war.textColor} font-medium text-sm 
                               hover:gap-3 transition-all group-hover:underline`}
                  >
                    Xem chi tiết
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
