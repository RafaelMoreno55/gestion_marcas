import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonProductsComponent } from './amazon-products.component';

describe('AmazonProductsComponent', () => {
  let component: AmazonProductsComponent;
  let fixture: ComponentFixture<AmazonProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
