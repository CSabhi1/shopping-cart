import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'ngx-bootstrap/rating';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth-module/login/login.component';
import { RegisterComponent } from './auth-module/register/register.component';
import { ListViewComponent } from './home-module/list-view/list-view.component';
import { DetailsViewComponent } from './home-module/details-view/details-view.component';
import { CartComponent } from './home-module/cart/cart.component';
import { HeaderComponent } from './navigation/header/header.component';
import { AuthService } from './auth-module/auth.service';
import { ProductDataService } from './home-module/product-data.service';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarRatingModule } from "ngx-bar-rating";
import { CartService } from './home-module/cart.services';
import { LocationStrategy } from '@angular/common';
import { HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListViewComponent,
    DetailsViewComponent,
    CartComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RatingModule.forRoot(),
    BrowserAnimationsModule,
    BarRatingModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },AuthService,ProductDataService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
