import { Sparkles } from "lucide-react";

export default function ThuVienHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.baodantoc.vn/uploads/2021/Th%C3%A1ng_12/Ng%C3%A0y_18/Nga/82F2C31D-4736-4A67-957E-BC39E1A49C10.jpg"
          alt="Background"
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
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-[#C9A227]" />
              <span className="text-[#C9A227] text-sm font-semibold tracking-wider">Tư Liệu Lịch Sử</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Thư Viện{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#FFD700]">
                Hình Ảnh & Video
              </span>
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Tài liệu hình ảnh và video quý giá về hai cuộc kháng chiến vĩ đại 
              của dân tộc Việt Nam
            </p>
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
