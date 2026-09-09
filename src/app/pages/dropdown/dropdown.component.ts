import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [IconComponent, FormsModule, NgSelectModule],
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent extends TemplatePageBase {
  owners = [
    { id: 'sarah', name: 'Sarah Jenkins (Admin)' },
    { id: 'david', name: 'David Miller (Editor)' },
    { id: 'elena', name: 'Elena Rostova (Developer)' }
  ];
  selectedOwner = 'sarah';
}
