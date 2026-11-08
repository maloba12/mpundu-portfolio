/*
  Tag
  ===
  Small labelling chip used for technology names, categories,
  project statuses and skill names.

  Variants:
  - default  — subtle surface background, used for tech/tool names
  - accent   — accent-tinted background, used for categories
  - status   — colour-coded by project status (completed/in-progress/concept)
  - outline  — border only, no fill, used in tight spaces
*/

type TagVariant = 'default' | 'accent' | 'outline';
type StatusValue = 'Completed' | 'In Progress' | 'Concept';

interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  className?: string;
}

interface StatusTagProps {
  status: StatusValue;
  className?: string;
}

/* ------------------------------------------------------------------ */

const variantClasses: Record<TagVariant, string> = {
  default:
    'bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] border border-[var(--color-border)]',
  accent:
    'bg-[var(--color-accent-dim)] text-[var(--color-accent)] border border-[var(--color-accent-border)]',
  outline:
    'bg-transparent text-[var(--color-text-secondary)] border border-[var(--color-border)]',
};

/*
  Status colours avoid Tailwind's dark: prefix because the theme system
  uses data-theme="dark" on <html>, not a .dark class. Tailwind's dark:
  variants would never activate. Instead we use CSS custom properties that
  switch automatically with the theme.
*/
const statusClasses: Record<StatusValue, string> = {
  Completed:
    'bg-[var(--color-status-success-bg)] text-[var(--color-status-success-text)] border border-[var(--color-status-success-border)]',
  'In Progress':
    'bg-[var(--color-accent-dim)] text-[var(--color-accent)] border border-[var(--color-accent-border)]',
  Concept:
    'bg-[var(--color-status-warning-bg)] text-[var(--color-status-warning-text)] border border-[var(--color-status-warning-border)]',
};

const base =
  'inline-flex items-center rounded-[var(--radius-sm)] px-2 py-0.5 text-xs font-medium leading-none whitespace-nowrap';

/* ------------------------------------------------------------------ */

export function Tag({ children, variant = 'default', className = '' }: TagProps) {
  return (
    <span className={[base, variantClasses[variant], className].join(' ')}>
      {children}
    </span>
  );
}

export function StatusTag({ status, className = '' }: StatusTagProps) {
  return (
    <span className={[base, statusClasses[status], className].join(' ')}>
      {status}
    </span>
  );
}
