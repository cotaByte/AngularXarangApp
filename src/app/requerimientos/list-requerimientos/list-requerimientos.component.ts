import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Utilidades } from 'src/app/app.utilidades';
import { requerimientoBanda } from 'src/app/models/requerimientoBanda';
import { Token } from 'src/app/models/token';
import { RequerimientosService } from 'src/app/services/requerimientos.service';
@Component({
  selector: 'app-list-requerimientos',
  templateUrl: './list-requerimientos.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListRequerimientosComponent implements OnInit {
  requires: requerimientoBanda[] = [];
  token :Token={
    id: '',
    nombre: '',
    id_instrumento:0,
    director: false
  };
  inscrito : boolean = false;
  id_evento : string = this.activatedRoute.snapshot.paramMap.get('id_evento') ||'';

  constructor(private activatedRoute: ActivatedRoute,private route:Router ,private Utilidades: Utilidades, private requerimientosService : RequerimientosService) { }

  ngOnInit(): void {
    this.Utilidades.compruebaToken().then(res=>{
      this.token = res;
       if (this.id_evento)this.cargarRequerimientos(this.token.id, this.id_evento);
       else console.log("No se ha especificado un evento");
    });
  }


  async cargarRequerimientos(token:string, id_evento:string){
      this.requerimientosService.getRequerimientosEvento(token, id_evento).subscribe(
        (res) => {
          this.requires = res.data;
          this.inscrito=res.inscrito;
        },
        (err) => {
          console.table(err);
        }
      );
    }

    addRequerimientoEvento(){
      this.route.navigate(['/addRequerimiento',this.id_evento]);
    }
  }



