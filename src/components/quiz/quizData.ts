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
    question: "Tại sao trong đường lối kháng chiến chống Pháp, Đảng ta lại xác định phương châm cốt lõi là 'đánh lâu dài' (trường kỳ kháng chiến)?",
    options: [
      "Để tranh thủ sự ủng hộ của quốc tế và chờ đợi thời cơ chín muồi.",
      "Để bảo toàn lực lượng, tránh đối đầu trực diện khi địch đang mạnh.",
      "Để chuyển hóa so sánh lực lượng: ta càng đánh càng mạnh, địch càng đánh càng suy yếu.",
      "Để có thời gian xây dựng căn cứ địa Việt Bắc trở nên vững chắc hoàn toàn.",
    ],
    correctAnswer: 2,
    explanation: "Do tương quan lực lượng ban đầu 'địch mạnh, ta yếu', ta cần thời gian để vừa tiêu hao sinh lực địch, vừa xây dựng lực lượng của mình. Đánh lâu dài giúp thay đổi cục diện: địch từ mạnh thành yếu (sa lầy), ta từ yếu thành mạnh.",
  },
  {
    id: 2,
    question: "Chiến thắng Điện Biên Phủ (1954) đóng vai trò quyết định như thế nào trong tiến trình kết thúc chiến tranh Đông Dương?",
    options: [
      "Làm phá sản hoàn toàn kế hoạch Nava, giáng đòn quyết định vào ý chí xâm lược của thực dân Pháp.",
      "Tiêu diệt toàn bộ lực lượng quân sự của Pháp và Mỹ tại chiến trường Đông Dương.",
      "Giải phóng hoàn toàn biên giới Việt - Trung, khai thông đường liên lạc với quốc tế.",
      "Mở ra cục diện vừa đánh vừa đàm, buộc Mỹ phải trực tiếp tham chiến để cứu vãn tình thế.",
    ],
    correctAnswer: 0,
    explanation: "Điện Biên Phủ là đòn tấn công quân sự lớn nhất, đánh sập niềm hy vọng cuối cùng của Pháp (kế hoạch Nava), buộc Pháp phải ngồi vào bàn đàm phán và ký Hiệp định Giơnevơ.",
  },
  {
    id: 3,
    question: "Trong hai nhiệm vụ chiến lược của cách mạng Việt Nam giai đoạn 1954-1975, vai trò của cách mạng Xã hội chủ nghĩa ở miền Bắc được xác định là gì?",
    options: [
      "Quyết định trực tiếp đối với sự nghiệp giải phóng miền Nam thống nhất đất nước.",
      "Là tiền tuyến lớn trực tiếp tiêu diệt quân đội Mỹ và tay sai.",
      "Quyết định nhất đối với toàn bộ sự nghiệp phát triển của cách mạng cả nước.",
      "Làm lung lay ý chí xâm lược của đế quốc Mỹ thông qua mặt trận ngoại giao.",
    ],
    correctAnswer: 2,
    explanation: "Miền Bắc là hậu phương lớn, xây dựng tiềm lực mọi mặt. Miền Nam quyết định *trực tiếp* đến việc đánh đuổi Mỹ, nhưng miền Bắc quyết định *nhất* đến thắng lợi chung của cả nước.",
  },
  {
    id: 4,
    question: "Bản chất thâm độc nhất của chiến lược 'Việt Nam hóa chiến tranh' mà Mỹ áp dụng là gì?",
    options: [
      "Rút dần quân Mỹ về nước để giảm bớt gánh nặng chi phí chiến tranh.",
      "Dùng người Việt đánh người Việt, tận dụng xương máu người Việt để phục vụ lợi ích Mỹ.",
      "Tăng cường viện trợ kinh tế và quân sự để biến miền Nam thành thị trường tiêu thụ.",
      "Mở rộng chiến tranh sang Lào và Campuchia để cô lập hoàn toàn cách mạng Việt Nam.",
    ],
    correctAnswer: 1,
    explanation: "Dù thay đổi hình thức chiến tranh, mục đích của Mỹ vẫn là chủ nghĩa thực dân mới. 'Dùng người Việt đánh người Việt' (với vũ khí Mỹ) là âm mưu thâm độc nhằm giảm thương vong cho Mỹ nhưng vẫn duy trì được chiến tranh.",
  },
  {
    id: 5,
    question: "Tại Đại hội II (1951), việc Đảng ra hoạt động công khai với tên gọi Đảng Lao động Việt Nam đánh dấu bước phát triển mới nào?",
    options: [
      "Tăng cường tính dân tộc, đưa Đảng đến gần dân hơn để lãnh đạo chuyên sâu cách mạng Việt Nam.",
      "Chấm dứt hoàn toàn sự liên hệ và chỉ đạo từ Quốc tế Cộng sản.",
      "Khẳng định quyền lãnh đạo tuyệt đối của riêng giai cấp nông dân trong kháng chiến.",
      "Chuẩn bị cơ sở pháp lý để tiến tới ký kết hiệp định đình chiến với Pháp.",
    ],
    correctAnswer: 0,
    explanation: "Việc tách Đảng Cộng sản Đông Dương thành 3 đảng riêng biệt giúp sát hợp với thực tiễn mỗi nước. Đảng Lao động Việt Nam ra công khai giúp tăng cường sự gắn bó máu thịt với nhân dân và đề cao tinh thần dân tộc.",
  },
  {
    id: 6,
    question: "Đâu là đặc điểm độc đáo, sáng tạo nhất của đường lối cách mạng Việt Nam giai đoạn 1954 - 1975?",
    options: [
      "Tập trung toàn bộ lực lượng để giải phóng miền Nam trước, sau đó mới xây dựng CNXH.",
      "Tranh thủ sự ủng hộ của cả phe Xã hội chủ nghĩa và các nước tư bản trung lập.",
      "Tiến hành khởi nghĩa từng phần tiến tới tổng khởi nghĩa giành chính quyền như năm 1945.",
      "Tiến hành đồng thời hai chiến lược cách mạng khác nhau ở hai miền nhưng cùng hướng tới một mục tiêu chung.",
    ],
    correctAnswer: 3,
    explanation: "Việt Nam thực hiện: Cách mạng XHCN ở miền Bắc và Cách mạng Dân tộc dân chủ nhân dân ở miền Nam. Đây là điều chưa từng có tiền lệ, thể hiện sự sáng tạo trong việc giải quyết mâu thuẫn giữa thực tiễn đất nước bị chia cắt.",
  },
  {
    id: 7,
    question: "Nguyên nhân chủ quan nào mang tính quyết định nhất dẫn đến thắng lợi của cuộc kháng chiến chống Mỹ cứu nước?",
    options: [
      "Sự đoàn kết chiến đấu của ba nước Đông Dương và sự ủng hộ của phe XHCN.",
      "Sự lãnh đạo sáng suốt của Đảng với đường lối chính trị, quân sự độc lập, tự chủ.",
      "Phong trào phản chiến phát triển mạnh mẽ ngay trong lòng nước Mỹ và trên thế giới.",
      "Sự suy yếu của nền kinh tế và quân sự Mỹ sau nhiều năm sa lầy tại Việt Nam.",
    ],
    correctAnswer: 1,
    explanation: "Mặc dù sự giúp đỡ quốc tế là quan trọng, nhưng sự lãnh đạo của Đảng là nhân tố quyết định *chủ quan* và *hàng đầu*. Đường lối đúng đắn mới huy động được sức mạnh dân tộc và tận dụng được sức mạnh thời đại.",
  },
  {
    id: 8,
    question: "Nghị quyết 15 (1-1959) của Ban Chấp hành Trung ương Đảng là bước ngoặt quan trọng nào đối với cách mạng miền Nam?",
    options: [
      "Chuyển hẳn sang đấu tranh chính trị đơn thuần để đòi thi hành Hiệp định Giơnevơ.",
      "Phát động cuộc Tổng tiến công và nổi dậy quy mô lớn trên toàn chiến trường.",
      "Chuyển từ thế giữ gìn lực lượng sang thế tiến công, dùng bạo lực cách mạng để giành chính quyền.",
      "Kêu gọi quân đội Mỹ rút khỏi miền Nam Việt Nam thông qua con đường ngoại giao.",
    ],
    correctAnswer: 2,
    explanation: "Trước 1959, ta chủ trương đấu tranh chính trị. Trước sự tàn bạo của chính quyền Sài Gòn (Luật 10/59), Nghị quyết 15 cho phép dùng bạo lực cách mạng, dẫn đến phong trào Đồng Khởi.",
  },
  {
    id: 9,
    question: "Thành tựu của miền Bắc trong việc chi viện cho miền Nam (đường Trường Sơn) thể hiện rõ nét nhất mối quan hệ nào?",
    options: [
      "Mối quan hệ biện chứng giữa hậu phương và tiền tuyến trong chiến tranh nhân dân.",
      "Sự phụ thuộc hoàn toàn của chiến trường miền Nam vào nguồn lực bên ngoài.",
      "Nghệ thuật quân sự 'lấy ít địch nhiều, lấy nhỏ thắng lớn'.",
      "Sự áp đảo về công nghệ quân sự của ta so với đối phương.",
    ],
    correctAnswer: 0,
    explanation: "Đường Trường Sơn là biểu tượng của mối quan hệ máu thịt: Hậu phương (miền Bắc) dốc sức vì tiền tuyến, và tiền tuyến (miền Nam) chiến đấu bảo vệ hậu phương. Không có hậu phương vững chắc thì tiền tuyến không thể thắng lợi.",
  },
  {
    id: 10,
    question: "Bài học kinh nghiệm nào từ cuộc kháng chiến chống Mỹ có giá trị thực tiễn nhất trong công cuộc bảo vệ chủ quyền biển đảo hiện nay?",
    options: [
      "Tranh thủ tối đa sự giúp đỡ về vũ khí, khí tài hiện đại của các cường quốc.",
      "Thực hiện đường lối 'khép kín', tự cung tự cấp để tránh phụ thuộc vào bên ngoài.",
      "Chỉ tập trung phát triển lực lượng hải quân và không quân thật tinh nhuệ.",
      "Phát huy sức mạnh tổng hợp của khối đại đoàn kết toàn dân tộc kết hợp với sức mạnh thời đại.",
    ],
    correctAnswer: 3,
    explanation: "Trong bối cảnh mới, bài học về huy động sức mạnh toàn dân (đại đoàn kết) kết hợp với ngoại giao khôn khéo (sức mạnh thời đại) vẫn là kim chỉ nam để bảo vệ chủ quyền mà vẫn giữ vững môi trường hòa bình.",
  },
];