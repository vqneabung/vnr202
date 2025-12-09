import { Brain, Trophy, Clock, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Brain, label: "Câu hỏi", value: "10" },
  { icon: Clock, label: "Thời gian", value: "Không giới hạn" },
  { icon: Trophy, label: "Thành tích", value: "Top 1" },
];

interface QuizHeroProps {
  showStartButton?: boolean;
  onStart?: () => void;
}

export default function QuizHero({ showStartButton = false, onStart }: QuizHeroProps) {
  return (
    <section className={`relative overflow-hidden ${showStartButton ? 'min-h-[80vh] flex items-center' : ''}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1C3F] via-[#1a2d5a] to-[#8B1A1A]" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-[#C9A227] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#8B1A1A] rounded-full blur-3xl opacity-20"></div>
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className={`container relative z-10 mx-auto px-4 w-full ${showStartButton ? 'py-20' : 'py-16 md:py-20'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-[#C9A227]" />
            <span className="text-white/90 text-sm font-medium">Kiểm Tra Kiến Thức</span>
          </div>
          
          <h1 className={`font-bold text-white mb-4 leading-tight ${showStartButton ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl'}`}>
            Quiz Lịch Sử Đảng{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#FFD700]">
              (1945-1975)
            </span>
          </h1>
          
          <p className={`text-white/80 max-w-2xl mx-auto ${showStartButton ? 'text-lg md:text-xl mb-12' : 'text-lg mb-10'}`}>
            Thử thách kiến thức của bạn về giai đoạn lịch sử hào hùng của dân tộc Việt Nam
          </p>

          {/* Stats */}
          <div className={`flex flex-wrap justify-center gap-4 md:gap-6 ${showStartButton ? 'mb-12' : 'mb-10'}`}>
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white/60 text-xs">{stat.label}</p>
                  <p className="text-white font-bold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Start Button */}
          {showStartButton && (
            <Button 
              onClick={onStart}
              size="lg" 
              className="gap-3 bg-gradient-to-r from-[#C9A227] to-[#8B6914] hover:from-[#8B6914] hover:to-[#C9A227]
                         px-12 py-8 text-xl rounded-2xl shadow-2xl hover:shadow-xl transition-all duration-300 font-bold
                         hover:scale-105 transform"
            >
              <Play className="w-7 h-7 fill-white" />
              Bắt Đầu Làm Quiz
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
