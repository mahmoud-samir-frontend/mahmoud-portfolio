import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../core/data/portfolio.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-about',
  imports: [SectionHeadingComponent],
  template: `
    <section id="about" class="section about-section">
      <div class="container">
        <app-section-heading
          index="01"
          eyebrow="About"
          title="Engineering interfaces that stay clear under pressure."
          description="I turn complex operational data into focused, responsive product experiences."
        />
        <div class="about-grid">
          <div class="about-copy">
            <p class="lead">For more than three years, I’ve built Angular and Ionic applications that support real business operations—from GPS fleet tracking to environmental monitoring.</p>
            <p>My work sits where product thinking meets frontend engineering: translating requirements into maintainable components, integrating REST APIs, and presenting live data in a way that helps people make decisions quickly.</p>
            <p>I care about clean architecture, performance, and thoughtful responsive behavior. I work closely with backend engineers and product teams to take features from requirements to reliable, user-friendly delivery.</p>
            <div class="about-facts" aria-label="Professional facts">
              <div><strong>3+</strong><span>Years building products</span></div>
              <div><strong>14–20</strong><span>Angular versions</span></div>
              <div><strong>Cairo</strong><span>Available remotely</span></div>
            </div>
          </div>
          <aside class="principles-card">
            <p class="card-label">How I work</p>
            <ol>
              <li><span>01</span><div><strong>Clarify the system</strong><p>Understand the user, workflow, and data before shaping the interface.</p></div></li>
              <li><span>02</span><div><strong>Build for reuse</strong><p>Design focused components with predictable data flow and clear responsibilities.</p></div></li>
              <li><span>03</span><div><strong>Refine the experience</strong><p>Test responsive behavior, performance, accessibility, and everyday edge cases.</p></div></li>
            </ol>
          </aside>
        </div>

        <div class="skills-heading">
          <p class="eyebrow"><span>Stack</span>Technical skills</p>
          <h3>Tools I use to move from idea to reliable interface.</h3>
        </div>
        <div class="skills-grid">
          @for (group of skillGroups; track group.title) {
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
  protected readonly skillGroups = SKILL_GROUPS;
}
