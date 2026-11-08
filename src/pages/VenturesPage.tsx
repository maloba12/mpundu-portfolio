/*
  VenturesPage
  ============
  Full ventures listing at /ventures.
  Shows all ventures, not just featured ones.
*/

import { ExternalLink } from 'lucide-react';
import { Container, SectionHeader, Tag } from '@/components/shared';
import { ventures } from '@/data/ventures';
import type { VentureStatus } from '@/types';

const statusClasses: Record<VentureStatus, string> = {
  Active:
    'bg-[var(--color-status-success-bg)] text-[var(--color-status-success-text)] border border-[var(--color-status-success-border)]',
  'In Development':
    'bg-[var(--color-accent-dim)] text-[var(--color-accent)] border border-[var(--color-accent-border)]',
  Past: 'bg-[var(--color-surface-raised)] text-[var(--color-text-tertiary)] border border-[var(--color-border)]',
};

export function VenturesPage() {
  return (
    <div className="section-padding">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Entrepreneurship"
            title="Ventures"
            description="Projects and businesses I have founded or been involved in building."
          />

          {ventures.length === 0 ? (
            <p className="text-[var(--color-text-tertiary)] text-sm italic">
              Ventures coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {ventures.map((venture) => (
                <article
                  key={venture.id}
                  className={[
                    'card-surface p-6 flex flex-col gap-4',
                    'hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-md)]',
                    'transition-all duration-[var(--transition-base)]',
                  ].join(' ')}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[var(--color-text-primary)] font-semibold text-base">
                        {venture.name}
                      </h2>
                      <p className="text-[var(--color-accent)] text-sm font-medium">
                        {venture.tagline}
                      </p>
                    </div>
                    <span
                      className={[
                        'flex-shrink-0 inline-flex items-center rounded-[var(--radius-sm)] px-2 py-0.5 text-xs font-medium',
                        statusClasses[venture.status],
                      ].join(' ')}
                    >
                      {venture.status}
                    </span>
                  </div>

                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed flex-1">
                    {venture.description}
                  </p>

                  <div className="flex items-center justify-between gap-3 pt-1 border-t border-[var(--color-border)]">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Tag variant="default">{venture.industry}</Tag>
                      {venture.founded && (
                        <span className="text-[var(--color-text-tertiary)] text-xs">
                          Est. {venture.founded}
                        </span>
                      )}
                    </div>
                    {venture.url && (
                      <a
                        href={venture.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${venture.name}`}
                        className="flex items-center gap-1.5 text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] text-xs transition-colors duration-[var(--transition-fast)]"
                      >
                        <ExternalLink size={13} aria-hidden="true" />
                        Visit
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
