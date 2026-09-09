import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-live-regions',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './live-regions.component.html'
})
export class LiveRegionsComponent extends TemplatePageBase {

}
