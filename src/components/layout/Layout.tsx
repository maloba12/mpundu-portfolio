/*
  Layout
  ======
  Root layout wrapper rendered by all page routes.

  Renders:
    <Header />
    <main>{children}</main>   ← page content
    <Footer />

  The <main> element gets an id="main-content" so that a
  "skip to main content" link (added below) can target it —
  this is a WCAG Level A requirement for keyboard navigation.

  The skip link is visually hidden until focused, then it
  appears at the top of the viewport so keyboard users can
  bypass the navigation on every page load.
*/

import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* Skip to main content — keyboard accessibility */}
      <a
        href="#main-content"
        className={[
          'sr-only focus:not-sr-only',
          'focus:fixed focus:top-4 focus:left-4 focus:z-50',
          'focus:px-4 focus:py-2',
          'focus:bg-[var(--color-accent)] focus:text-[var(--color-background)]',
          'focus:rounded-[var(--radius-md)] focus:font-medium focus:text-sm',
          'focus:shadow-[var(--shadow-md)]',
        ].join(' ')}
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
    </>
  );
}
