/**
 * Trang Nhân Vật Lịch Sử
 * Layout kiểu Wikipedia: Sidebar trái + Grid nội dung bên phải
 * Responsive: Mobile sidebar chuyển thành accordion
 */

"use client";

import { useState, useMemo } from "react";
import { Search, ChevronDown, ChevronUp, Users, Crown, Shield, Heart, Sparkles, BookOpen, Filter } from "lucide-react";
import HistoryGrid, { SidebarCard } from "@/components/history/HistoryGrid";
import { historicalFigures, searchFigures, HistoricalFigure } from "@/components/history/historyData";

export default function NhanVatLichSuPage() {
  // State cho search và filter
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<HistoricalFigure['category'] | 'all'>('all');
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile sidebar toggle

  // Lọc nhân vật theo search và category
  const filteredFigures = useMemo(() => {
    let result = searchQuery ? searchFigures(searchQuery) : historicalFigures;
    
    if (selectedCategory !== 'all') {
      result = result.filter(f => f.category === selectedCategory);
    }
    
    return result;
  }, [searchQuery, selectedCategory]);

  // Đếm số lượng theo category
  const categoryCounts = useMemo(() => ({
    all: historicalFigures.length,
    leader: historicalFigures.filter(f => f.category === 'leader').length,
    general: historicalFigures.filter(f => f.category === 'general').length,
    revolutionary: historicalFigures.filter(f => f.category === 'revolutionary').length,
    martyr: historicalFigures.filter(f => f.category === 'martyr').length,
  }), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] via-[#f0f2f5] to-[#e8eaed]">
      {/* Hero Section - Modern Wikipedia style */}
      <header className="relative overflow-hidden bg-gradient-to-r from-[#0F1C3F] via-[#1a2d5a] to-[#0F1C3F]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-[#C9A227]" />
              <span className="text-sm font-medium text-white/90">Danh nhân & Anh hùng dân tộc</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Nhân Vật <span className="text-[#C9A227]">Lịch Sử</span> Việt Nam
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Tôn vinh những anh hùng dân tộc đã cống hiến trọn đời cho sự nghiệp 
              giải phóng và thống nhất đất nước (1945-1975)
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                <Users className="w-5 h-5 text-[#C9A227]" />
                <span className="text-white font-semibold">{historicalFigures.length}</span>
                <span className="text-white/70 text-sm">Nhân vật</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                <Crown className="w-5 h-5 text-[#C9A227]" />
                <span className="text-white font-semibold">{categoryCounts.leader}</span>
                <span className="text-white/70 text-sm">Lãnh đạo</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                <Heart className="w-5 h-5 text-[#C9A227]" />
                <span className="text-white font-semibold">{categoryCounts.martyr}</span>
                <span className="text-white/70 text-sm">Liệt sĩ</span>
              </div>
            </div>

            {/* Search Bar - Inline trong hero */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-1.5">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm nhân vật theo tên, bí danh hoặc chức vụ..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border-0 rounded-lg
                               focus:outline-none focus:ring-2 focus:ring-[#0645ad]/30 focus:bg-white
                               text-gray-700 placeholder-gray-400 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 transition-colors text-sm"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
              {/* Search results count */}
              {searchQuery && (
                <p className="mt-3 text-sm text-white/80">
                  Tìm thấy <strong className="text-[#C9A227]">{filteredFigures.length}</strong> nhân vật phù hợp
                </p>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-8 md:h-12"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            {/* Mobile Toggle Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden w-full flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 mb-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-[#0F1C3F] flex items-center gap-2">
                <Filter className="w-5 h-5 text-[#C9A227]" />
                Bộ lọc & Danh sách ({historicalFigures.length})
              </span>
              {sidebarOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>

            {/* Sidebar Content */}
            <div className={`space-y-4 ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
              
              {/* Category Filter Card */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="p-4 bg-gradient-to-r from-[#0F1C3F] to-[#1a2d5a]">
                  <h3 className="font-semibold text-white flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#C9A227]" />
                    Phân loại nhân vật
                  </h3>
                </div>
                <div className="p-3 space-y-1">
                  <CategoryButton
                    label="Tất cả nhân vật"
                    count={categoryCounts.all}
                    isActive={selectedCategory === 'all'}
                    onClick={() => setSelectedCategory('all')}
                    icon={<Users className="w-4 h-4" />}
                  />
                  <CategoryButton
                    label="Lãnh đạo"
                    count={categoryCounts.leader}
                    isActive={selectedCategory === 'leader'}
                    onClick={() => setSelectedCategory('leader')}
                    icon={<Crown className="w-4 h-4" />}
                    color="text-[#C9A227]"
                    bgColor="bg-[#C9A227]/10"
                  />
                  <CategoryButton
                    label="Tướng lĩnh"
                    count={categoryCounts.general}
                    isActive={selectedCategory === 'general'}
                    onClick={() => setSelectedCategory('general')}
                    icon={<Shield className="w-4 h-4" />}
                    color="text-[#0F1C3F]"
                    bgColor="bg-[#0F1C3F]/10"
                  />
                  <CategoryButton
                    label="Cách mạng"
                    count={categoryCounts.revolutionary}
                    isActive={selectedCategory === 'revolutionary'}
                    onClick={() => setSelectedCategory('revolutionary')}
                    icon={<Sparkles className="w-4 h-4" />}
                    color="text-[#8B1A1A]"
                    bgColor="bg-[#8B1A1A]/10"
                  />
                  <CategoryButton
                    label="Liệt sĩ"
                    count={categoryCounts.martyr}
                    isActive={selectedCategory === 'martyr'}
                    onClick={() => setSelectedCategory('martyr')}
                    icon={<Heart className="w-4 h-4" />}
                    color="text-[#2E7D32]"
                    bgColor="bg-[#2E7D32]/10"
                  />
                </div>
              </div>

              {/* Quick List Card */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="p-4 bg-gradient-to-r from-[#8B1A1A] to-[#a52525]">
                  <h3 className="font-semibold text-white flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#C9A227]" />
                    Truy cập nhanh
                  </h3>
                </div>
                <div className="p-3 max-h-[400px] overflow-y-auto custom-scrollbar">
                  <div className="space-y-1">
                    {historicalFigures.map((figure) => (
                      <SidebarCard
                        key={figure.id}
                        figure={figure}
                        onClick={() => setSidebarOpen(false)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Info Card - Desktop only */}
              <div className="hidden lg:block bg-gradient-to-br from-[#C9A227]/20 to-[#C9A227]/5 rounded-xl border border-[#C9A227]/30 p-4">
                <h3 className="font-semibold text-[#0F1C3F] mb-3 text-sm flex items-center gap-2">
                  📚 Nguồn tham khảo
                </h3>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full mt-1.5"></span>
                    Viện Lịch sử Đảng
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full mt-1.5"></span>
                    Bảo tàng Lịch sử Quốc gia
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full mt-1.5"></span>
                    Wikipedia Tiếng Việt
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Grid Content */}
          <main className="flex-1">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0F1C3F]">
                  {selectedCategory === 'all' 
                    ? 'Tất cả nhân vật' 
                    : `Nhân vật: ${getCategoryName(selectedCategory)}`}
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Hiển thị {filteredFigures.length} trong tổng số {historicalFigures.length} nhân vật
                </p>
              </div>
              
              {/* View toggle - có thể mở rộng sau */}
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
                <span className="text-sm text-gray-500">Sắp xếp:</span>
                <span className="text-sm font-medium text-[#0F1C3F]">Theo thời kỳ</span>
              </div>
            </div>

            {/* Grid nhân vật */}
            {filteredFigures.length > 0 ? (
              <HistoryGrid figures={filteredFigures} />
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center shadow-sm">
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <Search className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Không tìm thấy kết quả
                </h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Không có nhân vật nào phù hợp với tiêu chí tìm kiếm. Hãy thử từ khóa khác hoặc xóa bộ lọc.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory('all');
                  }}
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-[#0645ad] to-[#0F1C3F] text-white rounded-xl hover:shadow-lg transition-all font-medium"
                >
                  Xem tất cả nhân vật
                </button>
              </div>
            )}

            {/* Ghi chú cuối trang */}
            <div className="mt-10 p-6 bg-gradient-to-r from-[#0F1C3F]/5 to-[#8B1A1A]/5 rounded-2xl border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#C9A227]/20 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-[#C9A227]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F1C3F] mb-1">Về danh sách này</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Danh sách bao gồm các nhân vật tiêu biểu trong hai cuộc kháng chiến chống Pháp (1945-1954) và chống Mỹ (1954-1975). 
                    Click vào mỗi nhân vật để xem chi tiết tiểu sử, đóng góp và các câu nói nổi tiếng.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// ============ Helper Components ============

interface CategoryButtonProps {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  color?: string;
  bgColor?: string;
}

function CategoryButton({ label, count, isActive, onClick, icon, color = "text-gray-600", bgColor = "bg-gray-50" }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200
                  ${isActive 
                    ? 'bg-gradient-to-r from-[#0645ad] to-[#0F1C3F] text-white shadow-md scale-[1.02]' 
                    : `${bgColor} hover:scale-[1.01] hover:shadow-sm ${color}`
                  }`}
    >
      <span className={`${isActive ? 'text-[#C9A227]' : ''}`}>{icon}</span>
      <span className="flex-1 text-left font-medium">{label}</span>
      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold
                       ${isActive ? 'bg-white/20 text-white' : 'bg-white text-gray-600 shadow-sm'}`}>
        {count}
      </span>
    </button>
  );
}

// Helper function to get category display name
function getCategoryName(category: HistoricalFigure['category']): string {
  switch (category) {
    case 'leader': return 'Lãnh đạo';
    case 'general': return 'Tướng lĩnh';
    case 'revolutionary': return 'Cách mạng';
    case 'martyr': return 'Liệt sĩ';
    default: return '';
  }
}
