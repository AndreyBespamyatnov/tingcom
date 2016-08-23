import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { FormControlBase }              from './form-control-base';
import { FormControlService }    from './services/form-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: 'app/dynamic-form.component.html',
  providers: [ FormControlService ]
})
export class DynamicFormComponent implements OnInit {
  @Input() controls: FormControlBase<any>[] = [];
  form: FormGroup;
  formSubmited: boolean = false;
  payLoad = '';

  constructor(private fcs: FormControlService) {  }
  
  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.controls);
  }
  
  onSubmit() {
    this.formSubmited = true;
    this.payLoad = JSON.stringify(this.form.value);
  }
}
