import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import {
  Language,
  PORTFOLIO_COPY,
  PROJECTS_BY_LANGUAGE,
  SKILL_GROUPS_BY_LANGUAGE,
} from '../data/localization.data';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly document = inject(DOCUMENT);
  readonly language = signal<Language>(this.getInitialLanguage());
  readonly copy = computed(() => PORTFOLIO_COPY[this.language()]);
  readonly projects = computed(() => PROJECTS_BY_LANGUAGE[this.language()]);
  readonly skillGroups = computed(() => SKILL_GROUPS_BY_LANGUAGE[this.language()]);
  readonly isArabic = computed(() => this.language() === 'ar');

  constructor() {
    effect(() => {
      const language = this.language();
      const root = this.document.documentElement;
      root.lang = language;
      root.dir = language === 'ar' ? 'rtl' : 'ltr';
      root.dataset['language'] = language;
      try {
        localStorage.setItem('mahmoud-portfolio-language', language);
      } catch {
        // Language switching still works when storage is unavailable.
      }
    });
  }

  toggle(): void {
    this.language.update((language) => (language === 'en' ? 'ar' : 'en'));
  }

  private getInitialLanguage(): Language {
    try {
      const saved = localStorage.getItem('mahmoud-portfolio-language');
      if (saved === 'en' || saved === 'ar') return saved;
    } catch {
      // Fall through to the browser preference.
    }
    return typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('ar')
      ? 'ar'
      : 'en';
  }
}
