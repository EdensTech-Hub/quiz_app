
import React, { useState, useEffect } from 'react';
import { QuizStart } from './QuizStart';
import { QuizQuestion } from './QuizQuestion';
import { QuizResults } from './QuizResults';
import { QuizSelection } from './QuizSelection';
import { ThemeToggle } from './ThemeToggle';
import { allQuizzes, QuizData, UserAnswer } from '@/types/quiz';

type QuizState = 'selection' | 'start' | 'playing' | 'finished';

export const QuizApp: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>('selection');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<QuizData | null>(null);
  const [score, setScore] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Timer functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (quizState === 'playing') {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [quizState]);

  const selectQuiz = (quiz: QuizData) => {
    setSelectedQuiz(quiz);
    setQuizState('start');
  };

  const startQuiz = () => {
    setQuizState('playing');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setTimeElapsed(0);
  };

  const handleAnswerSubmit = (selectedAnswerIndex: number) => {
    if (!selectedQuiz) return;
    
    const currentQuestion = selectedQuiz.questions[currentQuestionIndex];
    const isCorrect = selectedAnswerIndex === currentQuestion.correctAnswer;
    
    const userAnswer: UserAnswer = {
      questionIndex: currentQuestionIndex,
      selectedAnswer: selectedAnswerIndex,
      isCorrect,
      timeSpent: 5 // This could be calculated based on actual time spent
    };

    setUserAnswers(prev => [...prev, userAnswer]);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    // Move to next question or finish quiz
    if (currentQuestionIndex + 1 < selectedQuiz.questions.length) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 1500); // Delay to show feedback
    } else {
      setTimeout(() => {
        setQuizState('finished');
      }, 1500);
    }
  };

  const resetQuiz = () => {
    setQuizState('selection');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setTimeElapsed(0);
    setSelectedQuiz(null);
  };

  const progress = quizState === 'playing' && selectedQuiz
    ? ((currentQuestionIndex + 1) / selectedQuiz.questions.length) * 100 
    : 0;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            QuizMaster
          </h1>
          <ThemeToggle />
        </div>

        {quizState === 'selection' && (
          <QuizSelection 
            quizzes={allQuizzes} 
            onSelectQuiz={selectQuiz}
          />
        )}

        {quizState === 'start' && selectedQuiz && (
          <QuizStart 
            quizData={selectedQuiz} 
            onStartQuiz={startQuiz}
            onBackToSelection={() => setQuizState('selection')}
          />
        )}

        {quizState === 'playing' && selectedQuiz && (
          <QuizQuestion
            question={selectedQuiz.questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={selectedQuiz.questions.length}
            progress={progress}
            onAnswerSubmit={handleAnswerSubmit}
            timeElapsed={timeElapsed}
          />
        )}

        {quizState === 'finished' && selectedQuiz && (
          <QuizResults
            score={score}
            totalQuestions={selectedQuiz.questions.length}
            timeElapsed={timeElapsed}
            userAnswers={userAnswers}
            questions={selectedQuiz.questions}
            onRestart={resetQuiz}
          />
        )}
      </div>
    </div>
  );
};
