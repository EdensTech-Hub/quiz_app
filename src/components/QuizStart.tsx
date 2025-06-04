
import React from 'react';
import { QuizData } from '@/types/quiz';

interface QuizStartProps {
  quizData: QuizData;
  onStartQuiz: () => void;
  onBackToSelection?: () => void;
}

export const QuizStart: React.FC<QuizStartProps> = ({ quizData, onStartQuiz, onBackToSelection }) => {
  return (
    <div className="max-w-2xl mx-auto text-center animate-bounce-in">
      {/* Back button */}
      {onBackToSelection && (
        <button
          onClick={onBackToSelection}
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-6"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-7 7-7-7" />
          </svg>
          Back to Quiz Selection
        </button>
      )}

      {/* Glassmorphism card */}
      <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 p-8 md:p-12 shadow-2xl">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {quizData.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {quizData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-200/30 dark:border-purple-700/30">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {quizData.questions.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Questions</div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-200/30 dark:border-cyan-700/30">
            <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
              {quizData.estimatedTime}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Minutes</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-200/30 dark:border-green-700/30">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {quizData.difficulty}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Difficulty</div>
          </div>
        </div>

        <button
          onClick={onStartQuiz}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          aria-label={`Start ${quizData.title} quiz`}
        >
          <span className="relative z-10">Start Quiz</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Arrow icon */}
          <svg 
            className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};
