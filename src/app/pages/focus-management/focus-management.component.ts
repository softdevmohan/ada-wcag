import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-focus-management',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './focus-management.component.html'
})
export class FocusManagementComponent extends TemplatePageBase {

}
