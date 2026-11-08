/*
  Button
  ======
  Flexible button/anchor primitive.

  Pass `as="a"` with `href` to render as an <a> element.
  All other cases render as <button type="button">.

  Variants: primary | secondary | ghost
  Sizes: sm | md | lg
*/

import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

/* Shared visual props */
interface SharedProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
}

/* When rendered as <button> */
type AsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    as?: 'button';
    href?: never;
  };

/* When rendered as <a> */
type AsAnchor = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    as: 'a';
    href: string;
  };

export type ButtonProps = AsButton | AsAnchor;

/* ------------------------------------------------------------------ */

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    'bg-[var(--color-accent)] text-[var(--color-background)]',
    'border border-[var(--color-accent)]',
    'hover:bg-[var(--color-accent)]/90 hover:border-[var(--color-accent)]/90',
    'active:scale-[0.98] font-semibold',
  ].join(' '),
  secondary: [
    'bg-transparent text-[var(--color-text-primary)]',
    'border border-[var(--color-border)]',
    'hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
    'active:scale-[0.98] font-medium',
  ].join(' '),
  ghost: [
    'bg-transparent text-[var(--color-text-secondary)]',
    'border border-transparent',
    'hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-raised)]',
    'active:scale-[0.98] font-medium',
  ].join(' '),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2',
};

function cls(variant: ButtonVariant, size: ButtonSize, fullWidth: boolean, extra: string) {
  return [
    'inline-flex items-center justify-center',
    'rounded-[var(--radius-md)]',
    'transition-all duration-[var(--transition-fast)]',
    'select-none whitespace-nowrap',
    'disabled:opacity-50 disabled:pointer-events-none',
    'focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    extra,
  ]
    .filter(Boolean)
    .join(' ');
}

/* ------------------------------------------------------------------ */

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', fullWidth = false, className = '', children } = props;
  const computed = cls(variant, size, fullWidth, className);

  if (props.as === 'a') {
    const { as: _, variant: _v, size: _s, fullWidth: _fw, className: _c, children: _ch, ...rest } = props;
    void _; void _v; void _s; void _fw; void _c; void _ch;
    return <a className={computed} {...rest}>{children}</a>;
  }

  const { as: _, variant: _v, size: _s, fullWidth: _fw, className: _c, children: _ch, ...rest } = props as AsButton;
  void _; void _v; void _s; void _fw; void _c; void _ch;
  return (
    <button className={computed} type={(rest as ButtonHTMLAttributes<HTMLButtonElement>).type ?? 'button'} {...rest}>
      {children}
    </button>
  );
}
