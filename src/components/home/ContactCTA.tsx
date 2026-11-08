import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, GitHubIcon, LinkedInIcon } from '@/components/shared';
import { socialLinks, email } from '@/data/social';
import { staggerFadeUp } from '@/lib/motion';

const iconMap: Record<string, React.FC<{ size?: number; 'aria-hidden'?: boolean }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export function ContactCTA() {
  return (
    <section aria-labelledby="contact-cta-heading" className="section-padding">
      <Container size="narrow">
        <div className="flex flex-col items-center text-center gap-8">
          <motion.span
            variants={staggerFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={0}
            className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]"
          >
            Let&apos;s work together
          </motion.span>

          <motion.h2
            id="contact-cta-heading"
            variants={staggerFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={1}
            className="text-h1 font-semibold text-[var(--color-text-primary)] leading-tight tracking-tight"
          >
            Have a project in mind?
          </motion.h2>

          <motion.p
            variants={staggerFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={2}
            className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-lg"
          >
            Whether it&apos;s a software project, a design brief or a conversation about a new
            venture — I&apos;d like to hear from you.
          </motion.p>

          <motion.div
            variants={staggerFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={3}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Get in Touch
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </Link>
            <Button as="a" href={`mailto:${email}`} variant="secondary" size="lg">
              {email}
            </Button>
          </motion.div>

          <motion.div
            variants={staggerFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={4}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.platform];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--color-text-secondary)] border border-[var(--color-border)] rounded-[var(--radius-md)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 transition-all duration-[var(--transition-fast)]"
                >
                  {Icon && <Icon size={15} aria-hidden />}
                  {link.platform}
                </a>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
