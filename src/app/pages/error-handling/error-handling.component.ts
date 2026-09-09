import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-error-handling',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './error-handling.component.html'
})
export class ErrorHandlingComponent extends TemplatePageBase {

}
