import { FormControlBase } from './form-control-base';

export class CheckboxGroupFormControl extends FormControlBase<boolean> {
  controlType = 'checkboxgroup';
  options: {key: string, text: string, value: boolean}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
