/*
  Header
  ======
  Responsive site header with navigation and theme toggle.

  Architecture:
  - Desktop: horizontal nav with a "Work" dropdown for sub-pages.
  - Mobile: hamburger opens a full-width slide-down menu.
  - Theme toggle: Sun/Moon icon wired to ThemeContext.
  - Scroll-aware background: applies blur/opacity when scrolled.
  - The desktop dropdown closes on outside mousedown — no route-change
    effect needed because clicking a Link naturally navigates away.
  - Mobile menu links pass onClick={() => setMobileOpen(false)} directly,
    so no effect is needed to close on navigation either.
  - Escape key closes the mobile menu via a keydown listener.
  - Body scroll is locked while the mobile menu is open.
*/

import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X, ChevronDown } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { navItems } from '@/data/navigation';
import { Container } from '@/components/shared';
import type { NavItem } from '@/types';

/* ------------------------------------------------------------------ */

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={[
        'w-9 h-9 rounded-[var(--radius-md)]',
        'flex items-center justify-center',
        'text-[var(--color-text-secondary)]',
        'hover:text-[var(--color-text-primary)]',
        'hover:bg-[var(--color-surface-raised)]',
        'transition-colors duration-[var(--transition-fast)]',
      ].join(' ')}
    >
      {isDark ? (
        <Sun size={18} aria-hidden="true" />
      ) : (
        <Moon size={18} aria-hidden="true" />
      )}
    </button>
  );
}

/* ------------------------------------------------------------------ */

function DesktopDropdown({ item }: { item: NavItem }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close when clicking anywhere outside the dropdown container
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const isActiveParent = item.children?.some((c) =>
    location.pathname.startsWith(c.href),
  );

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className={[
          'flex items-center gap-1 px-1 py-2 text-sm font-medium',
          'transition-colors duration-[var(--transition-fast)]',
          isActiveParent
            ? 'text-[var(--color-accent)]'
            : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
        ].join(' ')}
      >
        {item.label}
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={['transition-transform duration-200', open ? 'rotate-180' : ''].join(' ')}
        />
      </button>

      {open && (
        <div
          className={[
            'absolute top-full left-0 mt-1 w-52 z-50',
            'bg-[var(--color-surface)] border border-[var(--color-border)]',
            'rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)]',
            'py-1',
          ].join(' ')}
          role="menu"
        >
          {item.children?.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className={[
                'block px-4 py-2.5 text-sm',
                'transition-colors duration-[var(--transition-fast)]',
                location.pathname === child.href
                  ? 'text-[var(--color-accent)] bg-[var(--color-accent-dim)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-raised)]',
              ].join(' ')}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function DesktopNavLink({ item }: { item: NavItem }) {
  const location = useLocation();
  const isActive = location.pathname === item.href;

  return (
    <Link
      to={item.href}
      className={[
        'px-1 py-2 text-sm font-medium',
        'transition-colors duration-[var(--transition-fast)]',
        isActive
          ? 'text-[var(--color-accent)]'
          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
      ].join(' ')}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.label}
    </Link>
  );
}

/* ------------------------------------------------------------------ */

interface MobileNavItemProps {
  item: NavItem;
  onClose: () => void;
}

function MobileNavItem({ item, onClose }: MobileNavItemProps) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const isActive = location.pathname === item.href;
  const isActiveParent = item.children?.some((c) =>
    location.pathname.startsWith(c.href),
  );

  if (item.hasChildren && item.children) {
    return (
      <li>
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          className={[
            'flex items-center justify-between w-full px-4 py-3',
            'text-base font-medium border-b border-[var(--color-border)]',
            'transition-colors duration-[var(--transition-fast)]',
            isActiveParent ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-primary)]',
          ].join(' ')}
        >
          {item.label}
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={['transition-transform duration-200', expanded ? 'rotate-180' : ''].join(' ')}
          />
        </button>
        {expanded && (
          <ul className="bg-[var(--color-surface-raised)]">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  to={child.href}
                  onClick={onClose}
                  className={[
                    'block px-8 py-3 text-sm border-b border-[var(--color-border)]',
                    'transition-colors duration-[var(--transition-fast)]',
                    location.pathname === child.href
                      ? 'text-[var(--color-accent)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
                  ].join(' ')}
                  aria-current={location.pathname === child.href ? 'page' : undefined}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <Link
        to={item.href}
        onClick={onClose}
        className={[
          'block px-4 py-3 text-base font-medium',
          'border-b border-[var(--color-border)]',
          'transition-colors duration-[var(--transition-fast)]',
          isActive
            ? 'text-[var(--color-accent)]'
            : 'text-[var(--color-text-primary)] hover:text-[var(--color-accent)]',
        ].join(' ')}
        aria-current={isActive ? 'page' : undefined}
      >
        {item.label}
      </Link>
    </li>
  );
}

/* ------------------------------------------------------------------ */

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll-aware background
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={[
        'sticky top-0 z-40 w-full border-b transition-all duration-300',
        scrolled
          ? 'bg-[var(--color-background)]/90 backdrop-blur-md border-[var(--color-border)]'
          : 'bg-[var(--color-background)] border-transparent',
      ].join(' ')}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2"
            aria-label="Mpundu Maloba — Home"
          >
            <span
              className="w-7 h-7 rounded-[var(--radius-sm)] bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              <span className="text-[var(--color-background)] text-xs font-bold leading-none">M</span>
            </span>
            <span className="text-[var(--color-text-primary)] font-semibold text-sm tracking-tight">
              Mpundu Maloba
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.hasChildren ? (
                <DesktopDropdown key={item.href} item={item} />
              ) : (
                <DesktopNavLink key={item.href} item={item} />
              ),
            )}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className={[
                'md:hidden w-9 h-9 rounded-[var(--radius-md)]',
                'flex items-center justify-center',
                'text-[var(--color-text-secondary)]',
                'hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-raised)]',
                'transition-colors duration-[var(--transition-fast)]',
              ].join(' ')}
            >
              {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={mobileOpen ? undefined : true}
        className={[
          'md:hidden overflow-hidden',
          'transition-all duration-300 ease-in-out',
          'bg-[var(--color-background)] border-t border-[var(--color-border)]',
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <nav aria-label="Mobile navigation">
          <ul>
            {navItems.map((item) => (
              <MobileNavItem key={item.href} item={item} onClose={closeMobile} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
