import { FormControl } from "@angular/forms";

export class Validator {
    static emailValidator(control:FormControl) {
        if (!control.value.match(/\S+@\S+\.\S+/)) {
            return { emailValidator: true };
        } else {
            return null;
        }
    }
}
