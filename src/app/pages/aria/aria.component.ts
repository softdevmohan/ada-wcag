import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-aria',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './aria.component.html'
})
export class AriaComponent extends TemplatePageBase {

}
