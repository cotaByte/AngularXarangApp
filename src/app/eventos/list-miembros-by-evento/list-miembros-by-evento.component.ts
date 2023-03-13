import { Component, OnInit } from '@angular/core';
import { Miembro } from 'src/app/models/miembro';
import { ActivatedRoute,Router } from '@angular/router';
import { Token } from 'src/app/models/token';
import { Utilidades } from 'src/app/app.utilidades';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-list-miembros-by-evento',
  templateUrl: './list-miembros-by-evento.component.html',
  styleUrls: ['../../app.component.css'],

})
export class ListMiembrosByEventoComponent implements OnInit {
  miembros: Miembro[] = [];
  token :Token={
    id: '',
    nombre: '',
    id_instrumento:0,
    director: false
  };
  inscrito : boolean = false;
  id_evento : string = this.activatedRoute.snapshot.paramMap.get('id_evento') ||'';
  nombre_evento: string = '';

  constructor(private activatedRoute: ActivatedRoute,private route:Router ,private Utilidades: Utilidades ,private eventosServices: EventosService) { 

  }

  ngOnInit(): void {
    this.Utilidades.compruebaToken().then(res=>{
      this.token = res;
       if (this.id_evento)this.cargarMiembrosByEvento( this.id_evento);
       else console.log("No se ha especificado un evento");
    });
  }

  async cargarMiembrosByEvento(id_evento:string){
    
    this.eventosServices.getMiembrosByEvento( id_evento).subscribe(
      (res) => {
        this.miembros = res.data;
        this.nombre_evento = res.nombre_evento.nombre;
      },
      (err) => {
        console.table(err);
      }
    );

  }

}
