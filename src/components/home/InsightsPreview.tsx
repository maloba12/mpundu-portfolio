import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader, Container, Tag, Button } from '@/components/shared';
import { featuredInsights } from '@/data/insights';
import { staggerFadeUp } from '@/lib/motion';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function InsightsPreview() {
  return (
    <section aria-labelledby="insights-preview-heading" className="section-padding border-b border-[var(--color-border)]">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Writing"
              title="Selected Insights"
              description="Perspectives on technology, design and entrepreneurship."
              id="insights-preview-heading"
            />
            <Link to="/insights" className="flex-shrink-0">
              <Button variant="ghost" size="sm">
                All insights
                <ArrowRight size={14} aria-hidden="true" />
              </Button>
            </Link>
          </div>

          {featuredInsights.length === 0 ? (
            <p className="text-[var(--color-text-tertiary)] text-sm italic">Insights coming soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featuredInsights.map((insight, i) => (
                <motion.article
                  key={insight.id}
                  variants={staggerFadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  custom={i}
                  className="card-surface p-6 flex flex-col gap-4 hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-md)] transition-all duration-[var(--transition-base)] group cursor-pointer"
                >
                  {insight.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {insight.tags.slice(0, 3).map((tag) => (
                        <Tag key={tag} variant="accent">{tag}</Tag>
                      ))}
                    </div>
                  )}

                  <h3 className="text-[var(--color-text-primary)] font-semibold text-base leading-snug group-hover:text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)]">
                    {insight.title}
                  </h3>

                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed line-clamp-3 flex-1">
                    {insight.excerpt}
                  </p>

                  <div className="flex items-center justify-between gap-3 pt-1 border-t border-[var(--color-border)]">
                    <time dateTime={insight.publishedDate} className="text-[var(--color-text-tertiary)] text-xs">
                      {formatDate(insight.publishedDate)}
                    </time>
                    <div className="flex items-center gap-1.5 text-[var(--color-text-tertiary)] text-xs">
                      <Clock size={11} aria-hidden="true" />
                      {insight.readingTime} min read
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
