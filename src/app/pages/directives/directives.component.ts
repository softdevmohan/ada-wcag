import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './directives.component.html'
})
export class DirectivesComponent extends TemplatePageBase {

}
