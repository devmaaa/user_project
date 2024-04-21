import React, { createContext, useContext, useState } from "react";
import { lightTheme, darkTheme, ThemeModes } from "./themes";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

interface ThemeContextType {
  theme: DefaultTheme; // Update to use DefaultTheme from styled-components
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const getStoredTheme = (): DefaultTheme | null => {
  try {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === ThemeModes.LIGHT) {
      return lightTheme;
    } else if (storedTheme === ThemeModes.DARK) {
      return darkTheme;
    } else {
      return null; // Handle unknown theme mode
    }
  } catch (error) {
    console.error('Error reading theme from localStorage:', error);
    return null;
  }
}

const setStoredTheme = (theme: DefaultTheme): void => { // Update parameter type to DefaultTheme
  try {
    localStorage.setItem('theme', theme.mode); // Store theme.mode in local storage
  } catch (error) {
    console.error('Error writing theme to localStorage:', error);
  }
};

export const ThemeSwitcherProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(() => getStoredTheme() || lightTheme); // Initialize with lightTheme

  const toggleTheme = (): void => {
    const newTheme = theme.mode === ThemeModes.LIGHT ? darkTheme : lightTheme;
    setTheme(newTheme);
    setStoredTheme(newTheme);
  };

  const value = React.useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}> {/* Provide theme to styled-components ThemeProvider */}
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};