import { Component, OnInit } from '@angular/core';
import { Banda } from 'src/app/models/banda';
import { Evento } from 'src/app/models/evento';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-list-eventos',
  templateUrl: './list-eventos.component.html',
  styleUrls: ['./list-eventos.component.css'],
})
export class ListEventosComponent implements OnInit {
  eventos: Evento[] = [];

  constructor(private eventoServices: EventosService) {}

  ngOnInit(): void {
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
