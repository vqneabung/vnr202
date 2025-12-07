"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DefaultChatTransport } from "ai";

export default function Chatbot() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chatbot",
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
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-[var(--timeless-navy)] to-[var(--royal-burgundy)]">
              <CardTitle className="text-white flex items-center gap-2">
                <Bot className="w-6 h-6" />
                Chatbot Lịch Sử
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-[var(--antique-parchment)]/30">
                {messages.length === 0 && (
                  <div className="text-center text-[var(--text-muted)] py-20">
                    <Bot className="w-16 h-16 mx-auto mb-4 text-[var(--antique-gold)]" />
                    <p>Hãy đặt câu hỏi về lịch sử Đảng 1945-1975</p>
                  </div>
                )}

                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-[var(--antique-gold)] flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[70%] rounded-xl p-4 ${
                        message.role === "user"
                          ? "bg-[var(--timeless-navy)] text-white"
                          : "bg-white border border-[var(--ancient-stone)]/30"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">
                        {message.parts.map((part: any) => part.text).join("")}
                      </p>
                    </div>
                    {message.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-[var(--royal-burgundy)] flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                ))}

                {status === "streaming" && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--antique-gold)] flex items-center justify-center">
                      <Loader2 className="w-5 h-5 text-white animate-spin" />
                    </div>
                    <div className="bg-white border border-[var(--ancient-stone)]/30 rounded-xl p-4">
                      <p className="text-sm text-[var(--text-muted)]">Đang suy nghĩ...</p>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Đặt câu hỏi về lịch sử..."
                  className="flex-1"
                  disabled={status === "streaming"}
                />
                <Button type="submit" disabled={status === "streaming" || !input.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
