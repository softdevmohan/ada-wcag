import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-zoom-reflow',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './zoom-reflow.component.html'
})
export class ZoomReflowComponent extends TemplatePageBase {

}
