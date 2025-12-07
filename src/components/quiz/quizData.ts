export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Đường lối kháng chiến chống Pháp của Đảng gồm những nội dung nào?",
    options: [
      "Kháng chiến toàn dân, toàn diện, trường kỳ, tự lực cánh sinh",
      "Kháng chiến quân sự, đánh nhanh thắng nhanh",
      "Phòng ngự chiến lược, chờ đợi viện trợ quốc tế",
      "Đấu tranh ngoại giao là chính",
    ],
    correctAnswer: 0,
    explanation: "Đường lối kháng chiến chống Pháp là: toàn dân, toàn diện, trường kỳ, tự lực cánh sinh, kết hợp quân sự – chính trị – ngoại giao.",
  },
  {
    id: 2,
    question: "Chiến thắng Điện Biên Phủ có ý nghĩa gì?",
    options: [
      "Chỉ là một chiến thắng quân sự đơn thuần",
      "Đòn quyết chiến chiến lược, buộc Pháp ký Hiệp định Giơnevơ, chấm dứt chiến tranh",
      "Mở đầu cuộc kháng chiến chống Pháp",
      "Giải phóng hoàn toàn miền Nam",
    ],
    correctAnswer: 1,
    explanation: "Điện Biên Phủ là đòn quyết chiến chiến lược, buộc Pháp ký Hiệp định Giơnevơ (1954), chấm dứt chiến tranh Đông Dương.",
  },
  {
    id: 3,
    question: "Tại sao nói miền Bắc là \"hậu phương lớn\"?",
    options: [
      "Vì miền Bắc có diện tích lớn hơn miền Nam",
      "Vì miền Bắc xây dựng CNXH, chi viện sức người, sức của cho miền Nam",
      "Vì miền Bắc không bị chiến tranh ảnh hưởng",
      "Vì miền Bắc có nhiều tài nguyên thiên nhiên",
    ],
    correctAnswer: 1,
    explanation: "Miền Bắc xây dựng CNXH, trở thành căn cứ địa của cả nước, chi viện sức người, sức của to lớn cho miền Nam.",
  },
  {
    id: 4,
    question: "Chiến lược \"Việt Nam hóa chiến tranh\" của Mỹ nhằm mục đích gì?",
    options: [
      "Rút quân Mỹ về nước, để quân đội Sài Gòn tự chiến đấu với sự hỗ trợ của Mỹ",
      "Tăng số lượng quân Mỹ tham chiến",
      "Đàm phán hòa bình với Việt Nam",
      "Liên minh với Pháp để chống Việt Nam",
    ],
    correctAnswer: 0,
    explanation: "\"Việt Nam hóa chiến tranh\" nhằm rút quân Mỹ, dùng người Việt đánh người Việt với vũ khí và đôla Mỹ.",
  },
  {
    id: 5,
    question: "Đại hội II (1951) có ý nghĩa gì?",
    options: [
      "Thành lập nước Việt Nam Dân chủ Cộng hòa",
      "Hoàn chỉnh đường lối cách mạng, thành lập Đảng Lao động Việt Nam",
      "Quyết định tổng tiến công mùa Xuân 1975",
      "Ký kết Hiệp định Giơnevơ",
    ],
    correctAnswer: 1,
    explanation: "Đại hội II hoàn chỉnh đường lối cách mạng, thành lập Đảng Lao động Việt Nam, xác định nhiệm vụ \"dân tộc dân chủ nhân dân\".",
  },
  {
    id: 6,
    question: "Nhiệm vụ chiến lược của cách mạng Việt Nam (1954–1975) là gì?",
    options: [
      "Chỉ xây dựng CNXH ở miền Bắc",
      "Xây dựng CNXH ở miền Bắc và giải phóng miền Nam, thống nhất đất nước",
      "Chỉ đấu tranh quân sự ở miền Nam",
      "Đàm phán thống nhất với chính quyền Sài Gòn",
    ],
    correctAnswer: 1,
    explanation: "Hai nhiệm vụ chiến lược: xây dựng CNXH ở miền Bắc (hậu phương) và giải phóng miền Nam (tiền tuyến), thống nhất đất nước.",
  },
  {
    id: 7,
    question: "Những yếu tố nào làm nên Đại thắng mùa Xuân 1975?",
    options: [
      "Chỉ do sức mạnh quân sự vượt trội",
      "Sự lãnh đạo đúng đắn của Đảng, sức mạnh đại đoàn kết, kết hợp quân sự – chính trị – ngoại giao",
      "Do Mỹ tự nguyện rút quân",
      "Do viện trợ hoàn toàn từ Liên Xô và Trung Quốc",
    ],
    correctAnswer: 1,
    explanation: "Đại thắng mùa Xuân 1975 là kết quả của sự lãnh đạo đúng đắn của Đảng, sức mạnh đại đoàn kết, kết hợp quân sự – chính trị – ngoại giao, cùng sự giúp đỡ quốc tế.",
  },
  {
    id: 8,
    question: "Vai trò của Đảng trong kháng chiến chống Mỹ là gì?",
    options: [
      "Chỉ tổ chức lực lượng vũ trang",
      "Đề ra đường lối đúng đắn, lãnh đạo toàn diện cách mạng hai miền",
      "Chỉ hoạt động ngoại giao",
      "Không có vai trò quan trọng",
    ],
    correctAnswer: 1,
    explanation: "Đảng đề ra đường lối đúng đắn, lãnh đạo xây dựng CNXH ở miền Bắc, chỉ đạo cách mạng miền Nam, kết hợp các mặt trận.",
  },
  {
    id: 9,
    question: "Nêu 3 thành tựu của miền Bắc trong xây dựng CNXH?",
    options: [
      "Cải cách ruộng đất, hợp tác hóa nông nghiệp, phát triển công nghiệp",
      "Xây dựng quân đội, đào tạo phi công, sản xuất vũ khí",
      "Xuất khẩu dầu mỏ, phát triển du lịch, xây dựng đô thị",
      "Mở rộng lãnh thổ, thu hút đầu tư nước ngoài, cổ phần hóa",
    ],
    correctAnswer: 0,
    explanation: "Thành tựu chính: cải cách ruộng đất, hợp tác hóa nông nghiệp, khôi phục và phát triển công nghiệp, văn hóa – giáo dục phát triển.",
  },
  {
    id: 10,
    question: "Bài học lịch sử rút ra từ giai đoạn 1945–1975 là gì?",
    options: [
      "Chỉ cần sức mạnh quân sự là đủ",
      "Sức mạnh đại đoàn kết, sự lãnh đạo đúng đắn của Đảng, nghệ thuật quân sự nhân dân",
      "Phụ thuộc hoàn toàn vào viện trợ quốc tế",
      "Đấu tranh ngoại giao là chính",
    ],
    correctAnswer: 1,
    explanation: "Bài học: giữ vững sự lãnh đạo của Đảng, phát huy đại đoàn kết toàn dân, kết hợp các phương pháp đấu tranh, nghệ thuật quân sự nhân dân.",
  },
];
