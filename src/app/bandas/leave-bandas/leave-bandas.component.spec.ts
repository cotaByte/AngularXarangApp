import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveBandasComponent } from './leave-bandas.component';

describe('LeaveBandasComponent', () => {
  let component: LeaveBandasComponent;
  let fixture: ComponentFixture<LeaveBandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveBandasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveBandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
