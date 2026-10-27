import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../core/data/portfolio.data';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-contact',
  imports: [IconComponent],
  template: `
    <section id="contact" class="section contact-section">
      <div class="container contact-panel">
        <div class="contact-copy">
          <p class="eyebrow"><span>04</span>Let’s work together</p>
          <h2>Have an Angular product that needs clarity and momentum?</h2>
          <p>I’m open to fully remote Frontend and Angular Developer opportunities with teams building useful, ambitious products.</p>
          <a class="button button-primary" href="mailto:Mahmoud.samirr148@gmail.com">Start a conversation <app-icon name="arrow" /></a>
        </div>
        <div class="contact-links">
          @for (link of links; track link.label) {
            <a [href]="link.href" [attr.target]="link.icon === 'mail' ? null : '_blank'" [attr.rel]="link.icon === 'mail' ? null : 'noreferrer'">
              <span><app-icon [name]="link.icon" /></span>
              <div><small>{{ link.label }}</small><strong>{{ display(link.label) }}</strong></div>
              <app-icon name="external" />
            </a>
          }
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  protected readonly links = SOCIAL_LINKS;

  protected display(label: string): string {
    if (label === 'Email') return 'Mahmoud.samirr148@gmail.com';
    if (label === 'LinkedIn') return '/in/mahmoud-samir587766247';
    return '@mahmoudsamir-design';
  }
}
