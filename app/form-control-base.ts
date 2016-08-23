export class FormControlBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  fullWide: boolean;
  order: number;
  controlType: string;

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      fullWide?: boolean;
    } = {}) {
  
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.fullWide = false;
    this.controlType = options.controlType || '';
  }
}
