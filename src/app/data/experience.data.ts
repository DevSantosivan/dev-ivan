export interface Experience {
  number: string;
  year: string;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export const EXPERIENCE_DATA: Experience[] = [
  {
    number: '01',
    year: '2023 — PRESENT',
    type: 'FREELANCE',
    title: 'FREELANCE',
    subtitle: 'SOFTWARE DEVELOPER',
    description:
      'Building custom web and mobile applications for different projects, working directly with clients to understand requirements, develop solutions and deliver functional digital products.',
    tags: [
      'WEB DEVELOPMENT',
      'MOBILE DEVELOPMENT',
      'FULL-STACK',
      'CLIENT PROJECTS',
    ],
  },

  {
    number: '02',
    year: '2025 — PRESENT',
    type: 'DEVELOPMENT',
    title: 'FRONT-END',
    subtitle: 'DEVELOPER',
    description:
      'Developing modern and responsive interfaces using Angular and React, with a focus on reusable components, animations, performance and user experience.',
    tags: ['ANGULAR', 'REACT', 'TYPESCRIPT', 'UI / UX'],
  },

  {
    number: '03',
    year: 'OJT',
    type: 'PROFESSIONAL TRAINING',
    title: 'ON-THE-JOB',
    subtitle: 'TRAINING',
    description:
      'Completed professional training at L&S Cable TV, Inc., gaining hands-on experience in office documentation, system development tasks, team collaboration, meetings and technical workflows.',
    tags: [
      'SYSTEM DEVELOPMENT',
      'DOCUMENTATION',
      'TEAM COLLABORATION',
      'TECHNICAL TRAINING',
    ],
  },

  {
    number: '04',
    year: '2022 — 2026',
    type: 'EDUCATION',
    title: 'BACHELOR OF',
    subtitle: 'INFORMATION TECHNOLOGY',
    description:
      'Completed a Bachelor of Science in Information Technology while developing multiple academic and real-world projects involving web development, mobile applications, databases and software systems.',
    tags: [
      'SOFTWARE DEVELOPMENT',
      'DATABASES',
      'WEB DEVELOPMENT',
      'MOBILE DEVELOPMENT',
    ],
  },
];
