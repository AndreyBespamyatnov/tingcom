import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlBase }     from './form-control-base';

@Component({
  selector: 'df-control',
  templateUrl: 'app/dynamic-form-control.component.html'
})

export class DynamicFormControlComponent {
  @Input() control: FormControlBase<any>;
  @Input() form: FormGroup;
  @Input() formSubmited: boolean;

  get isValid() {
    if(!this.formSubmited)
    {
      return true;
    } 

    return this.form.controls[this.control.key].valid; 
  }
}
