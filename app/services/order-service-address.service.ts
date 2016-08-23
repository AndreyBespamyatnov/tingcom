import { Injectable }       from '@angular/core';

import { FormControlBase }     from '../form-control-base';
import { TextboxFormControl }  from '../form-control-textbox';
import { CheckboxFormControl }  from '../form-control-checkbox';
import { CheckboxGroupFormControl }  from '../form-control-checkboxgroup';
import { DropdownFormControl }  from '../form-control-dropdown';

@Injectable()
export class OrderServiceAddressControlService {
  // Todo: Add as Mocks
  // Todo: make asynchronous
  getControls() {
    let controls: FormControlBase<any>[] = [
      new TextboxFormControl({
        key: 'address',
        label: 'Address',
        type: 'text',
        fullWide: true,
        required: true,
        order: 1
      }),
      new TextboxFormControl({
        key: 'city',
        label: 'City',
        type: 'text',
        fullWide: true,
        required: true,
        order: 3
      }),
      new DropdownFormControl({
        key: 'state',
        label: 'State',
        options: [
          {key: 'AL',  value: 'Alabama'},
          {key: 'AK',  value: 'Alaska'},
          {key: 'AZ',   value: 'Arizona'},
          {key: 'AR', value: 'Arkansas'}
        ],
        required: true,
        order: 5
      }),
      new TextboxFormControl({
        key: 'postal_code',
        label: 'Zip code',
        type: 'text',
        required: true,
        order: 6
      })
    ];
    return controls.sort((a, b) => a.order - b.order);
  }
}
