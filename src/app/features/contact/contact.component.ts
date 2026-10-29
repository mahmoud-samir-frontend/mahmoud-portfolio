import { Component, inject } from '@angular/core';
import { SOCIAL_LINKS } from '../../core/data/portfolio.data';
import { LocaleService } from '../../core/services/locale.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-contact',
  imports: [IconComponent],
  template: `
    <section id="contact" class="section contact-section">
      <div class="container contact-panel">
        <div class="contact-copy">
          <p class="eyebrow"><span>04</span>{{ locale.copy().contact.eyebrow }}</p>
          <h2>{{ locale.copy().contact.title }}</h2>
          <p>{{ locale.copy().contact.description }}</p>
          <a class="button button-primary" href="mailto:Mahmoud.samirr148@gmail.com">{{ locale.copy().contact.action }} <app-icon name="arrow" /></a>
        </div>
        <div class="contact-links">
          @for (link of links; track link.label) {
            <a [href]="link.href" [attr.target]="link.icon === 'mail' ? null : '_blank'" [attr.rel]="link.icon === 'mail' ? null : 'noreferrer'">
              <span><app-icon [name]="link.icon" /></span>
              <div><small>{{ label(link.icon) }}</small><strong>{{ display(link.label) }}</strong></div>
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
  protected readonly locale = inject(LocaleService);

  protected label(icon: 'github' | 'linkedin' | 'mail'): string {
    return this.locale.copy().contact.labels[icon];
  }

  protected display(label: string): string {
    if (label === 'Email') return 'Mahmoud.samirr148@gmail.com';
    if (label === 'LinkedIn') return '/in/mahmoud-samir-mahmoud';
    return '@mahmoud-samir-frontend';
  }
}
