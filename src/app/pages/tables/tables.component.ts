import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './tables.component.html'
})
export class TablesComponent extends TemplatePageBase {

}
