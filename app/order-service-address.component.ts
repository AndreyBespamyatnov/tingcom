import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { MODAL_DIRECTIVES } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Router } from '@angular/router';

import { OrderServiceAddressControlService } from './services/order-service-address.service';

@Component({
  selector: 'order-service-address',
  templateUrl: 'app/order-service-address.component.html',
  providers:  [OrderServiceAddressControlService],
  directives: [MODAL_DIRECTIVES]
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

  goBillingnfo(){
    let link = ['/order/billing_info'];
    this.router.navigate(link);
  }
}