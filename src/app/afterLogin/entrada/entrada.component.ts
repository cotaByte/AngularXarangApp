import { Component, OnInit } from '@angular/core';
import { Utilidades } from 'src/app/app.utilidades';
import { Router } from '@angular/router'; 
import { Token } from 'src/app/models/token';
import { Evento } from 'src/app/models/evento';
import { EventosService } from 'src/app/services/eventos.service';
@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  eventos: Evento[] = [];
  token :Token={
    id: '',
    nombre: '',
    id_instrumento:0,
    director: false
  }

  constructor(private utilidades: Utilidades, private route:Router , private eventosService:EventosService) { }

  ngOnInit(): void {
    
    this.utilidades.compruebaToken().then(res=>{
      this.token= res;
      this.cargarEventosByMiembro(this.token.id);
    });
    
      }
      
    
  async cargarEventosByMiembro(token:string){
    this.eventosService.getEventosByMiembro(token).subscribe(
      (res) => {
        this.eventos= res;
        console.table(res);
      },
      (err) => {
        console.table(err);
      }
    );
  }
    
  }


