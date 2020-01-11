import { Component, OnInit } from '@angular/core';
import {
  AkciaProductsService,
  Akcia
} from 'src/app/shared/akcia-products.service';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-akcia-products',
  templateUrl: './akcia-products.component.html',
  styleUrls: ['./akcia-products.component.scss']
})
export class AkciaProductsComponent implements OnInit {
  public akcia: Akcia[];
  public isClosed = false;
  constructor(
    public akciaProductService: AkciaProductsService,
    public cartService: CartService
  ) {}

  countityAdd(index: number): void {
    this.akciaProductService.countityAdd(index);
  }
  countityMinus(index: number): void {
    this.akciaProductService.countityMinus(index);
  }
  buyProduct(item: Akcia): void {
    this.cartService.buyProduct(item);
    alert('Ապրանքն ավելացված է Զամբյուղում');
  }

  ngOnInit() {
    this.akciaProductService.akciSubject$.subscribe(e => (this.akcia = e));
    this.akciaProductService.openSubject$.subscribe(i => (this.isClosed = i));
  }
}
