import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { AppComponent }  from './app.component';

import { OrderDetailComponent } from './order-detail.component';
import { FormSignupComponent } from './form-signup.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormControlComponent } from './dynamic-form-control.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    OrderDetailComponent,
    FormSignupComponent,
    DynamicFormComponent,
    DynamicFormControlComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
