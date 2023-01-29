import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilidades } from 'src/app/app.utilidades';
import { Evento } from 'src/app/models/evento';
import { Token } from 'src/app/models/token';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-list-eventos',
  templateUrl: './list-eventos.component.html',
  styleUrls: ['../../app.component.css'],
})
export class ListEventosComponent implements OnInit {
  eventos: Evento[] = [];
  token :Token={
    id: '',
    nombre: '',
    id_instrumento:0,
    director: false
  }

  constructor(private eventoServices: EventosService, private utilidades: Utilidades, public route: Router) {}

  ngOnInit(): void {

    this.utilidades.compruebaToken().then(res=>{
      this.token= res;
    });
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

  eliminarEvento(id_evento: string){
    if (!this.token) this.utilidades.logOut();
    if (confirm("Está a punto de eliminar un evento, quiere continuar?")){
      this.eventoServices.removeEvent(id_evento).subscribe(res=>{
        if(res.ok){
          this.cargarEventos();
        } 
        alert(res.msg); 
      });
    }
  }

  cerrarEvento(id_evento:string){
    if (!this.token) this.utilidades.logOut();
    if (confirm("Está a punto de cerrar un evento, esto lo marcará como finiquitado\n desea contiuar?")){
      this.eventoServices.closeEvent(id_evento).subscribe(res=>{
        if (res.ok){
          this.cargarEventos();
        }
        alert(res.msg);
      });
    }
  }

  verRequerimientos(id_evento:string){
      this.route.navigate(['/listRequerimientos',id_evento]);
  }
}
