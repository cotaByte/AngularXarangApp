import { Component, OnInit } from '@angular/core';
import { Utilidades } from 'src/app/app.utilidades';
import { Evento } from 'src/app/models/evento';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-list-eventos',
  templateUrl: './list-eventos.component.html',
  styleUrls: ['../../app.component.css'],
})
export class ListEventosComponent implements OnInit {
  eventos: Evento[] = [];

  constructor(private eventoServices: EventosService, private utilidades: Utilidades) {}

  ngOnInit(): void {
    let token= this.utilidades.compruebaToken()
    this.cargarEventos();
  }

  async cargarEventos() {
    this.eventoServices.getEventos().subscribe(
      (res) => {
        this.eventos = res;
      },
      (err) => {
        console.table(err);
      }
    );
  }
}
