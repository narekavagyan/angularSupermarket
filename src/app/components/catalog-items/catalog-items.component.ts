import { Component, OnInit } from '@angular/core';
import {
  ChooseCatalogService,
  Catalog
} from '../../shared/choose-catalog.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DiscountProductsService } from 'src/app/shared/discount-products.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-catalog-items',
  templateUrl: './catalog-items.component.html',
  styleUrls: ['./catalog-items.component.scss']
})
export class CatalogItemsComponent implements OnInit {
  public catalog: Catalog;
  constructor(
    public catalogService: ChooseCatalogService,
    public config: NgbCarouselConfig,
    public dicountService: DiscountProductsService
  ) {
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
  }
  public showProducts(item: Catalog): void {
    this.catalogService.showProducts(item);
  }

  public close(): void {
    this.dicountService.closeDiscount();
  }
  ngOnInit() {
    this.catalogService.ActiveCatalog$.subscribe(e => (this.catalog = e));
  }
}
