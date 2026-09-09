import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './links.component.html'
})
export class LinksComponent extends TemplatePageBase {

}
