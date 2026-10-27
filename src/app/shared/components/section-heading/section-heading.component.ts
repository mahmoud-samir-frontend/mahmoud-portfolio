import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    <div class="section-heading" [class.centered]="centered()">
      <p class="eyebrow"><span>{{ index() }}</span>{{ eyebrow() }}</p>
      <h2>{{ title() }}</h2>
      @if (description()) { <p class="section-description">{{ description() }}</p> }
    </div>
  `,
})
export class SectionHeadingComponent {
  readonly index = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input<string>('');
  readonly centered = input(false);
}
