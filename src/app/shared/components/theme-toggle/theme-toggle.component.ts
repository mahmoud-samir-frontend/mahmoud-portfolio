import { Component, inject } from '@angular/core';
import { LocaleService } from '../../../core/services/locale.service';
import { ThemeService } from '../../../core/services/theme.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-theme-toggle',
  imports: [IconComponent],
  template: `
    <button
      class="icon-button"
      type="button"
      (click)="theme.toggle()"
      [attr.aria-label]="theme.theme() === 'dark' ? locale.copy().theme.switchToLight : locale.copy().theme.switchToDark"
      [title]="theme.theme() === 'dark' ? locale.copy().theme.light : locale.copy().theme.dark"
    >
      <app-icon [name]="theme.theme() === 'dark' ? 'sun' : 'moon'" />
    </button>
  `,
})
export class ThemeToggleComponent {
  protected readonly theme = inject(ThemeService);
  protected readonly locale = inject(LocaleService);
}
