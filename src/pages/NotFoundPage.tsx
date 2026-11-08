/*
  NotFoundPage
  ============
  404 page rendered by the router's errorElement or catch-all route.
*/

import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container, Button } from '@/components/shared';

export function NotFoundPage() {
  return (
    <div className="section-padding flex items-center">
      <Container size="narrow">
        <div className="flex flex-col items-center text-center gap-6">
          <span
            className="text-8xl font-bold text-[var(--color-accent)]/20 leading-none select-none"
            aria-hidden="true"
          >
            404
          </span>
          <div className="flex flex-col gap-3">
            <h1 className="text-h2 font-semibold text-[var(--color-text-primary)]">
              Page not found
            </h1>
            <p className="text-[var(--color-text-secondary)] text-base leading-relaxed max-w-sm">
              The page you&apos;re looking for doesn&apos;t exist or may have
              been moved.
            </p>
          </div>
          <Link to="/">
            <Button variant="primary" size="md">
              <ArrowLeft size={14} aria-hidden="true" />
              Back to Home
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
