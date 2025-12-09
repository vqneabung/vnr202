import { Building, Target, Award, CheckCircle, Factory, BookOpen, Users, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const northTasks = [
  { icon: Factory, text: "Khôi phục kinh tế sau chiến tranh" },
  { icon: Users, text: "Cải tạo quan hệ sản xuất XHCN" },
  { icon: BookOpen, text: "Phát triển CN – NN – VH – GD" },
  { icon: Shield, text: "Xây dựng hệ thống chính trị XHCN" },
];

const northAchievements = [
  "Cải cách ruộng đất, hợp tác hoá nông nghiệp",
  "Công nghiệp được khôi phục và phát triển",
  "Văn hóa – giáo dục phát triển mạnh mẽ",
  "Miền Bắc trở thành hậu phương lớn cho miền Nam",
];

export default function NorthConstruction() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center shadow-lg">
                <Building className="w-7 h-7 text-white" />
              </div>
            </div>
            <span className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-wider">Giai đoạn 1</span>
            <h2 className="text-2xl md:text-4xl font-bold text-[#0F1C3F] mt-2 mb-4">
              Xây Dựng CNXH Ở Miền Bắc (1954–1975)
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Miền Bắc vừa xây dựng CNXH, vừa là hậu phương vững chắc cho tiền tuyến lớn miền Nam
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tasks */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[#0F1C3F] to-[#1a2d5a] text-white">
                <CardTitle className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-[#C9A227]" />
                  Nhiệm Vụ Chiến Lược
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {northTasks.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-[#C9A227]/10 transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F1C3F] to-[#1a2d5a] flex items-center justify-center group-hover:from-[#C9A227] group-hover:to-[#8B6914] transition-all">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[#0F1C3F] font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[#C9A227] to-[#8B6914] text-white">
                <CardTitle className="flex items-center gap-3">
                  <Award className="w-6 h-6" />
                  Thành Tựu Đạt Được
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {northAchievements.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-[#C9A227]/10 transition-colors">
                      <CheckCircle className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Image Banner */}
          <div className="mt-12 relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://vnanet.vn/Data/Articles/2020/01/09/4363084/vna_potal_90_nam_dcs_viet_nam_dang_lanh_dao_xay_dung_cnxh_o_mien_bac_va_dau_tranh_chong_my_-_nguy_o_mien_nam_1954_%E2%80%93_1965___151454403_stand.jpg"
              alt="Xây dựng miền Bắc XHCN"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white text-lg font-medium max-w-2xl">
                "Miền Bắc là hậu phương lớn, chi viện sức người, sức của cho tiền tuyến miền Nam"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
