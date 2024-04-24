import React, { createContext, useContext, useState, useCallback } from "react";
import { lightTheme, darkTheme, ThemeModes } from "./themes";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

interface ThemeContextType {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}
const defaultContextValue: ThemeContextType = {
  theme: lightTheme,
  toggleTheme: () => {},
};
const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const getStoredTheme = (): DefaultTheme | null => {
  try {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === ThemeModes.LIGHT) {
      return lightTheme;
    } else if (storedTheme === ThemeModes.DARK) {
      return darkTheme;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error reading theme from localStorage:", error);
    return null;
  }
};

const setStoredTheme = (theme: DefaultTheme): void => {
  try {
    localStorage.setItem("theme", theme.mode); 
  } catch (error) {
    console.error("Error writing theme to localStorage:", error);
  }
};

export const ThemeSwitcherProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<DefaultTheme>(
    () => getStoredTheme() || lightTheme
  );

  const toggleTheme = useCallback(() => {
    const newTheme = theme.mode === ThemeModes.LIGHT ? darkTheme : lightTheme;
    setTheme(newTheme);
    setStoredTheme(newTheme);
  }, [theme.mode]);

  const value = React.useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );
  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
