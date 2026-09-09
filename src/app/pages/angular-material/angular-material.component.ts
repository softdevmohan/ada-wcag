import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { TemplatePageBase } from '../../shared/template-page.base';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-angular-material',
  standalone: true,
  imports: [IconComponent, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './angular-material.component.html'
})
export class AngularMaterialComponent extends TemplatePageBase {
  roleCtrl = new FormControl('', { nonNullable: true, validators: Validators.required });
  roles = [
    { id: 'admin', name: 'System Administrator' },
    { id: 'dev', name: 'Developer' }
  ];
}
