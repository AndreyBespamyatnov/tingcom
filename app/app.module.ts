import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { OrderDetailComponent } from './order-detail.component';
import { FormSignupComponent } from './form-signup.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormControlComponent } from './dynamic-form-control.component';
import { OrderLoginComponent } from './order-login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
  ],
  declarations: [
    AppComponent,
    OrderDetailComponent,
    FormSignupComponent,
    DynamicFormComponent,
    DynamicFormControlComponent,
    OrderLoginComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
