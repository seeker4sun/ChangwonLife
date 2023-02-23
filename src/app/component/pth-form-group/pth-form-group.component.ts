import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pth-form-group',
  templateUrl: './pth-form-group.component.html',
  styleUrls: ['./pth-form-group.component.scss']
})
export class PthFormGroupComponent {
  form1 = new FormGroup({
    lowerCase: new FormControl('', Validators.required),
    upperCase: new FormControl('', Validators.compose([ Validators.required, Validators.pattern("[A-Z]{3}")]))
  });

  setValue() { this.form1.setValue({lowerCase: 'abc', upperCase:'ABC'}); }
  reset()    { this.form1.setValue({lowerCase: '',    upperCase:''}); }

  onSubmit(_event: any) {
    console.info("this.form.value ... ",this.form1.value.lowerCase , this.form1.value.upperCase);
    console.info("this.form.get   ... ",this.form1.get('lowerCase')!.value, this.form1.get('upperCase')!.value);
  }

  patch(){
    this.form1.patchValue({lowerCase: 'one'});
    this.form1.patchValue({upperCase: 'ONE'});
  }
}
