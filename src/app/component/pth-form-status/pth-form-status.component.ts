import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Validator } from 'src/app/validator/validator';

@Component({
  selector: 'app-pth-form-status',
  templateUrl: './pth-form-status.component.html',
  styleUrls: ['./pth-form-status.component.scss']
})
export class PthFormStatusComponent {
  Form: FormGroup;
  constructor() {
    this.Form = new FormGroup({
      user_id: new FormControl('', Validators.compose([ Validators.required, Validators.pattern("^[a-z][a-z0-9]{1,9}") ])),
      email:   new FormControl('', Validators.compose([ Validators.required, Validator.emailValidator ]))
    });    
  };
}
