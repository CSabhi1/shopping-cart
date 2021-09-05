import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Product } from '../product-model';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit, OnDestroy {

  constructor(private productDataService: ProductDataService,
    private cartService: CartService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  products: Product[] = [];
  fetchedProductsSubscription!: Subscription;

  ngOnInit(): void {
    this.spinner.show();
    this.fetchedProductsSubscription = this.productDataService.newProductFetched
      .subscribe(response => {
        this.products = response;
        this.spinner.hide();
      })
    this.productDataService.fetchProducts();
  }

  addToCart(item: Product) {
    this.cartService.addItemtoCart(item);
  }

  viewDetails(id: number) {
    this.router.navigate(['/details', id])
  }

  ngOnDestroy(): void {
    this.fetchedProductsSubscription.unsubscribe();
  }


}
