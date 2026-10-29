import { Component, inject } from '@angular/core';
import { LocaleService } from '../../core/services/locale.service';
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
          [eyebrow]="locale.copy().experience.eyebrow"
          [title]="locale.copy().experience.title"
          [description]="locale.copy().experience.description"
        />
        <article class="experience-card">
          <div class="experience-rail"><span></span></div>
          <header>
            <div>
              <p class="eyebrow">{{ locale.copy().experience.date }}</p>
              <h3>{{ locale.copy().experience.role }}</h3>
              <p class="company">{{ locale.copy().experience.company }}</p>
            </div>
            <span class="employment-badge"><i></i>{{ locale.copy().experience.current }}</span>
          </header>
          <div class="experience-body">
            <p>{{ locale.copy().experience.summary }}</p>
            <ul>
              @for (item of locale.copy().experience.highlights; track item) {
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
  protected readonly locale = inject(LocaleService);
  protected readonly tags = ['Angular', 'Ionic', 'TypeScript', 'RxJS', 'REST APIs', 'SCSS'] as const;
}
