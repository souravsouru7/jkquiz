import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState('easy');
  const [score, setScore] = useState(0);
  const [lifelines, setLifelines] = useState({
    showAnswer: true,
    removeTwoWrong: true
  });
  const [timeRemaining, setTimeRemaining] = useState(240); // 4 minutes

  const value = {
    currentLevel,
    setCurrentLevel,
    score,
    setScore,
    lifelines,
    setLifelines,
    timeRemaining,
    setTimeRemaining
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};
