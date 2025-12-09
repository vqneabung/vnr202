"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { Send, Bot, User, Loader2, X, MessageCircle, Sparkles, History, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DefaultChatTransport } from "ai";

const suggestedQuestions = [
  "Chiến dịch Điện Biên Phủ diễn ra như thế nào?",
  "Vai trò của Đảng trong kháng chiến chống Mỹ?",
  "Hiệp định Genève 1954 có nội dung gì?",
];

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleSuggestionClick = async (question: string) => {
    await sendMessage({
      role: "user",
      parts: [{ type: "text", text: question }],
    });
  };

  const clearChat = () => {
    setMessages([]);
  };

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Button with pulse animation */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-105 group ${
          !isOpen ? "animate-bounce-gentle" : ""
        }`}
        style={{
          background: isOpen
            ? "linear-gradient(135deg, #8B1A1A, #0F1C3F)"
            : "linear-gradient(135deg, #C9A227, #8B1A1A)",
          boxShadow: isOpen
            ? "0 8px 32px rgba(139, 26, 26, 0.5)"
            : "0 8px 32px rgba(201, 162, 39, 0.5)",
        }}
      >
        <div className="relative">
          {isOpen ? (
            <X className="w-7 h-7 text-white transition-transform duration-300" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-white"></span>
            </>
          )}
        </div>
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div
          className="fixed bottom-28 right-6 z-50 w-[400px] max-w-[calc(100vw-48px)] rounded-2xl shadow-2xl overflow-hidden border border-[#C9A227]/20 chatbot-slide-up"
          style={{ 
            backgroundColor: "#FFFDF8",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(201, 162, 39, 0.1)"
          }}
        >
          {/* Header with gradient and pattern */}
          <div
            className="p-4 flex items-center justify-between relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0F1C3F 0%, #1a2d5a 50%, #8B1A1A 100%)",
            }}
          >
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-20 h-20 border border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border border-white/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A227] to-[#a88620] flex items-center justify-center shadow-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Trợ Lý Lịch Sử</h3>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-white/60 text-xs">Đang hoạt động</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 relative z-10">
              {messages.length > 0 && (
                <button
                  onClick={clearChat}
                  className="text-white/50 hover:text-white/90 transition-colors p-1.5 hover:bg-white/10 rounded-lg"
                  title="Xóa lịch sử chat"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-[380px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#FFFDF8] to-[#F5EDE0] custom-scrollbar">
            {/* Welcome message when empty */}
            {messages.length === 0 && (
              <div className="text-center py-6 space-y-6">
                <div className="relative inline-block">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#C9A227]/20 to-[#8B1A1A]/10 flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-[#C9A227]" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#0F1C3F] rounded-full flex items-center justify-center">
                    <History className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#0F1C3F] mb-2">Xin chào!</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Tôi là trợ lý AI chuyên về lịch sử Đảng<br />giai đoạn 1945-1975
                  </p>
                </div>
                
                {/* Suggested questions */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Gợi ý câu hỏi</p>
                  <div className="space-y-2">
                    {suggestedQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSuggestionClick(q)}
                        className="w-full text-left text-sm p-3 rounded-xl bg-white border border-[#C9A227]/20 hover:border-[#C9A227]/50 hover:bg-[#C9A227]/5 transition-all duration-200 text-gray-600 hover:text-[#0F1C3F] group"
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] group-hover:scale-125 transition-transform"></span>
                          {q}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Messages */}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 message-fade-in ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A227] to-[#a88620] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl p-3.5 shadow-sm ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-[#0F1C3F] to-[#1a2d5a] text-white rounded-br-md"
                      : "bg-white border border-gray-100 rounded-bl-md"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.parts.map((part: any) => part.text).join("")}
                  </p>
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B1A1A] to-[#6d1414] flex items-center justify-center flex-shrink-0 shadow-md">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator - only show when submitted, not streaming */}
            {status === "submitted" && (
              <div className="flex gap-3 items-start message-fade-in">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A227] to-[#a88620] flex items-center justify-center shadow-md flex-shrink-0">
                  <Loader2 className="w-4 h-4 text-white animate-spin" />
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md p-3.5 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#C9A227] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 bg-[#C9A227] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 bg-[#C9A227] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100 bg-white">
            <div className="flex gap-2 items-center">
              <div className="flex-1 relative">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Nhập câu hỏi của bạn..."
                  className="w-full pr-4 py-3 text-sm rounded-xl border-gray-200 focus:border-[#C9A227] focus:ring-[#C9A227]/20 transition-all"
                  disabled={status === "streaming"}
                />
              </div>
              <Button
                type="submit"
                size="icon"
                disabled={status === "streaming" || !input.trim()}
                className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#a88620] hover:from-[#a88620] hover:to-[#8a7019] shadow-lg shadow-[#C9A227]/30 transition-all duration-300 disabled:opacity-50 disabled:shadow-none"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2">
              Powered by AI • Lịch sử Đảng 1945-1975
            </p>
          </form>
        </div>
      )}
    </>
  );
}
