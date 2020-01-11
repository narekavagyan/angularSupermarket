import { Injectable } from '@angular/core';
import RandomObjects from './akciaProducts';
import { BehaviorSubject } from 'rxjs';

export interface Feedback {
  feedback: string;
  userName: string;
  email: string;
}
export interface Akcia {
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
export class AkciaProductsService {
  public open = true;
  public close = false;
  public akciaproducts: Akcia[] = RandomObjects().splice(27);
  public akciSubject$ = new BehaviorSubject<Akcia[]>(this.akciaproducts);
  public openSubject$ = new BehaviorSubject<boolean>(this.open);
  public countityAdd(index: number): void {
    if (this.akciaproducts[index].countity < this.akciaproducts[index].count) {
      this.akciaproducts[index].countity += 1;
      this.akciSubject$.next(this.akciaproducts);
    }
  }

  public countityMinus(index: number): void {
    if (this.akciaproducts[index].countity > 0) {
      this.akciaproducts[index].countity -= 1;
      this.akciSubject$.next(this.akciaproducts);
    }
  }
  public show() {
    this.openSubject$.next(this.open);
  }
  public closeAkcia() {
    this.openSubject$.next(this.close);
  }
  constructor() {}
}
