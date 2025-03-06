
import React, { createContext, useContext, useEffect, useState } from "react";

type ColorTheme = "default" | "blue" | "purple" | "green" | "orange";

type ColorThemeProviderProps = {
  children: React.ReactNode;
  defaultColorTheme?: ColorTheme;
  storageKey?: string;
};

type ColorThemeProviderState = {
  colorTheme: ColorTheme;
  setColorTheme: (colorTheme: ColorTheme) => void;
};

const initialState: ColorThemeProviderState = {
  colorTheme: "default",
  setColorTheme: () => null,
};

const ColorThemeProviderContext = createContext<ColorThemeProviderState>(initialState);

export function ColorThemeProvider({
  children,
  defaultColorTheme = "default",
  storageKey = "vite-ui-color-theme",
  ...props
}: ColorThemeProviderProps) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>(
    () => (localStorage.getItem(storageKey) as ColorTheme) || defaultColorTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all theme classes
    root.classList.remove("theme-default", "theme-blue", "theme-purple", "theme-green", "theme-orange");
    
    // Add the selected theme class
    root.classList.add(`theme-${colorTheme}`);
  }, [colorTheme]);

  const value = {
    colorTheme,
    setColorTheme: (colorTheme: ColorTheme) => {
      localStorage.setItem(storageKey, colorTheme);
      setColorTheme(colorTheme);
    },
  };

  return (
    <ColorThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ColorThemeProviderContext.Provider>
  );
}

export const useColorTheme = () => {
  const context = useContext(ColorThemeProviderContext);

  if (context === undefined)
    throw new Error("useColorTheme must be used within a ColorThemeProvider");

  return context;
};
