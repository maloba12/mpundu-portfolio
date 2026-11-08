import type { Project } from '@/types';

/*
  Software development projects.

  PLACEHOLDER DATA — replace with real project details.
  Fields marked [PLACEHOLDER] need to be updated by the developer.
  Do not add GitHub or live URLs until the actual repositories
  and deployments exist.
*/
export const projects: Project[] = [
  {
    id: 'project-placeholder-1',
    title: 'Project Title — [PLACEHOLDER]',
    description:
      'A brief one- or two-sentence description of this project, what problem it solves and who it is for. Replace with the real description.',
    category: 'Web Development',
    status: 'Completed',
    technologies: ['TypeScript', 'React', 'Node.js'],
    image: undefined,
    imageAlt: 'Project screenshot — [PLACEHOLDER]',
    githubUrl: undefined,
    liveUrl: undefined,
    featured: true,
    startDate: undefined,
    endDate: undefined,
  },
  {
    id: 'project-placeholder-2',
    title: 'Project Title — [PLACEHOLDER]',
    description:
      'A brief one- or two-sentence description of this project. Replace with the real description.',
    category: 'Tool',
    status: 'In Progress',
    technologies: ['Python'],
    image: undefined,
    imageAlt: 'Project screenshot — [PLACEHOLDER]',
    githubUrl: undefined,
    liveUrl: undefined,
    featured: true,
    startDate: undefined,
    endDate: undefined,
  },
  {
    id: 'project-placeholder-3',
    title: 'Project Title — [PLACEHOLDER]',
    description:
      'A brief one- or two-sentence description of this project. Replace with the real description.',
    category: 'Web Development',
    status: 'Concept',
    technologies: ['TypeScript', 'React'],
    image: undefined,
    imageAlt: 'Project screenshot — [PLACEHOLDER]',
    githubUrl: undefined,
    liveUrl: undefined,
    featured: false,
    startDate: undefined,
    endDate: undefined,
  },
];

/** Returns only featured projects, sorted by status priority. */
export const featuredProjects = projects.filter((p) => p.featured);
