import { createContext, useContext, useState, useEffect } from 'react';
import { IDarkModeProviderProps } from '@/types/types';

const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => { },
});

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }: IDarkModeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const preferredMode = localStorage.getItem('displayMode');
    if (preferredMode === 'dark') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev ? 'dark' : 'light';
      localStorage.setItem('displayMode', newMode);
      return !prev;
    });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? 'dark' : ''}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};