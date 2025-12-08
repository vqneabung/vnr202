const galleries = [
  {
    title: "Chiến Dịch Điện Biên Phủ (1954)",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Victory_in_Battle_of_Dien_Bien_Phu.jpg/1200px-Victory_in_Battle_of_Dien_Bien_Phu.jpg",
      "https://cdnphoto.dantri.com.vn/QFly3Dp3XkOSjUFCcWDhc73KD8Q=/thumb_w/1920/2024/05/03/4-1714728104301.jpg",
      "https://special.vietnamplus.vn/wp-content/uploads/2021/03/ttxvn0405di-1588579648-32-1568x1107.jpg",
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
      "https://vnn-imgs-f.vgcloud.vn/2021/09/01/22/tuyen-ngon-1.jpeg?width=260&s=EF6k5fkGgKSMaxZWJcbyag",
      "https://file3.qdnd.vn/data/images/0/2024/11/11/upload_2059/mau%20than%201968.jpg",
      "https://file3.qdnd.vn/data/images/0/2021/12/16/thuyanh/bac%20ho%20voi%20thanh%20nien.jpg?dpi=150&quality=100&w=870",
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
