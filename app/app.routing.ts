import { Routes, RouterModule } from '@angular/router';

import { OrderLoginComponent }      from './order-login.component';
import { OrderServiceAddressComponent }      from './order-service-address.component';
import { EndDemoComponent }      from './end-demo.component';
import { ShopComponent }      from './shop.component';
const appRoutes: Routes = [
  {
    path: '',
    component: OrderLoginComponent
  },    
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
    component: EndDemoComponent
  },
  {
    path: 'order/shop',
    component: ShopComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
