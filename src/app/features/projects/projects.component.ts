import { Component } from '@angular/core';
import { PROJECTS } from '../../core/data/portfolio.data';
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
          eyebrow="Selected work"
          title="Products shaped around real operational needs."
          description="A selection of professional contributions and one clearly labeled personal dashboard concept. Employer work is described without exposing proprietary implementation details."
        />
        <div class="projects-list">
          @for (project of projects; track project.slug; let index = $index) {
            <app-project-card [project]="project" [number]="(index + 1).toString().padStart(2, '0')" />
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  protected readonly projects = PROJECTS;
}
