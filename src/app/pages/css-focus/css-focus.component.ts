import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-css-focus',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './css-focus.component.html'
})
export class CssFocusComponent extends TemplatePageBase {

}
