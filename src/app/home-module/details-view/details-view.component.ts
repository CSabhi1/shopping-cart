import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.services';
import { ProductDataService } from '../product-data.service';
import { Product } from '../product-model';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
	selector: 'app-details-view',
	templateUrl: './details-view.component.html',
	styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit, OnDestroy {

	private selectedItemId: string;
	selectedItem: Product;
	selectedProductsSubscription: Subscription;
	constructor(private aRoute: ActivatedRoute, 
		private productDataService: ProductDataService, 
		private cartService: CartService,
		private spinner: NgxSpinnerService
		) { }

	ngOnInit(): void {
		this.aRoute.paramMap.subscribe((paramMap: ParamMap) => {
			this.selectedItemId = paramMap.get('id');
			this.spinner.show();
			this.productDataService.getSelectedProduct(Number(this.selectedItemId));
			this.selectedProductsSubscription = this.productDataService.slectedItem.subscribe(res => {
				this.selectedItem = res;
				this.spinner.hide();
			});
		})
	}

	addToCart(item: Product) {
		this.cartService.addItemtoCart(item);
	}

	ngOnDestroy(): void {
		this.selectedProductsSubscription.unsubscribe();
	}

}
