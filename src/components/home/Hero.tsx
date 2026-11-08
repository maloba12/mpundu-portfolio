/*
  Hero
  ====
  Homepage hero section. Two-column on desktop (text | image),
  single column on mobile (text above image).
*/

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Container } from '@/components/shared';
import { fadeUpVariants, fadeInRight } from '@/lib/motion';

function ProfilePlaceholder() {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-[4/5]">
      {/* Offset accent frame */}
      <div
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-[var(--radius-lg)] border-2 border-[var(--color-accent)]/40"
        aria-hidden="true"
      />
      {/* Main image container */}
      <div className="relative w-full h-full rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-surface-raised)] border border-[var(--color-border)]">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
          <div className="w-24 h-24 rounded-full bg-[var(--color-border)] flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="8" r="4" fill="var(--color-text-tertiary)" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="var(--color-text-tertiary)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-[var(--color-text-tertiary)] text-xs text-center leading-relaxed">
            Professional photograph<br />placeholder
          </p>
        </div>
      </div>
      {/* Accent dot */}
      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
      {/* Dot grid */}
      <svg className="absolute -bottom-4 -left-4 opacity-30" width="80" height="80" viewBox="0 0 80 80" aria-hidden="true">
        {Array.from({ length: 4 }).map((_, row) =>
          Array.from({ length: 4 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={col * 20 + 10} cy={row * 20 + 10} r="2" fill="var(--color-accent)" />
          )),
        )}
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section aria-label="Introduction" className="section-padding border-b border-[var(--color-border)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — text */}
          <div className="flex flex-col gap-6 order-1">
            <motion.div variants={fadeUpVariants(0)} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]">
                <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUpVariants(0.1)}
              initial="hidden"
              animate="visible"
              className="text-display font-semibold text-[var(--color-text-primary)] leading-[1.1] tracking-tight"
            >
              Software,{' '}
              <span className="text-[var(--color-accent)]">Design</span>
              {' & '}Entrepreneurship.
            </motion.h1>

            <motion.p
              variants={fadeUpVariants(0.2)}
              initial="hidden"
              animate="visible"
              className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-lg"
            >
              I&apos;m{' '}
              <strong className="text-[var(--color-text-primary)] font-medium">Mpundu Maloba</strong>{' '}
              — a technology professional, software developer, graphic designer and entrepreneur
              building meaningful products and creative solutions.
            </motion.p>

            <motion.div
              variants={fadeUpVariants(0.3)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-3"
            >
              <Link to="/work">
                <Button variant="primary" size="lg">
                  Explore My Work
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  <Mail size={16} aria-hidden="true" />
                  Get in Touch
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUpVariants(0.4)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-6 pt-2"
            >
              {[
                { value: 'Full-Stack', label: 'Development' },
                { value: 'Brand', label: 'Design' },
                { value: 'Tech', label: 'Ventures' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-[var(--color-text-primary)] font-semibold text-sm">{value}</span>
                  <span className="text-[var(--color-text-tertiary)] text-xs">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="order-2 flex justify-center md:justify-end"
          >
            <ProfilePlaceholder />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
