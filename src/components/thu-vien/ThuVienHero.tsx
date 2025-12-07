import { Image as ImageIcon } from "lucide-react";

export default function ThuVienHero() {
  return (
    <section className="bg-gradient-to-br from-[var(--timeless-navy)] to-[var(--royal-burgundy)] py-16 md:py-24">
      <div className="container mx-auto px-4">
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
