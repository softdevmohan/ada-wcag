import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent extends TemplatePageBase {

}
