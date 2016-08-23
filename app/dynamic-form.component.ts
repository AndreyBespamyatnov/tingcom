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
  payLoad = '';

  constructor(private qcs: FormControlService) {  }
  
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.controls);
  }
  
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
