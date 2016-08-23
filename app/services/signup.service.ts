import { Injectable }       from '@angular/core';

import { FormControlBase }     from '../form-control-base';
import { TextboxFormControl }  from '../form-control-textbox';

@Injectable()
export class SignupControlService {
  // Todo: Add as Mocks
  // Todo: make asynchronous
  getControls() {
    let controls: FormControlBase<any>[] = [
      new TextboxFormControl({
        key: 'firstName',
        label: 'First name',
        type: 'text',
        required: true,
        order: 1
      }),
      new TextboxFormControl({
        key: 'lastName',
        label: 'Last name',
        type: 'text',
        required: true,
        order: 2
      }),
      new TextboxFormControl({
        key: 'isBusinessAccount',
        label: 'This is a business account',
        type: 'checkbox',
        fullWide: true,
        required: true,
        order: 3
      }),
      new TextboxFormControl({
        key: 'contactNumber',
        label: 'Contact number',
        type: 'text',
        required: true,
        order: 4
      }),
      new TextboxFormControl({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 5
      })
    ];
    return controls.sort((a, b) => a.order - b.order);
  }
}
