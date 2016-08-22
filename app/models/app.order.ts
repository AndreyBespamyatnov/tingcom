export class Order {
  id: number;
  productName: string;
  imagePath: string;
  price: number;
  quantity: number;
  
  constructor(id:number, productName:string, imagePath: string, price: number, quantity: number) {
      this.id = id;
      this.productName = productName;
      this.imagePath = imagePath;
      this.price = price;
      this.quantity = quantity;
  }

  subtotal() : number{
      return this.price * this.quantity;
  }
}