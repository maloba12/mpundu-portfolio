/*
  SectionHeader
  =============
  Consistent section heading pattern used across every major section
  of the portfolio.

  Structure:
    [eyebrow label]   — small caps label, accent coloured, optional
    [title]           — main heading (rendered as h2 by default)
    [description]     — supporting paragraph, optional

  The eyebrow + accent line creates a visual anchor that helps
  visitors quickly scan the page and understand section context
  without relying solely on font size.

  The `align` prop controls text alignment — default is 'left'
  because most sections read better left-aligned. Pass 'center'
  for sections that benefit from a centred layout (e.g. Contact CTA).
*/

import type { SectionHeaderProps } from '@/types';

interface Props extends SectionHeaderProps {
  /** HTML heading level — defaults to h2 */
  headingLevel?: 'h1' | 'h2' | 'h3';
  className?: string;
  /** id placed on the heading element for aria-labelledby wiring */
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  headingLevel: Heading = 'h2',
  className = '',
  id,
}: Props) {
  const isCenter = align === 'center';

  return (
    <div
      className={[
        'flex flex-col gap-3',
        isCenter ? 'items-center text-center' : 'items-start text-left',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow && (
        <span
          className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase"
        >
          {eyebrow}
        </span>
      )}

      <Heading
        id={id}
        className={[
          'text-h2 font-semibold text-[var(--color-text-primary)] leading-tight',
          /* Accent underline — only on left-aligned headers */
          !isCenter ? 'accent-line' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {title}
      </Heading>

      {description && (
        <p
          className={[
            'text-[var(--color-text-secondary)] text-base leading-relaxed',
            isCenter ? 'max-w-2xl' : 'max-w-prose',
          ].join(' ')}
        >
          {description}
        </p>
      )}
    </div>
  );
}
