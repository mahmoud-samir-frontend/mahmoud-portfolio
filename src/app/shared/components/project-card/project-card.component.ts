import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../core/models/portfolio.models';
import { LocaleService } from '../../../core/services/locale.service';
import { IconComponent } from '../icon/icon.component';
import { ProjectVisualComponent } from '../project-visual/project-visual.component';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, IconComponent, ProjectVisualComponent],
  template: `
    <article class="project-card">
      @if (project().imageUrl; as imageUrl) {
        <figure class="project-media">
          <img [src]="imageUrl" [alt]="project().imageAlt ?? project().title" loading="lazy" />
          <figcaption>{{ project().imageCaption ?? locale.copy().projectCard.verifiedInterface }}</figcaption>
        </figure>
      } @else {
        <app-project-visual [type]="project().visual" [label]="project().title" />
      }
      <div class="project-card-content">
        <div class="project-meta">
          <span>{{ number() }}</span><p>{{ project().eyebrow }}</p>
        </div>
        <h3>{{ project().title }}</h3>
        <p>{{ project().summary }}</p>
        <div class="tech-list" [attr.aria-label]="locale.copy().projectCard.technologiesAria">
          @for (tech of project().technologies; track tech) { <span>{{ tech }}</span> }
        </div>
        <div class="project-actions">
          <a class="text-link" [routerLink]="['/projects', project().slug]">{{ locale.copy().projectCard.viewCaseStudy }} <app-icon name="arrow" /></a>
          @if (project().githubUrl) {
            <a class="icon-link" [href]="project().githubUrl" target="_blank" rel="noreferrer" [attr.aria-label]="locale.copy().projectCard.githubAria"><app-icon name="github" /></a>
          }
          @if (project().liveUrl) {
            <a class="icon-link" [href]="project().liveUrl" target="_blank" rel="noreferrer" [attr.aria-label]="locale.copy().projectCard.liveAria"><app-icon name="external" /></a>
          }
        </div>
      </div>
    </article>
  `,
})
export class ProjectCardComponent {
  protected readonly locale = inject(LocaleService);
  readonly project = input.required<Project>();
  readonly number = input.required<string>();
}
