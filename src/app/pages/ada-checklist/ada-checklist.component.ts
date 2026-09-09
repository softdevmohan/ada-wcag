import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-ada-checklist',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './ada-checklist.component.html'
})
export class AdaChecklistComponent extends TemplatePageBase {

}
