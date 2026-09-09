import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-empty-states',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './empty-states.component.html'
})
export class EmptyStatesComponent extends TemplatePageBase {

}
