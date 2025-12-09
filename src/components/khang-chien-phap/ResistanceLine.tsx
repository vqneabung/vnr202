import { Flag, Target, Users, Zap, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const principles = [
  { icon: Users, title: "Toàn dân", desc: "Huy động sức mạnh toàn dân tộc tham gia kháng chiến" },
  { icon: Target, title: "Toàn diện", desc: "Kết hợp quân sự, chính trị, kinh tế, văn hóa, ngoại giao" },
  { icon: Zap, title: "Lâu dài", desc: "Kiên trì đấu tranh, từng bước đánh bại kẻ thù" },
  { icon: Globe, title: "Tự lực cánh sinh", desc: "Dựa vào sức mình là chính, tranh thủ sự ủng hộ quốc tế" },
];

export default function ResistanceLine() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0F1C3F] via-[#1a2d5a] to-[#0F1C3F] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8B1A1A] rounded-full blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center shadow-lg">
                <Flag className="w-7 h-7 text-white" />
              </div>
            </div>
            <span className="text-[#C9A227] text-sm font-semibold uppercase tracking-wider">Giai đoạn 2</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-4">
              Đường Lối Kháng Chiến Toàn Dân
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Đường lối kháng chiến của Đảng: <span className="text-[#C9A227] font-semibold">Toàn dân, toàn diện, lâu dài, tự lực cánh sinh</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <blockquote className="text-lg md:text-xl text-white/80 italic max-w-3xl mx-auto border-l-4 border-[#C9A227] pl-6 text-left">
              "Phát huy sức mạnh toàn dân tộc, kết hợp với sức mạnh thời đại, 
              kết hợp đấu tranh quân sự, chính trị, ngoại giao."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
