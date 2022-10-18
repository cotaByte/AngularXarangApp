import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBandasComponent } from './add-bandas.component';

describe('AddBandasComponent', () => {
  let component: AddBandasComponent;
  let fixture: ComponentFixture<AddBandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBandasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
