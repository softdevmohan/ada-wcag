import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, IconComponent],
  template: `
    <header role="banner">
      <a routerLink="/" class="brand-logo" aria-label="ADA WCAG Templates Homepage">
        <div class="brand-icon-wrapper">
          <app-icon name="accessibility"></app-icon>
        </div>
        <div class="brand-text">
          <h1>ADA / WCAG</h1>
          <span>Developer Code Templates</span>
        </div>
      </a>
    </header>
  `
})
export class HeaderComponent {}
