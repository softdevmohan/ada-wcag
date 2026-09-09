import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-semantic-html',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './semantic-html.component.html'
})
export class SemanticHtmlComponent extends TemplatePageBase {

}
