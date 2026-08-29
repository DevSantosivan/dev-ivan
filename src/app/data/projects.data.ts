export interface Project {
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    number: '01',
    category: 'PERSONAL FINANCE',
    title: 'BUDGET',
    subtitle: 'COACH',
    description:
      'A smart personal budgeting app designed to help users plan their money, protect essential funds and track daily spending with confidence.',
    image: '/images/budget-coach.png',
    technologies: ['Angular', 'TypeScript', 'SCSS'],
    url: 'https://budget-coach-nine.vercel.app/',
  },

  {
    number: '02',
    category: 'FULL-STACK DEVELOPMENT',
    title: 'HOTEL BOOKING',
    subtitle: 'SYSTEM',
    description:
      'A modern hotel reservation platform built for seamless booking, room management and digital payments.',
    image: '/images/hotels.jfif',
    technologies: ['Angular', 'ASP.NET', 'Supabase'],
    url: 'https://your-hotel-project.vercel.app/',
  },

  {
    number: '03',
    category: 'POS / INVENTORY',
    title: 'HIT &',
    subtitle: 'PUFF',
    description:
      'A business management platform combining point-of-sale operations, inventory and reporting.',
    image: '/images/hap.png',
    technologies: ['Angular', 'Supabase', 'TypeScript'],
    url: 'https://hitandpuff.vercel.app/#/login',
  },

  {
    number: '04',
    category: 'MOBILE / EMERGENCY',
    title: 'SWIFT',
    subtitle: 'AID',
    description:
      'An emergency assistance application designed to connect people with fast-response services.',
    image: '/images/switf.png',
    technologies: ['Flutter', 'Firebase', 'Maps'],
    url: 'https://press-for-help.vercel.app/',
  },

  {
    number: '05',
    category: 'WEB DEVELOPMENT',
    title: 'SKILL',
    subtitle: 'LINK',
    description:
      'A platform for connecting skilled professionals with clients seeking their services, featuring service listings and client reviews.',
    image: '/images/skillink.png',
    technologies: [
      'React',
      'TailwindCSS',
      'Node.js',
      'Supabase',
      'Firebase',
      'TypeScript',
      'Leaflet',
    ],
    url: 'https://skilllink-app-lilac.vercel.app/',
  },

  {
    number: '06',
    category: 'PORTFOLIO / SERVICES',
    title: "TIKOY'S",
    subtitle: 'PILOT SERVICE',
    description:
      'Portfolio site for ML account boosting and coaching with service listings and client testimonials.',
    image: '/images/tikoy.png',
    technologies: ['HTML/CSS', 'Bootstrap', 'JavaScript'],
    url: 'https://tikoyspilot.vercel.app/',
  },

  {
    number: '07',
    category: 'FARM MANAGEMENT',
    title: 'TRICODERMA',
    subtitle: 'MANAGEMENT',
    description:
      'Bilingual platform for farmers and admins to manage farm data and app activities in real-time.',
    image: '/images/trico.png',
    technologies: [
      'Flutter',
      'Supabase',
      'Angular',
      'TypeScript',
      'TailwindCSS',
    ],
    url: 'https://trichoderma-management.vercel.app/',
  },

  {
    number: '08',
    category: 'AGRICULTURE / ANALYTICS',
    title: 'FARMER',
    subtitle: 'TRACKER',
    description:
      'A farm management platform for tracking expenses and income with an admin analytics dashboard.',
    image: '/images/gotreacker.jfif',
    technologies: ['Angular', 'Firebase', 'TypeScript'],
    url: 'https://farmer-go-tracker.vercel.app/',
  },

  {
    number: '09',
    category: 'MOBILE / FARM MANAGEMENT',
    title: 'AGRYSNC',
    subtitle: 'FARM APP',
    description:
      'A farm management application where farmers report issues, technicians record them, and admins analyze all submitted data.',
    image: '/images/image1.png',
    technologies: ['Flutter', 'Supabase', 'Node.js'],
    url: 'https://appetize.io/app/b_g77exqiz63nnnbjdnu77umlc4y',
  },

  {
    number: '10',
    category: 'PROJECT MANAGEMENT',
    title: 'PROJECT',
    subtitle: 'MONITORING',
    description:
      'A web-based project monitoring system for tracking project progress and tasks.',
    image: '/images/project-monitoring.png',
    technologies: ['React', 'TailwindCSS'],
    url: 'https://project-monitoring-system-navy.vercel.app/dashboard',
  },

  {
    number: '11',
    category: 'MOBILE / TRANSPORTATION',
    title: 'G-',
    subtitle: 'TRIKE',
    description:
      'A tricycle ride-hailing UI concept with live map tracking and location-based functionality.',
    image: '/images/trycle.png',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'Leaflet'],
    url: 'https://appetize.io/app/b_dpdodbqztq5fznh4nn52tsxwky',
  },

  {
    number: '12',
    category: 'PORTFOLIO / OJT',
    title: 'E-',
    subtitle: 'PORTFOLIO',
    description:
      'An OJT portfolio evaluation and performance documentation platform based on assigned tasks, responsibilities, and overall training experience.',
    image: '/images/mark.png',
    technologies: ['React'],
    url: 'https://mark-e-portfolio.vercel.app/',
  },
];
