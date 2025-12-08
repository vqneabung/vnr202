// API route for AI chatbot
// TODO: Configure your AI provider here (e.g., OpenAI, Anthropic, Google Gemini)

import { StreamingTextGenerationFromMessagesToResult } from "@/lib/ai/chatbot";
import { createUIMessageStreamResponse, UIMessage } from "ai";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
  const { messages }: { messages: UIMessage[] } = await request.json();

  const result = StreamingTextGenerationFromMessagesToResult(messages);

  return createUIMessageStreamResponse({ stream: result });
}
