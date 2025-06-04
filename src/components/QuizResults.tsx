
import React, { useEffect, useState } from 'react';
import { Question, UserAnswer } from '@/types/quiz';
import { Confetti } from './Confetti';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  timeElapsed: number;
  userAnswers: UserAnswer[];
  questions: Question[];
  onRestart: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  totalQuestions,
  timeElapsed,
  userAnswers,
  questions,
  onRestart
}) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const percentage = Math.round((score / totalQuestions) * 100);

  useEffect(() => {
    // Show confetti for good scores
    if (percentage >= 70) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [percentage]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getScoreColor = () => {
    if (percentage >= 80) return 'text-green-600 dark:text-green-400';
    if (percentage >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreMessage = () => {
    if (percentage >= 90) return "Outstanding! 🏆";
    if (percentage >= 80) return "Excellent work! 🌟";
    if (percentage >= 70) return "Good job! 👏";
    if (percentage >= 60) return "Not bad! 👍";
    return "Keep practicing! 💪";
  };

  return (
    <div className="max-w-4xl mx-auto animate-bounce-in">
      {showConfetti && <Confetti />}
      
      {/* Results card */}
      <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 p-8 md:p-12 shadow-2xl mb-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Quiz Complete!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {getScoreMessage()}
          </p>
        </div>

        {/* Score display */}
        <div className="text-center mb-10">
          <div className="relative inline-block">
            <div className="text-8xl md:text-9xl font-bold mb-4">
              <span className={getScoreColor()}>{score}</span>
              <span className="text-gray-400 dark:text-gray-600">/{totalQuestions}</span>
            </div>
            <div className={`text-3xl font-semibold ${getScoreColor()}`}>
              {percentage}%
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 text-center border border-purple-200/30 dark:border-purple-700/30">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {score}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Correct Answers</div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 text-center border border-cyan-200/30 dark:border-cyan-700/30">
            <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
              {formatTime(timeElapsed)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Time Taken</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 text-center border border-green-200/30 dark:border-green-700/30">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {percentage >= 70 ? '🏆' : percentage >= 50 ? '🥉' : '📚'}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Achievement</div>
          </div>
        </div>

        {/* Question review */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Question Review</h3>
          <div className="space-y-4">
            {questions.map((question, index) => {
              const userAnswer = userAnswers.find(ua => ua.questionIndex === index);
              const isCorrect = userAnswer?.isCorrect || false;
              
              return (
                <div 
                  key={index}
                  className={`p-4 rounded-2xl border-2 ${
                    isCorrect 
                      ? 'border-green-500/30 bg-green-500/10' 
                      : 'border-red-500/30 bg-red-500/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm ${
                      isCorrect ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {isCorrect ? '✓' : '✗'}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 dark:text-white mb-2">
                        {question.question}
                      </p>
                      <div className="text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Your answer: </span>
                        <span className={isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                          {userAnswer ? question.answers[userAnswer.selectedAnswer] : 'No answer'}
                        </span>
                        {!isCorrect && (
                          <>
                            <br />
                            <span className="text-gray-600 dark:text-gray-400">Correct answer: </span>
                            <span className="text-green-600 dark:text-green-400">
                              {question.answers[question.correctAnswer]}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action buttons */}
        <div className="text-center">
          <button
            onClick={onRestart}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
            aria-label="Take the quiz again"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
};
