import { Component, OnInit  } from '@angular/core';

import { Order } from './models/app.order';
import { OrderService } from './services/order.service';

@Component({
  selector: 'tingcom-order',
  templateUrl: 'app/order-detail.component.html',
  providers: [OrderService]
})
export class OrderDetailComponent implements OnInit {
  currentOrder: Order;

  constructor(private orderService: OrderService) { }

  getCurrentOrder(): void {
    this.orderService.getCurrentOrder().then(order => this.currentOrder = order);
  }

  ngOnInit(): void {
    this.getCurrentOrder();
  }
}
