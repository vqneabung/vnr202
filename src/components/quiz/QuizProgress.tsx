import { Target, Trophy, Zap } from "lucide-react";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  progressPercentage: number;
}

export default function QuizProgress({ 
  currentQuestion, 
  totalQuestions, 
  score, 
  progressPercentage 
}: QuizProgressProps) {
  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-5">
        <div className="max-w-3xl mx-auto">
          {/* Stats Row */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F1C3F] to-[#1a2d5a] flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Tiến độ</p>
                <p className="font-bold text-[#0F1C3F]">
                  Câu {currentQuestion + 1} / {totalQuestions}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Điểm số</p>
                <p className="font-bold text-[#C9A227]">{score} điểm</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B1A1A] to-[#5a1111] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Hoàn thành</p>
                <p className="font-bold text-[#8B1A1A]">{Math.round(progressPercentage)}%</p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <div 
                className="h-3 rounded-full bg-gradient-to-r from-[#0F1C3F] via-[#C9A227] to-[#8B1A1A] transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            {/* Progress dots */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-0.5">
              {Array.from({ length: totalQuestions }).map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx < currentQuestion + (progressPercentage > (idx + 1) / totalQuestions * 100 ? 1 : 0)
                      ? "bg-white shadow" 
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
