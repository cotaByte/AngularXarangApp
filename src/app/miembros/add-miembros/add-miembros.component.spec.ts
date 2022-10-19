import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMiembrosComponent } from './add-miembros.component';

describe('AddMiembrosComponent', () => {
  let component: AddMiembrosComponent;
  let fixture: ComponentFixture<AddMiembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMiembrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
