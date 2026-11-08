import type { WorkExperience, Education, Certification } from '@/types';

/*
  Work experience, education and certifications data.

  PLACEHOLDER DATA — replace with real details.
  Dates use ISO format: YYYY-MM or YYYY-MM-DD.
  Leave endDate undefined for a current/ongoing role.
*/

export const workExperience: WorkExperience[] = [
  {
    id: 'exp-placeholder-1',
    company: 'Company Name — [PLACEHOLDER]',
    role: 'Job Title — [PLACEHOLDER]',
    companyDescription: 'Brief description of the company — [PLACEHOLDER]',
    highlights: [
      'Key responsibility or achievement — [PLACEHOLDER]',
      'Key responsibility or achievement — [PLACEHOLDER]',
      'Key responsibility or achievement — [PLACEHOLDER]',
    ],
    startDate: '2023-01',
    endDate: undefined, // Current role — leave undefined
    location: 'Location — [PLACEHOLDER]',
    workType: 'Hybrid',
    technologies: ['TypeScript', 'React'],
  },
  {
    id: 'exp-placeholder-2',
    company: 'Company Name — [PLACEHOLDER]',
    role: 'Job Title — [PLACEHOLDER]',
    companyDescription: 'Brief description of the company — [PLACEHOLDER]',
    highlights: [
      'Key responsibility or achievement — [PLACEHOLDER]',
      'Key responsibility or achievement — [PLACEHOLDER]',
    ],
    startDate: '2021-06',
    endDate: '2022-12',
    location: 'Location — [PLACEHOLDER]',
    workType: 'On-site',
    technologies: [],
  },
];

export const education: Education[] = [
  {
    id: 'edu-placeholder-1',
    institution: 'Institution Name — [PLACEHOLDER]',
    qualification: 'Degree / Qualification — [PLACEHOLDER]',
    field: 'Field of Study — [PLACEHOLDER]',
    startYear: 2018,
    endYear: 2022,
    description: 'Brief description — [PLACEHOLDER]',
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-placeholder-1',
    title: 'Certification Title — [PLACEHOLDER]',
    issuingOrganisation: 'Issuing Organisation — [PLACEHOLDER]',
    issueDate: '2024-01',
    credentialUrl: undefined,
  },
];
