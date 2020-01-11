import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ProductsSnndamterq from './productsSnndamterq';
import ProductsTntesakan from './productsTntesakan';
import { Akcia, Feedback } from './akcia-products.service';

export interface Catalog {
  title: string;
  isActive: boolean;
  catalogs: Array<{ title: string; products: Akcia[] }>;
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
  public ActiveCatalog$ = new BehaviorSubject<Catalog>(this.catalogSnndamterq);
  public ShowProductSubject$ = new BehaviorSubject<Catalog>(
    this.catalogSnndamterq[1]
  );
  public SearchTntesakanSubject$ = new BehaviorSubject<Akcia[]>([]);
  public SearchSnndamterqSubject$ = new BehaviorSubject<Akcia[]>([]);
  public abouthProductSubject$ = new BehaviorSubject<Akcia>({
    name: '',
    oldPrice: 0,
    newPrice: 0,
    count: 0,
    countity: 1,
    text: '',
    date: new Date().getTime(),
    feedbacks: []
  });

  goToAboutThisProduct(product, proCatTitle: string): void {
    this.proCatTitleForFeedback = proCatTitle;
    this.abouthProductSubject$.next(product);
  }

  search() {}

  addFeedBack(feedBack: Feedback, productName: string): void {
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
    addingItem: Akcia,
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
