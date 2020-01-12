import { Injectable } from '@angular/core';
import { Discount } from './discount-products.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public discountProducts: Discount[] = [];
  constructor() {}
  public pruductSubject$ = new BehaviorSubject<Discount[]>([]);
  public buyProduct(product: Discount): void {
    const dubicateProduct = this.discountProducts.filter(
      e => e.name === product.name
    )[this.discountProducts.filter(e => e.name === product.name).length - 1];
    if (dubicateProduct && dubicateProduct.count > dubicateProduct.countity) {
      dubicateProduct.countity += 1;
    } else if (!dubicateProduct) {
      this.discountProducts.push(product);
      this.pruductSubject$.next(this.discountProducts);
    }
  }
  public countityMinus(index: number) {
    if (this.discountProducts[index].countity > 0) {
      this.discountProducts[index].countity -= 1;
      this.pruductSubject$.next(this.discountProducts);
    }
  }
  public countityAdd(index: number): void {
    if (
      this.discountProducts[index].countity < this.discountProducts[index].count
    ) {
      this.discountProducts[index].countity += 1;
      this.pruductSubject$.next(this.discountProducts);
    }
  }
  public confirmBuy() {
    this.discountProducts.forEach(e => (e.count -= e.countity));
    this.discountProducts.forEach(e => (e.countity = 1));
    this.discountProducts = [];
    this.pruductSubject$.next(this.discountProducts);
  }

  public removeProduct(index: number): void {
    this.discountProducts.splice(index, 1);
    this.pruductSubject$.next(this.discountProducts);
  }
}
