import { createContext } from "react";

export type Theme = "dark" | "light";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const themes: Record<Theme, Theme> = {
  dark: "dark",
  light: "light",
};

export const ThemeContext: React.Context<ThemeContextType> = createContext(
  {} as ThemeContextType,
);
