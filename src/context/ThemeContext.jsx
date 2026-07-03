import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { themes } from "../data/portfolio.js";

const ThemeContext = createContext(null);

const storageKey = "portfolio-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return themes[0].id;
  return window.localStorage.getItem(storageKey) || themes[0].id;
}

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(getInitialTheme);

  const theme = useMemo(
    () => themes.find((item) => item.id === themeId) || themes[0],
    [themeId]
  );

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme.id;
    root.style.setProperty("--accent", theme.tokens.accent);
    root.style.setProperty("--accent-soft", theme.tokens.accentSoft);
    root.style.setProperty("--accent-contrast", theme.tokens.accentContrast);
    root.style.setProperty("--accent-rgb", theme.tokens.accentRgb);
    root.style.setProperty("--bg", theme.tokens.bg);
    root.style.setProperty("--section-bg", theme.tokens.sectionBg);
    root.style.setProperty("--panel", theme.tokens.panel);
    root.style.setProperty("--panel-soft", theme.tokens.panelSoft);
    root.style.setProperty("--field-bg", theme.tokens.fieldBg);
    root.style.setProperty("--line", theme.tokens.line);
    root.style.setProperty("--line-soft", theme.tokens.lineSoft);
    root.style.setProperty("--grid-line", theme.tokens.gridLine);
    root.style.setProperty("--header-bg", theme.tokens.headerBg);
    root.style.setProperty("--ghost-bg", theme.tokens.ghostBg);
    root.style.setProperty("--stats-bg", theme.tokens.statsBg);
    root.style.setProperty("--ticker-bg", theme.tokens.tickerBg);
    window.localStorage.setItem(storageKey, theme.id);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      themeId: theme.id,
      themes,
      setThemeId,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return value;
}

