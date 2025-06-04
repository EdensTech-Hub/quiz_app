
import React, { useState, useEffect } from 'react';
import { Question } from '@/types/quiz';
import { ProgressBar } from './ProgressBar';

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  progress: number;
  onAnswerSubmit: (selectedAnswerIndex: number) => void;
  timeElapsed: number;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  progress,
  onAnswerSubmit,
  timeElapsed
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    // Reset state when question changes
    setSelectedAnswer(null);
    setShowFeedback(false);
    setHasSubmitted(false);
  }, [question]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (hasSubmitted) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null || hasSubmitted) return;
    
    setHasSubmitted(true);
    setShowFeedback(true);
    onAnswerSubmit(selectedAnswer);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="max-w-4xl mx-auto animate-slide-in">
      {/* Header with progress and timer */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full backdrop-blur-sm">
            ⏱️ {formatTime(timeElapsed)}
          </span>
        </div>
        <ProgressBar progress={progress} />
      </div>

      {/* Question card with glassmorphism */}
      <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 p-8 md:p-10 shadow-2xl mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 leading-relaxed">
          {question.question}
        </h2>

        <div className="grid gap-4">
          {question.answers.map((answer, index) => {
            let buttonClasses = "group relative w-full p-6 text-left rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4";
            
            if (!hasSubmitted) {
              // Before submission
              if (selectedAnswer === index) {
                buttonClasses += " border-purple-500 bg-purple-500/20 dark:bg-purple-500/30 ring-4 ring-purple-500/20";
              } else {
                buttonClasses += " border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 hover:border-purple-300 hover:bg-purple-50/50 dark:hover:bg-purple-900/20";
              }
            } else {
              // After submission - show feedback
              if (index === question.correctAnswer) {
                buttonClasses += " border-green-500 bg-green-500/20 animate-pulse-success";
              } else if (selectedAnswer === index && index !== question.correctAnswer) {
                buttonClasses += " border-red-500 bg-red-500/20 animate-pulse-error";
              } else {
                buttonClasses += " border-gray-200 dark:border-gray-600 bg-gray-100/50 dark:bg-gray-700/50 opacity-60";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={buttonClasses}
                disabled={hasSubmitted}
                aria-label={`Answer option ${index + 1}: ${answer}`}
              >
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 font-semibold text-sm transition-all duration-300 ${
                    !hasSubmitted 
                      ? selectedAnswer === index
                        ? 'border-purple-500 bg-purple-500 text-white'
                        : 'border-gray-400 dark:border-gray-500 text-gray-600 dark:text-gray-400'
                      : index === question.correctAnswer
                        ? 'border-green-500 bg-green-500 text-white'
                        : selectedAnswer === index && index !== question.correctAnswer
                          ? 'border-red-500 bg-red-500 text-white'
                          : 'border-gray-400 dark:border-gray-500 text-gray-400'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-lg font-medium text-gray-800 dark:text-white">
                    {answer}
                  </span>
                  
                  {/* Feedback icons */}
                  {hasSubmitted && index === question.correctAnswer && (
                    <div className="ml-auto">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  
                  {hasSubmitted && selectedAnswer === index && index !== question.correctAnswer && (
                    <div className="ml-auto">
                      <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Submit button */}
        {!hasSubmitted && (
          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-4 focus:ring-purple-500/50"
              aria-label="Submit your answer"
            >
              Submit Answer
            </button>
          </div>
        )}

        {/* Feedback message */}
        {showFeedback && (
          <div className={`mt-6 p-4 rounded-2xl text-center font-medium animate-bounce-in ${
            isCorrect 
              ? 'bg-green-500/20 text-green-700 dark:text-green-300 border border-green-500/30' 
              : 'bg-red-500/20 text-red-700 dark:text-red-300 border border-red-500/30'
          }`}>
            {isCorrect ? '🎉 Correct! Well done!' : '❌ Incorrect. The correct answer is highlighted above.'}
          </div>
        )}
      </div>
    </div>
  );
};
