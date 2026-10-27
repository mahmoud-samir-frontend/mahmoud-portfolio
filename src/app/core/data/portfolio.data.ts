import { Project, SkillGroup, SocialLink } from '../models/portfolio.models';

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/mahmoudsamir-design', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mahmoud-samir587766247', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:Mahmoud.samirr148@gmail.com', icon: 'mail' },
];

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    title: 'Frontend',
    index: '01',
    skills: ['Angular 14–20', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'SCSS'],
  },
  { title: 'Frameworks', index: '02', skills: ['Angular', 'Ionic', 'Bootstrap'] },
  {
    title: 'Engineering',
    index: '03',
    skills: ['REST APIs', 'RxJS', 'Responsive Design', 'Component Architecture'],
  },
  { title: 'Tools', index: '04', skills: ['Git', 'GitHub', 'Browser DevTools'] },
];

export const PROJECTS: readonly Project[] = [
  {
    slug: 'novadash',
    title: 'NovaDash',
    eyebrow: 'Personal concept · Angular admin template',
    summary:
      'A portfolio concept for a modern SaaS administration experience, designed around reusable components, clear analytics, responsive layouts, and theme-ready foundations.',
    context:
      'NovaDash is presented as a design and architecture concept. It demonstrates how I structure dense operational information without claiming a separately published product or repository.',
    role: 'Frontend architecture, interface design, and Angular implementation concept',
    contributions: [
      'Defined a scalable dashboard information architecture',
      'Designed responsive navigation, analytics, and administration patterns',
      'Planned reusable components and theme-ready visual tokens',
    ],
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Chart.js'],
    visual: 'analytics',
    confidential: false,
  },
  {
    slug: 'sareb-platinum',
    title: 'Sareb Platinum',
    eyebrow: 'Professional project · Fleet tracking',
    summary:
      'A GPS fleet-management platform for monitoring vehicles, reviewing trips, and understanding operational performance in real time.',
    context:
      'Professional work completed at Fuinco. The portfolio describes my contribution at a safe, high level and does not reproduce proprietary screens, code, customer records, or endpoints.',
    role: 'Frontend Developer',
    contributions: [
      'Developed vehicle-tracking dashboards with real-time data updates',
      'Implemented fuel and generator monitoring interfaces',
      'Built trip-history views and analytical reporting components',
      'Integrated REST APIs with reusable Angular and Ionic UI patterns',
    ],
    technologies: ['Angular', 'Ionic', 'TypeScript', 'REST APIs'],
    visual: 'map',
    confidential: true,
  },
  {
    slug: 'skai-environmental-intelligence',
    title: 'SKAI Environmental Intelligence',
    eyebrow: 'Professional project · Environmental monitoring',
    summary:
      'A unified monitoring platform that makes sensor readings, water usage, and operational data easier to understand and act on.',
    context:
      'Professional work completed at Fuinco. Visuals on this site are illustrative abstractions, not screenshots of the production platform.',
    role: 'Frontend Developer',
    contributions: [
      'Developed dashboards for sensor and environmental data',
      'Implemented tank-level and flow-meter visualizations',
      'Built analytical reporting interfaces',
      'Connected data-driven views to REST API services',
    ],
    technologies: ['Angular', 'Ionic', 'TypeScript', 'REST APIs'],
    visual: 'sensors',
    confidential: true,
  },
  {
    slug: 'food-drugs-logistics',
    title: 'Food & Drugs Logistics',
    eyebrow: 'Professional project · Logistics monitoring',
    summary:
      'A logistics interface for tracking shipments and surfacing transport conditions that matter to time-sensitive operations.',
    context:
      'Professional work completed at Fuinco. Details are limited to the responsibilities already documented in my CV.',
    role: 'Frontend Developer',
    contributions: [
      'Implemented geofence and overspeed alert interfaces',
      'Built vehicle-status and sensor-monitoring dashboards',
      'Developed logistics analysis and reporting views',
    ],
    technologies: ['Angular', 'Ionic', 'TypeScript', 'REST APIs'],
    visual: 'logistics',
    confidential: true,
  },
  {
    slug: 'saudi-taxi-platform',
    title: 'Saudi Taxi Platform',
    eyebrow: 'Professional project · Transportation',
    summary:
      'An operations interface for managing drivers, vehicles, ride activity, and trip information across a transportation platform.',
    context:
      'Professional work completed at Fuinco. The case study intentionally excludes private product and customer information.',
    role: 'Frontend Developer',
    contributions: [
      'Developed driver and vehicle management modules',
      'Implemented trip-history and reporting features',
      'Built UI components for ride booking and monitoring',
    ],
    technologies: ['Angular', 'Ionic', 'TypeScript'],
    visual: 'transport',
    confidential: true,
  },
];
