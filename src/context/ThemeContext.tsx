import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  isAntiGravity: boolean;
  toggleAntiGravity: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isAntiGravity, setIsAntiGravity] = useState(false);

  const toggleAntiGravity = () => {
    setIsAntiGravity(prev => !prev);
  };

  useEffect(() => {
    if (isAntiGravity) {
      document.body.classList.add('anti-gravity-mode');
    } else {
      document.body.classList.remove('anti-gravity-mode');
    }
  }, [isAntiGravity]);

  return (
    <ThemeContext.Provider value={{ isAntiGravity, toggleAntiGravity }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
