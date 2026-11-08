import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@/components/shared';
import { fadeUpVariants } from '@/lib/motion';

export function AboutPreview() {
  return (
    <section aria-labelledby="about-preview-heading" className="section-padding border-b border-[var(--color-border)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Left — pull quote */}
          <motion.div
            variants={fadeUpVariants(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="relative"
          >
            <span className="absolute -top-6 -left-2 text-8xl font-bold text-[var(--color-accent)]/15 leading-none select-none" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="relative">
              <p className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)] leading-snug tracking-tight">
                I build things that work — and make sure they look good doing it.
              </p>
              <footer className="mt-4">
                <cite className="not-italic text-[var(--color-accent)] text-sm font-semibold tracking-wide uppercase">
                  Mpundu Maloba
                </cite>
              </footer>
            </blockquote>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            variants={fadeUpVariants(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                I bring together software engineering, graphic design and a founder&apos;s mindset to
                create technology that is both technically sound and visually considered.
              </p>
              <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                My work spans full-stack web development, brand identity, digital products and
                entrepreneurial ventures — each driven by the same goal: building things that
                genuinely solve problems and stand apart.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Software Development', 'Graphic Design', 'Entrepreneurship', 'Technology', 'Creative Direction'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)] bg-[var(--color-surface-raised)] border border-[var(--color-border)] rounded-[var(--radius-sm)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link to="/about">
              <Button variant="secondary" size="md">
                More about me
                <ArrowRight size={14} aria-hidden="true" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
