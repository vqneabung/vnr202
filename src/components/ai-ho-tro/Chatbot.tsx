"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { Send, Bot, User, Loader2, Sparkles, History, Trash2, MessageSquare, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MarkdownContent from "@/components/ui/markdown";
import { DefaultChatTransport } from "ai";

const suggestedTopics = [
  {
    icon: "🏛️",
    title: "Cách mạng Tháng 8",
    question: "Cách mạng Tháng 8 năm 1945 diễn ra như thế nào?",
  },
  {
    icon: "⚔️",
    title: "Điện Biên Phủ",
    question: "Chiến thắng Điện Biên Phủ có ý nghĩa gì?",
  },
  {
    icon: "📜",
    title: "Hiệp định Genève",
    question: "Nội dung chính của Hiệp định Genève 1954?",
  },
  {
    icon: "🎖️",
    title: "Chiến dịch Hồ Chí Minh",
    question: "Chiến dịch Hồ Chí Minh 1975 diễn ra như thế nào?",
  },
];

export default function Chatbot() {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    await sendMessage({
      role: "user",
      parts: [{ type: "text", text: input }],
    });
    setInput("");
  };

  const handleTopicClick = async (question: string) => {
    await sendMessage({
      role: "user",
      parts: [{ type: "text", text: question }],
    });
  };

  const clearChat = () => {
    setMessages([]);
  };

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section className="py-12 bg-gradient-to-b from-[var(--antique-parchment)] to-[#E8DCC8]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-2xl overflow-hidden border-0 rounded-2xl">
            {/* Header */}
            <CardHeader className="p-0">
              <div
                className="p-6 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0F1C3F 0%, #1a2d5a 40%, #8B1A1A 100%)",
                }}
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 border border-white/30 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 border border-white/20 rounded-full -translate-x-1/2 translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#C9A227]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                </div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A227] to-[#a88620] flex items-center justify-center shadow-xl">
                      <Bot className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-white text-xl font-bold flex items-center gap-2">
                        Trợ Lý AI Lịch Sử
                        <Sparkles className="w-5 h-5 text-[#C9A227]" />
                      </h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-white/60 text-sm">Sẵn sàng hỗ trợ bạn</span>
                      </div>
                    </div>
                  </div>
                  
                  {messages.length > 0 && (
                    <Button
                      onClick={clearChat}
                      variant="ghost"
                      className="text-white/70 hover:text-white hover:bg-white/10 gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      Xóa lịch sử
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {/* Messages Area */}
              <div className="h-[520px] overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-[#FFFDF8] custom-scrollbar">
                {/* Welcome state */}
                {messages.length === 0 && (
                  <div className="h-full flex flex-col items-center justify-center text-center py-8">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#C9A227]/20 to-[#8B1A1A]/10 flex items-center justify-center">
                        <MessageSquare className="w-12 h-12 text-[#C9A227]" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#0F1C3F] to-[#1a2d5a] rounded-full flex items-center justify-center shadow-lg">
                        <History className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#0F1C3F] mb-2">
                      Chào mừng bạn đến với Trợ Lý AI!
                    </h3>
                    <p className="text-gray-500 mb-8 max-w-md">
                      Tôi có thể giúp bạn tìm hiểu về lịch sử Đảng Cộng sản Việt Nam trong giai đoạn 1945-1975
                    </p>

                    {/* Suggested Topics */}
                    <div className="w-full max-w-2xl">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Lightbulb className="w-4 h-4 text-[#C9A227]" />
                        <span className="text-sm text-gray-500 font-medium">Chủ đề gợi ý</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {suggestedTopics.map((topic, index) => (
                          <button
                            key={index}
                            onClick={() => handleTopicClick(topic.question)}
                            className="group p-4 rounded-xl bg-white border border-gray-100 hover:border-[#C9A227]/50 hover:shadow-lg transition-all duration-300 text-left"
                          >
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">{topic.icon}</span>
                              <div>
                                <h4 className="font-semibold text-[#0F1C3F] group-hover:text-[#C9A227] transition-colors">
                                  {topic.title}
                                </h4>
                                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                  {topic.question}
                                </p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Messages */}
                {messages.map((message, index) => {
                  // Lấy text content từ message
                  const textContent = message.parts
                    ?.filter((part: any) => part.type === "text" || part.text)
                    .map((part: any) => part.text)
                    .join("") || "";
                  
                  // Bỏ qua message assistant rỗng (đang streaming)
                  if (message.role === "assistant" && !textContent) {
                    return null;
                  }

                  return (
                    <div
                      key={index}
                      className={`flex gap-4 message-fade-in ${
                        message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {message.role === "assistant" && (
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#a88620] flex items-center justify-center flex-shrink-0 shadow-md">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] rounded-2xl p-4 shadow-sm ${
                          message.role === "user"
                            ? "bg-gradient-to-br from-[#0F1C3F] to-[#1a2d5a] text-white rounded-br-md"
                            : "bg-white border border-gray-100 rounded-bl-md text-gray-800"
                        }`}
                      >
                        {message.role === "assistant" ? (
                          <MarkdownContent content={textContent} />
                        ) : (
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {textContent}
                          </p>
                        )}
                      </div>
                      {message.role === "user" && (
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B1A1A] to-[#6d1414] flex items-center justify-center flex-shrink-0 shadow-md">
                          <User className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Typing indicator - show when not ready */}
                {status !== "ready" && status !== "error" && (
                  <div className="flex gap-4 items-start message-fade-in">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#a88620] flex items-center justify-center shadow-md flex-shrink-0">
                      <Loader2 className="w-5 h-5 text-white animate-spin" />
                    </div>
                    <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <span className="w-2.5 h-2.5 bg-[#C9A227] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                          <span className="w-2.5 h-2.5 bg-[#C9A227] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                          <span className="w-2.5 h-2.5 bg-[#C9A227] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                        </div>
                        <span className="text-sm text-gray-400 ml-2">Đang soạn câu trả lời...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-gray-100 bg-white">
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <div className="flex-1 relative">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Nhập câu hỏi về lịch sử Đảng 1945-1975..."
                      className="w-full py-6 px-5 text-base rounded-xl border-gray-200 focus:border-[#C9A227] focus:ring-[#C9A227]/20 transition-all pr-4"
                      disabled={status === "streaming"}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === "streaming" || !input.trim()}
                    className="h-auto px-6 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#a88620] hover:from-[#a88620] hover:to-[#8a7019] shadow-lg shadow-[#C9A227]/30 transition-all duration-300 disabled:opacity-50 disabled:shadow-none gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span className="hidden sm:inline">Gửi</span>
                  </Button>
                </form>
                <p className="text-xs text-gray-400 text-center mt-4">
                  💡 Mẹo: Bạn có thể hỏi về các sự kiện, nhân vật, chiến dịch trong giai đoạn 1945-1975
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
