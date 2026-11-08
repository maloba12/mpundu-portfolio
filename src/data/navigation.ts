import type { NavItem } from '@/types';

/*
  Primary navigation items.
  "Work" acts as a parent for Software Development and Graphic Design —
  the Header component will render its children as a dropdown on desktop
  and as nested items on mobile.
*/
export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Work',
    href: '/work',
    hasChildren: true,
    children: [
      { label: 'Software Development', href: '/work/software' },
      { label: 'Graphic Design', href: '/work/design' },
    ],
  },
  { label: 'Ventures', href: '/ventures' },
  { label: 'Experience', href: '/experience' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];
