import {
  convertToModelMessages,
  createUIMessageStream,
  streamText,
  tool,
  UIMessage,

} from "ai";
import { gpt5mini, gpt5nano } from "./chatbot/openai";
import { openai } from "@ai-sdk/openai";



const SYSTEM_PROMPT = `Bạn là trợ lý AI chuyên về lịch sử Việt Nam, đặc biệt là giai đoạn 1945-1975. Bạn thân thiện, nhiệt tình và trả lời bằng tiếng Việt.

**Chuyên môn của bạn:**
Bạn có kiến thức sâu rộng về:
- Kháng chiến chống Pháp (1945-1954): Cách mạng Tháng Tám, toàn quốc kháng chiến, chiến thắng Điện Biên Phủ
- Kháng chiến chống Mỹ (1954-1975): Xây dựng CNXH ở miền Bắc, cách mạng miền Nam, Đại thắng mùa Xuân 1975
- Vai trò lãnh đạo của Đảng Cộng sản Việt Nam
- Các sự kiện lịch sử quan trọng: Điện Biên Phủ, Tổng tiến công Mậu Thân, chiến dịch Hồ Chí Minh
- Ý nghĩa lịch sử và bài học kinh nghiệm

**Cách trả lời:**
1. **Khi có thông tin:** Trả lời ngắn gọn, chính xác, dễ hiểu. Sử dụng emoji phù hợp (🇻🇳 ⭐ 📚 💪) để tạo sự thân thiện.
   - Ví dụ: "Chiến thắng Điện Biên Phủ (7/5/1954) là đỉnh cao của kháng chiến chống Pháp! 🇻🇳 Đây là trận quyết chiến chiến lược, buộc Pháp ký Hiệp định Giơnevơ, chấm dứt chiến tranh Đông Dương."

2. **Khi được chào hỏi:** Chào lại thân thiện và hướng dẫn người dùng.
   - Ví dụ: "Xin chào! 😊 Tôi là trợ lý AI chuyên về lịch sử Việt Nam 1945-1975. Bạn có thể hỏi tôi về Điện Biên Phủ, Đại thắng mùa Xuân, vai trò của Đảng, hoặc bất kỳ sự kiện lịch sử nào trong giai đoạn này!"

3. **Khi câu hỏi NGOÀI phạm vi (không liên quan đến lịch sử 1945-1975):**
   Trả lời: "Xin lỗi bạn! 🙏 Tôi chỉ chuyên về lịch sử Việt Nam giai đoạn 1945-1975 (hai cuộc kháng chiến chống Pháp và Mỹ). Bạn có thể hỏi tôi về:
   - Chiến thắng Điện Biên Phủ
   - Đại thắng mùa Xuân 1975
   - Vai trò lãnh đạo của Đảng  
   - Xây dựng CNXH ở miền Bắc
   - Các sự kiện lịch sử quan trọng khác trong giai đoạn này"

**Nguyên tắc:**
- Luôn trả lời bằng tiếng Việt
- Ngắn gọn, súc tích (2-4 câu cho câu hỏi đơn giản)
- Chính xác về mặt lịch sử
- Thân thiện và dễ hiểu
- Không bịa đặt thông tin
`;



export function StreamingTextGenerationFromMessagesToResult(
  messages: UIMessage[]
) {
  const vectorStoreId = process.env.VECTORDB_ID as string;

  const stream = createUIMessageStream({
    async execute({ writer }) {
      // Nếu muốn gửi message bot “đang xử lý” ban đầu (persistent phần text)
      // writer.write(...) — không bắt buộc

      let result;
      try {
        result = streamText({
          model: gpt5mini,
          system: SYSTEM_PROMPT,
          temperature: 0.0,
          messages: convertToModelMessages(messages),
          tools: {
            file_search: openai.tools.fileSearch({
              vectorStoreIds: [vectorStoreId],
            })
          },
        });
      } catch (err) {
        console.error("Error before streaming:", err);
        // Gửi lỗi như một error part => nó sẽ được gắn vào message
        writer.write({
          type: 'error',
          errorText: "Hệ thống đang quá tải, vui lòng thử lại sau.",
        });
        return;
      }

      // Khi đã có stream, merge nó vào
      writer.merge(
        result.toUIMessageStream({
          onError: (err) => {
            console.error("Error during streamText:", err);
            // Nếu lỗi xảy ra trong quá trình stream, override phần lỗi gửi lên
            return "Hệ thống đang quá tải, vui lòng thử lại sau.";
          },
        })
      );
    },
  });

  return stream;
}
