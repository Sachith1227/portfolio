export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'connect', label: 'Connect' },
] as const

export type SectionId = (typeof navigation)[number]['id']

export const githubUrl = 'https://github.com/Sachith1227'

// Verified against public repository READMEs and dependency files on 14 November 2026.
export const projects = [
  {
    id: 'roadrescue',
    number: '01',
    category: 'Web',
    title: 'RoadRescue',
    subtitle: 'A little peace of mind. A lot of engineering.',
    description:
      'A full-stack roadside assistance platform connecting stranded drivers with nearby mechanics. Location sharing, route estimates, and request tracking bring the entire rescue flow together.',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma'],
    highlights: [
      'GPS & route mapping',
      'Driver / mechanic roles',
      'JWT & Google sign-in',
    ],
    repository: `${githubUrl}/vehicle-breakdown-assistance`,
    demo: 'https://vehicle-breakdown-assistance-sachith.vercel.app',
  },
  {
    id: 'spendsmart',
    number: '02',
    category: 'Mobile',
    title: 'SpendSmart',
    subtitle: 'Making everyday money make sense.',
    description:
      'A personal finance app for tracking income and expenses, setting budgets and savings goals, and understanding spending. Built with per-user cloud sync and offline support.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore'],
    highlights: ['Budgets & savings goals', 'Spending analytics', 'CSV export'],
    repository: `${githubUrl}/spendsmart`,
    demo: null,
  },
  {
    id: 'volleyball',
    number: '03',
    category: 'Games',
    title: 'Beach Volleyball Mini',
    subtitle: 'A small game with a playful side.',
    description:
      'A 2D beach volleyball game with a computer opponent and local two-player mode. Adjustable difficulty, player skins, courts, and sound settings make every match your own.',
    tags: ['Python', 'pygame-ce', 'Game development'],
    highlights: [
      'Single & local multiplayer',
      '3 CPU difficulty levels',
      'Customisable game settings',
    ],
    repository: `${githubUrl}/beach-volleyball-mini`,
    demo: null,
  },
] as const

export const stack = [
  {
    icon: 'layers',
    title: 'Frontend',
    file: 'interface.tsx',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router'],
    note: 'Responsive interfaces, from the first component to the final detail.',
  },
  {
    icon: 'database',
    title: 'Backend & data',
    file: 'server.ts',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT'],
    note: 'APIs, authentication, and the data behind the experience.',
  },
  {
    icon: 'phone',
    title: 'Mobile',
    file: 'main.dart',
    items: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore'],
    note: 'Cross-platform apps with authentication and cloud-synced data.',
  },
  {
    icon: 'code',
    title: 'Beyond the browser',
    file: 'main.py',
    items: ['Python', 'pygame-ce', 'Java', 'Git', 'GitHub'],
    note: 'Games, programming fundamentals, and learning through version control.',
  },
] as const

export const milestones = [
  {
    date: '2023',
    title: 'The first commit.',
    detail: 'Joined GitHub and started exploring version control.',
    command: 'git init',
    link: githubUrl,
  },
  {
    date: '2025 — 2026',
    title: 'Learning through play.',
    detail:
      'Exploring Python game development and Java / Android fundamentals.',
    command: 'python main.py',
    link: `${githubUrl}/beach-volleyball-mini`,
  },
  {
    date: '2026',
    title: 'Connecting the pieces.',
    detail:
      'Building across the stack with RoadRescue and bringing personal finance to mobile with SpendSmart.',
    command: 'npm run build',
    link: `${githubUrl}/vehicle-breakdown-assistance`,
  },
] as const

export type Project = (typeof projects)[number]
