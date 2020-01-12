import { Component, OnInit } from '@angular/core';
import {
  DiscountProductsService,
  Discount
} from 'src/app/shared/discount-products.service';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-akcia-products',
  templateUrl: './discount-products.component.html',
  styleUrls: ['./discount-products.component.scss']
})
export class DiscountProductsComponent implements OnInit {
  public discount: Discount[];
  public isClosed = false;
  constructor(
    public discountProductsService: DiscountProductsService,
    public cartService: CartService
  ) {}

  countityAdd(index: number): void {
    this.discountProductsService.countityAdd(index);
  }
  countityMinus(index: number): void {
    this.discountProductsService.countityMinus(index);
  }
  buyProduct(item: Discount): void {
    this.cartService.buyProduct(item);
    alert('Ապրանքն ավելացված է Զամբյուղում');
  }

  ngOnInit() {
    this.discountProductsService.discountSubject$.subscribe(
      e => (this.discount = e)
    );

    this.discountProductsService.openSubject$.subscribe(
      i => (this.isClosed = i)
    );
  }
}
