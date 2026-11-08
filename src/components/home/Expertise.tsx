import { motion } from 'framer-motion';
import { SectionHeader, Container } from '@/components/shared';
import { skillGroups } from '@/data/skills';
import { subtleFadeUp } from '@/lib/motion';

export function Expertise() {
  return (
    <section aria-labelledby="expertise-heading" className="section-padding border-b border-[var(--color-border)]">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Capabilities"
            title="Technical & Creative Expertise"
            description="The skills and tools I work with across software development, design and entrepreneurship."
            id="expertise-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.category}
                variants={subtleFadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={i}
                className="card-surface p-5 flex flex-col gap-4"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-[var(--color-text-primary)] font-semibold text-sm">{group.category}</h3>
                </div>
                <ul className="flex flex-col gap-2" aria-label={group.category}>
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="text-[var(--color-text-secondary)] text-sm">
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
