/*
  DesignWorkPage
  ==============
  Graphic design portfolio at /work/design.
  Milestone 1 stub — content and gallery will be built in Milestone 2.
*/

import { Container, SectionHeader, Button } from '@/components/shared';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DesignWorkPage() {
  return (
    <div className="section-padding">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Work"
            title="Graphic Design"
            description="Brand identities, print, digital and creative direction."
          />

          <div className="flex flex-col gap-5 text-[var(--color-text-secondary)] text-base leading-relaxed max-w-prose">
            <p>
              The graphic design portfolio is being curated and will be
              presented here in the next milestone. It will include brand
              identity projects, print design work and digital design pieces.
            </p>
          </div>

          <Link to="/contact">
            <Button variant="secondary" size="md">
              Enquire about design work
              <ArrowRight size={14} aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
