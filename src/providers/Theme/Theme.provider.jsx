import React, { createContext, useContext, useState } from 'react';

const initialTheme = 'light';
const initialThemes = {
  light: {
    id: 'light',
    label: 'Light Mode',
    toolbarBackground: '#1C5476',
    inputColor: '#FFF',
    inputBackground: '#3e6d8a',
    background: '#FFF',
    foreground: '#333',
    videoItemBackground: '#FFF',
    videoItemBackgroundHover: '#EEE',
    videoItemDescriptionColor: 'rgba(0, 0, 0, 0.54)',
    videoItemBorder: '1px solid #EEE',
  },
  dark: {
    id: 'dark',
    label: 'Dark Mode',
    toolbarBackground: '#556cd6',
    inputColor: '#FFF',
    inputBackground: '#6E82DC',
    background: '#303030',
    foreground: '#FFF',
    videoItemBackground: '#424242',
    videoItemBackgroundHover: '#515151',
    videoItemDescriptionColor: 'rgba(255, 255, 255, 0.7)',
    videoItemBorder: '1px solid #666',
  },
};

const ThemeContext = createContext({
  currentTheme: initialTheme,
  themes: initialThemes,
});

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`Can't use "useTheme" without an ThemeProvider!`);
  }
  return context;
}

function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  const [themes, setThemes] = useState(initialThemes);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        themes,
        setThemes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { useTheme };

export default ThemeProvider;
