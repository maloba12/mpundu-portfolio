/*
  SoftwareWorkPage
  ================
  Full software projects listing at /work/software.
  Milestone 1 stub — shows all projects with filtering scaffold.
  Full filtering and project detail pages are Milestone 2.
*/

import { Container, SectionHeader, Tag, StatusTag } from '@/components/shared';
import { projects } from '@/data/projects';

export function SoftwareWorkPage() {
  return (
    <div className="section-padding">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Work"
            title="Software Development"
            description="Web applications, tools and open source projects."
          />

          {projects.length === 0 ? (
            <p className="text-[var(--color-text-tertiary)] text-sm italic">
              Projects coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className={[
                    'card-surface p-5 flex flex-col gap-4',
                    'hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-md)]',
                    'transition-all duration-[var(--transition-base)]',
                  ].join(' ')}
                >
                  {/* Image area */}
                  <div className="w-full aspect-video rounded-[var(--radius-md)] bg-[var(--color-surface-raised)] border border-[var(--color-border)] flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.imageAlt ?? project.title}
                        className="w-full h-full object-cover rounded-[var(--radius-md)]"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-[var(--color-text-tertiary)] text-xs">
                        Image placeholder
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag variant="accent">{project.category}</Tag>
                    <StatusTag status={project.status} />
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <h2 className="text-[var(--color-text-primary)] font-semibold text-base leading-snug">
                      {project.title}
                    </h2>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <Tag key={tech} variant="default">
                          {tech}
                        </Tag>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
