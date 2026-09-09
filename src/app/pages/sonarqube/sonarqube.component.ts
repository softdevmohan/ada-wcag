import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';

@Component({
  selector: 'app-sonarqube',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './sonarqube.component.html'
})
export class SonarqubeComponent extends TemplatePageBase {

}
