import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-dynamic-content',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './dynamic-content.component.html'
})
export class DynamicContentComponent extends TemplatePageBase {

}
