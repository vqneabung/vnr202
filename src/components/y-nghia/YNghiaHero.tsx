import { Award, Sparkles, BookOpen, Heart, Star } from "lucide-react";

const highlights = [
  { icon: BookOpen, label: "30 năm lịch sử", value: "1945-1975" },
  { icon: Heart, label: "Tinh thần dân tộc", value: "Bất khuất" },
  { icon: Star, label: "Di sản", value: "Vĩ đại" },
];

export default function YNghiaHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://danviet.ex-cdn.com/files/f1/2021/4/28/11-161959012348422416202.jpg"
          alt="Bác Hồ với thanh niên"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#C9A227] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8B1A1A] rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-[#C9A227]" />
              <span className="text-white/90 text-sm font-medium">Di Sản Lịch Sử Việt Nam</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ý Nghĩa & Giá Trị{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#FFD700]">
                Lịch Sử
              </span>
            </h1>
            
            <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              Khám phá những giá trị trường tồn và bài học quý báu từ giai đoạn hào hùng 1945-1975,
              nguồn cảm hứng vô tận cho các thế hệ hôm nay và mai sau
            </p>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20
                           hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white/70 text-sm">{item.label}</p>
                  <p className="text-white font-bold text-lg">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#f8f9fa" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
