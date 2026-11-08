import type { Venture } from '@/types';

/*
  Ventures and entrepreneurial projects data.

  PLACEHOLDER DATA — replace with real venture details.
  Add the real name, tagline, description, website URL and founded year
  for each venture.
*/
export const ventures: Venture[] = [
  {
    id: 'venture-placeholder-1',
    name: 'Venture Name — [PLACEHOLDER]',
    tagline: 'Short tagline describing what this venture does — [PLACEHOLDER]',
    description:
      'A paragraph describing this venture, its mission, what it does and the problem it addresses. Replace with the real description.',
    status: 'Active',
    industry: 'Technology',
    logo: undefined,
    url: undefined,
    founded: '2023',
    featured: true,
  },
  {
    id: 'venture-placeholder-2',
    name: 'Venture Name — [PLACEHOLDER]',
    tagline: 'Short tagline — [PLACEHOLDER]',
    description:
      'Description of this venture. Replace with real content.',
    status: 'In Development',
    industry: 'Creative',
    logo: undefined,
    url: undefined,
    founded: undefined,
    featured: true,
  },
];

export const featuredVentures = ventures.filter((v) => v.featured);
