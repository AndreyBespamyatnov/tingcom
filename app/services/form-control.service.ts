import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormControlBase } from '../form-control-base';

@Injectable()
export class FormControlService {
  constructor() { }

  toFormGroup(controls: FormControlBase<any>[]) {
    let group: any = {};

    controls.forEach(control => {
      let validators = [];

      if(control.required)
      {
        validators.push(Validators.required)
      }

      if(control.minLength > 0)
      {
        validators.push(Validators.minLength(control.minLength))
      }

      if(validators.length > 0)
      {
        group[control.key] = new FormControl(control.value || '', validators);
      }
      else
      {
        group[control.key] = new FormControl(control.value || '');
      }
    });
    return new FormGroup(group);
  }
}
