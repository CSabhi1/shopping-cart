import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-module/auth.guard';
import { LoginComponent } from './auth-module/login/login.component';
import { RegisterComponent } from './auth-module/register/register.component';
import { CartComponent } from './home-module/cart/cart.component';
import { DetailsViewComponent } from './home-module/details-view/details-view.component';
import { ListViewComponent } from './home-module/list-view/list-view.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent,canActivate: [AuthGuard] },
  { path: 'details/:id', component: DetailsViewComponent,canActivate: [AuthGuard] },
  { path: 'list', component: ListViewComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
