import { Lightbulb, Heart, Shield, Users, Flame, Target, Compass, Rocket } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Tinh thần yêu nước",
    description: "Lòng yêu nước nồng nàn, sẵn sàng hy sinh vì độc lập tự do của Tổ quốc",
    color: "from-[#8B1A1A] to-[#5a1111]"
  },
  {
    icon: Shield,
    title: "Ý chí tự lực tự cường",
    description: "Tự tin vào sức mạnh của dân tộc, không phụ thuộc vào bên ngoài",
    color: "from-[#0F1C3F] to-[#1a2d5a]"
  },
  {
    icon: Users,
    title: "Đoàn kết thống nhất",
    description: "Sức mạnh đại đoàn kết toàn dân tộc là nguồn lực vô tận",
    color: "from-[#C9A227] to-[#8B6914]"
  },
  {
    icon: Flame,
    title: "Kiên trì bền bỉ",
    description: "Không ngại khó khăn, gian khổ, kiên định con đường đã chọn",
    color: "from-[#2E7D32] to-[#1b5e20]"
  },
  {
    icon: Target,
    title: "Mục tiêu rõ ràng",
    description: "Xác định mục tiêu đúng đắn và kiên quyết thực hiện đến cùng",
    color: "from-[#8B1A1A] to-[#5a1111]"
  },
  {
    icon: Compass,
    title: "Sáng tạo linh hoạt",
    description: "Vận dụng sáng tạo lý luận vào thực tiễn cách mạng Việt Nam",
    color: "from-[#0F1C3F] to-[#1a2d5a]"
  },
];

const applications = [
  "Xây dựng và bảo vệ Tổ quốc trong thời kỳ mới",
  "Phát triển kinh tế - xã hội bền vững",
  "Hội nhập quốc tế sâu rộng, giữ vững bản sắc dân tộc",
  "Giáo dục thế hệ trẻ về truyền thống cách mạng",
];

export default function ModernValues() {
  return (
    <section className="py-20 md:py-28 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227]/10 rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-[#C9A227]" />
              <span className="text-sm font-medium text-[#0F1C3F]">Phần 3</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C3F] mb-4">
              Giá Trị Cho <span className="text-[#C9A227]">Ngày Hôm Nay</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Những bài học quý báu từ lịch sử vẫn còn nguyên giá trị trong công cuộc xây dựng đất nước
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100
                           hover:shadow-xl hover:border-[#C9A227]/30 transition-all duration-300
                           hover:transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4
                                shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0F1C3F] mb-2 group-hover:text-[#8B1A1A] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Application Box */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F1C3F]">Vận Dụng Trong Thời Đại Mới</h3>
                <p className="text-gray-500 text-sm">Áp dụng bài học lịch sử vào thực tiễn</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {applications.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-[#C9A227] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
