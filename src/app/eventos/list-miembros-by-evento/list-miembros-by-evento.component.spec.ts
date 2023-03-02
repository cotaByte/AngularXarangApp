import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMiembrosByEventoComponent } from './list-miembros-by-evento.component';

describe('ListMiembrosByEventoComponent', () => {
  let component: ListMiembrosByEventoComponent;
  let fixture: ComponentFixture<ListMiembrosByEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMiembrosByEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMiembrosByEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
