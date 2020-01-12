import { Component, OnInit } from '@angular/core';
import { Discount } from 'src/app/shared/discount-products.service';
import { CartService } from 'src/app/shared/cart.service';
import { User, UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public user: User;
  public products: Discount[];
  public isLogged = false;
  constructor(
    public cartService: CartService,
    private userService: UserService
  ) {}
  countityAdd(index: number): void {
    this.cartService.countityAdd(index);
  }
  countityMinus(index: number): void {
    this.cartService.countityMinus(index);
  }

  removeProduct(index: number): void {
    this.cartService.removeProduct(index);
  }

  confirmBuy() {
    this.cartService.confirmBuy();
  }
  ngOnInit() {
    this.cartService.pruductSubject$.subscribe(e => (this.products = e));
    this.userService.userIslogged$.subscribe(k => (this.isLogged = k));
  }
}
