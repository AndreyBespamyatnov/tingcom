export class ShopItem {
  id: number;
  hrefToDevice: string;
  linkToPreviewImage: string;
  title: string;
  price: number;
  isFromSell: boolean;
  isUsed: boolean;
  networkType: string;

  constructor(id:number, hrefToDevice:string, linkToPreviewImage: string, title: string, price: number, isFromSell: boolean, isUsed: boolean, networkType: string) {
      this.id = id;
      this.hrefToDevice = hrefToDevice;
      this.linkToPreviewImage = linkToPreviewImage;
      this.title = title;
      this.price = price;
      this.isFromSell = isFromSell;
      this.isUsed = isUsed;
      this.networkType = networkType;
  }
}