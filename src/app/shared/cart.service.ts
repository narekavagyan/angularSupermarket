import { Injectable } from '@angular/core';
import { Akcia } from './akcia-products.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public akciaProducts: Akcia[] = [];
  constructor() {}
  public pruductSubject$ = new BehaviorSubject<Akcia[]>([]);
  public buyProduct(product: Akcia): void {
    const dubicateProduct = this.akciaProducts.filter(
      e => e.name === product.name
    )[this.akciaProducts.filter(e => e.name === product.name).length - 1];
    if (dubicateProduct && dubicateProduct.count > dubicateProduct.countity) {
      dubicateProduct.countity += 1;
    } else if (!dubicateProduct) {
      this.akciaProducts.push(product);
      this.pruductSubject$.next(this.akciaProducts);
    }
  }
  countityMinus(index: number) {
    if (this.akciaProducts[index].countity > 0) {
      this.akciaProducts[index].countity -= 1;
      this.pruductSubject$.next(this.akciaProducts);
    }
  }
  countityAdd(index: number): void {
    if (this.akciaProducts[index].countity < this.akciaProducts[index].count) {
      this.akciaProducts[index].countity += 1;
      this.pruductSubject$.next(this.akciaProducts);
    }
  }
  confirmBuy() {
    this.akciaProducts.forEach(e => (e.count -= e.countity));
    this.akciaProducts.forEach(e => (e.countity = 1));
    this.akciaProducts = [];
    this.pruductSubject$.next(this.akciaProducts);
  }

  removeProduct(index: number): void {
    this.akciaProducts.splice(index, 1);
    this.pruductSubject$.next(this.akciaProducts);
  }
}
