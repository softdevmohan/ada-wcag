import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-expand-collapse',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './expand-collapse.component.html'
})
export class ExpandCollapseComponent extends TemplatePageBase {

}
