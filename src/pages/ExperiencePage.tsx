/*
  ExperiencePage
  ==============
  Full experience, education and certifications at /experience.
*/

import { MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Container, SectionHeader, Tag } from '@/components/shared';
import { workExperience, education, certifications } from '@/data/experience';

function formatDate(iso: string): string {
  const [year, month] = iso.split('-');
  const date = new Date(Number(year), Number(month ?? 1) - 1);
  return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

export function ExperiencePage() {
  return (
    <div className="section-padding">
      <Container>
        <div className="flex flex-col gap-16">

          {/* Work Experience */}
          <section aria-labelledby="work-experience-heading">
            <div className="flex flex-col gap-8">
              <SectionHeader
                eyebrow="Career"
                title="Work Experience"
                id="work-experience-heading"
              />
              <div className="flex flex-col gap-5">
                {workExperience.map((role) => (
                  <article
                    key={role.id}
                    className="card-surface p-6 flex flex-col gap-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-[var(--color-text-primary)] font-semibold text-base">
                          {role.role}
                        </h2>
                        <p className="text-[var(--color-accent)] text-sm font-medium">
                          {role.company}
                        </p>
                        {role.companyDescription && (
                          <p className="text-[var(--color-text-tertiary)] text-xs mt-0.5">
                            {role.companyDescription}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                        <span className="text-[var(--color-text-tertiary)] text-xs font-medium">
                          {formatDate(role.startDate)} —{' '}
                          {role.endDate ? formatDate(role.endDate) : 'Present'}
                        </span>
                        <div className="flex items-center gap-1 text-[var(--color-text-tertiary)] text-xs">
                          <MapPin size={11} aria-hidden="true" />
                          {role.location}
                        </div>
                      </div>
                    </div>

                    {role.highlights.length > 0 && (
                      <ul className="flex flex-col gap-2 pl-1">
                        {role.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]"
                          >
                            <span
                              className="mt-2 w-1 h-1 rounded-full bg-[var(--color-accent)] flex-shrink-0"
                              aria-hidden="true"
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex items-center gap-2 flex-wrap pt-1 border-t border-[var(--color-border)]">
                      <div className="flex items-center gap-1.5 text-[var(--color-text-tertiary)] text-xs">
                        <Briefcase size={11} aria-hidden="true" />
                        {role.workType}
                      </div>
                      {role.technologies?.map((tech) => (
                        <Tag key={tech} variant="default">
                          {tech}
                        </Tag>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <hr className="divider" />

          {/* Education */}
          <section aria-labelledby="education-heading">
            <div className="flex flex-col gap-8">
              <SectionHeader
                eyebrow="Academic"
                title="Education"
                id="education-heading"
              />
              <div className="flex flex-col gap-5">
                {education.map((edu) => (
                  <article
                    key={edu.id}
                    className="card-surface p-6 flex flex-col gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-[var(--radius-md)] bg-[var(--color-accent-dim)] border border-[var(--color-accent-border)] flex items-center justify-center flex-shrink-0">
                        <GraduationCap
                          size={16}
                          className="text-[var(--color-accent)]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex flex-col gap-0.5 flex-1">
                        <h2 className="text-[var(--color-text-primary)] font-semibold text-base">
                          {edu.qualification}
                        </h2>
                        <p className="text-[var(--color-accent)] text-sm font-medium">
                          {edu.institution}
                        </p>
                        <p className="text-[var(--color-text-secondary)] text-sm">
                          {edu.field}
                        </p>
                        <p className="text-[var(--color-text-tertiary)] text-xs mt-1">
                          {edu.startYear} — {edu.endYear ?? 'Present'}
                        </p>
                      </div>
                    </div>
                    {edu.description && (
                      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed pl-12">
                        {edu.description}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>

          <hr className="divider" />

          {/* Certifications */}
          <section aria-labelledby="certifications-heading">
            <div className="flex flex-col gap-8">
              <SectionHeader
                eyebrow="Credentials"
                title="Certifications"
                id="certifications-heading"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert) => (
                  <article
                    key={cert.id}
                    className="card-surface p-5 flex flex-col gap-3"
                  >
                    <div className="w-8 h-8 rounded-[var(--radius-md)] bg-[var(--color-accent-dim)] border border-[var(--color-accent-border)] flex items-center justify-center">
                      <Award
                        size={14}
                        className="text-[var(--color-accent)]"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[var(--color-text-primary)] font-semibold text-sm leading-snug">
                        {cert.title}
                      </h2>
                      <p className="text-[var(--color-text-secondary)] text-xs">
                        {cert.issuingOrganisation}
                      </p>
                      <p className="text-[var(--color-text-tertiary)] text-xs">
                        Issued {formatDate(cert.issueDate)}
                        {cert.expiryDate && ` · Expires ${formatDate(cert.expiryDate)}`}
                      </p>
                    </div>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-accent)] text-xs hover:underline"
                      >
                        View credential
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>

        </div>
      </Container>
    </div>
  );
}
