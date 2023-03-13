import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMiembrosByBandaComponent } from './list-miembros-by-banda.component';

describe('ListMiembrosByBandaComponent', () => {
  let component: ListMiembrosByBandaComponent;
  let fixture: ComponentFixture<ListMiembrosByBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMiembrosByBandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMiembrosByBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
