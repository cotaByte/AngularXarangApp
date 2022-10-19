import { Component, OnInit } from '@angular/core';
import { Miembro } from 'src/app/models/miembro';
import { MiembrosService } from 'src/app/services/miembros.service';

@Component({
  selector: 'app-listar-miembros',
  templateUrl: './listar-miembros.component.html',
  styleUrls: ['./listar-miembros.component.css'],
})
export class ListarMiembrosComponent implements OnInit {
  miembros: Miembro[] = [];
  constructor(private miembroServices: MiembrosService) {}
  ngOnInit(): void {
    this.cargarMiembros();
  }

  async cargarMiembros() {
    this.miembroServices.getMiembros().subscribe(
      (res) => {
        this.miembros = res;
      },
      (err) => {
        console.table(err);
      }
    );
  }
}
