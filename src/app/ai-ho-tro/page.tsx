"use client";

import { useChat } from "@ai-sdk/react";
import { Send, Bot, User, Sparkles, BookOpen, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DefaultChatTransport, UIMessage } from "ai";
import { useState } from "react";

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

export default function AIHoTroPage() {
  const [input, setInput] = useState("");

  const {messages, sendMessage, status, setMessages } = useChat({
     transport: new DefaultChatTransport({
      api: "/api/chatbot",
     })
  });

  const handleSendMessage = (message: string) => {
    sendMessage({ text: message });
  };

  return (
    <div className="min-h-screen bg-[var(--antique-parchment)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--timeless-navy)] to-[var(--royal-burgundy)] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[var(--antique-gold)]" />
              <span className="text-white/80 text-sm">Ứng Dụng AI</span>
            </div>
            
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>
              AI Hỗ Trợ Học Tập
            </h1>
            
            <p className="text-white/80">
              Chatbot AI giải đáp thắc mắc về lịch sử Đảng giai đoạn 1945-1975
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Chatbot */}
            <div>
              <Card className="h-[600px] flex flex-col shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[var(--timeless-navy)] to-[var(--royal-burgundy)] text-white rounded-t-xl">
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    Chatbot Lịch Sử Đảng
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col p-0">
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.length === 0 && (
                      <div className="text-center text-[var(--text-muted)] py-8">
                        <Bot className="w-12 h-12 mx-auto mb-4 text-[var(--ancient-stone)]" />
                        <p className="mb-2">Xin chào! Tôi là chatbot hỗ trợ học tập.</p>
                        <p className="text-sm">Hãy hỏi tôi về lịch sử Đảng giai đoạn 1945-1975!</p>
                      </div>
                    )}
                    
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.role === "assistant" && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] p-3 rounded-xl ${
                            message.role === "user"
                              ? "bg-[var(--timeless-navy)] text-white rounded-br-sm"
                              : "bg-white shadow-md rounded-bl-sm"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message?.parts?.find((part) => part.type === "text")?.text || ""}</p>
                        </div>
                        {message.role === "user" && (
                          <div className="w-8 h-8 rounded-full bg-[var(--rustic-olive)] flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {status === "streaming" && (
                      <div className="flex gap-3 justify-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white shadow-md p-3 rounded-xl rounded-bl-sm">
                          <Loader2 className="w-5 h-5 animate-spin text-[var(--antique-gold)]" />
                        </div>
                      </div>
                    )}

                    {status === "error" && (
                      <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-xl">
                        <AlertCircle className="w-5 h-5" />
                        <span className="text-sm">Có lỗi xảy ra. Vui lòng thử lại!</span>
                      </div>
                    )}
                  </div>

                  {/* Input */}
                  <div className="border-t p-4 bg-[var(--antique-parchment)]">
                    <form onSubmit={(e) => {e.preventDefault(); handleSendMessage(input)}} className="flex gap-2">
                      <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Nhập câu hỏi của bạn..."
                        className="flex-1"
                        disabled={status === "streaming"}
                      />
                      <Button type="submit" disabled={status === "streaming" || !input.trim()} className="gap-2">
                        <Send className="w-4 h-4" />
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Information */}
            <div className="space-y-6">
              {/* Công cụ AI đã sử dụng */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Sparkles className="w-5 h-5 text-[var(--antique-gold)]" />
                    1. Công Cụ AI Đã Sử Dụng
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {aiTools.map((tool, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 bg-[var(--antique-parchment)] rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-[var(--antique-gold)]"></div>
                        <div>
                          <span className="font-medium text-[var(--timeless-navy)]">{tool.name}</span>
                          <span className="text-[var(--text-muted)] text-sm"> - {tool.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Mục đích sử dụng AI */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookOpen className="w-5 h-5 text-[var(--rustic-olive)]" />
                    2. Mục Đích Sử Dụng AI
                  </CardTitle>
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

              {/* Vai trò hỗ trợ */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Bot className="w-5 h-5 text-[var(--timeless-navy)]" />
                    3. Vai Trò Hỗ Trợ Của AI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {aiRoles.map((role, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[var(--antique-gold)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--text-muted)]">{role}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="max-w-6xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
            {/* Kiểm tra và chỉnh sửa */}
            <Card className="border-l-4 border-l-[var(--antique-gold)]">
              <CardHeader>
                <CardTitle className="text-lg">4. Kiểm Tra Và Chỉnh Sửa Sau Khi Dùng AI</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {editingProcess.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[var(--timeless-navy)] text-white text-xs flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-[var(--text-muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Cam kết liêm chính */}
            <Card className="border-l-4 border-l-[var(--royal-burgundy)]">
              <CardHeader>
                <CardTitle className="text-lg text-[var(--royal-burgundy)]">5. Cam Kết Liêm Chính Học Thuật</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {commitments.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <AlertCircle className="w-4 h-4 text-[var(--royal-burgundy)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
