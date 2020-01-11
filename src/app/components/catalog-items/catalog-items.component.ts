import { Component, OnInit } from '@angular/core';
import {
  ChooseCatalogService,
  Catalog
} from '../../shared/choose-catalog.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AkciaProductsService } from 'src/app/shared/akcia-products.service';
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
    public akciaService: AkciaProductsService
  ) {
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
  }
  showProducts(item: Catalog) {
    this.catalogService.showProducts(item);
  }

  close(): void {
    this.akciaService.closeAkcia();
  }
  ngOnInit() {
    this.catalogService.ActiveCatalog$.subscribe(e => (this.catalog = e));
  }
}
