import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { InputValidator } from 'src/app/validator/input-validator';

@Component({
  selector: 'app-pth-custom-validators',
  templateUrl: './pth-custom-validators.component.html',
  styleUrls: ['./pth-custom-validators.component.scss']
})
export class PthCustomValidatorsComponent {
  form1: FormGroup;
  username!: FormControl;

  constructor(private fb: FormBuilder) {

    this.username = new FormControl("",
      Validators.compose([
        Validators.required, Validators.minLength(3), 
        Validators.maxLength(10), InputValidator.startsWithNumber
      ])
    );

    this.form1 = fb.group({
      username: this.username
    });
  }
}
