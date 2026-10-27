import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  readonly theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const theme = this.theme();
      this.document.documentElement.dataset['theme'] = theme;
      try {
        localStorage.setItem('mahmoud-portfolio-theme', theme);
      } catch {
        // The theme still works when storage is unavailable.
      }
    });
  }

  toggle(): void {
    this.theme.update((theme) => (theme === 'dark' ? 'light' : 'dark'));
  }

  private getInitialTheme(): Theme {
    try {
      return localStorage.getItem('mahmoud-portfolio-theme') === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  }
}
