import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-loading-states',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './loading-states.component.html'
})
export class LoadingStatesComponent extends TemplatePageBase {

}
