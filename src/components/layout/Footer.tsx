/*
  Footer
  ======
  Site footer with navigation links, social links and copyright.

  Kept deliberately minimal — the footer should not compete with
  page content. It provides useful links and closing context.
*/

import { Link } from 'react-router-dom';
import { Container, GitHubIcon, LinkedInIcon } from '@/components/shared';
import { socialLinks } from '@/data/social';
import { navItems } from '@/data/navigation';

const iconMap: Record<string, React.FC<{ size?: number; 'aria-hidden'?: boolean }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)]"
      aria-label="Site footer"
    >
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span
                className="w-7 h-7 rounded-[var(--radius-sm)] bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <span className="text-[var(--color-background)] text-xs font-bold leading-none">
                  M
                </span>
              </span>
              <span className="text-[var(--color-text-primary)] font-semibold text-sm">
                Mpundu Maloba
              </span>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-xs">
              Software developer, graphic designer and entrepreneur building
              purposeful technology and creative solutions.
            </p>
          </div>

          {/* Navigation column */}
          <nav aria-label="Footer navigation">
            <h2 className="text-[var(--color-text-primary)] text-xs font-semibold uppercase tracking-widest mb-4">
              Navigation
            </h2>
            <ul className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-[var(--color-text-secondary)] text-sm hover:text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social / connect column */}
          <div>
            <h2 className="text-[var(--color-text-primary)] text-xs font-semibold uppercase tracking-widest mb-4">
              Connect
            </h2>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.platform];
                return (
                  <li key={link.platform}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      className="flex items-center gap-2.5 text-[var(--color-text-secondary)] text-sm hover:text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)]"
                    >
                      {Icon && <Icon size={15} aria-hidden />}
                      {link.platform}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[var(--color-text-tertiary)] text-xs">
            &copy; {year} Mpundu Maloba. All rights reserved.
          </p>
          <p className="text-[var(--color-text-tertiary)] text-xs">
            Designed and built by Mpundu Maloba.
          </p>
        </div>
      </Container>
    </footer>
  );
}
