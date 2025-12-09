import { CheckCircle, Users, Target, Shield, Globe, Heart, Lightbulb, Star } from "lucide-react";

const partyRoles = [
  {
    icon: Target,
    title: "Đường lối đúng đắn",
    description: "Đề ra đường lối kháng chiến toàn dân, toàn diện, lâu dài",
  },
  {
    icon: Users,
    title: "Đại đoàn kết",
    description: "Huy động sức mạnh đại đoàn kết dân tộc",
  },
  {
    icon: Globe,
    title: "Kết hợp sức mạnh",
    description: "Kết hợp sức mạnh dân tộc với sức mạnh thời đại",
  },
  {
    icon: Shield,
    title: "Lực lượng vũ trang",
    description: "Tổ chức và lãnh đạo lực lượng vũ trang nhân dân",
  },
  {
    icon: Lightbulb,
    title: "Kiên định mục tiêu",
    description: "Độc lập dân tộc gắn với chủ nghĩa xã hội",
  },
];

export default function PartyRoleSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B1A1A]/10 rounded-full mb-6">
                <Users className="w-4 h-4 text-[#8B1A1A]" />
                <span className="text-sm font-medium text-[#8B1A1A]">Vai trò lãnh đạo</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C3F] mb-6">
                Vai Trò Lãnh Đạo Của <span className="text-[#8B1A1A]">Đảng</span>
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Đảng Cộng sản Việt Nam đã phát huy vai trò hạt nhân lãnh đạo, 
                đưa ra những quyết sách đúng đắn, sáng tạo, đưa cách mạng Việt Nam 
                từ thắng lợi này đến thắng lợi khác.
              </p>
              
              {/* Roles List */}
              <div className="space-y-4">
                {partyRoles.map((role, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center flex-shrink-0
                                    shadow group-hover:scale-110 transition-transform duration-300">
                      <role.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F1C3F] group-hover:text-[#8B1A1A] transition-colors">{role.title}</h4>
                      <p className="text-gray-600 text-sm">{role.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Quote Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0F1C3F] to-[#1a2d5a] rounded-3xl p-8 md:p-10 text-white">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A227] rounded-full blur-3xl opacity-20"></div>
                
                <div className="relative z-10">
                  <Star className="w-10 h-10 text-[#C9A227] mb-6" />
                  
                  <blockquote className="text-xl md:text-2xl italic mb-6 leading-relaxed">
                    &ldquo;Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự 
                    thấm nhuần đạo đức cách mạng&rdquo;
                  </blockquote>
                  
                  <cite className="text-[#C9A227] font-semibold text-lg not-italic block">
                    — Chủ tịch Hồ Chí Minh
                  </cite>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#C9A227]">30</p>
                    <p className="text-white/60 text-sm">Năm lãnh đạo</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#C9A227]">2</p>
                    <p className="text-white/60 text-sm">Đế quốc</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#C9A227]">1</p>
                    <p className="text-white/60 text-sm">Thắng lợi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
