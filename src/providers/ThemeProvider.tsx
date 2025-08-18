import { useEffect, useState, type FC, type PropsWithChildren } from "react";
import {
  ThemeContext,
  themes,
  type Theme,
} from "../contexts/ThemeContex.component";

const getTheme = (): Theme => {
  const savedTheme = window.localStorage.getItem("theme") as Theme;

  if (Object.values(themes).includes(savedTheme)) {
    return savedTheme;
  }

  const userMedia = window.matchMedia("(prefers-color-scheme: light)");

  if (userMedia.matches) {
    return themes.light;
  }

  return themes.dark;
};

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
