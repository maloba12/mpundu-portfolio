import type { Insight } from '@/types';

/*
  Insights — professional writing, perspectives and commentary.

  PLACEHOLDER DATA — replace with real articles when ready.
  The slug field is used to generate the URL: /insights/:slug
  readingTime is in minutes; estimate ~200 words per minute.
*/
export const insights: Insight[] = [
  {
    id: 'insight-placeholder-1',
    title: 'Insight Title — [PLACEHOLDER]',
    slug: 'insight-title-placeholder-1',
    excerpt:
      'A one or two sentence summary of this insight piece. Replace with the real excerpt when the article is written.',
    tags: ['Technology', 'Development'],
    publishedDate: '2026-10-01',
    readingTime: 5,
    featured: true,
    coverImage: undefined,
    coverImageAlt: undefined,
  },
  {
    id: 'insight-placeholder-2',
    title: 'Insight Title — [PLACEHOLDER]',
    slug: 'insight-title-placeholder-2',
    excerpt:
      'A one or two sentence summary of this insight piece. Replace with the real excerpt.',
    tags: ['Design', 'Creative'],
    publishedDate: '2026-09-15',
    readingTime: 4,
    featured: true,
    coverImage: undefined,
    coverImageAlt: undefined,
  },
  {
    id: 'insight-placeholder-3',
    title: 'Insight Title — [PLACEHOLDER]',
    slug: 'insight-title-placeholder-3',
    excerpt:
      'A one or two sentence summary of this insight piece. Replace with the real excerpt.',
    tags: ['Entrepreneurship'],
    publishedDate: '2026-08-20',
    readingTime: 6,
    featured: false,
    coverImage: undefined,
    coverImageAlt: undefined,
  },
];

export const featuredInsights = insights.filter((i) => i.featured);
