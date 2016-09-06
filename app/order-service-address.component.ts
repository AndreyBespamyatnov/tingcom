import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';

import { Router } from '@angular/router';

import { OrderServiceAddressControlService } from './services/order-service-address.service';

@Component({
  selector: 'order-service-address',
  templateUrl: 'app/order-service-address.component.html',
  providers:  [OrderServiceAddressControlService]
})
export class OrderServiceAddressComponent{
  controls: any[];

  constructor(private service: OrderServiceAddressControlService, private router: Router) {
    this.controls = service.getControls();
  }

  goBack(){
    let link = ['/order/cancel_order'];
    this.router.navigate(link);
  }
}