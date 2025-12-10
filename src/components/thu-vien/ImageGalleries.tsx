"use client";

import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Camera, Flag, Users } from "lucide-react";

const galleries = [
  {
    id: "phap",
    title: "Cách Mạng Tháng Tám & Kháng Chiến Chống Pháp",
    period: "1945 - 1954",
    icon: Flag,
    color: "#4CAF50",
    images: [
      { src: "https://file3.qdnd.vn/data/images/0/2022/07/25/huyentrang_km/2.jpg", caption: "Cách mạng Tháng Tám 1945" },
      { src: "https://media.vov.vn/sites/default/files/styles/large/public/2023-09/bac_ho.jpg", caption: "Bác Hồ đọc Tuyên ngôn Độc lập" },
      { src: "https://images.baodantoc.vn/uploads/2021/Th%C3%A1ng_12/Ng%C3%A0y_18/Nga/82F2C31D-4736-4A67-957E-BC39E1A49C10.jpg", caption: "Quốc hội khóa I" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Victory_in_Battle_of_Dien_Bien_Phu.jpg/1200px-Victory_in_Battle_of_Dien_Bien_Phu.jpg", caption: "Chiến thắng Điện Biên Phủ" },
      { src: "https://media.baoquangninh.vn/dataimages/202105/original/images1501354_ttxvn_dien_bien_phu_1.jpg", caption: "Bộ đội kéo pháo vào trận địa" },
      { src: "https://special.vietnamplus.vn/wp-content/uploads/2021/03/ttxvn0405di-1588579648-32-1568x1107.jpg", caption: "Ký Hiệp định Giơnevơ 1954" },
    ],
  },
  {
    id: "my",
    title: "Kháng Chiến Chống Mỹ Cứu Nước",
    period: "1954 - 1975",
    icon: Camera,
    color: "#F44336",
    images: [
      { src: "https://image.sggp.org.vn/w1000/Uploaded/2025/ohpohuo/2020_01_06/f6b_GUSY.jpg.webp", caption: "Phong trào Đồng Khởi" },
      { src: "https://file3.qdnd.vn/data/images/0/2021/12/16/thuyanh/mtdt.jpg?dpi=150&quality=100&w=870", caption: "Mặt trận Dân tộc Giải phóng" },
      { src: "https://file3.qdnd.vn/data/images/0/2024/11/11/upload_2059/mau%20than%201968.jpg?dpi=150&quality=100&w=870", caption: "Tổng tiến công Mậu Thân 1968" },
      { src: "https://file3.qdnd.vn/data/images/0/2024/11/17/upload_2087/doi_khong_ten.jpg", caption: "Chiến thắng Đường 9 - Nam Lào" },
      { src: "https://file3.qdnd.vn/data/images/0/2025/04/27/upload_2134/1.png?dpi=150&quality=100&w=870", caption: "Điện Biên Phủ trên không" },
      { src: "https://bandothegioikholon.com/wp-content/uploads/2018/08/b%E1%BA%A3n-%C4%91%E1%BB%93-chi%E1%BA%BFn-d%E1%BB%8Bch-HCM.jpg", caption: "Bản đồ Chiến dịch Hồ Chí Minh" },
      { src: "https://file3.qdnd.vn/data/images/0/2025/04/18/upload_2183/dd46912614pm.jpg?dpi=150&quality=100&w=870", caption: "Xe tăng tiến vào Dinh Độc Lập" },
      { src: "https://danviet.ex-cdn.com/files/f1/2021/4/28/11-161959012348422416202.jpg", caption: "Giải phóng Sài Gòn 30/4/1975" },
    ],
  },
  {
    id: "lanhtuu",
    title: "Lãnh Tụ & Biểu Tượng",
    period: "Nhân vật lịch sử",
    icon: Users,
    color: "#C9A227",
    images: [
      { src: "https://vnn-imgs-f.vgcloud.vn/2021/09/01/22/tuyen-ngon-1.jpeg?width=260&s=EF6k5fkGgKSMaxZWJcbyag", caption: "Chủ tịch Hồ Chí Minh" },
      { src: "https://file3.qdnd.vn/data/images/0/2021/12/16/thuyanh/bac%20ho%20voi%20thanh%20nien.jpg?dpi=150&quality=100&w=870", caption: "Bác Hồ với thanh niên" },
      { src: "https://file3.qdnd.vn/data/images/0/2024/04/07/upload_2072/dai%20tuong%20vo%20nguyen%20giao.jpg?dpi=150&quality=100&w=870", caption: "Đại tướng Võ Nguyên Giáp" },
      { src: "https://hnm.1cdn.vn/2024/01/01/dai-tuong-nguyen-chi-thanh.jpg", caption: "Đại tướng Nguyễn Chí Thanh" },
      { src: "https://hnm.1cdn.vn/2025/01/24/dai-tuong.jpg", caption: "Đại tướng Văn Tiến Dũng" },
      { src: "https://giadinh.mediacdn.vn/zoom/740_463/2018/10/17/pham-van-dong-15397450657201284699159.jpg", caption: "Thủ tướng Phạm Văn Đồng" },
      { src: "https://baoquangbinh.vn/dataimages/202204/original/images730194_le_duan_070422.jpeg", caption: "Tổng Bí thư Lê Duẩn" },
      { src: "https://suckhoedoisong.qltns.mediacdn.vn/Images/duylinh/2021/04/29/Untit2345led.jpg", caption: "Đại tướng Hoàng Văn Thái" },
      { src: "https://tapchinganhang.gov.vn/stores/news_dataimages/tapchinganhanggovvn/032023/17/13/dai-tuong-chu-huy-man-nha-chinh-tri-quan-su-xuat-sac-cua-cach-mang-viet-nam-41-.5310.PNG", caption: "Đại tướng Chu Huy Mân" },
    ],
  },
];

export default function ImageGalleries() {
  const [activeTab, setActiveTab] = useState("phap");
  const [lightbox, setLightbox] = useState<{ images: typeof galleries[0]['images'], index: number } | null>(null);

  const activeGallery = galleries.find(g => g.id === activeTab);

  const openLightbox = (images: typeof galleries[0]['images'], index: number) => {
    setLightbox({ images, index });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!lightbox) return;
    const newIndex = direction === 'next' 
      ? (lightbox.index + 1) % lightbox.images.length
      : (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length;
    setLightbox({ ...lightbox, index: newIndex });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C3F] mb-4">
              Bộ Sưu Tập Hình Ảnh
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá những khoảnh khắc lịch sử quý giá qua từng thời kỳ
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {galleries.map((gallery) => (
              <button
                key={gallery.id}
                onClick={() => setActiveTab(gallery.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === gallery.id
                    ? 'bg-[#0F1C3F] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
                }`}
              >
                <gallery.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{gallery.period}</span>
              </button>
            ))}
          </div>

          {/* Active Gallery Title */}
          {activeGallery && (
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#0F1C3F]">
                {activeGallery.title}
              </h3>
            </div>
          )}

          {/* Image Grid */}
          {activeGallery && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activeGallery.images.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => openLightbox(activeGallery.images, index)}
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Ảnh+lịch+sử';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <p className="text-white text-sm font-medium line-clamp-2">{image.caption}</p>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div 
            className="max-w-5xl max-h-[80vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={lightbox.images[lightbox.index].src}
              alt={lightbox.images[lightbox.index].caption}
              className="max-w-full max-h-[70vh] object-contain mx-auto rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">{lightbox.images[lightbox.index].caption}</p>
              <p className="text-white/60 text-sm mt-1">
                {lightbox.index + 1} / {lightbox.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
