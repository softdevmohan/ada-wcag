import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-form-fields',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './form-fields.component.html'
})
export class FormFieldsComponent extends TemplatePageBase {

}
