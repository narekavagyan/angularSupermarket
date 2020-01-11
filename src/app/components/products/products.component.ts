import { Component, OnInit } from '@angular/core';
import {
  ChooseCatalogService,
  Catalog
} from 'src/app/shared/choose-catalog.service';
import { Akcia } from 'src/app/shared/akcia-products.service';
import { CartService } from 'src/app/shared/cart.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public sorting = 'ամսաթվի';
  public product: Catalog;
  constructor(
    public catalogService: ChooseCatalogService,
    private cartService: CartService
  ) {}
  goToAboutThisProduct(product, proCatTitle: string) {
    this.catalogService.goToAboutThisProduct(product, proCatTitle);
  }
  countityAdd(item: Catalog, index: number): void {
    console.log(index);
    this.catalogService.addCountity(item, index);
  }
  countityMinus(item: Catalog, index: number): void {
    this.catalogService.countityMinus(item, index);
  }
  buyProduct(item: Akcia): void {
    this.cartService.buyProduct(item);
    alert('Ապրանքն ավելացված է Զամբյուղում');
  }

  ngOnInit() {
    this.catalogService.ShowProductSubject$.subscribe(e => (this.product = e));
  }
}
