import { Image as ImageIcon } from "lucide-react";

export default function ThuVienHero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image Frame */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img 
          src="https://images.baodantoc.vn/uploads/2021/Th%C3%A1ng_12/Ng%C3%A0y_18/Nga/82F2C31D-4736-4A67-957E-BC39E1A49C10.jpg" /* TODO: Add background image URL here */
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <ImageIcon className="w-4 h-4 text-[var(--antique-gold)]" />
            <span className="text-white/80 text-sm">Hình Ảnh & Video</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Thư Viện{" "}
            <span className="text-[var(--antique-gold)]">Hình Ảnh & Video</span>
          </h1>
          
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Tài liệu hình ảnh và video lịch sử về hai cuộc kháng chiến vĩ đại
          </p>
        </div>
      </div>
    </section>
  );
}
