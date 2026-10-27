export type ProjectVisual = 'analytics' | 'map' | 'sensors' | 'logistics' | 'transport';

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly eyebrow: string;
  readonly summary: string;
  readonly context: string;
  readonly role: string;
  readonly contributions: readonly string[];
  readonly technologies: readonly string[];
  readonly visual: ProjectVisual;
  readonly confidential: boolean;
  readonly githubUrl?: string;
  readonly liveUrl?: string;
}

export interface SkillGroup {
  readonly title: string;
  readonly index: string;
  readonly skills: readonly string[];
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: 'github' | 'linkedin' | 'mail';
}
