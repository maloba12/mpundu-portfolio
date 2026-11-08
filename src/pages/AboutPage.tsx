/*
  AboutPage
  =========
  Full About page. Milestone 1 stub — provides a complete, styled
  page shell so routing and navigation work end-to-end.
  Full content will be built out in Milestone 2.
*/

import { Container, SectionHeader, Button } from '@/components/shared';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="section-padding">
      <Container size="narrow">
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="About"
            title="Mpundu Maloba"
            description="Software developer, graphic designer and entrepreneur."
          />

          <div className="flex flex-col gap-5 text-[var(--color-text-secondary)] text-base leading-relaxed">
            <p>
              This page is being built out. Full biography, background,
              values and professional philosophy will be added here in the
              next development milestone.
            </p>
            <p>
              In the meantime, explore the work sections or get in touch
              directly.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to="/work">
              <Button variant="primary" size="md">
                Explore Work
                <ArrowRight size={14} aria-hidden="true" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="md">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
