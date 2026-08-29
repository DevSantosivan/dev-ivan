export interface Skill {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export const SKILLS_DATA: Skill[] = [
  {
    number: '01',
    icon: 'bx-code-alt',
    title: 'WEB DEVELOPMENT',
    description:
      'Modern, responsive and scalable web applications built around real-world requirements.',
  },

  {
    number: '02',
    icon: 'bx-mobile-alt',
    title: 'MOBILE DEVELOPMENT',
    description:
      'Cross-platform mobile experiences with Flutter and native integrations.',
  },

  {
    number: '03',
    icon: 'bx-server',
    title: 'BACKEND DEVELOPMENT',
    description: 'REST APIs, databases, authentication and business logic.',
  },

  {
    number: '04',
    icon: 'bx-brain',
    title: 'AI INTEGRATION',
    description:
      'AI-powered features, API integrations, automation and intelligent workflows.',
  },
];
