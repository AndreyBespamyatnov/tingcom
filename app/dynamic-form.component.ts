import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { FormControlBase }              from './form-control-base';
import { FormControlService }    from './services/form-control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dynamic-form',
  templateUrl: 'app/dynamic-form.component.html',
  providers: [ FormControlService ]
})
export class DynamicFormComponent implements OnInit {
  @Input() controls: FormControlBase<any>[] = [];
  @Input() submittext: "...";
  form: FormGroup;
  formSubmited: boolean = false;
  payLoad = '';

  constructor(private fcs: FormControlService, private router: Router) {  }
  
  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.controls);
  }
  
  onSubmit() {
    this.formSubmited = true;
    
    if(this.form.valid)
    {
      this.goToServiceAddress();
    }
    
    this.payLoad = JSON.stringify(this.form.value);
  }

  goToServiceAddress(){
    let link = ['/order/service_address'];
    this.router.navigate(link);
  }
}
