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
    <div className="bg-white border-b shadow-sm py-6">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-base font-semibold text-[var(--timeless-navy)]">
              Câu {currentQuestion + 1} / {totalQuestions}
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
  );
}
