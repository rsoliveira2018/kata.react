import React, { useState, useEffect } from 'react';
import Game from './Game';
import ThemeContext from './contexts/ThemeContext';

const useThemeDetector = () => {
  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
  const mqListener = (e => {
      setIsDarkTheme(e.matches);
  });
  
  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);
  return isDarkTheme;
}

export default function App() {

  const ItIsCurrentlyOnDarkTheme = useThemeDetector();
  const  gameTheme = {
    theme: ItIsCurrentlyOnDarkTheme ? "dark" : "light"
  };

  return (
    <ThemeContext.Provider value={gameTheme}>
      <Game></Game>
    </ThemeContext.Provider>
  )
}
