import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
                      onClick={() => onAnswerSelect(index)}
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
                    onClick={onSubmit} 
                    disabled={selectedAnswer === null}
                    size="lg"
                  >
                    Xác Nhận
                  </Button>
                ) : (
                  <Button onClick={onNext} size="lg" variant="gold">
                    {isLastQuestion ? "Xem Kết Quả" : "Câu Tiếp Theo"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
