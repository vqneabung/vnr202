// API route for AI chatbot
// TODO: Configure your AI provider here (e.g., OpenAI, Anthropic, Google Gemini)

import { NextRequest } from "next/server";

// Example with OpenAI (uncomment and configure when ready):
// import { openai } from '@ai-sdk/openai';
// import { streamText } from 'ai';

// Example with Google Gemini (uncomment and configure when ready):
// import { google } from '@ai-sdk/google';
// import { streamText } from 'ai';

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    
    // Get the last user message
    const lastMessage = messages[messages.length - 1];
    
    // TODO: Replace this placeholder with your actual AI implementation
    // Example with OpenAI:
    // const result = streamText({
    //   model: openai('gpt-4o'),
    //   system: `
    //     Bạn là một trợ lý AI chuyên về lịch sử Đảng Cộng sản Việt Nam giai đoạn 1945-1975.
    //     Hãy trả lời các câu hỏi về:
    //     - Kháng chiến chống Pháp (1945-1954)
    //     - Kháng chiến chống Mỹ (1954-1975)
    //     - Vai trò của Đảng trong lãnh đạo cách mạng
    //     - Các sự kiện lịch sử quan trọng như Điện Biên Phủ, Đại thắng mùa Xuân 1975
    //     Trả lời bằng tiếng Việt, ngắn gọn và chính xác.
    //   `,
    //   messages,
    // });
    // return result.toDataStreamResponse();

    // Placeholder response
    const placeholderResponse = generatePlaceholderResponse(lastMessage.content);
    
    // Return as a stream-compatible response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        // Format as AI SDK data stream
        const data = `0:"${placeholderResponse.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"\n`;
        controller.enqueue(encoder.encode(data));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// Placeholder function - replace with actual AI when configured
function generatePlaceholderResponse(question: string): string {
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion.includes("điện biên phủ")) {
    return "Chiến thắng Điện Biên Phủ (07/5/1954) là đỉnh cao của cuộc kháng chiến chống Pháp. Đây là trận quyết chiến chiến lược, buộc Pháp ký Hiệp định Giơnevơ, chấm dứt chiến tranh Đông Dương.";
  }
  
  if (lowerQuestion.includes("1975") || lowerQuestion.includes("mùa xuân")) {
    return "Đại thắng mùa Xuân 1975 với chiến dịch Hồ Chí Minh đã giải phóng hoàn toàn miền Nam, thống nhất đất nước. Ngày 30/4/1975 đánh dấu sự kết thúc cuộc kháng chiến chống Mỹ.";
  }
  
  if (lowerQuestion.includes("đảng") || lowerQuestion.includes("lãnh đạo")) {
    return "Đảng Cộng sản Việt Nam giữ vai trò lãnh đạo quyết định trong hai cuộc kháng chiến: đề ra đường lối đúng đắn, huy động sức mạnh đại đoàn kết dân tộc, kết hợp sức mạnh dân tộc với sức mạnh thời đại.";
  }
  
  if (lowerQuestion.includes("miền bắc") || lowerQuestion.includes("cnxh")) {
    return "Miền Bắc (1954-1975) thực hiện nhiệm vụ xây dựng CNXH: cải cách ruộng đất, hợp tác hóa nông nghiệp, phát triển công nghiệp, văn hóa-giáo dục. Miền Bắc trở thành hậu phương lớn chi viện cho miền Nam.";
  }
  
  return "Đây là chatbot demo. Để có câu trả lời đầy đủ, vui lòng cấu hình API key cho AI provider (OpenAI, Google Gemini, v.v.) trong file src/app/api/chat/route.ts.\\n\\nBạn có thể hỏi về:\\n- Chiến thắng Điện Biên Phủ\\n- Đại thắng mùa Xuân 1975\\n- Vai trò của Đảng\\n- Xây dựng CNXH ở miền Bắc";
}
