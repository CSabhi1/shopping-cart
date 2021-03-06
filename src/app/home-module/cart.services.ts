import { Product } from "./product-model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable()
export class CartService {
    private cartItems: Product[] = [];
    newItemAdded = new Subject<Product[]>();
    cartItemsChanged = new Subject<Product[]>();
    totalItem = new Subject<number>();

    constructor() { }

    getProducts() {
        return this.cartItems.slice();
    }

    getTotalNumber(){
        return this.cartItems.length
    }

    addItemtoCart(item: Product) {
        this.cartItems.push(item);
        this.totalItem.next(this.cartItems.length); 
    }

    removeItemFromCart(id: number) {
        this.cartItems = this.cartItems.filter(item => item.id !== id);
        this.cartItemsChanged.next(this.cartItems.slice());
        this.totalItem.next(this.cartItems.length); 
    }

}