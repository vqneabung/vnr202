import { Target, Building, Flag, Rocket, Factory, GraduationCap, Heart, Swords, Globe } from "lucide-react";

const northTasks = [
  { icon: Factory, text: "Cải cách ruộng đất, khôi phục kinh tế sau chiến tranh" },
  { icon: Building, text: "Xây dựng công nghiệp nặng và công nghiệp nhẹ" },
  { icon: GraduationCap, text: "Phát triển văn hóa, giáo dục, y tế" },
  { icon: Heart, text: "Chi viện sức người, sức của cho miền Nam" },
];

const southTasks = [
  { icon: Flag, text: "Đấu tranh chính trị, biểu tình, đình công" },
  { icon: Swords, text: "Đấu tranh vũ trang, xây dựng căn cứ địa" },
  { icon: Globe, text: "Đấu tranh ngoại giao, tranh thủ quốc tế" },
  { icon: Rocket, text: "Tiến tới Tổng tiến công và nổi dậy 1975" },
];

export default function StrategicTasks() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F1C3F]/10 rounded-full mb-6">
              <Target className="w-4 h-4 text-[#0F1C3F]" />
              <span className="text-sm font-medium text-[#0F1C3F]">Phần 3</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C3F] mb-4">
              Hai Nhiệm Vụ <span className="text-[#C9A227]">Chiến Lược</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Tiến hành đồng thời hai nhiệm vụ chiến lược: Xây dựng CNXH ở miền Bắc 
              và Giải phóng miền Nam, thống nhất đất nước
            </p>
          </div>

          {/* Two Columns */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Miền Bắc */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <div className="bg-gradient-to-r from-[#0F1C3F] to-[#1a2d5a] p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Xây Dựng CNXH ở Miền Bắc</h3>
                    <p className="text-white/70 text-sm">Hậu phương vững chắc của cả nước</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {northTasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-[#0F1C3F]/10 flex items-center justify-center flex-shrink-0
                                      group-hover:bg-[#0F1C3F] transition-colors">
                        <task.icon className="w-5 h-5 text-[#0F1C3F] group-hover:text-white transition-colors" />
                      </div>
                      <p className="text-gray-700 pt-2">{task.text}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-[#0F1C3F]/5 rounded-xl">
                  <p className="text-sm text-[#0F1C3F] font-medium text-center">
                    "Đại hậu phương" cho tiền tuyến lớn
                  </p>
                </div>
              </div>
            </div>

            {/* Miền Nam */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <div className="bg-gradient-to-r from-[#8B1A1A] to-[#a52525] p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Flag className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Giải Phóng Miền Nam</h3>
                    <p className="text-white/70 text-sm">Tiền tuyến lớn của cách mạng</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {southTasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-[#8B1A1A]/10 flex items-center justify-center flex-shrink-0
                                      group-hover:bg-[#8B1A1A] transition-colors">
                        <task.icon className="w-5 h-5 text-[#8B1A1A] group-hover:text-white transition-colors" />
                      </div>
                      <p className="text-gray-700 pt-2">{task.text}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-[#8B1A1A]/5 rounded-xl">
                  <p className="text-sm text-[#8B1A1A] font-medium text-center">
                    "Tiền tuyến lớn" của Nhân dân Việt Nam
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Connection line */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#0F1C3F] via-[#C9A227] to-[#8B1A1A] rounded-2xl text-white">
              <span className="font-medium">Miền Bắc</span>
              <div className="flex items-center gap-1">
                <div className="w-8 h-0.5 bg-white/50"></div>
                <Heart className="w-5 h-5 text-[#C9A227]" />
                <div className="w-8 h-0.5 bg-white/50"></div>
              </div>
              <span className="font-medium">Miền Nam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
