import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth-module/auth.service';
import { CartService } from 'src/app/home-module/cart.services';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

	isAuth: boolean = false;
	totalItems: number = 0;
	authSubscription: Subscription;
	cartItemSubscription: Subscription;

	constructor(private authService: AuthService, private cartService: CartService) { }

	ngOnInit(): void {
		this.authSubscription = this.authService.authChange.subscribe((authStatus) => {
			this.isAuth = authStatus;
		});

		this.cartItemSubscription = this.cartService.totalItem.subscribe((totalItem) => {
			this.totalItems = totalItem;
		});
	}

	logOut() {
		this.authService.loginOut();
	}

	getToatalItems() {
		this.totalItems = this.cartService.getTotalNumber();
	}

	ngOnDestroy() {
		this.authSubscription.unsubscribe();
		this.cartItemSubscription.unsubscribe();
	}

}
