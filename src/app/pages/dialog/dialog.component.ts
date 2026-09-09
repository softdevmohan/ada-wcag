import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './dialog.component.html'
})
export class DialogComponent extends TemplatePageBase {

}
