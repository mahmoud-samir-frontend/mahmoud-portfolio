import { Component } from '@angular/core';
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
          <div class="availability"><i></i><span>Open to Remote Opportunities</span></div>
          <p class="hero-intro">Hi, I'm Mahmoud Samir.</p>
          <h1 id="hero-title">Frontend Developer Building <span>Scalable Digital Experiences.</span></h1>
          <p class="hero-description">I'm a Frontend Developer with 3+ years of experience specializing in Angular, TypeScript, and Ionic. I build responsive web applications, real-time dashboards, and scalable frontend solutions for business-critical systems.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#projects">View my work <app-icon name="arrow" /></a>
            <a class="button button-secondary" href="Mahmoud_Samir_CV.pdf" download>Download CV <app-icon name="download" /></a>
          </div>
          <div class="hero-socials">
            <a href="https://github.com/mahmoudsamir-design" target="_blank" rel="noreferrer"><app-icon name="github" />GitHub</a>
            <a href="https://www.linkedin.com/in/mahmoud-samir-mahmoud/" target="_blank" rel="noreferrer"><app-icon name="linkedin" />LinkedIn</a>
          </div>
        </div>

        <div class="hero-art" aria-label="Illustration of an Angular developer workspace">
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
          <div class="floating-card card-stack"><app-icon name="code" /><div><small>Core stack</small><strong>Angular · TS · Ionic</strong></div></div>
          <div class="floating-card card-location"><app-icon name="map" /><div><small>Based in</small><strong>Cairo, Egypt</strong></div></div>
          <div class="angular-mark" aria-hidden="true"><span>A</span></div>
        </div>
      </div>
      <div class="container hero-strip">
        <p>Building at the intersection of</p>
        <div><span>Frontend architecture</span><i></i><span>Real-time data</span><i></i><span>Product experience</span></div>
      </div>
    </section>
    <app-about />
    <app-experience />
    <app-projects />
    <app-contact />
  `,
})
export class HomeComponent {}
