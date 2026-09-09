import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IconComponent, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent extends TemplatePageBase {

}
