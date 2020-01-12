import { Component, OnInit } from '@angular/core';
import {
  ChooseCatalogService,
  Catalog
} from 'src/app/shared/choose-catalog.service';
import { Discount } from 'src/app/shared/discount-products.service';
import { CartService } from 'src/app/shared/cart.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public pageNumber = 1;
  public sorting = 'ամսաթվի';
  public product: Catalog;
  constructor(
    public catalogService: ChooseCatalogService,
    private cartService: CartService
  ) {}
  public goToAboutThisProduct(product, proCatTitle: string) {
    this.catalogService.goToAboutThisProduct(product, proCatTitle);
  }
  public countityAdd(item: Catalog, index: number): void {
    this.catalogService.addCountity(item, index);
  }
  public countityMinus(item: Catalog, index: number): void {
    this.catalogService.countityMinus(item, index);
  }
  public buyProduct(item: Discount): void {
    this.cartService.buyProduct(item);
    alert('Ապրանքն ավելացված է Զամբյուղում');
  }

  ngOnInit() {
    this.catalogService.ShowProductSubject$.subscribe(e => (this.product = e));
  }
}
