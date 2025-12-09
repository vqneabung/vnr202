import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lịch Sử Đảng 1945-1975 | Hai Cuộc Kháng Chiến",
  description: "Tìm hiểu về vai trò lãnh đạo của Đảng trong hai cuộc kháng chiến chống Pháp và Mỹ, hoàn thành giải phóng dân tộc, thống nhất đất nước (1945-1975)",
  keywords: "lịch sử đảng, kháng chiến chống Pháp, kháng chiến chống Mỹ, Điện Biên Phủ, 1945-1975",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
