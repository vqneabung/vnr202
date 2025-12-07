import { Image, MapPin, Play, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const dbpImages = [
  {
    src: "https://tulieuvankien.dangcongsan.vn/upload/3000006/20251024/1627d404874954f72444224748490b4911180583913_959dbf349f_o.jpg",
    caption: "Chiến thắng Điện Biên Phủ 1954",
  },
  {
    src: "https://file3.qdnd.vn/data/images/0/2024/05/08/upload_2072/dien%20bien%20phu%201954.jpg",
    caption: "Bộ đội ta tiến vào Điện Biên Phủ",
  },
  {
    src: "https://file3.qdnd.vn/data/images/0/2024/04/09/upload_2165/keo%20-%20phao-dien-bien-phu-2612-15-46-40.jpg",
    caption: "Kéo pháo vào trận địa",
  },
  {
    src: "https://cdnmedia.baotintuc.vn/Upload/3qVxwVtNEPp6Wp9kkF77g/files/2021/05/07/nhiep-anh-070521-6.jpg",
    caption: "Chiến sĩ Điện Biên Phủ",
  },
  {
    src: "https://tuyengiao.hungyen.dcs.vn/images/userfiles/images/0_cover-1651866011968.jpg",
    caption: "Kỷ niệm chiến thắng Điện Biên Phủ",
  },
  {
    src: "https://special.nhandan.vn/12-4-1954-chien-dich-Dien-Bien-Phu/assets/l3z2UjDaB6/bk.1537_resize-1420x944.jpg",
    caption: "Bộ đội ta xung phong",
  },
];

const hcmImages = [
  {
    src: "https://bandothegioikholon.com/wp-content/uploads/2018/08/b%E1%BA%A3n-%C4%91%E1%BB%93-chi%E1%BA%BFn-d%E1%BB%8Bch-HCM.jpg",
    caption: "Bản đồ chiến dịch Hồ Chí Minh",
  },
  {
    src: "https://file3.qdnd.vn/data/images/0/2025/04/18/upload_2183/dd46912614pm.jpg?dpi=150&quality=100&w=870",
    caption: "Xe tăng tiến vào Dinh Độc Lập",
  },
  {
    src: "https://danviet.ex-cdn.com/files/f1/2021/4/28/11-161959012348422416202.jpg",
    caption: "Giải phóng Sài Gòn 30/4/1975",
  },
  {
    src: "https://bandothegioikholon.com/wp-content/uploads/2018/08/b%E1%BA%A3n-%C4%91%E1%BB%93-chi%E1%BA%BFn-d%E1%BB%8Bch-H%E1%BB%93-Ch%C3%AD-Minh.jpg",
    caption: "Sơ đồ tổng tiến công",
  },
  {
    src: "https://baonamdinh.vn/file/e7837c02816d130b0181a995d7ad7e96/dataimages/201504/original/images1134969_1.jpg",
    caption: "Chiến thắng lịch sử",
  },
];

const historicalImages = [
  {
    src: "https://nads.1cdn.vn/2024/08/19/W_tong-khoi-nghia-gianh-chinh-quyen-o-ha-noi-8-1945%281%29.jpg",
    caption: "Tổng khởi nghĩa Tháng 8/1945",
  },
  {
    src: "https://photo.znews.vn/w660/Uploaded/oplukaa/2018_05_23/12.jpg",
    caption: "Quân đội nhân dân Việt Nam",
  },
  {
    src: "https://baotanglichsu.vn/DataFiles/Uploaded/Portal0/Images/Tintuc_cgs_vn_2014103115h1m55s.jpg",
    caption: "Lực lượng kháng chiến",
  },
  {
    src: "https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785220cea53e7f42d66e77776620c2dee4fa9b78ed5558b18221d37564e3f10b3adacbe9397a36b9d0c09eb330bc17779e6/201464_keophao_1.jpg",
    caption: "Kéo pháo Điện Biên Phủ",
  },
  {
    src: "https://vcdn1-vnexpress.vnecdn.net/2025/04/29/1a-1745863011.jpg?dpr=1&fit=crop&h=0&q=100&s=MFAvaVfGjrTgMjmDCM4hhQ&w=460",
    caption: "Hình ảnh tư liệu lịch sử",
  },
];

const videos = [
  {
    title: "Chiến dịch Điện Biên Phủ - Diễn biến lịch sử",
    embedId: "D_sE1zEzZZk",
    description: "Tài liệu về diễn biến chiến dịch Điện Biên Phủ 1954",
  },
  {
    title: "Đại thắng mùa Xuân 1975",
    embedId: "KTQfJVU6n-Y",
    description: "Chiến dịch Hồ Chí Minh và ngày thống nhất đất nước",
  },
  {
    title: "Lịch sử kháng chiến Việt Nam",
    embedId: "VfMZQ-r-gxg",
    description: "Tổng quan về hai cuộc kháng chiến chống Pháp và Mỹ",
  },
];

export default function ThuVienPage() {
  return (
    <div className="min-h-screen bg-[var(--antique-parchment)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--timeless-navy)] to-[var(--royal-burgundy)] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Image className="w-4 h-4 text-[var(--antique-gold)]" />
              <span className="text-white/80 text-sm">Thư Viện Tư Liệu</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Bản Đồ - Hình Ảnh - Video
            </h1>
            
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Kho tư liệu trực quan về hai cuộc kháng chiến vĩ đại của dân tộc Việt Nam.
            </p>
          </div>
        </div>
      </section>

      {/* Chiến dịch Điện Biên Phủ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Chiến Dịch Điện Biên Phủ (1954)
                </h2>
                <p className="text-[var(--text-muted)]">&ldquo;Lừng lẫy năm châu, chấn động địa cầu&rdquo;</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {dbpImages.map((image, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <p className="text-white text-sm">{image.caption}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chiến dịch Hồ Chí Minh */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--royal-burgundy)] to-[var(--antique-gold)] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Chiến Dịch Hồ Chí Minh (1975)
                </h2>
                <p className="text-[var(--text-muted)]">Thống nhất đất nước</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {hcmImages.map((image, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <p className="text-white text-xs">{image.caption}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hình ảnh tổng hợp */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--rustic-olive)] to-[var(--timeless-navy)] flex items-center justify-center">
                <Image className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Tư Liệu Kháng Chiến & Hậu Phương
                </h2>
                <p className="text-[var(--text-muted)]">Hình ảnh tổng hợp các giai đoạn lịch sử</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {historicalImages.map((image, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <p className="text-white text-xs">{image.caption}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-[var(--timeless-navy)]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[var(--antique-gold)] flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Video Tài Liệu
                </h2>
                <p className="text-[var(--ancient-stone)]">Xem lại những khoảnh khắc lịch sử</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <Card key={index} className="overflow-hidden bg-white/10 backdrop-blur-sm border-white/20">
                  <div className="aspect-video relative">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-white mb-2">{video.title}</h3>
                    <p className="text-[var(--ancient-stone)] text-sm">{video.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[var(--timeless-navy)]">
                <Link href="https://www.youtube.com/results?search_query=l%E1%BB%8Bch+s%E1%BB%AD+kh%C3%A1ng+chi%E1%BA%BFn+vi%E1%BB%87t+nam" target="_blank">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Xem Thêm Video Trên YouTube
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
