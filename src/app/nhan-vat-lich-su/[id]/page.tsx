/**
 * Trang Chi Tiết Nhân Vật Lịch Sử
 * Dynamic route: /nhan-vat-lich-su/[id]
 */

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Award, BookOpen, Quote, Star, Users, MapPin } from "lucide-react";
import { historicalFigures, getFigureById, HistoricalFigure } from "@/components/history/historyData";

// Generate static params cho tất cả nhân vật
export function generateStaticParams() {
  return historicalFigures.map((figure) => ({
    id: figure.id,
  }));
}

// Metadata cho SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const figure = getFigureById(id);
  
  if (!figure) {
    return { title: "Không tìm thấy nhân vật" };
  }
  
  return {
    title: `${figure.name} - Nhân Vật Lịch Sử Việt Nam`,
    description: figure.description,
  };
}

export default async function NhanVatChiTietPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const figure = getFigureById(id);

  // Nếu không tìm thấy nhân vật, trả về 404
  if (!figure) {
    notFound();
  }

  // Lấy các nhân vật liên quan (cùng category)
  const relatedFigures = historicalFigures
    .filter(f => f.category === figure.category && f.id !== figure.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#e8eaed]">
      {/* Hero Header với ảnh nền */}
      <header className="relative bg-gradient-to-r from-[#0F1C3F] via-[#1a2d5a] to-[#0F1C3F] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Back Button */}
          <Link 
            href="/nhan-vat-lich-su"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm transition-all mb-10 border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại danh sách
          </Link>

          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Ảnh chân dung */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src={figure.image}
                  alt={`Chân dung ${figure.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 320px"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1.5 text-sm font-semibold rounded-full shadow-lg ${getCategoryStyle(figure.category)}`}>
                    {getCategoryLabel(figure.category)}
                  </span>
                </div>
              </div>
            </div>

            {/* Thông tin chính */}
            <div className="flex-1 text-white">
              {/* Tên nhân vật */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                {figure.name}
              </h1>

              {/* Năm sinh - mất */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-[#C9A227]" />
                  <span className="text-lg font-medium">
                    {figure.birthYear} — {figure.deathYear || 'Nay'}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                  <Award className="w-5 h-5 text-[#C9A227]" />
                  <span className="text-lg">{figure.role}</span>
                </div>
              </div>

              {/* Aliases */}
              {figure.aliases && figure.aliases.length > 0 && (
                <div className="mb-6">
                  <p className="text-white/80">
                    <span className="text-[#C9A227] font-medium">Tên khác:</span>{' '}
                    {figure.aliases.join(' • ')}
                  </p>
                </div>
              )}

              {/* Mô tả ngắn */}
              <p className="text-lg text-white/90 leading-relaxed max-w-3xl">
                {figure.description}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tiểu sử */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-[#0F1C3F] mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  Tiểu sử
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {getBiography(figure)}
                  </p>
                </div>
              </div>
            </section>

            {/* Đóng góp nổi bật */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-[#0F1C3F] mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B1A1A] to-[#5a1111] flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  Đóng góp nổi bật
                </h2>
                <ul className="space-y-4">
                  {getContributions(figure).map((contribution, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed pt-1">{contribution}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Câu nói nổi tiếng */}
            {getFamousQuote(figure) && (
              <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F1C3F] via-[#1a2d5a] to-[#0F1C3F]">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A227] rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8B1A1A] rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative p-8 md:p-10">
                  <Quote className="w-16 h-16 text-[#C9A227]/30 mb-4" />
                  <blockquote className="text-2xl md:text-3xl italic text-white mb-6 leading-relaxed">
                    &ldquo;{getFamousQuote(figure)}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C9A227]">
                      <Image
                        src={figure.image}
                        alt={figure.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <cite className="text-[#C9A227] font-semibold text-lg not-italic">
                      {figure.name}
                    </cite>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 bg-gradient-to-r from-[#0F1C3F] to-[#1a2d5a]">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C9A227]" />
                  Thông tin nhanh
                </h3>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Năm sinh</span>
                  <span className="font-semibold text-[#0F1C3F]">{figure.birthYear}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Năm mất</span>
                  <span className="font-semibold text-[#0F1C3F]">{figure.deathYear || 'Còn sống'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Phân loại</span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${getCategoryStyle(figure.category)}`}>
                    {getCategoryLabel(figure.category)}
                  </span>
                </div>
                <div className="py-2">
                  <span className="text-gray-500 text-sm block mb-2">Chức vụ</span>
                  <span className="font-medium text-[#8B1A1A]">{figure.role}</span>
                </div>
              </div>
            </div>

            {/* Nhân vật liên quan */}
            {relatedFigures.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 bg-gradient-to-r from-[#8B1A1A] to-[#a52525]">
                  <h3 className="text-white font-semibold flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#C9A227]" />
                    Nhân vật liên quan
                  </h3>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    {relatedFigures.map((related) => (
                      <Link 
                        key={related.id} 
                        href={`/nhan-vat-lich-su/${related.id}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-[#C9A227] transition-colors flex-shrink-0">
                          <Image
                            src={related.image}
                            alt={related.name}
                            fill
                            className="object-cover object-top"
                            sizes="48px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-[#0F1C3F] group-hover:text-[#0645ad] transition-colors truncate">
                            {related.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {related.birthYear} — {related.deathYear || 'Nay'}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Source Card */}
            <div className="bg-gradient-to-br from-[#C9A227]/10 to-[#C9A227]/5 rounded-2xl border border-[#C9A227]/20 p-5">
              <h3 className="font-semibold text-[#0F1C3F] mb-3 text-sm">📚 Nguồn tham khảo</h3>
              <ul className="text-xs text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full"></span>
                  Viện Lịch sử Đảng
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full"></span>
                  Bảo tàng Lịch sử Quốc gia
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full"></span>
                  Wikipedia Tiếng Việt
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ============ Helper Functions ============

function getCategoryStyle(category: HistoricalFigure['category']): string {
  switch (category) {
    case 'leader': return 'bg-[#C9A227] text-white';
    case 'general': return 'bg-[#0F1C3F] text-white';
    case 'revolutionary': return 'bg-[#8B1A1A] text-white';
    case 'martyr': return 'bg-[#2E7D32] text-white';
    default: return 'bg-gray-500 text-white';
  }
}

function getCategoryLabel(category: HistoricalFigure['category']): string {
  switch (category) {
    case 'leader': return 'Lãnh đạo';
    case 'general': return 'Tướng lĩnh';
    case 'revolutionary': return 'Cách mạng';
    case 'martyr': return 'Liệt sĩ';
    default: return '';
  }
}

// Tiểu sử mở rộng cho từng nhân vật
function getBiography(figure: HistoricalFigure): string {
  const biographies: Record<string, string> = {
    'ho-chi-minh': 'Hồ Chí Minh (1890-1969), tên khai sinh Nguyễn Sinh Cung (tên gọi khác: Nguyễn Ái Quốc), là lãnh tụ thiên tài của cách mạng Việt Nam, Anh hùng giải phóng dân tộc, Danh nhân văn hóa thế giới. Người đã bôn ba qua 3 đại dương, 4 châu lục trong 30 năm để tìm ra con đường cứu nước. Người sáng lập Đảng Cộng sản Việt Nam, khai sinh nước Việt Nam Dân chủ Cộng hòa và là Chủ tịch nước đầu tiên (1945-1969).',
    
    'vo-nguyen-giap': 'Võ Nguyên Giáp (1911-2013), còn gọi là "Anh Văn", là Đại tướng đầu tiên, Tổng Tư lệnh tối cao của Quân đội Nhân dân Việt Nam. Ông được thế giới vinh danh là một trong những danh tướng kiệt xuất nhất lịch sử nhân loại, kiến trúc sư của chiến thắng Điện Biên Phủ (1954) và Đại thắng mùa Xuân (1975). Ông cũng là người học trò xuất sắc và gần gũi của Chủ tịch Hồ Chí Minh.',
    
    'pham-van-dong': 'Phạm Văn Đồng (1906-2000), còn gọi là "Anh Tô", là nhà ngoại giao xuất sắc và nhà lãnh đạo có uy tín lớn. Ông giữ chức Thủ tướng Chính phủ trong 32 năm liên tục (1955-1987) - một kỷ lục hiếm có trên thế giới. Ông nổi tiếng với trí tuệ uyên bác, đóng vai trò then chốt tại Hội nghị Genève 1954 và công cuộc khôi phục kinh tế sau chiến tranh.',
    
    'truong-chinh': 'Trường Chinh (1907-1988), tên thật Đặng Xuân Khu, là nhà lý luận chiến lược sắc bén của Đảng. Ông từng 3 lần làm Tổng Bí thư và giữ chức Chủ tịch Hội đồng Nhà nước. Ông nổi tiếng là người nghiêm cẩn về nguyên tắc nhưng cũng chính là "Tổng Bí thư của Đổi mới", người đã dũng cảm khởi xướng công cuộc đổi mới đất nước năm 1986.',
    
    'le-duan': 'Lê Duẩn (1907-1986), tên thật Lê Văn Nhuận, là Tổng Bí thư Ban Chấp hành Trung ương Đảng lâu năm nhất (1960-1986). Ông là nhà chiến lược lỗi lạc, người trực tiếp chỉ đạo cách mạng miền Nam và cuộc kháng chiến chống Mỹ cứu nước. Tư duy quân sự và quyết tâm sắt đá của ông là nhân tố quyết định dẫn đến ngày thống nhất đất nước.',
    
    'ton-duc-thang': 'Tôn Đức Thắng (1888-1980), hay "Bác Tôn", là biểu tượng của tinh thần đại đoàn kết và phẩm chất người công nhân Nam Bộ. Ông từng tham gia cuộc binh biến tại Biển Đen (1919) ủng hộ Cách mạng Nga. Ông kế nhiệm Chủ tịch Hồ Chí Minh làm Chủ tịch nước (1969-1980) và là Chủ tịch đầu tiên của nước CHXHCN Việt Nam thống nhất.',
    
    'nguyen-thi-minh-khai': 'Nguyễn Thị Minh Khai (1910-1941) là nữ chiến sĩ cách mạng kiên trung, Ủy viên Xứ ủy Nam Kỳ và Bí thư Thành ủy Sài Gòn - Chợ Lớn. Bà là đại biểu chính thức của Đảng tại Quốc tế Cộng sản. Sự hy sinh anh dũng của bà tại Hóc Môn năm 1941 cùng chồng là Lê Hồng Phong đã trở thành tấm gương sáng ngời cho phụ nữ Việt Nam.',
    
    'vo-thi-sau': 'Võ Thị Sáu (1933-1952) là nữ Anh hùng Lực lượng vũ trang nhân dân, biểu tượng bất khuất của vùng Đất Đỏ. Tham gia Đội Công an xung phong từ năm 14 tuổi, chị nổi tiếng với những chiến công táo bạo. Chị là tử tù nữ đầu tiên và duy nhất tại nhà tù Côn Đảo, hy sinh khi chưa tròn 20 tuổi, đi vào huyền thoại với loài hoa lêkima.',
    
    'nguyen-van-troi': 'Nguyễn Văn Trỗi (1940-1964) là chiến sĩ biệt động Sài Gòn, nổi tiếng với sự kiện đặt mìn cầu Công Lý nhằm tiêu diệt Bộ trưởng Quốc phòng Mỹ McNamara. Phút giây anh dũng trước pháp trường: không cần bịt mắt, hô vang khẩu hiệu yêu nước đã gây chấn động dư luận thế giới và trở thành biểu tượng phản chiến toàn cầu.',
    
    'tran-phu': 'Trần Phú (1904-1931) là Tổng Bí thư đầu tiên của Đảng khi mới 26 tuổi. Ông là người soạn thảo "Luận cương chính trị" (1930) - văn kiện xác định rõ con đường cách mạng Đông Dương. Ông hy sinh tại nhà thương Chợ Quán với lời nhắn nhủ bất hủ: "Hãy giữ vững chí khí chiến đấu".',
    
    'le-hong-phong': 'Lê Hồng Phong (1902-1942) là Tổng Bí thư thứ hai của Đảng, Ủy viên Ban Chấp hành Quốc tế Cộng sản. Ông là người có công lớn trong việc khôi phục hệ thống tổ chức Đảng những năm 1930. Ông hy sinh trong chế độ lao tù hà khắc tại Côn Đảo vào đúng ngày sinh nhật lần thứ 40.',
    
    'hoang-van-thu': 'Hoàng Văn Thụ (1909-1944) là nhà lãnh đạo cao cấp của Đảng, Bí thư Xứ ủy Bắc Kỳ. Ông là người có công lớn trong việc thống nhất các lực lượng vũ trang cách mạng và phát triển phong trào tại các tỉnh biên giới. Ông bị thực dân Pháp xử bắn tại Tương Mai, Hà Nội năm 1944.',
    
    'ly-tu-trong': 'Lý Tự Trọng (1914-1931), tên thật Lê Văn Trọng, là người đoàn viên Thanh niên Cộng sản đầu tiên. Năm 17 tuổi, trước tòa án thực dân, anh đã dõng dạc tuyên bố câu nói trở thành kim chỉ nam cho tuổi trẻ Việt Nam: "Con đường của thanh niên chỉ là con đường cách mạng, không thể có con đường nào khác".',
    
    'nguyen-van-cu': 'Nguyễn Văn Cừ (1912-1941) là Tổng Bí thư trẻ tuổi nhất trong lịch sử Đảng (nhậm chức năm 26 tuổi). Ông là nhà lý luận xuất sắc với tác phẩm "Tự chỉ trích" (1939), đặt nền móng cho việc xây dựng đạo đức và tư tưởng trong Đảng. Ông bị xử bắn cùng các đồng chí Hà Huy Tập, Nguyễn Thị Minh Khai năm 1941.',
    
    'ha-huy-tap': 'Hà Huy Tập (1906-1941) là Tổng Bí thư thứ ba của Đảng (1936-1938). Ông là người có công lớn trong việc chấn chỉnh lại tổ chức Đảng và khôi phục liên lạc với Quốc tế Cộng sản. Ông là một cây bút lý luận sắc sảo, đấu tranh không khoan nhượng với các tư tưởng sai lệch.',
  };
  
  return biographies[figure.id] || figure.description || 'Thông tin tiểu sử đang được cập nhật.';
}

// Đóng góp nổi bật
function getContributions(figure: HistoricalFigure): string[] {
  const contributions: Record<string, string[]> = {
    'ho-chi-minh': [
      'Tìm ra con đường cứu nước giải phóng dân tộc theo chủ nghĩa Mác - Lênin',
      'Sáng lập Đảng Cộng sản Việt Nam (03/02/1930)',
      'Viết và đọc Tuyên ngôn Độc lập (02/09/1945), khai sinh nước VNDCCH',
      'Lãnh đạo toàn dân kháng chiến chống thực dân Pháp (1946-1954) và đế quốc Mỹ',
      'Để lại di sản tư tưởng, đạo đức, phong cách Hồ Chí Minh và bản "Di chúc" lịch sử',
      'Được UNESCO vinh danh là Anh hùng giải phóng dân tộc, Danh nhân văn hóa kiệt xuất'
    ],
    'vo-nguyen-giap': [
      'Đại tướng đầu tiên, Tổng tư lệnh tối cao Quân đội Nhân dân Việt Nam',
      'Chỉ huy trưởng chiến dịch Điện Biên Phủ (1954) "lừng lẫy năm châu, chấn động địa cầu"',
      'Đưa ra quyết định lịch sử chuyển từ "đánh nhanh, thắng nhanh" sang "đánh chắc, tiến chắc"',
      'Chỉ đạo chiến dịch Hồ Chí Minh (1975) với phương châm "Thần tốc, thần tốc hơn nữa"',
      'Nhà lý luận quân sự kiệt xuất về chiến lược "Chiến tranh nhân dân"'
    ],
    'pham-van-dong': [
      'Trưởng phái đoàn Chính phủ tại Hội nghị Genève (1954) về lập lại hòa bình ở Đông Dương',
      'Thủ tướng tại vị lâu nhất (1955–1987), nhà ngoại giao xuất sắc',
      'Đóng góp nền tảng cho giáo dục và văn hóa, kiên định giữ vững chiến trường miền Nam',
      'Tác giả của nhiều bài viết sắc sảo về Hồ Chí Minh và văn hóa dân tộc'
    ],
    'truong-chinh': [
      'Soạn thảo "Đề cương văn hóa Việt Nam" (1943) - cương lĩnh văn hóa đầu tiên của Đảng',
      'Tổng Bí thư trong Cách mạng Tháng Tám (1945) và kháng chiến chống Pháp',
      'Tác giả tác phẩm "Kháng chiến nhất định thắng lợi" (1947)',
      'Tổng Bí thư khởi xướng và đặt nền móng cho công cuộc "Đổi mới" (1986)'
    ],
    'le-duan': [
      'Bí thư Thứ nhất/Tổng Bí thư lãnh đạo Đảng suốt cuộc kháng chiến chống Mỹ (1960-1986)',
      'Khởi xướng "Đề cương cách mạng miền Nam" và Nghị quyết 15 (1959)',
      'Chỉ đạo chiến lược cuộc Tổng tiến công và nổi dậy Mậu Thân (1968)',
      'Quyết tâm thực hiện thống nhất đất nước và đưa cả nước đi lên Chủ nghĩa xã hội'
    ],
    'ton-duc-thang': [
      'Kéo cờ đỏ trên chiến hạm France tại Biển Đen ủng hộ Cách mạng Nga (1919)',
      'Sáng lập Công hội Đỏ (tiền thân Tổng Liên đoàn Lao động) năm 1920',
      'Chủ tịch nước kế nhiệm sau khi Chủ tịch Hồ Chí Minh qua đời (1969-1980)',
      'Biểu tượng của đại đoàn kết dân tộc và tình hữu nghị quốc tế'
    ],
    'nguyen-thi-minh-khai': [
      'Đại biểu chính thức tại Đại hội VII Quốc tế Cộng sản (1935) tại Moskva',
      'Bí thư Thành ủy Sài Gòn - Chợ Lớn, lãnh đạo cao trào cách mạng 1936-1939',
      'Câu nói bất hủ trước pháp trường: "Vững chí bền gan, ai hỡi ai/Kiên tâm giữ dạ mới anh tài"'
    ],
    'vo-thi-sau': [
      'Nữ du kích Đất Đỏ nổi tiếng với các trận đánh táo bạo diệt ác ôn năm 14 tuổi',
      'Tử tù nhỏ tuổi nhất tại nhà tù Côn Đảo, giữ vững khí tiết trước họng súng kẻ thù',
      'Được phong tặng danh hiệu Anh hùng Lực lượng vũ trang nhân dân (1993)'
    ],
    'nguyen-van-troi': [
      'Thực hiện vụ đặt mìn cầu Công Lý ám sát Bộ trưởng Quốc phòng Mỹ McNamara (1964)',
      'Hô vang "Việt Nam muôn năm" ba lần trước khi bị xử bắn',
      'Biểu tượng của chủ nghĩa anh hùng cách mạng, truyền cảm hứng cho phong trào phản chiến thế giới'
    ],
    'tran-phu': [
      'Tổng Bí thư đầu tiên của Đảng (1930-1931) khi mới 26 tuổi',
      'Soạn thảo "Luận cương chính trị" (10/1930) xác định con đường cách mạng Đông Dương',
      'Câu nói nổi tiếng trước khi hy sinh: "Hãy giữ vững chí khí chiến đấu"'
    ],
    'le-hong-phong': [
      'Dẫn đầu đoàn đại biểu Đảng dự Đại hội VII Quốc tế Cộng sản',
      'Tổng Bí thư Đảng (1935-1936), khôi phục hệ thống tổ chức Đảng sau khủng bố trắng',
      'Kiên cường đấu tranh trong "Chuồng cọp" Côn Đảo đến hơi thở cuối cùng'
    ],
    'hoang-van-thu': [
      'Ủy viên Thường vụ Trung ương Đảng, Bí thư Xứ ủy Bắc Kỳ',
      'Chỉ đạo thành lập Đội Cứu quốc quân Bắc Sơn (tiền thân Quân đội nhân dân)',
      'Tác giả của nhiều bài thơ cách mạng và tờ báo "Giải phóng"',
      'Câu nói trước pháp trường: "Kẻ thù không giết được lòng yêu nước của người Việt Nam"'
    ],
    'ly-tu-trong': [
      'Người đoàn viên Thanh niên Cộng sản đầu tiên',
      'Bắn chết mật thám Le Grand để bảo vệ diễn giả Phan Bội Châu (1931)',
      'Câu nói bất hủ: "Con đường của thanh niên chỉ là con đường cách mạng, không thể có con đường nào khác"'
    ],
    'nguyen-van-cu': [
      'Tổng Bí thư trẻ tuổi (26 tuổi), chủ trì Hội nghị Trung ương 6 chuyển hướng chỉ đạo chiến lược',
      'Tác giả tác phẩm "Tự chỉ trích" (1939) - văn kiện quan trọng về xây dựng Đảng',
      'Khởi xướng thành lập Mặt trận Thống nhất Dân tộc Phản đế Đông Dương'
    ],
    'ha-huy-tap': [
      'Tổng Bí thư Đảng (1936-1938), chủ trì các Hội nghị Trung ương củng cố tổ chức',
      'Soạn thảo cuốn "Sơ thảo lịch sử phong trào cộng sản Đông Dương"',
      'Nhà lý luận sắc bén, đấu tranh chống trốt-kít và quan điểm sai trái'
    ],
  };

  return contributions[figure.id] || ['Có những đóng góp to lớn cho sự nghiệp cách mạng Việt Nam'];
}

// Câu nói nổi tiếng
function getFamousQuote(figure: HistoricalFigure): string | null {
  const quotes: Record<string, string> = {
    'ho-chi-minh': 'Không có gì quý hơn độc lập, tự do!',
    'vo-nguyen-giap': 'Thần tốc, thần tốc hơn nữa; táo bạo, táo bạo hơn nữa!',
    'ly-tu-trong': 'Con đường của thanh niên chỉ có thể là con đường cách mạng, không thể có con đường nào khác!',
    'tran-phu': 'Hãy giữ vững chí khí chiến đấu!',
    'nguyen-van-troi': 'Còn giặc Mỹ thì còn chống giặc Mỹ!',
  };
  return quotes[figure.id] || null;
}
