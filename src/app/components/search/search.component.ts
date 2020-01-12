import { Component, OnInit } from '@angular/core';
import {
  ChooseCatalogService,
  Catalog
} from 'src/app/shared/choose-catalog.service';
import { Discount } from 'src/app/shared/discount-products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchValue = '';
  public catalogs: Catalog[];
  public searchingProducts: Discount[] = [];
  public searchFinalResult = '';
  constructor(private chooseCatalogService: ChooseCatalogService) {}

  goToAboutThisProductPage(item): void {
    const proCatTitle = this.catalogs
      .find(e =>
        e.catalogs.find(i => i.products.find(o => o.name === item.name))
      )
      .catalogs.find(m => m.products.find(t => t.name === item.name)).title;
    console.log(proCatTitle);
    this.chooseCatalogService.goToAboutThisProduct(item, proCatTitle);
  }
  ngOnInit() {
    this.chooseCatalogService.CatalogSubject$.subscribe(
      e => (this.catalogs = e)
    );
    this.catalogs.forEach(i => {
      i.catalogs.forEach(k => {
        k.products.forEach(element => {
          this.searchingProducts.push(element);
        });
      });
    });
  }
}
