
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { QuizApp } from '@/components/QuizApp';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="quiz-theme">
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 transition-colors duration-300">
        <QuizApp />
      </div>
    </ThemeProvider>
  );
};

export default Index;
