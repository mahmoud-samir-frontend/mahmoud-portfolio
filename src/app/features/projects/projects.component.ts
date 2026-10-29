import { Component, inject } from '@angular/core';
import { LocaleService } from '../../core/services/locale.service';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, SectionHeadingComponent],
  template: `
    <section id="projects" class="section projects-section">
      <div class="container">
        <app-section-heading
          index="03"
          [eyebrow]="locale.copy().projects.eyebrow"
          [title]="locale.copy().projects.title"
          [description]="locale.copy().projects.description"
        />
        <div class="projects-list">
          @for (project of locale.projects(); track project.slug; let index = $index) {
            <app-project-card [project]="project" [number]="(index + 1).toString().padStart(2, '0')" />
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  protected readonly locale = inject(LocaleService);
}
