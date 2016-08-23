import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'order-service-address',
  templateUrl: 'app/order-service-address.component.html'
})
export class OrderServiceAddressComponent{
  constructor(private router: Router){}

  goBack(){
    let link = ['/order/cancel_order'];
    this.router.navigate(link);
  }
}