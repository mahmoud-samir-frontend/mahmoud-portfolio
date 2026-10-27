import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../core/models/portfolio.models';
import { IconComponent } from '../icon/icon.component';
import { ProjectVisualComponent } from '../project-visual/project-visual.component';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, IconComponent, ProjectVisualComponent],
  template: `
    <article class="project-card">
      <app-project-visual [type]="project().visual" [label]="project().title" />
      <div class="project-card-content">
        <div class="project-meta">
          <span>{{ number() }}</span><p>{{ project().eyebrow }}</p>
        </div>
        <h3>{{ project().title }}</h3>
        <p>{{ project().summary }}</p>
        <div class="tech-list" aria-label="Technologies used">
          @for (tech of project().technologies; track tech) { <span>{{ tech }}</span> }
        </div>
        <div class="project-actions">
          <a class="text-link" [routerLink]="['/projects', project().slug]">View case study <app-icon name="arrow" /></a>
          @if (project().githubUrl) {
            <a class="icon-link" [href]="project().githubUrl" target="_blank" rel="noreferrer" aria-label="View project on GitHub"><app-icon name="github" /></a>
          }
          @if (project().liveUrl) {
            <a class="icon-link" [href]="project().liveUrl" target="_blank" rel="noreferrer" aria-label="Open live project"><app-icon name="external" /></a>
          }
        </div>
      </div>
    </article>
  `,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
  readonly number = input.required<string>();
}
