import { Building, CheckCircle, Shield, Users, Swords } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const tasks = [
  { icon: Building, text: "Xây dựng chính quyền dân chủ nhân dân" },
  { icon: Users, text: "Củng cố Mặt trận Việt Minh" },
  { icon: Swords, text: "Chỉnh huấn, xây dựng lực lượng vũ trang" },
  { icon: Shield, text: "Phát động phong trào kháng chiến toàn dân" },
];

export default function GovernmentEstablishment() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center shadow-lg">
                  <Building className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-wider">Giai đoạn 1</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F1C3F]">
                    Thiết Lập & Bảo Vệ Chính Quyền
                  </h2>
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Sau Cách mạng Tháng Tám 1945, Đảng ta tập trung lãnh đạo xây dựng và bảo vệ 
                chính quyền cách mạng non trẻ trong hoàn cảnh "thù trong giặc ngoài".
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {tasks.map((task, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F1C3F] to-[#1a2d5a] flex items-center justify-center flex-shrink-0">
                        <task.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[#0F1C3F] font-medium text-sm leading-tight">{task.text}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A227]/20 to-[#8B1A1A]/20 rounded-3xl blur-2xl"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2023-09/bac_ho.jpg"
                  alt="Bác Hồ đọc tuyên ngôn độc lập"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-medium">Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập</p>
                  <p className="text-white/70 text-sm">2/9/1945 - Ba Đình, Hà Nội</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
