import { Component } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-experience',
  imports: [IconComponent, SectionHeadingComponent],
  template: `
    <section id="experience" class="section experience-section">
      <div class="container">
        <app-section-heading
          index="02"
          eyebrow="Experience"
          title="Building business-critical products at Fuinco."
          description="Frontend ownership across responsive web apps, mobile experiences, tracking systems, and reporting tools."
        />
        <article class="experience-card">
          <div class="experience-rail"><span></span></div>
          <header>
            <div>
              <p class="eyebrow">August 2023 — Present</p>
              <h3>Frontend Developer</h3>
              <p class="company">Fuinco · Cairo, Egypt</p>
            </div>
            <span class="employment-badge"><i></i>Current role</span>
          </header>
          <div class="experience-body">
            <p>I develop and maintain Angular and Ionic products that help teams monitor vehicles, devices, sensors, and operational activity. My role spans reusable UI architecture, API integration, live data presentation, and performance-focused refinement.</p>
            <ul>
              @for (item of highlights; track item) {
                <li><app-icon name="check" /><span>{{ item }}</span></li>
              }
            </ul>
          </div>
          <div class="experience-tags">
            @for (tag of tags; track tag) { <span>{{ tag }}</span> }
          </div>
        </article>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  protected readonly highlights = [
    'Responsive web and mobile applications with Angular and Ionic',
    'Real-time GPS tracking and fleet-management dashboards',
    'REST API integration for trips, devices, and data visualization',
    'Reusable UI components and optimized rendering performance',
    'Close collaboration with backend engineers and product teams',
  ] as const;
  protected readonly tags = ['Angular', 'Ionic', 'TypeScript', 'RxJS', 'REST APIs', 'SCSS'] as const;
}
