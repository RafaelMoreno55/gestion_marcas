import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualManagementComponent } from './visual-management.component';

describe('VisualManagementComponent', () => {
  let component: VisualManagementComponent;
  let fixture: ComponentFixture<VisualManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
