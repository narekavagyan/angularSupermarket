import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './settings/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogItemsComponent } from './components/catalog-items/catalog-items.component';

import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { DiscountProductsComponent } from './components/discount-products/discount-products.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { SortPipe } from './pipes/sort.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { AboutProductComponent } from './components/about-product/about-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatalogComponent,
    CatalogItemsComponent,
    SignupComponent,
    LoginComponent,
    MainComponent,
    DiscountProductsComponent,
    CartComponent,
    ProductsComponent,
    SearchComponent,

    FooterComponent,

    AdminPageComponent,

    SortPipe,

    SearchPipe,

    AboutProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
