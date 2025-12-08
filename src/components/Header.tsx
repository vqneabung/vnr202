"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Star } from "lucide-react";

const navigation = [
  { name: "Trang Chủ", href: "/" },
  { name: "Tổng Quan", href: "/tong-quan" },
  {
    name: "Chi Tiết",
    href: "#",
    children: [
      { name: "Kháng Chiến Chống Pháp (1945-1954)", href: "/chi-tiet/khang-chien-chong-phap" },
      { name: "Kháng Chiến Chống Mỹ (1954-1975)", href: "/chi-tiet/khang-chien-chong-my" },
    ],
  },
  { name: "Thư Viện", href: "/thu-vien" },
  { name: "Ý Nghĩa", href: "/y-nghia" },
  { name: "Quiz", href: "/quiz" },
  { name: "AI Hỗ Trợ", href: "/ai-ho-tro" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg" style={{ backgroundColor: "#0F1C3F" }}>
      {/* Top decorative bar - vintage gold stripe */}
      <div className="h-1" style={{ background: "linear-gradient(90deg, #8B1A1A, #C9A227, #8B1A1A)" }}></div>
      
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded flex items-center justify-center border-2 border-[#C9A227]" style={{
              background: "linear-gradient(135deg, #C9A227, #8B1A1A)"
            }}>
              <Star className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg group-hover:text-[#C9A227] transition-colors" style={{ color: '#FFFFFF' }}>
                Lịch Sử Đảng
              </span>
              <span className="text-[#C9A227] text-xs block tracking-widest" style={{ color: '#C9A227' }}>
                1945 — 1975
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                  >
                    <button 
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="px-4 py-2 text-[#F4D03F] hover:text-[#FFD700] transition-colors text-sm font-semibold flex items-center gap-1 tracking-wide" style={{ color: '#F4D03F' }}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-72 rounded-lg shadow-2xl overflow-hidden border border-[#C9A227]/30" style={{ backgroundColor: "#FFFDF8" }}>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-[#0F1C3F] hover:bg-[#F5EDE0] hover:text-[#8B1A1A] transition-colors border-l-4 border-transparent hover:border-[#C9A227] font-medium"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-[#F4D03F] hover:text-[#FFD700] transition-colors text-sm font-semibold tracking-wide"
                    style={{ color: '#F4D03F' }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[#F4D03F] hover:text-[#FFD700] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#C9A227]/30">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <div className="px-4 py-2 text-[#C9A227] font-semibold text-sm tracking-wide uppercase">
                      {item.name}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-6 py-2 text-[#F4D03F] hover:text-[#FFD700] hover:bg-[#1A2D5A] transition-colors text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-[#F4D03F] hover:text-[#FFD700] hover:bg-[#1A2D5A] transition-colors text-sm font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
