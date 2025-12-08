const galleries = [
  {
    title: "1945 - Cách Mạng Tháng Tám & Kháng Chiến Chống Pháp",
    images: [
      "https://file3.qdnd.vn/data/images/0/2022/07/25/huyentrang_km/2.jpg",
      "https://media.vov.vn/sites/default/files/styles/large/public/2023-09/bac_ho.jpg",
      "https://images.baodantoc.vn/uploads/2021/Th%C3%A1ng_12/Ng%C3%A0y_18/Nga/82F2C31D-4736-4A67-957E-BC39E1A49C10.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Victory_in_Battle_of_Dien_Bien_Phu.jpg/1200px-Victory_in_Battle_of_Dien_Bien_Phu.jpg",
      "https://media.baoquangninh.vn/dataimages/202105/original/images1501354_ttxvn_dien_bien_phu_1.jpg",
      "https://special.vietnamplus.vn/wp-content/uploads/2021/03/ttxvn0405di-1588579648-32-1568x1107.jpg",
    ],
  },
  {
    title: "1954-1975 - Kháng Chiến Chống Mỹ Cứu Nước",
    images: [
      "https://image.sggp.org.vn/w1000/Uploaded/2025/ohpohuo/2020_01_06/f6b_GUSY.jpg.webp",
      "https://file3.qdnd.vn/data/images/0/2021/12/16/thuyanh/mtdt.jpg?dpi=150&quality=100&w=870",
      "https://file3.qdnd.vn/data/images/0/2024/11/11/upload_2059/mau%20than%201968.jpg?dpi=150&quality=100&w=870",
      "https://file3.qdnd.vn/data/images/0/2024/11/17/upload_2087/doi_khong_ten.jpg",
      "https://file3.qdnd.vn/data/images/0/2025/04/27/upload_2134/1.png?dpi=150&quality=100&w=870",
      "https://bandothegioikholon.com/wp-content/uploads/2018/08/b%E1%BA%A3n-%C4%91%E1%BB%93-chi%E1%BA%BFn-d%E1%BB%8Bch-HCM.jpg",
      "https://file3.qdnd.vn/data/images/0/2025/04/18/upload_2183/dd46912614pm.jpg?dpi=150&quality=100&w=870",
      "https://danviet.ex-cdn.com/files/f1/2021/4/28/11-161959012348422416202.jpg",
      "https://special.vietnamplus.vn/wp-content/uploads/2021/03/ttxvntongt-1588123540-60.jpg",
    ],
  },
  {
    title: "Lãnh Tụ & Biểu Tượng",
    images: [
      "https://vnn-imgs-f.vgcloud.vn/2021/09/01/22/tuyen-ngon-1.jpeg?width=260&s=EF6k5fkGgKSMaxZWJcbyag",
      "https://file3.qdnd.vn/data/images/0/2021/12/16/thuyanh/bac%20ho%20voi%20thanh%20nien.jpg?dpi=150&quality=100&w=870",
      "https://file3.qdnd.vn/data/images/0/2024/04/07/upload_2072/dai%20tuong%20vo%20nguyen%20giao.jpg?dpi=150&quality=100&w=870"
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
