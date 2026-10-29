import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { LocaleService } from '../../core/services/locale.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ProjectVisualComponent } from '../../shared/components/project-visual/project-visual.component';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, IconComponent, ProjectVisualComponent],
  template: `
    @if (project(); as project) {
      <article class="case-study">
        <header class="case-hero section">
          <div class="container">
            <a class="back-link" routerLink="/" fragment="projects"><app-icon name="arrow" />{{ locale.copy().caseStudy.back }}</a>
            <p class="eyebrow"><span>{{ locale.copy().caseStudy.label }}</span>{{ project.eyebrow }}</p>
            <h1>{{ project.title }}</h1>
            <p class="case-summary">{{ project.summary }}</p>
            <div class="case-meta">
              <div><small>{{ locale.copy().caseStudy.role }}</small><strong>{{ project.role }}</strong></div>
              <div><small>{{ locale.copy().caseStudy.focus }}</small><strong>{{ project.technologies.slice(0, 3).join(' · ') }}</strong></div>
              <div><small>{{ locale.copy().caseStudy.access }}</small><strong>{{ project.accessLabel ?? (project.confidential ? locale.copy().caseStudy.privateProduct : locale.copy().caseStudy.portfolioConcept) }}</strong></div>
            </div>
          </div>
        </header>

        <section class="container case-visual-wrap">
          @if (project.imageUrl; as imageUrl) {
            <figure class="project-media case-project-media">
              <img [src]="imageUrl" [alt]="project.imageAlt ?? project.title" />
              <figcaption>{{ project.imageCaption ?? locale.copy().caseStudy.verifiedInterface }}</figcaption>
            </figure>
          } @else {
            <app-project-visual [type]="project.visual" [label]="project.title" />
          }
        </section>

        <section class="section case-content">
          <div class="container case-grid">
            <div>
              <p class="eyebrow"><span>01</span>{{ locale.copy().caseStudy.context }}</p>
              <h2>{{ locale.copy().caseStudy.contextTitle }}</h2>
            </div>
            <div class="case-prose">
              <p>{{ project.context }}</p>
              @if (project.confidential) {
                <div class="privacy-note"><app-icon name="check" /><p><strong>{{ locale.copy().caseStudy.confidentiality }}</strong> {{ project.privacyNote ?? locale.copy().caseStudy.confidentialityFallback }}</p></div>
              }
            </div>
          </div>
          <div class="container contribution-block">
            <p class="eyebrow"><span>02</span>{{ locale.copy().caseStudy.contribution }}</p>
            <div class="contribution-grid">
              @for (item of project.contributions; track item; let index = $index) {
                <article><span>{{ (index + 1).toString().padStart(2, '0') }}</span><p>{{ item }}</p></article>
              }
            </div>
          </div>
          <div class="container case-next">
            <p>{{ locale.copy().caseStudy.prompt }}</p>
            <a class="button button-primary" href="mailto:Mahmoud.samirr148@gmail.com">{{ locale.copy().caseStudy.letsTalk }} <app-icon name="arrow" /></a>
          </div>
        </section>
      </article>
    } @else {
      <section class="section not-found container"><p class="eyebrow">{{ locale.copy().caseStudy.notFoundLabel }}</p><h1>{{ locale.copy().caseStudy.notFound }}</h1><a class="button button-primary" routerLink="/">{{ locale.copy().caseStudy.returnHome }}</a></section>
    }
  `,
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  protected readonly locale = inject(LocaleService);
  private readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug'))));
  protected readonly project = computed(() => this.locale.projects().find((item) => item.slug === this.slug()));

  constructor() {
    effect(() => {
      const project = this.project();
      if (project) {
        this.title.setTitle(`${project.title} ${this.locale.copy().caseStudy.titleSuffix}`);
        this.meta.updateTag({ name: 'description', content: project.summary });
      }
    });
  }
}
