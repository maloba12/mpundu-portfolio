/*
  ThemeContext
  ============
  Global theme management for the portfolio.

  Architecture decisions:
  - Theme state lives in React context so any component can read or
    toggle it without prop drilling.
  - The active theme is stored as a `data-theme` attribute on <html>
    rather than a CSS class. This keeps CSS selectors simple and
    ensures the attribute is set before React's first render via the
    inline script in index.html, preventing flash.
  - localStorage key "theme" persists the visitor's choice.
  - On first visit (no stored preference), we fall back to the OS
    colour-scheme preference via matchMedia. This matches what the
    index.html inline script does so the values are always in sync.
  - The context value is memoised to prevent unnecessary re-renders
    in consuming components.
*/

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { ReactNode } from 'react';
import type { Theme, ThemeContextValue } from '@/types';

/* ---------- Storage key ---------- */
const STORAGE_KEY = 'theme';

/* ---------- Helpers ---------- */

function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // localStorage unavailable (private browsing, sandboxed environment)
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
}

/* ---------- Context ---------- */

const ThemeContext = createContext<ThemeContextValue | null>(null);

/* ---------- Provider ---------- */

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Keep the DOM and localStorage in sync whenever theme changes.
  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore write failures in restricted environments.
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

/* ---------- Hook ---------- */

/**
 * Access the current theme and toggle function.
 * Must be used inside <ThemeProvider>.
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used inside <ThemeProvider>');
  }
  return ctx;
}
