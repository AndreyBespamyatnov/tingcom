import { Component, Input, OnInit, ViewChild }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { FormControlBase }              from './form-control-base';
import { FormControlService }    from './services/form-control.service';
import { Router } from '@angular/router';

import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'dynamic-form',
  templateUrl: 'app/dynamic-form.component.html',
  providers: [ FormControlService ],
  directives: [MODAL_DIRECTIVES]
})
export class DynamicFormComponent implements OnInit {
  @ViewChild('modal')
  modal: ModalComponent;

  @Input() controls: FormControlBase<any>[] = [];
  @Input() submittext: "...";
  @Input() showmodal: boolean;

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

    if(this.showmodal)
    {
      this.modal.open();
    }

    this.payLoad = JSON.stringify(this.form.value);
  }

  goToServiceAddress(){
    let link = ['/order/service_address'];
    this.router.navigate(link);
  }

  goBillingnfo(){
    let link = ['/order/billing_info'];
    this.router.navigate(link);
  }
}
