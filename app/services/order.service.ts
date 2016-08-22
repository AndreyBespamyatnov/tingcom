import { Injectable } from '@angular/core';
import { Order } from '../models/app.order';

import { ORDER } from '../mocks/order-mock';

@Injectable()
export class OrderService {
  getCurrentOrder(): Promise<Order> {
    return Promise.resolve(ORDER);
  }
}
