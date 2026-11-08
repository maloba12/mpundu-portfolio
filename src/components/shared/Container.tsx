/*
  Container
  =========
  Max-width layout wrapper applied to every section.

  A single Container component ensures consistent horizontal padding
  and max-width across the entire site. Changing the layout constraint
  here automatically updates every section.

  The `size` prop allows a narrow variant for centred, text-heavy
  sections like the About preview or Contact CTA.

  This is intentionally a thin wrapper — it does not add vertical
  spacing. Sections are responsible for their own vertical rhythm
  via the `section-padding` utility.
*/

import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  /** 'default' = 1280px max, 'narrow' = 800px max */
  size?: 'default' | 'narrow';
  className?: string;
  /** HTML element to render — defaults to div */
  as?: 'div' | 'section' | 'article' | 'main' | 'aside';
}

const maxWidths = {
  default: 'max-w-screen-xl',
  narrow: 'max-w-3xl',
} as const;

export function Container({
  children,
  size = 'default',
  className = '',
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={[
        'w-full mx-auto container-pad',
        maxWidths[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  );
}
