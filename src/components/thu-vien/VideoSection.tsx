"use client";

import { useState } from "react";
import { Play, Clock, Eye, Video, Film, Tv } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const videoCategories = [
  { id: "all", label: "Tất cả", icon: Video },
  { id: "phap", label: "Chống Pháp", icon: Film },
  { id: "my", label: "Chống Mỹ", icon: Tv },
];

const videos = [
  {
    title: "Chiến Thắng Điện Biên Phủ",
    videoId: "jy7Z3oYOp7w",
    description: "Tài liệu về chiến dịch Điện Biên Phủ lừng lẫy năm châu, chấn động địa cầu",
    duration: "45:00",
    views: "1.2M",
    category: "phap",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Victory_in_Battle_of_Dien_Bien_Phu.jpg/1200px-Victory_in_Battle_of_Dien_Bien_Phu.jpg",
  },
  {
    title: "Đại Thắng Mùa Xuân 1975",
    videoId: "aqMp24oZJa8",
    description: "Chiến dịch Hồ Chí Minh - Giải phóng hoàn toàn miền Nam, thống nhất đất nước",
    duration: "52:00",
    views: "2.5M",
    category: "my",
    thumbnail: "https://special.vietnamplus.vn/wp-content/uploads/2021/03/ttxvntongt-1588123540-60.jpg",
  },
  {
    title: "Lịch Sử Đảng 1945-1975",
    videoId: "mZ99SMWT61w",
    description: "Tổng quan về vai trò lãnh đạo của Đảng trong hai cuộc kháng chiến",
    duration: "38:00",
    views: "850K",
    category: "phap",
    thumbnail: "https://media.vov.vn/sites/default/files/styles/large/public/2023-09/bac_ho.jpg",
  },
  {
    title: "Cách Mạng Tháng Tám 1945",
    videoId: "zgR6nH84wsQ",
    description: "Tổng khởi nghĩa giành chính quyền, khai sinh nước Việt Nam Dân chủ Cộng hòa",
    duration: "8:56",
    views: "980K",
    category: "phap",
    thumbnail: "https://i.ytimg.com/vi/zgR6nH84wsQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBROoEs96gRx2RSmZaNvMxl8R9nJw",
  },
  {
    title: "Chiến Dịch Tết Mậu Thân 1968",
    videoId: "YpThj9yGzeM",
    description: "Cuộc tổng tiến công và nổi dậy làm thay đổi cục diện chiến tranh",
    duration: "9:00",
    views: "1.5M",
    category: "my",
    thumbnail: "https://i.ytimg.com/vi/YpThj9yGzeM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB2IUMGgrOyMkiYQXj93n1bxTYgvw",
  },
  {
    title: "Vì Sao Đường Mòn Hồ Chí Minh Trở Thành Nỗi ÁM ẢNH Của Mỹ? | CDTeam Why?",
    videoId: "WP1vNklA",
    description: "Con đường chiến lược nối liền hậu phương lớn với tiền tuyến lớn",
    duration: "19:58",
    views: "1.8M",
    category: "my",
    thumbnail: "https://i.ytimg.com/vi/Fs-WP1vNklA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBUWEVIh1uC9EAPDp-qih9a-jBrhA",
  },
  {
    title: "Hiệp Định Giơnevơ 1954",
    videoId: "lGPQ71NV5Nk",
    description: "Hiệp định chấm dứt chiến tranh, lập lại hòa bình ở Đông Dương",
    duration: "35:00",
    views: "720K",
    category: "phap",
    thumbnail: "https://i.ytimg.com/vi/F-0v0x7bs_I/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD_dYfSCP4yBf7DKeH14_FdNPgZ3g",
  },
  {
    title: "Chiến Dịch Đường 9 - Nam Lào 1971",
    videoId: "VIDEO_ID_5",
    description: "Chiến thắng bảo vệ tuyến vận tải chiến lược Trường Sơn",
    duration: "42:00",
    views: "650K",
    category: "my",
    thumbnail: "https://i.ytimg.com/vi/KeRFW-xIaQs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCG_RSX0DcUKpxoMOS-t_oDMWz7zw",
  },
  {
    title: "Trận ĐIỆN BIÊN PHỦ TRÊN KHÔNG: Mỹ đã THẢM BẠI trên bầu trời HÀ NỘI ra sao?",
    videoId: "A0uCy8Kk1sg",
    description: "12 ngày đêm đánh bại cuộc tập kích B-52 của Mỹ vào Hà Nội",
    duration: "50:00",
    views: "1.1M",
    category: "my",
    thumbnail: "https://i.ytimg.com/vi/A0uCy8Kk1sg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCC2AuXHzLT9eT0pprqMWdx-swrNw",
  },
];

export default function VideoSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const filteredVideos = activeCategory === "all" 
    ? videos 
    : videos.filter(v => v.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#8B1A1A]/10 px-4 py-2 rounded-full mb-4">
              <Play className="w-4 h-4 text-[#8B1A1A]" />
              <span className="text-[#8B1A1A] text-sm font-semibold">Video Tài Liệu</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C3F] mb-4">
              Video Lịch Sử
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Xem lại những thước phim tư liệu quý giá về hai cuộc kháng chiến
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {videoCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#8B1A1A] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                {/* Thumbnail / Video */}
                <div className="relative aspect-video bg-gray-900">
                  {playingVideo === video.videoId ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  ) : (
                    <>
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                      
                      {/* Play Button */}
                      <button
                        onClick={() => setPlayingVideo(video.videoId)}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform"
                      >
                        <Play className="w-7 h-7 text-[#8B1A1A] fill-[#8B1A1A] ml-1" />
                      </button>

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {video.duration}
                      </div>
                    </>
                  )}
                </div>

                <CardContent className="p-5">
                  <h3 className="font-bold text-[#0F1C3F] mb-2 group-hover:text-[#8B1A1A] transition-colors line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {video.views} lượt xem
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
