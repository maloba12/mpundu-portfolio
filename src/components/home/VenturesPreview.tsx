import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader, Container, Tag, Button } from '@/components/shared';
import { featuredVentures } from '@/data/ventures';
import { staggerFadeUp } from '@/lib/motion';
import type { VentureStatus } from '@/types';

const statusClasses: Record<VentureStatus, string> = {
  Active: 'bg-[var(--color-status-success-bg)] text-[var(--color-status-success-text)] border border-[var(--color-status-success-border)]',
  'In Development': 'bg-[var(--color-accent-dim)] text-[var(--color-accent)] border border-[var(--color-accent-border)]',
  Past: 'bg-[var(--color-surface-raised)] text-[var(--color-text-tertiary)] border border-[var(--color-border)]',
};

export function VenturesPreview() {
  return (
    <section aria-labelledby="ventures-preview-heading" className="section-padding border-b border-[var(--color-border)]">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Entrepreneurship"
              title="Ventures"
              description="Projects and businesses I have founded or built."
              id="ventures-preview-heading"
            />
            <Link to="/ventures" className="flex-shrink-0">
              <Button variant="ghost" size="sm">
                View all ventures
                <ArrowRight size={14} aria-hidden="true" />
              </Button>
            </Link>
          </div>

          {featuredVentures.length === 0 ? (
            <p className="text-[var(--color-text-tertiary)] text-sm italic">Ventures coming soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featuredVentures.map((venture, i) => (
                <motion.article
                  key={venture.id}
                  variants={staggerFadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  custom={i}
                  className="card-surface p-6 flex flex-col gap-4 hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-md)] transition-all duration-[var(--transition-base)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[var(--color-text-primary)] font-semibold text-base leading-snug">{venture.name}</h3>
                      <p className="text-[var(--color-accent)] text-sm font-medium">{venture.tagline}</p>
                    </div>
                    <span className={['flex-shrink-0 inline-flex items-center rounded-[var(--radius-sm)] px-2 py-0.5 text-xs font-medium', statusClasses[venture.status]].join(' ')}>
                      {venture.status}
                    </span>
                  </div>

                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed line-clamp-3">{venture.description}</p>

                  <div className="flex items-center justify-between gap-3 pt-1 border-t border-[var(--color-border)]">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Tag variant="default">{venture.industry}</Tag>
                      {venture.founded && (
                        <span className="text-[var(--color-text-tertiary)] text-xs">Est. {venture.founded}</span>
                      )}
                    </div>
                    {venture.url && (
                      <a href={venture.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${venture.name}`} className="flex items-center gap-1.5 text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] text-xs transition-colors duration-[var(--transition-fast)]">
                        <ExternalLink size={13} aria-hidden="true" />
                        Visit
                      </a>
                    )}
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
