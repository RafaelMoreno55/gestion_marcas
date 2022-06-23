import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAbcComponent } from './manage-abc.component';

describe('ManageAbcComponent', () => {
  let component: ManageAbcComponent;
  let fixture: ComponentFixture<ManageAbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
