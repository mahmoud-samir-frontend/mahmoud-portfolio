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
    slug: 'scoutifai-sports-management',
    title: 'SCOUTIFAI',
    eyebrow: 'Full product · Sports performance management',
    summary:
      'A complete role-based sports operations platform for managing players, teams, training, matches, wellness, medical records, and performance analytics.',
    context:
      'A full Angular product implementation with responsive administration workflows, role-specific navigation, bilingual presentation, reusable entity management, and documented demo accounts. The screenshot was captured from the locally running application with its built-in demo data.',
    role: 'Frontend Developer · Full product implementation',
    contributions: [
      'Built a responsive role-based administration workspace in Angular',
      'Implemented player, team, training, match, wellness, and medical workflows',
      'Created reusable data-management components and permission-aware navigation',
      'Added English and Arabic presentation with local and live data modes',
    ],
    technologies: ['Angular 19', 'TypeScript', 'RxJS', 'SCSS', 'i18n'],
    visual: 'analytics',
    confidential: false,
    imageUrl: 'images/projects/scoutifai-dashboard.png',
    imageAlt: 'SCOUTIFAI sports administration and performance dashboard',
    imageCaption: 'Running Angular product · Built-in sports operations demo data',
    accessLabel: 'Local full-product implementation',
  },
  {
    slug: 'novadash',
    title: 'NovaDash',
    eyebrow: 'Full-stack project · Fuinco content management',
    summary:
      'A bilingual control center for managing website content, calls to action, feature sections, localization, and synchronized route information.',
    context:
      'NovaDash is the Fuinco Admin Dashboard. I designed and built this complete project end to end: a React and TypeScript administration frontend connected to a FastAPI and SQLite backend with authentication, persisted content, and structured editing workflows.',
    role: 'Full-stack Developer · End-to-end ownership',
    contributions: [
      'Architected and implemented the complete frontend and backend workflow',
      'Built authenticated content editing with persistent SQLite storage',
      'Implemented English and Arabic content controls plus light and dark themes',
      'Created structured editors for site, hero, features, statistics, and routes',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'FastAPI', 'SQLite'],
    visual: 'analytics',
    confidential: true,
    imageUrl: 'images/projects/fuinco-admin-dashboard.png',
    imageAlt: 'NovaDash Fuinco administration hero-content editor',
    imageCaption: 'Running NovaDash full-stack product · Complete end-to-end implementation',
    privacyNote:
      'This authenticated editor view contains managed website content only. Login credentials, authentication tokens, backend source, and database records are not published.',
    accessLabel: 'Private full-stack project',
  },
  {
    slug: 'sareb-platinum',
    title: 'Sareb Platinum',
    eyebrow: 'Professional project · Fleet tracking',
    summary:
      'A GPS fleet-management platform for monitoring vehicles, reviewing trips, and understanding operational performance in real time.',
    context:
      'Professional work completed at Fuinco. The screenshot was captured from an authenticated local build and sanitized to obscure operational details; no source code, credentials, customer records, or endpoints are published.',
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
    imageUrl: 'images/projects/sareb-platinum-dashboard.png',
    imageAlt: 'Sanitized Sareb Platinum fleet-management dashboard',
    imageCaption: 'Authenticated product interface · Sensitive operational data redacted',
    privacyNote:
      'Operational identifiers are redacted, and no credentials, customer records, source code, or API details are published.',
  },
  {
    slug: 'skai-environmental-intelligence',
    title: 'SKAI Environmental Intelligence',
    eyebrow: 'Professional project · Environmental monitoring',
    summary:
      'A unified monitoring platform that makes sensor readings, water usage, and operational data easier to understand and act on.',
    context:
      'Professional work completed at Fuinco. The screenshot was captured from an authenticated local build in demo mode and contains no saved credentials, source code, or customer records.',
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
    imageUrl: 'images/projects/skai-dashboard.png',
    imageAlt: 'SKAI environmental intelligence interface showing an industrial monitoring model',
    imageCaption: 'Authenticated product interface · Demo monitoring environment',
    privacyNote:
      'The interface is shown in demo mode and contains no credentials, customer records, source code, or API details.',
  },
  {
    slug: 'food-drugs-logistics',
    title: 'Food & Drugs Logistics',
    eyebrow: 'Professional project · Logistics monitoring',
    summary:
      'A logistics interface for tracking shipments and surfacing transport conditions that matter to time-sensitive operations.',
    context:
      'Professional work completed at Fuinco. The screenshot was captured from an authenticated local build and shows the temperature and humidity monitoring grid with its real operational readings.',
    role: 'Frontend Developer',
    contributions: [
      'Implemented geofence and overspeed alert interfaces',
      'Built vehicle-status and sensor-monitoring dashboards',
      'Developed logistics analysis and reporting views',
    ],
    technologies: ['Angular', 'Ionic', 'TypeScript', 'REST APIs'],
    visual: 'logistics',
    confidential: true,
    imageUrl: 'images/projects/food-temperature-monitoring.png',
    imageAlt: 'Food and Drugs temperature and humidity monitoring interface with operational readings',
    imageCaption: 'Authenticated product interface · Real monitoring records',
    privacyNote:
      'Real monitoring values are shown with project-owner approval. Credentials, authentication data, source code, and API details are not published.',
  },
  {
    slug: 'saudi-taxi-platform',
    title: 'Saudi Taxi Platform',
    eyebrow: 'Professional project · Transportation',
    summary:
      'An operations interface for managing drivers, vehicles, ride activity, and trip information across a transportation platform.',
    context:
      'Professional work completed at Fuinco. The screenshot was captured from an authenticated local build and shows the Taxi Profile administration screen with real fare configuration records.',
    role: 'Frontend Developer',
    contributions: [
      'Developed driver and vehicle management modules',
      'Implemented trip-history and reporting features',
      'Built UI components for ride booking and monitoring',
    ],
    technologies: ['Angular', 'Ionic', 'TypeScript'],
    visual: 'transport',
    confidential: true,
    imageUrl: 'images/projects/taxi-profile-management.png',
    imageAlt: 'Saudi Taxi fare-profile management interface with configuration records',
    imageCaption: 'Authenticated product interface · Real fare configuration records',
    privacyNote:
      'Real fare configuration values are shown with project-owner approval. No driver identity, live vehicle location, credential, source code, or API detail is published.',
  },
];
