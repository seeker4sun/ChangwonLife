import { Component } from '@angular/core';

@Component({
  selector: 'app-pth-form-reference-variable',
  templateUrl: './pth-form-reference-variable.component.html',
  styleUrls: ['./pth-form-reference-variable.component.scss']
})
export class PthFormReferenceVariableComponent {
  user = { userId: '', userName: '', userPassword: '' };
}
