import { Award, BookOpen, Users, Star, Heart, Lightbulb, Flag, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const significance1945_1975 = [
  {
    icon: Flag,
    title: "Hoàn thành cách mạng dân tộc dân chủ nhân dân",
    description: "Kết thúc hơn một thế kỷ đô hộ của thực dân, đế quốc, giành lại độc lập hoàn toàn cho dân tộc.",
  },
  {
    icon: Star,
    title: "Khẳng định con đường cách mạng Việt Nam",
    description: "Chứng minh đường lối đúng đắn của Đảng trong việc kết hợp đấu tranh dân tộc với đấu tranh giai cấp.",
  },
  {
    icon: Shield,
    title: "Đưa cả nước đi lên CNXH",
    description: "Tạo tiền đề vững chắc để cả nước thống nhất tiến lên xây dựng chủ nghĩa xã hội.",
  },
];

const valuesToday = [
  {
    icon: Users,
    title: "Bài học về đại đoàn kết toàn dân",
    description: "Sức mạnh của nhân dân khi đoàn kết dưới sự lãnh đạo của Đảng là vô địch. Bài học này vẫn còn nguyên giá trị trong công cuộc xây dựng và bảo vệ Tổ quốc ngày nay.",
    color: "var(--royal-burgundy)",
  },
  {
    icon: Lightbulb,
    title: "Nghệ thuật quân sự nhân dân",
    description: "Chiến tranh nhân dân Việt Nam với sự kết hợp sáng tạo giữa đấu tranh quân sự, chính trị, ngoại giao đã trở thành di sản quý báu của dân tộc.",
    color: "var(--antique-gold)",
  },
  {
    icon: BookOpen,
    title: "Tầm quan trọng của Đảng trong lãnh đạo cách mạng",
    description: "Sự lãnh đạo thống nhất, đúng đắn của Đảng là nhân tố quyết định mọi thắng lợi. Đảng luôn gắn bó máu thịt với nhân dân.",
    color: "var(--timeless-navy)",
  },
  {
    icon: Heart,
    title: "Niềm tự hào dân tộc, ý chí tự lực tự cường",
    description: "Tinh thần \"Không có gì quý hơn độc lập, tự do\" của Chủ tịch Hồ Chí Minh mãi mãi là nguồn sức mạnh tinh thần vô giá.",
    color: "var(--rustic-olive)",
  },
];

const quotes = [
  {
    text: "Không có gì quý hơn độc lập, tự do",
    author: "Chủ tịch Hồ Chí Minh",
  },
  {
    text: "Dù phải đốt cháy cả dãy Trường Sơn cũng phải giành cho được độc lập",
    author: "Chủ tịch Hồ Chí Minh",
  },
];

const internationalSignificance = [
  "Nâng cao vị thế Việt Nam trên trường quốc tế",
  "Góp phần vào phong trào giải phóng dân tộc thế giới",
  "Cổ vũ mạnh mẽ các dân tộc bị áp bức đứng lên đấu tranh",
  "Làm thất bại chiến lược \"ngăn chặn\" của đế quốc Mỹ",
];

export default function YNghiaPage() {
  return (
    <div className="min-h-screen bg-[var(--antique-parchment)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--timeless-navy)] via-[#243570] to-[var(--royal-burgundy)] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-[var(--antique-gold)]" />
              <span className="text-white/80 text-sm">Giá Trị Lịch Sử</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Ý Nghĩa & Giá Trị Lịch Sử
            </h1>
            
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Những bài học từ giai đoạn 1945-1975 vẫn còn nguyên giá trị 
              trong công cuộc xây dựng và bảo vệ Tổ quốc ngày nay.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-[var(--royal-burgundy)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {quotes.map((quote, index) => (
                <blockquote key={index} className="text-center p-6">
                  <p className="text-xl md:text-2xl text-white italic mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <cite className="text-[var(--antique-gold)] font-medium">— {quote.author}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ý nghĩa thắng lợi 1945-1975 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                1. Ý Nghĩa Của Thắng Lợi 1945–1975
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {significance1945_1975.map((item, index) => (
                <Card key={index} className="border-t-4 border-t-[var(--antique-gold)] hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[var(--text-muted)] text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Giá trị còn lại đến hôm nay */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--rustic-olive)] to-[var(--timeless-navy)] flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                2. Giá Trị Còn Lại Đến Hôm Nay
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {valuesToday.map((value, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-2" style={{ backgroundColor: value.color }}></div>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${value.color}20` }}
                      >
                        <value.icon className="w-6 h-6" style={{ color: value.color }} />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">{value.title}</CardTitle>
                        <p className="text-[var(--text-muted)] text-sm">{value.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ý nghĩa quốc tế */}
      <section className="py-16 bg-[var(--timeless-navy)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Ý Nghĩa Quốc Tế
              </h2>
              <p className="text-[var(--ancient-stone)]">
                Thắng lợi của Việt Nam có tầm vóc và ý nghĩa thời đại to lớn
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {internationalSignificance.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--antique-gold)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kết luận */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-br from-[var(--antique-parchment)] to-white p-8 border-2 border-[var(--antique-gold)]">
              <CardContent className="pt-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--timeless-navy)] mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Kết Luận
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  Giai đoạn 1945-1975 đã khẳng định sức mạnh vô địch của khối đại đoàn kết toàn dân tộc 
                  dưới sự lãnh đạo của Đảng Cộng sản Việt Nam. Những bài học từ hai cuộc kháng chiến 
                  vĩ đại không chỉ là niềm tự hào mà còn là nguồn sức mạnh tinh thần to lớn, 
                  tiếp tục dẫn dắt dân tộc ta trong công cuộc xây dựng và bảo vệ Tổ quốc Việt Nam 
                  xã hội chủ nghĩa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
