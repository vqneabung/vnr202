/**
 * HistoryGrid Component
 * Hiển thị grid các nhân vật lịch sử theo layout Wikipedia
 * Có thể tái sử dụng và mở rộng dễ dàng
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { HistoricalFigure } from "./historyData";

interface HistoryGridProps {
  figures: HistoricalFigure[];
  className?: string;
}

/**
 * Component hiển thị grid các card nhân vật lịch sử
 * Responsive: 1 cột mobile → 2 cột tablet → 3-4 cột desktop
 */
export default function HistoryGrid({ figures, className = "" }: HistoryGridProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
      {figures.map((figure) => (
        <HistoryCard key={figure.id} figure={figure} />
      ))}
    </div>
  );
}

/**
 * Card hiển thị thông tin một nhân vật
 */
interface HistoryCardProps {
  figure: HistoricalFigure;
}

function HistoryCard({ figure }: HistoryCardProps) {
  // Xác định màu badge theo category
  const getCategoryStyle = (category: HistoricalFigure['category']) => {
    switch (category) {
      case 'leader':
        return 'bg-[#C9A227] text-white';
      case 'general':
        return 'bg-[#0F1C3F] text-white';
      case 'revolutionary':
        return 'bg-[#8B1A1A] text-white';
      case 'martyr':
        return 'bg-[#2E7D32] text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  // Label cho category
  const getCategoryLabel = (category: HistoricalFigure['category']) => {
    switch (category) {
      case 'leader':
        return 'Lãnh đạo';
      case 'general':
        return 'Tướng lĩnh';
      case 'revolutionary':
        return 'Cách mạng';
      case 'martyr':
        return 'Liệt sĩ';
      default:
        return '';
    }
  };

  return (
    <Link href={`/nhan-vat-lich-su/${figure.id}`}>
      <article 
        className="group bg-white rounded-lg border border-gray-200 overflow-hidden
                   hover:shadow-2xl hover:scale-[1.02] hover:border-[#0645ad]
                   transition-all duration-300 ease-out cursor-pointer h-full flex flex-col"
      >
        {/* Ảnh chân dung */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
          <Image
            src={figure.image}
            alt={`Chân dung ${figure.name}`}
            fill
            className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category badge */}
          <span className={`absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded ${getCategoryStyle(figure.category)}`}>
            {getCategoryLabel(figure.category)}
          </span>
        </div>

        {/* Thông tin nhân vật */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Tên + năm */}
          <h3 className="text-lg font-bold text-[#0F1C3F] group-hover:text-[#0645ad] transition-colors">
            {figure.name}
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            {figure.birthYear} — {figure.deathYear || 'Nay'}
          </p>

          {/* Chức vụ */}
          <p className="text-sm font-medium text-[#8B1A1A] mb-2">
            {figure.role}
          </p>

          {/* Mô tả */}
          <p className="text-sm text-gray-600 line-clamp-3 flex-1">
            {figure.description}
          </p>

          {/* Aliases nếu có */}
          {figure.aliases && figure.aliases.length > 0 && (
            <p className="text-xs text-gray-400 mt-3 pt-2 border-t border-gray-100">
              <span className="font-medium">Bí danh:</span> {figure.aliases.join(', ')}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}

/**
 * Sidebar card nhỏ - hiển thị trong sidebar
 */
interface SidebarCardProps {
  figure: HistoricalFigure;
  isActive?: boolean;
  onClick?: () => void;
}

export function SidebarCard({ figure, isActive = false, onClick }: SidebarCardProps) {
  return (
    <Link 
      href={`/nhan-vat-lich-su/${figure.id}`}
      onClick={onClick}
      className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'bg-[#0645ad]/10 border-l-4 border-[#0645ad]' 
                    : 'hover:bg-gray-100 border-l-4 border-transparent hover:border-[#C9A227]'
                  }`}
    >
      {/* Ảnh tròn 48px */}
      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200">
        <Image
          src={figure.image}
          alt={figure.name}
          fill
          className="object-cover object-top"
          sizes="48px"
        />
      </div>
      
      {/* Thông tin */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium truncate ${isActive ? 'text-[#0645ad]' : 'text-[#0F1C3F]'}`}>
          {figure.name}
        </p>
        <p className="text-xs text-gray-500">
          {figure.birthYear} — {figure.deathYear || 'Nay'}
        </p>
      </div>
    </Link>
  );
}
