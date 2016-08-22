import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';

import { OrderDetailComponent } from './order-detail.component';
import { FormSignupComponent } from './form-signup.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    OrderDetailComponent,
    FormSignupComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
