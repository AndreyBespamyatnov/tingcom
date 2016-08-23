import { Injectable }       from '@angular/core';

import { FormControlBase }     from '../form-control-base';
import { TextboxFormControl }  from '../form-control-textbox';
import { CheckboxFormControl }  from '../form-control-checkbox';
import { CheckboxGroupFormControl }  from '../form-control-checkboxgroup';

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
      new CheckboxFormControl({
        key: 'isBusinessAccount',
        label: 'This is a business account',
        type: 'checkbox',
        fullWide: true,
        order: 3
      }),
      new TextboxFormControl({
        key: 'input_phone',
        label: 'Contact number',
        type: 'tel',
        required: true,
        order: 5
      }),
      new TextboxFormControl({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 6
      }),
      new TextboxFormControl({
        key: 'passwordField',
        label: 'Password',
        type: 'password',
        required: true,
        order: 7
      }),
      new TextboxFormControl({
        key: 'confirmPasswordField',
        label: 'Confirm password',
        type: 'password',
        required: true,
        order: 8
      }),
      new CheckboxGroupFormControl({
        key: 'email_news',
        options: [
          {key: 'send_news', text: 'Send me Ting news',                              value: true},
          {key: 'send_device_alerts', text: 'Send me alerts about new devices',      value: true},
          {key: 'send_nps', text: 'Send me Ting satisfaction surveys (4 per year)',  value: true}
        ],
        label: 'Notifications',
        type: 'checkbox',
        fullWide: true,
        order: 9
      })   
    ];
    return controls.sort((a, b) => a.order - b.order);
  }
}
