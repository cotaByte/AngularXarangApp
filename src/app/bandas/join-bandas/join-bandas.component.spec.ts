import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinBandasComponent } from './join-bandas.component';

describe('JoinBandasComponent', () => {
  let component: JoinBandasComponent;
  let fixture: ComponentFixture<JoinBandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinBandasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinBandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
