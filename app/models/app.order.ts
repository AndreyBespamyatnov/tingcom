export class Order {
  id: number;
  productName: string;
  imagePath: string;
  price: number;
  quantity: number;

  MaxCount: number[] = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
  ]; // Maximun of quantity

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