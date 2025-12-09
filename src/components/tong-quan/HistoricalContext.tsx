import { BookOpen, AlertTriangle, Skull, Wheat, GraduationCap, Swords } from "lucide-react";

const challenges = [
  {
    icon: Swords,
    title: "Thù trong giặc ngoài",
    description: "20 vạn quân Tưởng ở miền Bắc, quân Anh và Pháp ở miền Nam, cùng các thế lực phản động trong nước",
    color: "from-[#8B1A1A] to-[#5a1111]"
  },
  {
    icon: Skull,
    title: "Nạn đói hoành hành",
    description: "Hơn 2 triệu đồng bào chết đói năm 1945, kinh tế kiệt quệ sau chiến tranh thế giới",
    color: "from-[#0F1C3F] to-[#1a2d5a]"
  },
  {
    icon: GraduationCap,
    title: "Giặc dốt đe dọa",
    description: "95% dân số mù chữ, hệ thống giáo dục thuộc địa lạc hậu, thiếu cán bộ trầm trọng",
    color: "from-[#C9A227] to-[#8B6914]"
  },
  {
    icon: Wheat,
    title: "Ngân khố trống rỗng",
    description: "Nhà nước không có tiền, lạm phát phi mã, đời sống nhân dân cực kỳ khó khăn",
    color: "from-[#2E7D32] to-[#1b5e20]"
  }
];

export default function HistoricalContext() {
  return (
    <section id="historical-context" className="py-20 md:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F1C3F]/10 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-[#0F1C3F]" />
              <span className="text-sm font-medium text-[#0F1C3F]">Phần 1</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C3F] mb-4">
              Bối Cảnh <span className="text-[#8B1A1A]">Lịch Sử</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Sau Cách mạng Tháng Tám 1945, chính quyền non trẻ phải đối mặt với 
              "thù trong giặc ngoài" và tình thế "ngàn cân treo sợi tóc"
            </p>
          </div>

          {/* Alert Banner */}
          <div className="bg-gradient-to-r from-[#8B1A1A] to-[#0F1C3F] rounded-2xl p-6 md:p-8 mb-12 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-[#C9A227]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tình thế "Ngàn cân treo sợi tóc"</h3>
                <p className="text-white/80 leading-relaxed">
                  Đảng và Chính phủ phải đồng thời giải quyết ba nhiệm vụ cấp bách: 
                  <strong className="text-[#C9A227]"> Diệt giặc đói, diệt giặc dốt, diệt giặc ngoại xâm</strong>. 
                  Đây là thử thách sinh tử của chính quyền cách mạng non trẻ.
                </p>
              </div>
            </div>
          </div>

          {/* Challenges Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm
                           hover:shadow-xl hover:border-[#C9A227]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${challenge.color} flex items-center justify-center flex-shrink-0
                                  group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <challenge.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F1C3F] mb-2 group-hover:text-[#8B1A1A] transition-colors">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline indicator */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#0F1C3F]/5 rounded-full">
              <span className="text-sm font-medium text-[#0F1C3F]">Tháng 9/1945</span>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A227] to-[#8B1A1A]"></div>
              <span className="text-sm font-medium text-[#8B1A1A]">Bắt đầu kháng chiến</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
