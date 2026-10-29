import { Component, effect, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LocaleService } from '../../core/services/locale.service';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-home',
  imports: [AboutComponent, ContactComponent, ExperienceComponent, ProjectsComponent, IconComponent],
  template: `
    <section class="hero section" aria-labelledby="hero-title">
      <div class="hero-glow glow-one"></div><div class="hero-glow glow-two"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="availability"><i></i><span>{{ locale.copy().home.availability }}</span></div>
          <p class="hero-intro">{{ locale.copy().home.intro }}</p>
          <h1 id="hero-title">{{ locale.copy().home.title }} <span>{{ locale.copy().home.titleAccent }}</span></h1>
          <p class="hero-description">{{ locale.copy().home.description }}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#projects">{{ locale.copy().home.viewWork }} <app-icon name="arrow" /></a>
            <a class="button button-secondary" href="Mahmoud_Samir_Frontend.pdf" download>{{ locale.copy().home.downloadCv }} <app-icon name="download" /></a>
          </div>
          <div class="hero-socials">
            <a href="https://github.com/mahmoud-samir-frontend" target="_blank" rel="noreferrer"><app-icon name="github" />GitHub</a>
            <a href="https://www.linkedin.com/in/mahmoud-samir-mahmoud/" target="_blank" rel="noreferrer"><app-icon name="linkedin" />LinkedIn</a>
          </div>
        </div>

        <div class="hero-art" [attr.aria-label]="locale.copy().home.artAria">
          <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
          <div class="code-window">
            <div class="window-top"><div><i></i><i></i><i></i></div><span>experience.component.ts</span><em>•••</em></div>
            <div class="editor">
              <div class="line-numbers">01<br>02<br>03<br>04<br>05<br>06<br>07<br>08</div>
              <pre><code><span class="violet">&#64;Component</span>(&#123;
  selector: <span class="green">'app-experience'</span>,
  changeDetection:
    <span class="cyan">ChangeDetectionStrategy.OnPush</span>
&#125;)
<span class="violet">export class</span> <span class="amber">Experience</span> &#123;
  impact = <span class="cyan">signal</span>(<span class="green">'measurable'</span>);
&#125;</code></pre>
            </div>
            <div class="editor-status"><span>Angular 20</span><span>TypeScript</span></div>
          </div>
          <div class="floating-card card-stack"><app-icon name="code" /><div><small>{{ locale.copy().home.coreStack }}</small><strong>Angular · TS · Ionic</strong></div></div>
          <div class="floating-card card-location"><app-icon name="map" /><div><small>{{ locale.copy().home.basedIn }}</small><strong>{{ locale.copy().home.location }}</strong></div></div>
          <div class="angular-mark" aria-hidden="true"><span>A</span></div>
        </div>
      </div>
      <div class="container hero-strip">
        <p>{{ locale.copy().home.buildingAt }}</p>
        <div><span>{{ locale.copy().home.architecture }}</span><i></i><span>{{ locale.copy().home.realTime }}</span><i></i><span>{{ locale.copy().home.productExperience }}</span></div>
      </div>
    </section>
    <app-about />
    <app-experience />
    <app-projects />
    <app-contact />
  `,
})
export class HomeComponent {
  protected readonly locale = inject(LocaleService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    effect(() => {
      const seo = this.locale.copy().seo;
      this.title.setTitle(seo.title);
      this.meta.updateTag({ name: 'description', content: seo.description });
    });
  }
}
