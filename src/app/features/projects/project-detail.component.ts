import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { PROJECTS } from '../../core/data/portfolio.data';
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
            <a class="back-link" routerLink="/" fragment="projects"><app-icon name="arrow" />Back to selected work</a>
            <p class="eyebrow"><span>Case study</span>{{ project.eyebrow }}</p>
            <h1>{{ project.title }}</h1>
            <p class="case-summary">{{ project.summary }}</p>
            <div class="case-meta">
              <div><small>Role</small><strong>{{ project.role }}</strong></div>
              <div><small>Focus</small><strong>{{ project.technologies.slice(0, 3).join(' · ') }}</strong></div>
              <div><small>Access</small><strong>{{ project.confidential ? 'Private professional product' : 'Portfolio concept' }}</strong></div>
            </div>
          </div>
        </header>

        <section class="container case-visual-wrap">
          <app-project-visual [type]="project.visual" [label]="project.title" />
        </section>

        <section class="section case-content">
          <div class="container case-grid">
            <div>
              <p class="eyebrow"><span>01</span>Context</p>
              <h2>Turning operational complexity into a usable interface.</h2>
            </div>
            <div class="case-prose">
              <p>{{ project.context }}</p>
              @if (project.confidential) {
                <div class="privacy-note"><app-icon name="check" /><p><strong>Confidentiality respected.</strong> The interface visual is an original abstraction created for this portfolio. It contains no production screenshots, customer data, source code, or API details.</p></div>
              }
            </div>
          </div>
          <div class="container contribution-block">
            <p class="eyebrow"><span>02</span>My contribution</p>
            <div class="contribution-grid">
              @for (item of project.contributions; track item; let index = $index) {
                <article><span>{{ (index + 1).toString().padStart(2, '0') }}</span><p>{{ item }}</p></article>
              }
            </div>
          </div>
          <div class="container case-next">
            <p>Interested in how I approach frontend systems?</p>
            <a class="button button-primary" href="mailto:Mahmoud.samirr148@gmail.com">Let's talk <app-icon name="arrow" /></a>
          </div>
        </section>
      </article>
    } @else {
      <section class="section not-found container"><p class="eyebrow">404 · Case study</p><h1>Project not found.</h1><a class="button button-primary" routerLink="/">Return home</a></section>
    }
  `,
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug'))));
  protected readonly project = computed(() => PROJECTS.find((item) => item.slug === this.slug()));

  constructor() {
    effect(() => {
      const project = this.project();
      if (project) {
        this.title.setTitle(`${project.title} Case Study — Mahmoud Samir`);
        this.meta.updateTag({ name: 'description', content: project.summary });
      }
    });
  }
}
