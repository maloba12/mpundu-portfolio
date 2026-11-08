import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@/context/ThemeContext';
import { App } from './App';
import './index.css';

/*
  ThemeProvider wraps the entire application so that every component
  can access the current theme and toggle function via useTheme().

  It must be outside RouterProvider (which lives inside App) because
  the Header component — which renders inside the router tree — needs
  access to the theme context to render the toggle button.
*/
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
