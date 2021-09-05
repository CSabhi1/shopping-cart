import { Component, Injectable, OnInit } from '@angular/core';
import { CartService } from '../cart.services';
import { Product } from '../product-model';

@Injectable()

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  total: number;
  subTotal: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getToatalItems();
  }

  getToatalItems() {
    this.products = this.cartService.getProducts();
    this.calculateTotal(this.products);
  }

  calculateTotal(products: Product[]) {
    this.subTotal = 0;
    products.forEach((item) => {
      this.subTotal += item.price;
    })
    this.total = this.subTotal + 50;

  }
}
