const videos = [
  {
    title: "Chiến Thắng Điện Biên Phủ",
    videoId: "jy7Z3oYOp7w",
    description: "Tài liệu về chiến dịch Điện Biên Phủ lừng lẫy",
  },
  {
    title: "Đại Thắng Mùa Xuân 1975",
    videoId: "aqMp24oZJa8",
    description: "Chiến dịch Hồ Chí Minh giải phóng hoàn toàn miền Nam",
  },
  {
    title: "Lịch Sử Đảng 1945-1975",
    videoId: "mZ99SMWT61w",
    description: "Tổng quan về vai trò lãnh đạo của Đảng",
  },
];

export default function VideoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[var(--timeless-navy)] mb-8">
            Video Tài Liệu
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg bg-white">
                <div className="aspect-video bg-gray-200">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[var(--timeless-navy)] mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
