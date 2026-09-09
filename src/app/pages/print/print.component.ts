import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-print',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './print.component.html'
})
export class PrintComponent extends TemplatePageBase {

}
