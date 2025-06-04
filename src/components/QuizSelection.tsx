
import React from 'react';
import { QuizData } from '@/types/quiz';

interface QuizSelectionProps {
  quizzes: QuizData[];
  onSelectQuiz: (quiz: QuizData) => void;
}

export const QuizSelection: React.FC<QuizSelectionProps> = ({ quizzes, onSelectQuiz }) => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'programming':
        return '💻';
      case 'mathematics':
        return '📊';
      case 'english':
        return '📚';
      case 'history':
        return '🏛️';
      case 'current affairs':
        return '🌍';
      default:
        return '📝';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'programming':
        return 'from-blue-500/20 to-cyan-500/20 border-blue-200/30 dark:border-blue-700/30';
      case 'mathematics':
        return 'from-green-500/20 to-emerald-500/20 border-green-200/30 dark:border-green-700/30';
      case 'english':
        return 'from-purple-500/20 to-pink-500/20 border-purple-200/30 dark:border-purple-700/30';
      case 'history':
        return 'from-amber-500/20 to-orange-500/20 border-amber-200/30 dark:border-amber-700/30';
      case 'current affairs':
        return 'from-red-500/20 to-rose-500/20 border-red-200/30 dark:border-red-700/30';
      default:
        return 'from-gray-500/20 to-slate-500/20 border-gray-200/30 dark:border-gray-700/30';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'text-green-600 dark:text-green-400 bg-green-500/20';
      case 'medium':
        return 'text-yellow-600 dark:text-yellow-400 bg-yellow-500/20';
      case 'hard':
        return 'text-red-600 dark:text-red-400 bg-red-500/20';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="max-w-6xl mx-auto animate-bounce-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Choose Your Quiz
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Select a category to test your knowledge
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            onClick={() => onSelectQuiz(quiz)}
            className={`group cursor-pointer bg-gradient-to-br ${getCategoryColor(quiz.category)} backdrop-blur-xl rounded-3xl border p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{getCategoryIcon(quiz.category)}</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {quiz.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {quiz.description}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Questions:</span>
                <span className="font-semibold text-gray-800 dark:text-white">
                  {quiz.questions.length}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Time:</span>
                <span className="font-semibold text-gray-800 dark:text-white">
                  {quiz.estimatedTime} min
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Difficulty:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(quiz.difficulty)}`}>
                  {quiz.difficulty}
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Start Quiz
                <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
