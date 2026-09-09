import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-color-contrast',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './color-contrast.component.html'
})
export class ColorContrastComponent extends TemplatePageBase {

}
