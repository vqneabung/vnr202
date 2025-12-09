import { Clock, Flag, Trophy, MapPin, Sparkles } from "lucide-react";

const heroStats = [
  { icon: Clock, value: "21", label: "Năm đấu tranh" },
  { icon: Flag, value: "2", label: "Miền thống nhất" },
  { icon: Trophy, value: "1975", label: "Đại thắng" },
];

export default function KhangChienMyHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://special.vietnamplus.vn/wp-content/uploads/2021/03/ttxvntongt-1588123540-60.jpg"
          alt="Xe tăng tiến vào Dinh Độc Lập"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#C9A227] rounded-full blur-3xl opacity-15"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#8B1A1A] rounded-full blur-3xl opacity-15"></div>
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-[#C9A227]" />
              <span className="text-[#C9A227] text-sm font-semibold tracking-wider">1954 — 1975</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Lãnh Đạo Xây Dựng CNXH Ở Miền Bắc
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#FFD700]">
                Và Kháng Chiến Chống Mỹ
              </span>
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4">
              21 năm đấu tranh anh dũng, kết thúc bằng Đại thắng mùa Xuân 1975, 
              thống nhất hoàn toàn đất nước.
            </p>

            <div className="flex items-center justify-center gap-2 text-white/60">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Sài Gòn - 30/4/1975 - Ngày Thống Nhất</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {heroStats.map((stat, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20
                           hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
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
            fill="#F5EDE0" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
