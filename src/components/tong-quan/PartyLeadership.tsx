import { Users, Target, Shield, Heart, Globe, Lightbulb, Star } from "lucide-react";

const partyRoles = [
  {
    icon: Target,
    title: "Đề ra đường lối đúng đắn",
    description: "Xác định chiến lược kháng chiến toàn dân, toàn diện, lâu dài, tự lực cánh sinh",
    color: "from-[#C9A227] to-[#8B6914]"
  },
  {
    icon: Shield,
    title: "Xây dựng hậu phương vững chắc",
    description: "Miền Bắc trở thành căn cứ địa cách mạng, chi viện toàn diện cho miền Nam",
    color: "from-[#0F1C3F] to-[#1a2d5a]"
  },
  {
    icon: Globe,
    title: "Kết hợp sức mạnh thời đại",
    description: "Tranh thủ sự ủng hộ của Liên Xô, Trung Quốc và phe XHCN, phong trào hòa bình thế giới",
    color: "from-[#8B1A1A] to-[#5a1111]"
  },
  {
    icon: Heart,
    title: "Phát huy đại đoàn kết dân tộc",
    description: "Tập hợp mọi tầng lớp, mọi thành phần dưới ngọn cờ độc lập dân tộc",
    color: "from-[#2E7D32] to-[#1b5e20]"
  },
  {
    icon: Lightbulb,
    title: "Kiên định mục tiêu chiến lược",
    description: "Độc lập dân tộc gắn liền với chủ nghĩa xã hội, không đi chệch hướng",
    color: "from-[#C9A227] to-[#8B6914]"
  },
  {
    icon: Users,
    title: "Tổ chức lực lượng toàn dân",
    description: "Xây dựng lực lượng vũ trang ba thứ quân, đưa chiến tranh nhân dân lên đỉnh cao",
    color: "from-[#0F1C3F] to-[#1a2d5a]"
  }
];

export default function PartyLeadership() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F1C3F]/10 rounded-full mb-6">
              <Users className="w-4 h-4 text-[#0F1C3F]" />
              <span className="text-sm font-medium text-[#0F1C3F]">Phần 4</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C3F] mb-4">
              Vai Trò <span className="text-[#8B1A1A]">Lãnh Đạo</span> Của Đảng
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Đảng Cộng sản Việt Nam đã thể hiện vai trò lãnh đạo sáng suốt, 
              đưa dân tộc đi từ thắng lợi này đến thắng lợi khác
            </p>
          </div>

          {/* Roles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partyRoles.map((role, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm
                           hover:shadow-xl hover:border-[#C9A227]/30 transition-all duration-300
                           hover:transform hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-5
                                shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <role.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0F1C3F] mb-2 group-hover:text-[#8B1A1A] transition-colors">
                  {role.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-16 text-center">
            <div className="inline-block max-w-2xl p-8 bg-gradient-to-r from-[#0F1C3F] to-[#1a2d5a] rounded-2xl text-white">
              <Star className="w-8 h-8 text-[#C9A227] mx-auto mb-4" />
              <p className="text-xl italic mb-4">
                "Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự 
                thấm nhuần đạo đức cách mạng"
              </p>
              <cite className="text-[#C9A227] font-medium not-italic">— Chủ tịch Hồ Chí Minh</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
