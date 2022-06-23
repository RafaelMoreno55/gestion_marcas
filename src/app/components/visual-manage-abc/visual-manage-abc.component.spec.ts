import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualManageAbcComponent } from './visual-manage-abc.component';

describe('VisualManageAbcComponent', () => {
  let component: VisualManageAbcComponent;
  let fixture: ComponentFixture<VisualManageAbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualManageAbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualManageAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
