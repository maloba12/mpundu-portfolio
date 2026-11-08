import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, GitFork } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader, Container, Tag, StatusTag, Button } from '@/components/shared';
import { featuredProjects } from '@/data/projects';
import { staggerFadeUp } from '@/lib/motion';

export function SelectedWork() {
  return (
    <section aria-labelledby="selected-work-heading" className="section-padding border-b border-[var(--color-border)]">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Selected Work"
              title="Software Projects"
              description="A selection of recent software development work."
              id="selected-work-heading"
            />
            <Link to="/work/software" className="flex-shrink-0">
              <Button variant="ghost" size="sm">
                View all projects
                <ArrowRight size={14} aria-hidden="true" />
              </Button>
            </Link>
          </div>

          {featuredProjects.length === 0 ? (
            <p className="text-[var(--color-text-tertiary)] text-sm italic">Projects coming soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredProjects.map((project, i) => (
                <motion.article
                  key={project.id}
                  variants={staggerFadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  custom={i}
                  className="card-surface flex flex-col gap-4 p-5 hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-md)] transition-all duration-[var(--transition-base)] group"
                  aria-label={project.title}
                >
                  <div className="w-full aspect-video rounded-[var(--radius-md)] bg-[var(--color-surface-raised)] border border-[var(--color-border)] overflow-hidden flex items-center justify-center">
                    {project.image ? (
                      <img src={project.image} alt={project.imageAlt ?? project.title} className="w-full h-full object-cover" loading="lazy" />
                    ) : (
                      <span className="text-[var(--color-text-tertiary)] text-xs">Image placeholder</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag variant="accent">{project.category}</Tag>
                    <StatusTag status={project.status} />
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="text-[var(--color-text-primary)] font-semibold text-base leading-snug">{project.title}</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  </div>

                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Tag key={tech} variant="default">{tech}</Tag>
                      ))}
                      {project.technologies.length > 4 && (
                        <Tag variant="outline">{`+${project.technologies.length - 4}`}</Tag>
                      )}
                    </div>
                  )}

                  {(project.githubUrl ?? project.liveUrl) && (
                    <div className="flex items-center gap-3 pt-1 border-t border-[var(--color-border)]">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} className="flex items-center gap-1.5 text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] text-xs transition-colors duration-[var(--transition-fast)]">
                          <GitFork size={13} aria-hidden="true" />
                          Repository
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="flex items-center gap-1.5 text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] text-xs transition-colors duration-[var(--transition-fast)]">
                          <ExternalLink size={13} aria-hidden="true" />
                          Live demo
                        </a>
                      )}
                    </div>
                  )}
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
