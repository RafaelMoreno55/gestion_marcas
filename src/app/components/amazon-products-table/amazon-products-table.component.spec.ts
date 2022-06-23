import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonProductsTableComponent } from './amazon-products-table.component';

describe('AmazonProductsTableComponent', () => {
  let component: AmazonProductsTableComponent;
  let fixture: ComponentFixture<AmazonProductsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonProductsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
