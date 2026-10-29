import { Component, inject } from '@angular/core';
import { SOCIAL_LINKS } from '../../../core/data/portfolio.data';
import { LocaleService } from '../../../core/services/locale.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-footer',
  imports: [IconComponent],
  template: `
    <footer class="site-footer">
      <div class="container footer-inner">
        <div>
          <span class="brand-mark">MS</span>
          <p>© {{ year }} {{ locale.copy().footer.copyright }}</p>
        </div>
        <div class="footer-links" [attr.aria-label]="locale.copy().footer.socialAria">
          @for (link of links; track link.label) {
            <a [href]="link.href" [attr.target]="link.icon === 'mail' ? null : '_blank'" [attr.rel]="link.icon === 'mail' ? null : 'noreferrer'">
              <app-icon [name]="link.icon" /><span class="sr-only">{{ link.label }}</span>
            </a>
          }
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
  protected readonly links = SOCIAL_LINKS;
  protected readonly locale = inject(LocaleService);
}
