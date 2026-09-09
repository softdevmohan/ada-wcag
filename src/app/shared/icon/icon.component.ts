import { Component, ElementRef, Input, OnChanges, inject } from '@angular/core';
import { createElement, icons } from 'lucide';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: '',
  host: {
    'aria-hidden': 'true',
    class: 'app-icon'
  }
})
export class IconComponent implements OnChanges {
  @Input({ required: true }) name = '';

  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnChanges(): void {
    const iconKey = this.toPascalCase(this.name);
    const iconNode = (icons as Record<string, Parameters<typeof createElement>[0]>)[iconKey];
    if (!iconNode) {
      this.host.nativeElement.replaceChildren();
      return;
    }

    const svg = createElement(iconNode);
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    this.host.nativeElement.replaceChildren(svg);
  }

  private toPascalCase(value: string): string {
    return value
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
  }
}
