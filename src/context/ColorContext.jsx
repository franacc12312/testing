import { createContext, useContext, useState, useEffect } from 'react';

const colorSchemes = [
  {
    name: 'green',
    light: '#68D391',
    dark: '#48BB78',
    hover: '#38A169'
  },
  {
    name: 'blue',
    light: '#63B3ED',
    dark: '#4299E1',
    hover: '#3182CE'
  },
  {
    name: 'red',
    light: '#FC8181',
    dark: '#F56565',
    hover: '#E53E3E'
  }
];

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [colorScheme, setColorScheme] = useState(colorSchemes[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colorSchemes.length);
    setColorScheme(colorSchemes[randomIndex]);
  }, []);

  const value = {
    colorScheme: colorScheme.name,
    colors: {
      light: colorScheme.light,
      default: colorScheme.dark,
      hover: colorScheme.hover
    }
  };

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  );
}

export function useAppColors() {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useAppColors must be used within a ColorProvider');
  }
  return context;
} 