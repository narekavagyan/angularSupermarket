import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkciaProductsComponent } from './akcia-products.component';

describe('AkciaProductsComponent', () => {
  let component: AkciaProductsComponent;
  let fixture: ComponentFixture<AkciaProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkciaProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkciaProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
