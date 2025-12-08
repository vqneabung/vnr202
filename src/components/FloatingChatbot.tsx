"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { Send, Bot, User, Loader2, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DefaultChatTransport } from "ai";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat({
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

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #C9A227, #8B1A1A)",
          boxShadow: "0 4px 20px rgba(201, 162, 39, 0.4)",
        }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] rounded-xl shadow-2xl overflow-hidden border border-[#C9A227]/30 animate-in slide-in-from-bottom-5 fade-in duration-300"
          style={{ backgroundColor: "#FFFDF8" }}
        >
          {/* Header */}
          <div
            className="p-4 flex items-center justify-between"
            style={{
              background: "linear-gradient(135deg, #0F1C3F, #8B1A1A)",
            }}
          >
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Chatbot Lịch Sử</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[350px] overflow-y-auto p-4 space-y-3 bg-[#FFFDF8]">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 py-12">
                <Bot className="w-12 h-12 mx-auto mb-3 text-[#C9A227]" />
                <p className="text-sm">Hãy đặt câu hỏi về lịch sử Đảng 1945-1975</p>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-2 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-[#C9A227] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-lg p-3 ${
                    message.role === "user"
                      ? "bg-[#0F1C3F] text-white"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <p className="text-sm leading-relaxed">
                    {message.parts.map((part: any) => part.text).join("")}
                  </p>
                </div>
                {message.role === "user" && (
                  <div className="w-7 h-7 rounded-full bg-[#8B1A1A] flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}

            {(status === "streaming" || status === "submitted") && (
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full bg-[#C9A227] flex items-center justify-center">
                  <Loader2 className="w-4 h-4 text-white animate-spin" />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3">
                  <p className="text-sm text-gray-400">Đang suy nghĩ...</p>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t flex gap-2 bg-white">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Đặt câu hỏi..."
              className="flex-1 text-sm"
              disabled={status === "streaming"}
            />
            <Button
              type="submit"
              size="sm"
              disabled={status === "streaming" || !input.trim()}
              style={{ backgroundColor: "#C9A227" }}
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
