import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, IconComponent, ThemeToggleComponent],
  template: `
    <header class="site-header" [class.menu-open]="menuOpen()">
      <nav class="nav container" aria-label="Primary navigation">
        <a class="brand" routerLink="/" aria-label="MS — Mahmoud Samir, home">
          <span class="brand-mark">MS</span>
          <span class="brand-copy"><strong>Mahmoud Samir</strong><small>Frontend Developer</small></span>
        </a>

        <div id="mobile-navigation" class="nav-links" [class.open]="menuOpen()">
          @for (link of links; track link.id) {
            <a [href]="'/' + link.id" (click)="navigate($event, link.id)">{{ link.label }}</a>
          }
          <a class="nav-cta" href="mailto:Mahmoud.samirr148@gmail.com">Let's talk <app-icon name="arrow" /></a>
        </div>

        <div class="nav-actions">
          <app-theme-toggle />
          <button
            class="menu-button icon-button"
            type="button"
            (click)="toggleMenu()"
            [attr.aria-expanded]="menuOpen()"
            aria-controls="mobile-navigation"
            [attr.aria-label]="menuOpen() ? 'Close navigation' : 'Open navigation'"
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
  protected readonly menuOpen = signal(false);
  protected readonly links = [
    { label: 'About', id: '#about' },
    { label: 'Experience', id: '#experience' },
    { label: 'Work', id: '#projects' },
    { label: 'Contact', id: '#contact' },
  ] as const;

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
