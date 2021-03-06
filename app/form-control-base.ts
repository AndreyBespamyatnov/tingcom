export class FormControlBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  minLength: number;
  fullWide: boolean;
  order: number;
  controlType: string;

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      minLength?: number,
      order?: number,
      controlType?: string,
      fullWide?: boolean;
    } = {}) {
  
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.minLength = options.minLength === undefined ? 0 : options.minLength;
    this.order = options.order === undefined ? 1 : options.order;
    this.fullWide = !!options.fullWide;
    this.controlType = options.controlType || '';
  }
}
