/*
  WorkPage
  ========
  Parent landing page for the Work section.
  Presented when the visitor navigates to /work directly.
  Provides navigation into the two sub-sections.
  Full project listings are built out in Milestone 2.
*/

import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Palette } from 'lucide-react';
import { Container, SectionHeader } from '@/components/shared';

const workSections = [
  {
    href: '/work/software',
    icon: Code2,
    label: 'Software Development',
    description:
      'Web applications, tools and open source projects built with modern technologies.',
  },
  {
    href: '/work/design',
    icon: Palette,
    label: 'Graphic Design',
    description:
      'Brand identities, print design, digital design and creative direction work.',
  },
];

export function WorkPage() {
  return (
    <div className="section-padding">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Portfolio"
            title="Work"
            description="Software development and graphic design projects."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {workSections.map(({ href, icon: Icon, label, description }) => (
              <Link
                key={href}
                to={href}
                className={[
                  'card-surface p-8 flex flex-col gap-5',
                  'hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-md)]',
                  'transition-all duration-[var(--transition-base)]',
                  'group',
                ].join(' ')}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-accent-dim)] border border-[var(--color-accent-border)] flex items-center justify-center">
                    <Icon
                      size={18}
                      className="text-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-[var(--transition-fast)]"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[var(--color-text-primary)] font-semibold text-lg">
                    {label}
                  </h2>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
