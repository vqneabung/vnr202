const images = [
  "https://bandothegioikholon.com/wp-content/uploads/2018/08/b%E1%BA%A3n-%C4%91%E1%BB%93-chi%E1%BA%BFn-d%E1%BB%8Bch-HCM.jpg",
  "https://file3.qdnd.vn/data/images/0/2025/04/18/upload_2183/dd46912614pm.jpg?dpi=150&quality=100&w=870",
  "https://danviet.ex-cdn.com/files/f1/2021/4/28/11-161959012348422416202.jpg",
];

export default function HoChiMinhCampaign() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-[var(--timeless-navy)] mb-6 text-center">
            Chiến Dịch Hồ Chí Minh - 1975
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src={src}
                  alt={`Chiến dịch Hồ Chí Minh ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
