import type { SkillGroup } from '@/types';

/*
  Skills and expertise data.
  Update this file as new skills are gained or categories change.
  The level field (1–5) is optional; omit it if you prefer not to
  display proficiency bars in the UI.
*/
export const skillGroups: SkillGroup[] = [
  {
    category: 'Software Development',
    skills: [
      { name: 'TypeScript', category: 'Software Development', level: 4 },
      { name: 'React', category: 'Software Development', level: 4 },
      { name: 'Node.js', category: 'Software Development', level: 4 },
      { name: 'Python', category: 'Software Development', level: 3 },
      { name: 'HTML & CSS', category: 'Software Development', level: 5 },
      { name: 'REST APIs', category: 'Software Development', level: 4 },
      { name: 'SQL', category: 'Software Development', level: 3 },
      { name: 'Git', category: 'Software Development', level: 4 },
    ],
  },
  {
    category: 'Design',
    skills: [
      { name: 'Adobe Illustrator', category: 'Design', level: 5 },
      { name: 'Adobe Photoshop', category: 'Design', level: 4 },
      { name: 'Figma', category: 'Design', level: 4 },
      { name: 'Brand Identity', category: 'Design', level: 5 },
      { name: 'Typography', category: 'Design', level: 4 },
      { name: 'Print Design', category: 'Design', level: 4 },
      { name: 'UI Design', category: 'Design', level: 4 },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Vite', category: 'Tools & Platforms' },
      { name: 'Tailwind CSS', category: 'Tools & Platforms' },
      { name: 'Linux', category: 'Tools & Platforms' },
      { name: 'Docker', category: 'Tools & Platforms' },
      { name: 'VS Code / Kiro', category: 'Tools & Platforms' },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Product Thinking', category: 'Soft Skills' },
      { name: 'Technical Communication', category: 'Soft Skills' },
      { name: 'Problem Solving', category: 'Soft Skills' },
      { name: 'Entrepreneurship', category: 'Soft Skills' },
      { name: 'Mentorship', category: 'Soft Skills' },
    ],
  },
];
