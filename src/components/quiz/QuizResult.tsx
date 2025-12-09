import { RotateCcw, Trophy, Star, Award, Target, Home, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function QuizResult({ score, totalQuestions, onRestart }: QuizResultProps) {
  const percentage = (score / totalQuestions) * 100;
  let message = "";
  let emoji = "";
  let color = "";
  let Icon = Trophy;
  
  if (percentage >= 80) {
    message = "Xuất sắc! Bạn nắm vững kiến thức lịch sử!";
    emoji = "🏆";
    color = "from-[#C9A227] to-[#8B6914]";
    Icon = Trophy;
  } else if (percentage >= 60) {
    message = "Tốt! Bạn có kiến thức khá về lịch sử!";
    emoji = "👍";
    color = "from-[#2E7D32] to-[#1b5e20]";
    Icon = Award;
  } else if (percentage >= 40) {
    message = "Cần cố gắng thêm! Hãy xem lại nội dung!";
    emoji = "📚";
    color = "from-[#0F1C3F] to-[#1a2d5a]";
    Icon = Target;
  } else {
    message = "Hãy học lại và thử lại nhé!";
    emoji = "💪";
    color = "from-[#8B1A1A] to-[#5a1111]";
    Icon = Star;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1C3F] via-[#1a2d5a] to-[#8B1A1A]" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#C9A227] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8B1A1A] rounded-full blur-3xl opacity-20"></div>
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 min-h-screen flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Result Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 text-center">
              {/* Trophy Icon */}
              <div className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                <Icon className="w-14 h-14 text-white" />
              </div>
              
              {/* Title */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-[#C9A227]" />
                <span className="text-white/80 text-sm">Kết Quả Quiz</span>
              </div>
              
              <div className="text-7xl mb-4">{emoji}</div>
              
              {/* Score */}
              <div className="mb-6">
                <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#FFD700] mb-2">
                  {score}/{totalQuestions}
                </p>
                <p className="text-white/80 text-xl">{message}</p>
              </div>
              
              {/* Progress Bar */}
              <div className="max-w-md mx-auto mb-8">
                <div className="flex justify-between text-sm text-white/60 mb-2">
                  <span>0%</span>
                  <span className="text-[#C9A227] font-bold">{Math.round(percentage)}%</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
                  <div 
                    className={`h-4 rounded-full bg-gradient-to-r ${color} transition-all duration-1000`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold text-white">{score}</p>
                  <p className="text-white/60 text-sm">Đúng</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold text-white">{totalQuestions - score}</p>
                  <p className="text-white/60 text-sm">Sai</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold text-[#C9A227]">{Math.round(percentage)}%</p>
                  <p className="text-white/60 text-sm">Tỷ lệ</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={onRestart} 
                  size="lg" 
                  className="gap-2 bg-gradient-to-r from-[#C9A227] to-[#8B6914] hover:from-[#8B6914] hover:to-[#C9A227]
                             px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <RotateCcw className="w-5 h-5" />
                  Làm Lại Quiz
                </Button>
                <Link href="/">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="gap-2 border-white/30 text-white hover:bg-white/10 px-8 rounded-xl"
                  >
                    <Home className="w-5 h-5" />
                    Về Trang Chủ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
