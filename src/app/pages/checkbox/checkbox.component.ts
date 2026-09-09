import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent extends TemplatePageBase {

}
