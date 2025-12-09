"use client";

import { useState } from "react";
import QuizHero from "@/components/quiz/QuizHero";
import QuizProgress from "@/components/quiz/QuizProgress";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import QuizResult from "@/components/quiz/QuizResult";
import { quizQuestions } from "@/components/quiz/quizData";

export default function QuizPage() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(quizQuestions.length).fill(null));
  const [isCompleted, setIsCompleted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

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
    setIsStarted(false);
  };

  const question = quizQuestions[currentQuestion];
  const progressPercentage = ((currentQuestion + (showResult ? 1 : 0)) / quizQuestions.length) * 100;

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0F1C3F] to-[#1a2d5a]">
        <QuizHero showStartButton={true} onStart={handleStart} />
      </div>
    );
  }

  if (isCompleted) {
    return <QuizResult score={score} totalQuestions={quizQuestions.length} onRestart={handleRestart} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white pt-20">
      <QuizProgress 
        currentQuestion={currentQuestion}
        totalQuestions={quizQuestions.length}
        score={score}
        progressPercentage={progressPercentage}
      />
      <QuizQuestion
        question={question}
        selectedAnswer={selectedAnswer}
        showResult={showResult}
        onAnswerSelect={handleAnswerSelect}
        onSubmit={handleSubmitAnswer}
        onNext={handleNextQuestion}
        isLastQuestion={currentQuestion === quizQuestions.length - 1}
      />
    </div>
  );
}
