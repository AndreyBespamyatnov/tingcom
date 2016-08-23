import { Component } from '@angular/core';
import { SignupControlService } from './services/signup.service';

@Component({
  selector: 'tingcom-form-signup',
  templateUrl: 'app/form-signup.component.html',
  providers:  [SignupControlService]
})
export class FormSignupComponent{
  controls: any[];
  
  constructor(service: SignupControlService) {
    this.controls = service.getControls();
  }
}