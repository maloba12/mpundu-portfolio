/*
  motion.ts
  =========
  Shared Framer Motion variant factories.

  The `ease` value must be typed as a tuple [number, number, number, number]
  (cubic-bezier control points) for Framer Motion v14's strict Easing type.
  Using `as const` on the array achieves this — TypeScript infers the
  literal tuple type rather than widening to number[].

  All animation variants in the project import from here to ensure
  consistency and avoid repeating the type workaround in every component.
*/

import type { Variants } from 'framer-motion';

/** Cubic-bezier easing matching a fast-out/slow-in curve */
const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Fade up — element fades in while moving up from y offset.
 * @param delay - optional delay in seconds
 */
export function fadeUpVariants(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease, delay },
    },
  };
}

/**
 * Staggered fade up — visible state is a function receiving the custom
 * prop (stagger index) so that parent sets `custom={i}` on the element.
 */
export const staggerFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease, delay: i * 0.1 },
  }),
};

/**
 * Fade in from right — used for the hero image column.
 */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease, delay: 0.2 },
  },
};

/**
 * Subtle fade up with a smaller offset — for tighter sections.
 */
export const subtleFadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease, delay: i * 0.08 },
  }),
};
