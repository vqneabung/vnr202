import { CheckCircle, XCircle, Lightbulb, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: number | null;
  showResult: boolean;
  onAnswerSelect: (index: number) => void;
  onSubmit: () => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

export default function QuizQuestion({
  question,
  selectedAnswer,
  showResult,
  onAnswerSelect,
  onSubmit,
  onNext,
  isLastQuestion,
}: QuizQuestionProps) {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Question Header */}
            <div className="bg-gradient-to-r from-[#0F1C3F] to-[#1a2d5a] p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">?</span>
                </div>
                <h2 className="text-lg md:text-xl text-white leading-relaxed font-medium">
                  {question.question}
                </h2>
              </div>
            </div>

            {/* Options */}
            <div className="p-6">
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  let optionClass = "border-2 border-gray-200 hover:border-[#C9A227] hover:bg-[#C9A227]/5";
                  let labelClass = "bg-[#0F1C3F] text-white";
                  
                  if (showResult) {
                    if (index === question.correctAnswer) {
                      optionClass = "border-2 border-green-500 bg-green-50";
                      labelClass = "bg-green-500 text-white";
                    } else if (index === selectedAnswer && index !== question.correctAnswer) {
                      optionClass = "border-2 border-red-500 bg-red-50";
                      labelClass = "bg-red-500 text-white";
                    } else {
                      optionClass = "border-2 border-gray-100 opacity-60";
                    }
                  } else if (selectedAnswer === index) {
                    optionClass = "border-2 border-[#C9A227] bg-[#C9A227]/10 shadow-md";
                    labelClass = "bg-[#C9A227] text-white";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => onAnswerSelect(index)}
                      disabled={showResult}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${optionClass} 
                                  flex items-center gap-4 group`}
                    >
                      <span className={`w-10 h-10 rounded-xl ${labelClass} flex items-center justify-center 
                                       flex-shrink-0 text-sm font-bold transition-all duration-300`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-[#0F1C3F] flex-1 font-medium">{option}</span>
                      {showResult && index === question.correctAnswer && (
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      )}
                      {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showResult && (
                <div className="mt-6 p-5 bg-gradient-to-r from-[#C9A227]/10 to-[#C9A227]/5 rounded-xl border-l-4 border-l-[#C9A227]">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-[#C9A227]" />
                    <p className="font-bold text-[#0F1C3F]">Giải thích:</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{question.explanation}</p>
                </div>
              )}

              {/* Actions */}
              <div className="mt-6 flex justify-end gap-4">
                {!showResult ? (
                  <Button 
                    onClick={onSubmit} 
                    disabled={selectedAnswer === null}
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-[#0F1C3F] to-[#1a2d5a] hover:from-[#1a2d5a] hover:to-[#0F1C3F]
                               px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    Xác Nhận
                  </Button>
                ) : (
                  <Button 
                    onClick={onNext} 
                    size="lg" 
                    className="gap-2 bg-gradient-to-r from-[#C9A227] to-[#8B6914] hover:from-[#8B6914] hover:to-[#C9A227]
                               px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isLastQuestion ? "Xem Kết Quả" : "Câu Tiếp Theo"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
