import { Component } from '@angular/core';

import { ShopItem } from './models/shopItem';
import { ShopService } from './services/shop-service';

@Component({
  selector: 'shop',
  templateUrl: 'app/shop.component.html',
  providers: [ShopService]
})
export class ShopComponent{

  curretnItems: ShopItem[];

  constructor(private shopService: ShopService) { }

  getCurrentShops(): void {
    this.shopService.getCurrentShops().then(shops => this.curretnItems = shops);
  }

  ngOnInit(): void {
    this.getCurrentShops();
  }

}