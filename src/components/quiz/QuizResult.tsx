import { RotateCcw, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function QuizResult({ score, totalQuestions, onRestart }: QuizResultProps) {
  const percentage = (score / totalQuestions) * 100;
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
                {score}/{totalQuestions}
              </p>
              <p className="text-xl text-[var(--text-muted)] mb-6">{message}</p>
              
              <div className="w-full bg-[var(--ancient-stone)]/30 rounded-full h-4 mb-8">
                <div 
                  className="h-4 rounded-full bg-gradient-to-r from-[var(--antique-gold)] to-[var(--royal-burgundy)] transition-all"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={onRestart} size="lg" className="gap-2">
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
