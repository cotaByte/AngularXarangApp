import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventosComponent } from './add-eventos.component';

describe('AddEventosComponent', () => {
  let component: AddEventosComponent;
  let fixture: ComponentFixture<AddEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
