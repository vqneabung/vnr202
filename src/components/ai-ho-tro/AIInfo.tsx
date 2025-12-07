import { BookOpen, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const aiTools = [
  { name: "ChatGPT", description: "Gợi ý ý tưởng, mở rộng nội dung" },
  { name: "Google Gemini", description: "Phân tích cấu trúc văn bản" },
  { name: "AI Tools", description: "Kiểm tra ngữ pháp và chính tả" },
];

const aiPurposes = [
  "Tổng hợp và xử lý thông tin nhanh chóng từ nhiều nguồn",
  "Giúp rút ngắn thời gian viết, chỉnh sửa văn bản",
  "Hỗ trợ định hình phong cách trình bày phù hợp",
  "Tạo hình ảnh, video liên quan đến chủ đề",
];

const aiRoles = [
  "Gợi ý khung nội dung đầy đủ cho trang chủ, trang chi tiết",
  "Gợi ý cách mở đoạn, kết đoạn và chuyển đoạn logic",
  "Hỗ trợ kiểm tra tính mạch lạc của toàn bộ nội dung",
  "Đề xuất cách trình bày rõ ràng, phù hợp với trải nghiệm người dùng",
];

const editingProcess = [
  "Tự kiểm tra lại từng phần nội dung, hình ảnh do AI đề xuất",
  "Chỉnh sửa câu chữ để tránh phụ thuộc vào AI",
  "Lược bỏ các phần AI suy diễn hoặc không phù hợp",
  "Đảm bảo tính nhất quán về thời gian, sự kiện và khái niệm",
  "Kiểm tra đạo văn để đảm bảo không sao chép nguyên văn",
];

const commitments = [
  "Không sử dụng AI để viết toàn bộ nội dung thay cho bản thân",
  "Không sao chép nguyên bản văn bản do AI tạo ra",
  "Chỉ dùng AI như một công cụ tham khảo và hỗ trợ kỹ thuật",
];

export default function AIInfo() {
  return (
    <section className="py-16 bg-[var(--antique-parchment)]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* AI Tools */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--timeless-navy)] mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Công Cụ AI Sử Dụng
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {aiTools.map((tool, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-base">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[var(--text-muted)]">{tool.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Purposes & Roles */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Mục Đích Sử Dụng AI</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {aiPurposes.map((purpose, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-[var(--rustic-olive)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-muted)]">{purpose}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vai Trò Của AI</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {aiRoles.map((role, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-[var(--rustic-olive)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-muted)]">{role}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Editing Process */}
          <Card className="border-l-4 border-l-[var(--antique-gold)]">
            <CardHeader>
              <CardTitle>Quy Trình Chỉnh Sửa</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {editingProcess.map((step, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="w-6 h-6 rounded-full bg-[var(--antique-gold)] text-white text-xs flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-[var(--text-muted)] pt-0.5">{step}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Commitments */}
          <Card className="border-l-4 border-l-[var(--royal-burgundy)] bg-[var(--royal-burgundy)]/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[var(--royal-burgundy)]" />
                Cam Kết Học Thuật
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {commitments.map((commitment, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[var(--royal-burgundy)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-muted)] font-medium">{commitment}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
