import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ProductsSnndamterq from './productsSnndamterq';
import ProductsTntesakan from './productsTntesakan';
import { Discount, Feedback } from './discount-products.service';

export interface Catalog {
  title: string;
  isActive: boolean;
  catalogs: Array<{ title: string; isActive: boolean; products: Discount[] }>;
}
@Injectable({
  providedIn: 'root'
})
export class ChooseCatalogService {
  public proCatTitleForFeedback: string;
  public catalogTntesakan: Catalog = ProductsTntesakan;
  public catalogSnndamterq: Catalog = ProductsSnndamterq;
  public catalogs: Catalog[] = [this.catalogTntesakan, this.catalogSnndamterq];
  public CatalogSubject$ = new BehaviorSubject<Catalog[]>(this.catalogs);
  public ActiveCatalog$ = new BehaviorSubject<Catalog>(this.catalogTntesakan);
  public ShowProductSubject$ = new BehaviorSubject<Catalog>(
    this.catalogSnndamterq[1]
  );
  public SearchTntesakanSubject$ = new BehaviorSubject<Discount[]>([]);
  public SearchSnndamterqSubject$ = new BehaviorSubject<Discount[]>([]);
  public aboutProductSubject$ = new BehaviorSubject<Discount>({
    name: '',
    oldPrice: 0,
    newPrice: 0,
    count: 0,
    countity: 1,
    text: '',
    date: new Date().getTime(),
    feedbacks: []
  });

  public goToAboutThisProduct(product, proCatTitle: string): void {
    this.proCatTitleForFeedback = proCatTitle;
    this.aboutProductSubject$.next(product);
  }
  public addFeedBack(feedBack: Feedback, productName: string): void {
    if (productName) {
      this.catalogs
        .find(e =>
          e.catalogs.find(l => l.title === this.proCatTitleForFeedback)
        )
        .catalogs.find(k => k.title === this.proCatTitleForFeedback)
        .products.find(p => p.name === productName)
        .feedbacks.push(feedBack);
    }
  }
  public activate(catalog: Catalog, i: number): void {
    this.ActiveCatalog$.next(catalog);
    this.catalogs.map(e => (e.isActive = false));
    this.catalogs[i].isActive = true;
  }
  public showProducts(item: Catalog) {
    this.catalogs.map(e =>
      e.catalogs.map(i =>
        i.title !== item.title ? (i.isActive = false) : (i.isActive = true)
      )
    );
    this.ShowProductSubject$.next(item);
  }
  public addCountity(item, index: number): void {
    if (item.products[index].countity < item.products[index].count) {
      item.products[index].countity += 1;
    }
  }
  public countityMinus(item, index: number): void {
    if (item.products[index].countity > 0) {
      item.products[index].countity -= 1;
    }
  }
  public addItem(
    addingItem: Discount,
    categoryName: string,
    subCategoryName: string
  ) {
    const category = this.catalogs.find(e => e.title === categoryName);
    const subCategory = category.catalogs.find(
      l => l.title === subCategoryName
    );
    const adding = subCategory.products.find(l => l.name === addingItem.name);
    if (!adding) {
      subCategory.products.push(addingItem);
    } else {
      adding.count += 1;
    }
  }
}
