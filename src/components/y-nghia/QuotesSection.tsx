import { Quote, Star, Sparkles } from "lucide-react";

const quotes = [
  {
    text: "Không có gì quý hơn độc lập, tự do",
    author: "Chủ tịch Hồ Chí Minh",
    year: "1966",
    context: "Lời kêu gọi toàn quốc kháng chiến chống Mỹ"
  },
  {
    text: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công",
    author: "Chủ tịch Hồ Chí Minh",
    year: "1961",
    context: "Bài nói tại Đại hội đại biểu Mặt trận Tổ quốc Việt Nam lần thứ II"
  },
  {
    text: "Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước",
    author: "Chủ tịch Hồ Chí Minh",
    year: "1954",
    context: "Nói với cán bộ, chiến sĩ Đại đoàn Quân Tiên phong"
  },
];

export default function QuotesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227]/10 rounded-full mb-6">
              <Quote className="w-4 h-4 text-[#C9A227]" />
              <span className="text-sm font-medium text-[#0F1C3F]">Phần 2</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C3F] mb-4">
              Lời Dạy <span className="text-[#C9A227]">Của Bác</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Những câu nói bất hủ của Chủ tịch Hồ Chí Minh vẫn còn nguyên giá trị đến ngày nay
            </p>
          </div>

          {/* Quotes Grid */}
          <div className="space-y-6">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-r from-[#f8f9fa] to-white rounded-2xl p-8 
                           border-l-4 border-[#C9A227] shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center shadow-lg">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="pt-4">
                  <blockquote className="text-xl md:text-2xl italic text-[#0F1C3F] mb-4 leading-relaxed font-medium">
                    &ldquo;{quote.text}&rdquo;
                  </blockquote>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <cite className="flex items-center gap-2 text-[#8B1A1A] font-semibold not-italic">
                      <Star className="w-4 h-4 text-[#C9A227]" />
                      {quote.author}
                    </cite>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-500 text-sm">{quote.year}</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-500 text-sm italic">{quote.context}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Element */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-[#C9A227]">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Những lời vàng ngọc cho muôn đời</span>
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
