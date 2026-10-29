import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocaleService } from './core/services/locale.service';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <a class="skip-link" href="#main-content">{{ locale.copy().app.skip }}</a>
    <app-navbar />
    <main id="main-content"><router-outlet /></main>
    <app-footer />
  `,
})
export class App {
  protected readonly locale = inject(LocaleService);
}
