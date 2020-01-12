import { Injectable } from '@angular/core';
import RandomObjects from './discountProducts';
import { BehaviorSubject } from 'rxjs';

export interface Feedback {
  feedback: string;
  userName: string;
  email: string;
}
export interface Discount {
  name: string;
  oldPrice: number;
  newPrice: number;
  count: number;
  countity: number;
  text: string;
  date: number;
  feedbacks: Feedback[];
}

@Injectable({
  providedIn: 'root'
})
export class DiscountProductsService {
  public open = true;
  public close = false;
  public discountProducts: Discount[] = RandomObjects().splice(27);
  public discountSubject$ = new BehaviorSubject<Discount[]>(
    this.discountProducts
  );
  public openSubject$ = new BehaviorSubject<boolean>(this.open);
  public countityAdd(index: number): void {
    if (
      this.discountProducts[index].countity < this.discountProducts[index].count
    ) {
      this.discountProducts[index].countity += 1;
      this.discountSubject$.next(this.discountProducts);
    }
  }

  public countityMinus(index: number): void {
    if (this.discountProducts[index].countity > 0) {
      this.discountProducts[index].countity -= 1;
      this.discountSubject$.next(this.discountProducts);
    }
  }
  public show() {
    this.openSubject$.next(this.open);
  }
  public closeDiscount() {
    this.openSubject$.next(this.close);
  }
  constructor() {}
}
