import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '../components/signup/signup.component';
import { LoginComponent } from '../components/login/login.component';
import { MainComponent } from '../components/main/main.component';
import { CartComponent } from '../components/cart/cart.component';
import { AdminPageComponent } from '../components/admin-page/admin-page.component';
import { AboutProductComponent } from '../components/about-product/about-product.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: MainComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'aboutProduct', component: AboutProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
