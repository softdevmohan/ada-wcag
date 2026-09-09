import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './images.component.html'
})
export class ImagesComponent extends TemplatePageBase {

}
