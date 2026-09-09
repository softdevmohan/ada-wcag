import { Directive, ElementRef, ViewChild, inject } from '@angular/core';
import { ClipboardService } from '../core/clipboard.service';

@Directive()
export abstract class TemplatePageBase {
  activeTab = 'preview';
  copiedId: string | null = null;
  buttonLabel = 'Submit Record';
  routeDemo = 'Active Route: /dashboard (Dashboard Loaded)';
  modalOpen = false;
  accordionOpen = true;
  focusItems = [
    { id: 1, name: 'User Record #101' },
    { id: 2, name: 'User Record #102' }
  ];

  @ViewChild('demoEmail') demoEmail?: ElementRef<HTMLInputElement>;

  protected readonly clipboard = inject(ClipboardService);
  private copyTimer?: ReturnType<typeof setTimeout>;

  selectTab(tab: string): void {
    this.activeTab = tab;
  }

  copyCode(elementId: string): void {
    this.clipboard.copyFromElementId(elementId);
    this.copiedId = elementId;
    if (this.copyTimer) {
      clearTimeout(this.copyTimer);
    }
    this.copyTimer = setTimeout(() => {
      if (this.copiedId === elementId) {
        this.copiedId = null;
      }
    }, 2000);
  }

  toggleButtonLabel(): void {
    this.buttonLabel = this.buttonLabel === 'Submit Record' ? 'Processing...' : 'Submit Record';
  }

  setRouteDemo(message: string): void {
    this.routeDemo = message;
  }

  openModal(): void {
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
  }

  toggleAccordion(): void {
    this.accordionOpen = !this.accordionOpen;
  }

  removeFocusItem(id: number): void {
    this.focusItems = this.focusItems.filter((item) => item.id !== id);
  }

  focusDemoEmailField(event: Event): void {
    event.preventDefault();
    this.demoEmail?.nativeElement.focus();
  }
}
