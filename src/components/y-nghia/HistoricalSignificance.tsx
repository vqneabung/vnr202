import { Award, Flag, Shield, Sunrise, Users, Star, CheckCircle2 } from "lucide-react";

const significanceItems = [
  {
    icon: Flag,
    title: "Hoàn thành giải phóng dân tộc",
    description: "Chấm dứt hoàn toàn ách thống trị của chủ nghĩa thực dân, đế quốc sau hơn 100 năm",
    color: "from-[#8B1A1A] to-[#5a1111]"
  },
  {
    icon: Users,
    title: "Thống nhất đất nước",
    description: "Non sông thu về một mối, Nam Bắc sum họp một nhà sau 21 năm chia cắt",
    color: "from-[#0F1C3F] to-[#1a2d5a]"
  },
  {
    icon: Sunrise,
    title: "Mở ra kỷ nguyên mới",
    description: "Độc lập, tự do, thống nhất - cả nước cùng đi lên chủ nghĩa xã hội",
    color: "from-[#C9A227] to-[#8B6914]"
  },
  {
    icon: Shield,
    title: "Khẳng định vai trò của Đảng",
    description: "Đảng Cộng sản Việt Nam là lực lượng lãnh đạo duy nhất của cách mạng Việt Nam",
    color: "from-[#2E7D32] to-[#1b5e20]"
  },
];

const achievements = [
  "Đánh bại 2 đế quốc lớn nhất thế kỷ XX",
  "Giải phóng hoàn toàn miền Nam",
  "Bảo vệ vững chắc miền Bắc XHCN",
  "Nâng cao vị thế Việt Nam trên trường quốc tế",
];

export default function HistoricalSignificance() {
  return (
    <section className="py-20 md:py-28 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F1C3F]/10 rounded-full mb-6">
              <Award className="w-4 h-4 text-[#0F1C3F]" />
              <span className="text-sm font-medium text-[#0F1C3F]">Phần 1</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C3F] mb-4">
              Ý Nghĩa <span className="text-[#8B1A1A]">Lịch Sử</span> Vĩ Đại
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Những thành tựu to lớn của cách mạng Việt Nam trong giai đoạn 1945-1975
            </p>
          </div>

          {/* Main Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {significanceItems.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100
                           hover:shadow-xl hover:border-[#C9A227]/30 transition-all duration-300
                           hover:transform hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5
                                shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F1C3F] mb-2 group-hover:text-[#8B1A1A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Achievement Summary */}
          <div className="bg-gradient-to-r from-[#0F1C3F] to-[#1a2d5a] rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-6 h-6 text-[#C9A227]" />
              <h3 className="text-xl font-bold">Thành Tựu Nổi Bật</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
