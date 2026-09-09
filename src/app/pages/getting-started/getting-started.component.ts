import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './getting-started.component.html'
})
export class GettingStartedComponent extends TemplatePageBase {

}
