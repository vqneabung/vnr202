import { Globe, Flag, Heart, Trophy, TrendingUp, Users, Sparkles } from "lucide-react";

const impacts = [
  {
    icon: Flag,
    title: "Cổ vũ phong trào giải phóng",
    description: "Thắng lợi của Việt Nam đã cổ vũ mạnh mẽ các dân tộc bị áp bức trên toàn thế giới đứng lên đấu tranh"
  },
  {
    icon: Trophy,
    title: "Đánh bại chủ nghĩa đế quốc",
    description: "Chứng minh rằng các dân tộc nhỏ hoàn toàn có thể chiến thắng các cường quốc xâm lược"
  },
  {
    icon: Heart,
    title: "Biểu tượng của hòa bình",
    description: "Việt Nam trở thành biểu tượng của tinh thần yêu chuộng hòa bình, chống chiến tranh phi nghĩa"
  },
  {
    icon: TrendingUp,
    title: "Nâng cao vị thế quốc tế",
    description: "Việt Nam được thế giới tôn trọng, thiết lập quan hệ ngoại giao với nhiều quốc gia"
  },
];

const worldReactions = [
  { region: "Châu Á", response: "Cổ vũ phong trào đấu tranh tại Lào, Campuchia, các nước Đông Nam Á" },
  { region: "Châu Phi", response: "Thúc đẩy phong trào giải phóng dân tộc, chống thực dân" },
  { region: "Châu Mỹ Latin", response: "Truyền cảm hứng cho các cuộc cách mạng xã hội" },
  { region: "Phương Tây", response: "Phong trào phản chiến mạnh mẽ, đoàn kết với Việt Nam" },
];

export default function InternationalImpact() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F1C3F]/10 rounded-full mb-6">
              <Globe className="w-4 h-4 text-[#0F1C3F]" />
              <span className="text-sm font-medium text-[#0F1C3F]">Phần 4</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C3F] mb-4">
              Ý Nghĩa <span className="text-[#C9A227]">Quốc Tế</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Thắng lợi của cách mạng Việt Nam đã có tiếng vang và ảnh hưởng sâu rộng trên toàn thế giới
            </p>
          </div>

          {/* Impact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {impacts.map((impact, index) => (
              <div 
                key={index}
                className="group flex gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100
                           hover:shadow-xl hover:border-[#C9A227]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0F1C3F] to-[#1a2d5a] flex items-center justify-center flex-shrink-0
                                shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <impact.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F1C3F] mb-2 group-hover:text-[#8B1A1A] transition-colors">
                    {impact.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* World Reactions */}
          <div className="bg-gradient-to-r from-[#0F1C3F] to-[#1a2d5a] rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-[#C9A227]" />
              <h3 className="text-xl font-bold">Phản Ứng Của Thế Giới</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {worldReactions.map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-[#C9A227]" />
                    <span className="font-semibold text-[#C9A227]">{item.region}</span>
                  </div>
                  <p className="text-white/80 text-sm">{item.response}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="mt-12 text-center">
            <div className="inline-block max-w-3xl p-8 bg-[#f8f9fa] rounded-2xl border border-gray-100">
              <Sparkles className="w-8 h-8 text-[#C9A227] mx-auto mb-4" />
              <p className="text-xl italic text-[#0F1C3F] mb-4 leading-relaxed">
                "Thắng lợi của nhân dân Việt Nam là thắng lợi của tất cả các dân tộc bị áp bức, 
                là niềm tin và hy vọng cho những ai đang đấu tranh vì độc lập, tự do"
              </p>
              <cite className="text-gray-600 text-sm not-italic">— Nhận định của cộng đồng quốc tế</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
