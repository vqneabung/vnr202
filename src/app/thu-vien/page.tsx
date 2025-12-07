import ThuVienHero from "@/components/thu-vien/ThuVienHero";
import ImageGalleries from "@/components/thu-vien/ImageGalleries";
import VideoSection from "@/components/thu-vien/VideoSection";

export default function ThuVienPage() {
  return (
    <div className="min-h-screen bg-[var(--antique-parchment)]">
      <ThuVienHero />
      <ImageGalleries />
      <VideoSection />
    </div>
  );
}
