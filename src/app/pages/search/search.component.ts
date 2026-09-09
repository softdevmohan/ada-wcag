import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './search.component.html'
})
export class SearchComponent extends TemplatePageBase {

}
