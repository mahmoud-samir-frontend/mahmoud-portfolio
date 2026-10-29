import { Component, inject } from '@angular/core';
import { LocaleService } from '../../core/services/locale.service';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-about',
  imports: [SectionHeadingComponent],
  template: `
    <section id="about" class="section about-section">
      <div class="container">
        <app-section-heading
          index="01"
          [eyebrow]="locale.copy().about.eyebrow"
          [title]="locale.copy().about.title"
          [description]="locale.copy().about.description"
        />
        <div class="about-grid">
          <div class="about-copy">
            @for (paragraph of locale.copy().about.paragraphs; track paragraph; let first = $first) {
              <p [class.lead]="first">{{ paragraph }}</p>
            }
            <div class="about-facts" [attr.aria-label]="locale.copy().about.factsAria">
              @for (fact of locale.copy().about.facts; track fact.label) {
                <div><strong>{{ fact.value }}</strong><span>{{ fact.label }}</span></div>
              }
            </div>
          </div>
          <aside class="principles-card">
            <p class="card-label">{{ locale.copy().about.howIWork }}</p>
            <ol>
              @for (principle of locale.copy().about.principles; track principle.title; let index = $index) {
                <li><span>{{ (index + 1).toString().padStart(2, '0') }}</span><div><strong>{{ principle.title }}</strong><p>{{ principle.text }}</p></div></li>
              }
            </ol>
          </aside>
        </div>

        <div class="skills-heading">
          <p class="eyebrow"><span>{{ locale.copy().about.stack }}</span>{{ locale.copy().about.technicalSkills }}</p>
          <h3>{{ locale.copy().about.skillsTitle }}</h3>
        </div>
        <div class="skills-grid">
          @for (group of locale.skillGroups(); track group.title) {
            <article class="skill-card">
              <div><span>{{ group.index }}</span><h4>{{ group.title }}</h4></div>
              <ul>
                @for (skill of group.skills; track skill) { <li>{{ skill }}</li> }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  protected readonly locale = inject(LocaleService);
}
