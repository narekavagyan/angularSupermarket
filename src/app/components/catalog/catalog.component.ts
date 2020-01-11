import { Component, OnInit } from '@angular/core';
import {
  ChooseCatalogService,
  Catalog
} from '../../shared/choose-catalog.service';
import { AkciaProductsService } from 'src/app/shared/akcia-products.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public catalogs: Catalog[];
  constructor(
    public catalogService: ChooseCatalogService,
    public akciaService: AkciaProductsService
  ) {}
  activate(catalog: Catalog, i: number): void {
    this.catalogService.activate(catalog, i);
  }
  show(): void {
    this.akciaService.show();
  }

  ngOnInit() {
    this.catalogService.CatalogSubject$.subscribe(e => (this.catalogs = e));
    this.catalogs.map(e => (e.isActive = false));
  }
}
