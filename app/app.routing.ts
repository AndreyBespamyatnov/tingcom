import { Routes, RouterModule } from '@angular/router';

import { OrderLoginComponent }      from './order-login.component';
import { OrderServiceAddressComponent }      from './order-service-address.component';

const appRoutes: Routes = [
  {
    path: 'order/login',
    component: OrderLoginComponent
  },
  {
    path: 'order/cancel_order',
    component: OrderLoginComponent
  },
  {
    path: 'order/service_address',
    component: OrderServiceAddressComponent
  },
  {
    path: 'order/billing_info',
    component: OrderServiceAddressComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
