import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ClipboardService } from './core/clipboard.service';
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';
import { SidebarComponent } from './layout/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly titleService = inject(Title);
  readonly clipboard = inject(ClipboardService);

  readonly activePageTitle$ = this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    map(() => `${this.titleService.getTitle()} page loaded`)
  );
}
