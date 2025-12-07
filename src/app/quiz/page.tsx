"use client";

import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, Trophy, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: Question[] = [
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

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(quizQuestions.length).fill(null));
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1]);
      setShowResult(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers(new Array(quizQuestions.length).fill(null));
    setIsCompleted(false);
  };

  const question = quizQuestions[currentQuestion];
  const progressPercentage = ((currentQuestion + (showResult ? 1 : 0)) / quizQuestions.length) * 100;

  if (isCompleted) {
    const percentage = (score / quizQuestions.length) * 100;
    let message = "";
    let emoji = "";
    
    if (percentage >= 80) {
      message = "Xuất sắc! Bạn nắm vững kiến thức lịch sử!";
      emoji = "🏆";
    } else if (percentage >= 60) {
      message = "Tốt! Bạn có kiến thức khá về lịch sử!";
      emoji = "👍";
    } else if (percentage >= 40) {
      message = "Cần cố gắng thêm! Hãy xem lại nội dung!";
      emoji = "📚";
    } else {
      message = "Hãy học lại và thử lại nhé!";
      emoji = "💪";
    }

    return (
      <div className="min-h-screen bg-[var(--antique-parchment)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--antique-gold)] to-[var(--royal-burgundy)] flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-3xl">Kết Quả Quiz</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-6xl mb-4">{emoji}</div>
                <p className="text-4xl font-bold text-[var(--royal-burgundy)] mb-2">
                  {score}/{quizQuestions.length}
                </p>
                <p className="text-xl text-[var(--text-muted)] mb-6">{message}</p>
                
                <div className="w-full bg-[var(--ancient-stone)]/30 rounded-full h-4 mb-8">
                  <div 
                    className="h-4 rounded-full bg-gradient-to-r from-[var(--antique-gold)] to-[var(--royal-burgundy)] transition-all"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={handleRestart} size="lg" className="gap-2">
                    <RotateCcw className="w-5 h-5" />
                    Làm Lại Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--antique-parchment)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--timeless-navy)] to-[var(--royal-burgundy)] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <HelpCircle className="w-4 h-4 text-[var(--antique-gold)]" />
              <span className="text-white/80 text-sm">Kiểm Tra Kiến Thức</span>
            </div>
            
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Quiz Lịch Sử Đảng (1945-1975)
            </h1>
            
            <p className="text-white/80">
              Trả lời 10 câu hỏi để kiểm tra kiến thức của bạn
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-white border-b shadow-sm py-6">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-base font-semibold text-[var(--timeless-navy)]">
                Câu {currentQuestion + 1} / {quizQuestions.length}
              </span>
              <span className="text-base font-semibold text-[var(--royal-burgundy)]">
                Điểm: {score}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="h-3 rounded-full bg-gradient-to-r from-[var(--antique-gold)] to-[var(--royal-burgundy)] transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl leading-relaxed">
                  {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {question.options.map((option, index) => {
                    let optionClass = "border-2 border-[var(--ancient-stone)]/30 hover:border-[var(--antique-gold)]";
                    
                    if (showResult) {
                      if (index === question.correctAnswer) {
                        optionClass = "border-2 border-green-500 bg-green-50";
                      } else if (index === selectedAnswer && index !== question.correctAnswer) {
                        optionClass = "border-2 border-red-500 bg-red-50";
                      }
                    } else if (selectedAnswer === index) {
                      optionClass = "border-2 border-[var(--antique-gold)] bg-[var(--antique-gold)]/10";
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showResult}
                        className={`w-full p-4 rounded-xl text-left transition-all ${optionClass} flex items-start gap-3`}
                      >
                        <span className="w-8 h-8 rounded-full bg-[var(--timeless-navy)] text-white flex items-center justify-center flex-shrink-0 text-sm font-medium">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-[var(--timeless-navy)] pt-1">{option}</span>
                        {showResult && index === question.correctAnswer && (
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 ml-auto mt-1" />
                        )}
                        {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                          <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 ml-auto mt-1" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {showResult && (
                  <div className="mt-6 p-4 bg-[var(--antique-parchment)] rounded-xl border-l-4 border-l-[var(--antique-gold)]">
                    <p className="font-semibold text-[var(--timeless-navy)] mb-2">Giải thích:</p>
                    <p className="text-[var(--text-muted)] text-sm">{question.explanation}</p>
                  </div>
                )}

                <div className="mt-6 flex justify-end gap-4">
                  {!showResult ? (
                    <Button 
                      onClick={handleSubmitAnswer} 
                      disabled={selectedAnswer === null}
                      size="lg"
                    >
                      Xác Nhận
                    </Button>
                  ) : (
                    <Button onClick={handleNextQuestion} size="lg" variant="gold">
                      {currentQuestion < quizQuestions.length - 1 ? "Câu Tiếp Theo" : "Xem Kết Quả"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
