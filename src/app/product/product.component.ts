import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  quantity: number = 0;
  product = {
    name: "Samsung Galaxy S10",
    price: 1000,
    gst: 18,
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331918cv11d.jpg",
    inStock: 10
  }
  calculatePrice() {
    return this.product.price + (this.product.price * this.product.gst / 100);
  }
  increment() {
    if (this.quantity < this.product.inStock)
      this.quantity++;
  }

  decrement() {
    if (this.quantity > 0)
      this.quantity--;
  }

  changeName() {
    this.product.name = "Iphone 11"
  }
}
