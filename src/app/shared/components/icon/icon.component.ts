import { Component, input } from '@angular/core';

export type IconName =
  | 'arrow'
  | 'check'
  | 'chevron'
  | 'code'
  | 'download'
  | 'external'
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'map'
  | 'menu'
  | 'moon'
  | 'sun'
  | 'x';

@Component({
  selector: 'app-icon',
  template: `
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      @switch (name()) {
        @case ('arrow') { <path d="M5 12h14m-6-6 6 6-6 6" /> }
        @case ('check') { <path d="m5 12 4 4L19 6" /> }
        @case ('chevron') { <path d="m9 18 6-6-6-6" /> }
        @case ('code') { <path d="m8 9-3 3 3 3m8-6 3 3-3 3m-3-9-2 12" /> }
        @case ('download') { <path d="M12 3v12m-4-4 4 4 4-4M5 21h14" /> }
        @case ('external') { <path d="M15 3h6v6m0-6-9 9M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /> }
        @case ('github') { <path d="M15 22v-3.9c.04-1-.35-1.75-.78-2.15 2.54-.28 5.2-1.25 5.2-5.62A4.4 4.4 0 0 0 18.25 7.3c.12-.28.51-1.45-.11-3-1.1-.35-3.6 1.17-3.6 1.17a12.5 12.5 0 0 0-6.55 0S5.5 3.95 4.4 4.3c-.62 1.55-.23 2.72-.11 3a4.4 4.4 0 0 0-1.17 3.03c0 4.36 2.65 5.34 5.18 5.63-.34.3-.64.8-.74 1.55-.66.3-2.34.82-3.38-.96-.64-1.1-1.8-1.2-1.8-1.2M9 22v-3.1" /> }
        @case ('linkedin') { <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /> }
        @case ('mail') { <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /> }
        @case ('map') { <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15" /> }
        @case ('menu') { <path d="M4 7h16M4 12h16M4 17h16" /> }
        @case ('moon') { <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /> }
        @case ('sun') { <circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /> }
        @case ('x') { <path d="M18 6 6 18M6 6l12 12" /> }
      }
    </svg>
  `,
  styles: `:host { display: inline-flex; width: 1.15em; height: 1.15em; flex: none; } svg { width: 100%; height: 100%; }`,
})
export class IconComponent {
  readonly name = input.required<IconName>();
}
