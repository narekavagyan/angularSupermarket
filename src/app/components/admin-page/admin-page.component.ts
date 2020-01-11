import { Component, OnInit } from '@angular/core';
import { Akcia } from 'src/app/shared/akcia-products.service';
import {
  Catalog,
  ChooseCatalogService
} from 'src/app/shared/choose-catalog.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  public FormValidation: FormGroup;
  public categoryName = '';
  public subCategoryName = '';
  public subCategory = [];
  public catalogs: Catalog[];
  public addingItem: Akcia = {
    name: '',
    oldPrice: 0,
    newPrice: 500,
    count: 20,
    countity: 1,
    text: '',
    date: new Date().getTime(),
    feedbacks: []
  };
  constructor(
    private chooseCatalog: ChooseCatalogService,
    private formBuilder: FormBuilder
  ) {
    this.checkForm();
  }

  public checkForm(): void {
    this.FormValidation = this.formBuilder.group({
      name: ['', Validators.required],
      newPrice: ['', Validators.required],
      count: ['', Validators.required]
    });
  }

  showSubCategories() {
    if (this.categoryName !== '') {
      this.subCategory = this.catalogs.find(
        l => l.title === this.categoryName
      ).catalogs;
    }
  }

  addItem(name, newPrice, count, text): void {
    this.chooseCatalog.addItem(
      {
        name,
        newPrice,
        count,
        text,
        countity: 1,
        oldPrice: 0,
        date: new Date().getTime(),
        feedbacks: []
      },
      this.categoryName,
      this.subCategoryName
    );
    this.addingItem.name = '';
    this.addingItem.text = '';
    this.addingItem.newPrice = 0;

    alert('Ապրանքն ավելացված է');
  }

  ngOnInit() {
    this.chooseCatalog.CatalogSubject$.subscribe(e => (this.catalogs = e));
    this.subCategory = this.chooseCatalog.CatalogSubject$['_value'][1].catalogs;
  }
}
