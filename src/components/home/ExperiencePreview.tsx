import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader, Container, Tag, Button } from '@/components/shared';
import { workExperience } from '@/data/experience';
import { staggerFadeUp } from '@/lib/motion';
import type { WorkExperience } from '@/types';

function formatDate(iso: string): string {
  const [year, month] = iso.split('-');
  const date = new Date(Number(year), Number(month ?? 1) - 1);
  return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

export function ExperiencePreview() {
  const preview: WorkExperience[] = workExperience.slice(0, 2);

  return (
    <section aria-labelledby="experience-preview-heading" className="section-padding border-b border-[var(--color-border)]">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Background"
              title="Professional Experience"
              description="Where I have worked and what I have built."
              id="experience-preview-heading"
            />
            <Link to="/experience" className="flex-shrink-0">
              <Button variant="ghost" size="sm">
                Full experience
                <ArrowRight size={14} aria-hidden="true" />
              </Button>
            </Link>
          </div>

          {preview.length === 0 ? (
            <p className="text-[var(--color-text-tertiary)] text-sm italic">Experience coming soon.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {preview.map((role, i) => (
                <motion.article
                  key={role.id}
                  variants={staggerFadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  custom={i}
                  className="card-surface p-6 flex flex-col gap-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[var(--color-text-primary)] font-semibold text-base">{role.role}</h3>
                      <p className="text-[var(--color-accent)] text-sm font-medium">{role.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <span className="text-[var(--color-text-tertiary)] text-xs font-medium">
                        {formatDate(role.startDate)} — {role.endDate ? formatDate(role.endDate) : 'Present'}
                      </span>
                      <div className="flex items-center gap-1 text-[var(--color-text-tertiary)] text-xs">
                        <MapPin size={11} aria-hidden="true" />
                        {role.location}
                      </div>
                    </div>
                  </div>

                  {role.highlights.length > 0 && (
                    <ul className="flex flex-col gap-2 pl-1" aria-label="Key highlights">
                      {role.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[var(--color-accent)] flex-shrink-0" aria-hidden="true" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex items-center gap-2 flex-wrap pt-1 border-t border-[var(--color-border)]">
                    <div className="flex items-center gap-1.5 text-[var(--color-text-tertiary)] text-xs">
                      <Briefcase size={11} aria-hidden="true" />
                      {role.workType}
                    </div>
                    {role.technologies?.slice(0, 4).map((tech) => (
                      <Tag key={tech} variant="default">{tech}</Tag>
                    ))}
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
