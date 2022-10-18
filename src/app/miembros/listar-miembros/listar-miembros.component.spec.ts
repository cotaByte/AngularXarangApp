import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMiembrosComponent } from './listar-miembros.component';

describe('ListarMiembrosComponent', () => {
  let component: ListarMiembrosComponent;
  let fixture: ComponentFixture<ListarMiembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMiembrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
