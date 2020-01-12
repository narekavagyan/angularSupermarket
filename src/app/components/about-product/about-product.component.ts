import { Component, OnInit } from '@angular/core';
import { ChooseCatalogService } from 'src/app/shared/choose-catalog.service';
import { Discount, Feedback } from 'src/app/shared/discount-products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.scss']
})
export class AboutProductComponent implements OnInit {
  public FormValidation: FormGroup;
  public typeFeedBack: Feedback = {
    feedback: '',
    userName: '',
    email: ''
  };
  public product: Discount = {
    name: '',
    oldPrice: 0,
    newPrice: 0,
    count: 0,
    countity: 1,
    text: '',
    date: new Date().getTime(),
    feedbacks: []
  };
  constructor(
    public catalogSevric: ChooseCatalogService,
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {
    this.checkForm();
  }

  public checkForm(): void {
    this.FormValidation = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      text: ['', Validators.required]
    });
  }
  public addFeedBack(userName, email, feedback): void {
    if (this.product.name) {
      this.catalogSevric.addFeedBack(
        { userName, email, feedback },
        this.product.name
      );
      this.typeFeedBack.userName = '';
      this.typeFeedBack.feedback = '';
      this.typeFeedBack.email = '';
    }
  }
  public buyProduct(): void {
    this.cartService.buyProduct(this.product);
    alert('Ապրանքն ավելացված է Զամբյուղում');
  }
  public ngOnInit() {
    this.catalogSevric.aboutProductSubject$.subscribe(e => (this.product = e));
  }
}
