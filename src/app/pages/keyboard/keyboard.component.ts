import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './keyboard.component.html'
})
export class KeyboardComponent extends TemplatePageBase {

}
