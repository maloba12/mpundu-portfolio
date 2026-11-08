/*
  InsightsPage
  ============
  Full insights listing at /insights.
  Individual insight detail pages are Milestone 2.
*/

import { Clock } from 'lucide-react';
import { Container, SectionHeader, Tag } from '@/components/shared';
import { insights } from '@/data/insights';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function InsightsPage() {
  return (
    <div className="section-padding">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Writing"
            title="Insights"
            description="Perspectives on technology, design and entrepreneurship."
          />

          {insights.length === 0 ? (
            <p className="text-[var(--color-text-tertiary)] text-sm italic">
              Insights coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {insights.map((insight) => (
                <article
                  key={insight.id}
                  className={[
                    'card-surface p-6 flex flex-col gap-4',
                    'hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-md)]',
                    'transition-all duration-[var(--transition-base)]',
                    'group',
                  ].join(' ')}
                >
                  {insight.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {insight.tags.map((tag) => (
                        <Tag key={tag} variant="accent">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  )}

                  <h2 className="text-[var(--color-text-primary)] font-semibold text-base leading-snug group-hover:text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)]">
                    {insight.title}
                  </h2>

                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed flex-1">
                    {insight.excerpt}
                  </p>

                  <div className="flex items-center justify-between gap-3 pt-1 border-t border-[var(--color-border)]">
                    <time
                      dateTime={insight.publishedDate}
                      className="text-[var(--color-text-tertiary)] text-xs"
                    >
                      {formatDate(insight.publishedDate)}
                    </time>
                    <div className="flex items-center gap-1.5 text-[var(--color-text-tertiary)] text-xs">
                      <Clock size={11} aria-hidden="true" />
                      {insight.readingTime} min read
                    </div>
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
