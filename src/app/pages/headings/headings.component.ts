import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-headings',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './headings.component.html'
})
export class HeadingsComponent extends TemplatePageBase {

}
