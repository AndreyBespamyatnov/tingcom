import { Injectable } from '@angular/core';


import { ShopItem } from '../models/shopItem';

import { SHOPITEMS } from '../mocks/shop-mock';

@Injectable()
export class ShopService {
  getCurrentShops(): Promise<ShopItem[]> {
    return Promise.resolve(SHOPITEMS);
  }
}
