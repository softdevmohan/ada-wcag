import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-screen-reader',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './screen-reader.component.html'
})
export class ScreenReaderComponent extends TemplatePageBase {

}
