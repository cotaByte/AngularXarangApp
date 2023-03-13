import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Miembro } from 'src/app/models/miembro';
import { Token } from 'src/app/models/token';
import { Utilidades } from 'src/app/app.utilidades';
import { MiembrosService } from 'src/app/services/miembros.service';

@Component({
  selector: 'app-list-miembros-by-banda',
  templateUrl: './list-miembros-by-banda.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListMiembrosByBandaComponent implements OnInit {
  miembros: Miembro[] = [];
  token :Token={
    id: '',
    nombre: '',
    id_instrumento:0,
    director: false
  };
  id_banda : string = this.activatedRoute.snapshot.paramMap.get('id_banda') ||'';
  nombre_banda: string = '';

  constructor(private activatedRoute: ActivatedRoute,private route:Router ,private Utilidades: Utilidades ,private miembrosServices: MiembrosService) { }

  ngOnInit(): void {
    this.Utilidades.compruebaToken().then(res=>{
      this.token = res;
       if (this.id_banda)this.cargarMiembrosByBanda( this.id_banda);
       else console.log("No se ha especificado un evento");
    });
  }


  async cargarMiembrosByBanda(id_banda:string){
    this.miembrosServices.getMiembrosByBanda(id_banda).subscribe(res=>{
      this.miembros=res.data;
      this.nombre_banda=res.nombre_banda.nombre;
    },
    (err) => {
      console.table(err);
    });
  }

}
