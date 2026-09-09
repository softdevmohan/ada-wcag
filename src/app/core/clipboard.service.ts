import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ClipboardService {
  readonly toastVisible = signal(false);
  private toastTimer?: ReturnType<typeof setTimeout>;

  copyFromElementId(elementId: string): void {
    const codeElement = document.getElementById(elementId);
    if (!codeElement) {
      return;
    }

    const text = codeElement.innerText;
    void navigator.clipboard.writeText(text).then(() => {
      this.toastVisible.set(true);
      if (this.toastTimer) {
        clearTimeout(this.toastTimer);
      }
      this.toastTimer = setTimeout(() => this.toastVisible.set(false), 2000);
    });
  }
}
