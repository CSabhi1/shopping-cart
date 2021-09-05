import { Product } from "./product-model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable()
export class ProductDataService {
    private products: Product[] = [];
    newProductFetched = new Subject<Product[]>();
    slectedItem = new Subject<Product>();

    constructor(private http: HttpClient) { }


    getSelectedProduct(id: number) {
        this.http.get('https://fakestoreapi.com/products').subscribe(
            (res: Product[]) => {
             this.slectedItem.next(res.find((product: Product) => product.id == id));
            }
        )
    }

    fetchProducts() {
        this.http.get('https://fakestoreapi.com/products').subscribe(
            (res: any) => {
                this.products = res;
                this.newProductFetched.next([...this.products])
            }
        )
    }
}