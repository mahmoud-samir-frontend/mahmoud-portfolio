import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LocaleService } from '../../../core/services/locale.service';
import { IconComponent } from '../icon/icon.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, IconComponent, ThemeToggleComponent],
  template: `
    <header class="site-header" [class.menu-open]="menuOpen()">
      <nav class="nav container" [attr.aria-label]="locale.copy().nav.primaryAria">
        <a class="brand" routerLink="/" [attr.aria-label]="locale.copy().nav.homeAria">
          <span class="brand-mark">MS</span>
          <span class="brand-copy"><strong>Mahmoud Samir</strong><small>{{ locale.copy().nav.role }}</small></span>
        </a>

        <div id="mobile-navigation" class="nav-links" [class.open]="menuOpen()">
          @for (link of locale.copy().nav.links; track link.id) {
            <a [href]="'/' + link.id" (click)="navigate($event, link.id)">{{ link.label }}</a>
          }
          <a class="nav-cta" href="mailto:Mahmoud.samirr148@gmail.com">{{ locale.copy().nav.letsTalk }} <app-icon name="arrow" /></a>
        </div>

        <div class="nav-actions">
          <button
            class="icon-button language-toggle"
            type="button"
            (click)="locale.toggle()"
            [attr.aria-label]="locale.copy().nav.languageLabel"
            [title]="locale.copy().nav.languageLabel"
          >{{ locale.copy().nav.languageButton }}</button>
          <app-theme-toggle />
          <button
            class="menu-button icon-button"
            type="button"
            (click)="toggleMenu()"
            [attr.aria-expanded]="menuOpen()"
            aria-controls="mobile-navigation"
            [attr.aria-label]="menuOpen() ? locale.copy().nav.closeNavigation : locale.copy().nav.openNavigation"
          >
            <app-icon [name]="menuOpen() ? 'x' : 'menu'" />
          </button>
        </div>
      </nav>
    </header>
  `,
})
export class NavbarComponent {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  protected readonly locale = inject(LocaleService);
  protected readonly menuOpen = signal(false);

  @HostListener('window:keydown.escape')
  closeOnEscape(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  async navigate(event: Event, id: string): Promise<void> {
    event.preventDefault();
    this.menuOpen.set(false);
    if (this.router.url !== '/') {
      await this.router.navigate(['/']);
    }
    setTimeout(() => this.document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }));
  }
}
