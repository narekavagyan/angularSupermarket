import { Component, OnInit } from '@angular/core';
import {
  ChooseCatalogService,
  Catalog
} from '../../shared/choose-catalog.service';
import { DiscountProductsService } from 'src/app/shared/discount-products.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public catalogs: Catalog[];
  constructor(
    public catalogService: ChooseCatalogService,
    public akciaService: DiscountProductsService
  ) {}
  activate(catalog: Catalog, index: number): void {
    this.catalogService.activate(catalog, index);
  }
  show(): void {
    this.akciaService.show();
  }

  ngOnInit() {
    this.catalogService.CatalogSubject$.subscribe(e => (this.catalogs = e));
    this.catalogs.map(e => (e.isActive = false));
    this.catalogs[0].isActive = true;
  }
}
