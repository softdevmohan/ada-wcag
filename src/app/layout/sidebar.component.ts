import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NAVIGATION_ITEMS, NavItem } from '../core/navigation';
import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, IconComponent],
  template: `
    <aside aria-label="Main Navigation">
      <div class="search-container sidebar-search" #searchContainer>
        <app-icon name="search" class="search-icon"></app-icon>
        <input
          #searchInput
          type="search"
          id="global-search"
          class="search-input"
          placeholder="Search templates..."
          aria-label="Search templates"
          aria-autocomplete="list"
          aria-controls="global-search-results"
          [attr.aria-expanded]="resultsOpen"
          [(ngModel)]="query"
          (input)="onQueryChange()"
          (keydown)="onSearchKeydown($event)"
        />
        <span class="search-shortcut">Ctrl + K</span>
        <div
          id="global-search-results"
          class="search-results"
          role="listbox"
          [hidden]="!resultsOpen"
        >
          @if (matches.length) {
            @for (item of matches; track item.path; let i = $index) {
              <a
                class="search-result-item"
                role="option"
                [routerLink]="item.path"
                [class.is-active]="i === activeResultIndex"
                [attr.aria-selected]="i === activeResultIndex"
                (click)="closeResults()"
              >
                <app-icon [name]="item.icon"></app-icon>
                <span>{{ item.label }}</span>
              </a>
            }
          } @else if (query.trim()) {
            <div class="search-no-results" role="status">No matching templates found.</div>
          }
        </div>
      </div>

      <nav aria-label="Main Navigation">
        <ul class="nav-list">
          @for (item of items; track item.path) {
            <li class="nav-item" routerLinkActive="active" [routerLinkActiveOptions]="item.path === '/' ? { exact: true } : { exact: false }">
              <a [routerLink]="item.path">
                <app-icon [name]="item.icon"></app-icon>
                {{ item.label }}
              </a>
            </li>
          }
        </ul>
      </nav>

      <div class="quick-tips-box">
        <div class="quick-tips-header">
          <app-icon name="lightbulb"></app-icon>
          Quick Tips
        </div>
        <p>Use semantic HTML first. Test with JAWS &amp; NVDA. Follow WCAG 2.2 AA.</p>
      </div>
    </aside>
  `
})
export class SidebarComponent {
  readonly items = NAVIGATION_ITEMS;
  query = '';
  matches: NavItem[] = [];
  resultsOpen = false;
  activeResultIndex = -1;

  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;
  @ViewChild('searchContainer') searchContainer?: ElementRef<HTMLElement>;

  private readonly router = inject(Router);

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.closeResults();
      this.query = '';
      this.matches = [];
    });
  }

  onQueryChange(): void {
    const value = this.query.trim().toLowerCase();
    this.activeResultIndex = -1;
    if (!value) {
      this.matches = [];
      this.resultsOpen = false;
      return;
    }
    this.matches = this.items.filter((item) => item.label.toLowerCase().includes(value));
    this.resultsOpen = true;
  }

  onSearchKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown' && this.matches.length) {
      event.preventDefault();
      this.activeResultIndex = (this.activeResultIndex + 1) % this.matches.length;
    } else if (event.key === 'ArrowUp' && this.matches.length) {
      event.preventDefault();
      this.activeResultIndex = (this.activeResultIndex - 1 + this.matches.length) % this.matches.length;
    } else if (event.key === 'Enter' && this.activeResultIndex >= 0 && this.matches[this.activeResultIndex]) {
      event.preventDefault();
      void this.router.navigateByUrl(this.matches[this.activeResultIndex].path);
      this.closeResults();
    } else if (event.key === 'Escape') {
      this.query = '';
      this.closeResults();
    }
  }

  closeResults(): void {
    this.resultsOpen = false;
    this.activeResultIndex = -1;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.searchContainer?.nativeElement.contains(event.target as Node)) {
      this.resultsOpen = false;
    }
  }

  @HostListener('window:keydown', ['$event'])
  onGlobalShortcut(event: KeyboardEvent): void {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.searchInput?.nativeElement.focus();
    }
  }
}
