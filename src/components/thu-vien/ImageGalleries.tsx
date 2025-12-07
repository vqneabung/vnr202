const galleries = [
  {
    title: "Chiến Dịch Điện Biên Phủ (1954)",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Dien_Bien_Phu_caserne_1.jpg/1200px-Dien_Bien_Phu_caserne_1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Dien_Bien_Phu_Monument.jpg/1200px-Dien_Bien_Phu_Monument.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Dien_Bien_Phu_Museum.jpg/1200px-Dien_Bien_Phu_Museum.jpg",
    ],
  },
  {
    title: "Chiến Dịch Hồ Chí Minh (1975)",
    images: [
      "https://bandothegioikholon.com/wp-content/uploads/2018/08/b%E1%BA%A3n-%C4%91%E1%BB%93-chi%E1%BA%BFn-d%E1%BB%8Bch-HCM.jpg",
      "https://file3.qdnd.vn/data/images/0/2025/04/18/upload_2183/dd46912614pm.jpg?dpi=150&quality=100&w=870",
      "https://danviet.ex-cdn.com/files/f1/2021/4/28/11-161959012348422416202.jpg",
    ],
  },
  {
    title: "Hình Ảnh Lịch Sử Khác",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ho_Chi_Minh_1946.jpg/800px-Ho_Chi_Minh_1946.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Declaration_of_Independence_of_Vietnam.jpg/1200px-Declaration_of_Independence_of_Vietnam.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Viet_Minh_flag.svg/1200px-Viet_Minh_flag.svg.png",
    ],
  },
];

export default function ImageGalleries() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {galleries.map((gallery, galleryIndex) => (
            <div key={galleryIndex}>
              <h2 className="text-2xl font-bold text-[var(--timeless-navy)] mb-6">
                {gallery.title}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {gallery.images.map((src, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                  >
                    <img
                      src={src}
                      alt={`${gallery.title} - Hình ${imageIndex + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
