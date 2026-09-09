import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './tooltip.component.html'
})
export class TooltipComponent extends TemplatePageBase {

}
