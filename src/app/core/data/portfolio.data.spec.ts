import { PROJECTS, SKILL_GROUPS, SOCIAL_LINKS } from './portfolio.data';
import { ARABIC_PROJECTS, PORTFOLIO_COPY, PROJECTS_BY_LANGUAGE } from './localization.data';

describe('portfolio data', () => {
  it('uses unique, route-safe project slugs', () => {
    const slugs = PROJECTS.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(PROJECTS.length);
    expect(slugs.every((slug) => /^[a-z0-9-]+$/.test(slug))).toBeTrue();
  });

  it('does not expose links for confidential projects', () => {
    const confidentialProjects = PROJECTS.filter((project) => project.confidential);
    expect(confidentialProjects.length).toBeGreaterThan(0);
    expect(confidentialProjects.every((project) => !project.githubUrl && !project.liveUrl)).toBeTrue();
  });

  it('lists NovaDash and the Fuinco Admin Dashboard as one project', () => {
    expect(PROJECTS.filter((project) => project.slug === 'novadash').length).toBe(1);
    expect(PROJECTS.some((project) => project.slug === 'fuinco-admin-dashboard')).toBeFalse();
  });

  it('keeps every skill and social group populated', () => {
    expect(SKILL_GROUPS.every((group) => group.skills.length > 0)).toBeTrue();
    expect(SOCIAL_LINKS.every((link) => link.href.length > 0)).toBeTrue();
  });

  it('keeps Arabic project content aligned with the English routes', () => {
    expect(ARABIC_PROJECTS.length).toBe(PROJECTS.length);
    expect(ARABIC_PROJECTS.map((project) => project.slug)).toEqual(
      PROJECTS.map((project) => project.slug),
    );
    expect(PROJECTS_BY_LANGUAGE.ar.every((project) => project.summary.length > 0)).toBeTrue();
  });

  it('provides complete navigation and SEO copy in both languages', () => {
    expect(PORTFOLIO_COPY.en.nav.links.length).toBe(PORTFOLIO_COPY.ar.nav.links.length);
    expect(PORTFOLIO_COPY.en.seo.description.length).toBeGreaterThan(0);
    expect(PORTFOLIO_COPY.ar.seo.description.length).toBeGreaterThan(0);
  });
});
