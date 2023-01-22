
import { Component, OnInit } from '@angular/core';
import { Utilidades } from 'src/app/app.utilidades';
import { Token } from 'src/app/models/token';
import { MiembrosService } from 'src/app/services/miembros.service';
import {instrumentos_id_nombre} from 'src/app/app.constants';


@Component({
  selector: 'app-add-miembros',
  templateUrl: './add-miembros.component.html',
  styleUrls: ['../../app.component.css']
})
export class AddMiembrosComponent implements OnInit {

  public esDirector: boolean = false;
  public token :Token={
    id: '',
    nombre: '',
    id_instrumento:0,
    director: false
  }
  array = instrumentos_id_nombre;


  seleccionada: string = '';

  constructor(private miembroServices:MiembrosService,private utilidades:Utilidades) {

   }
  ngOnInit(): void {
  /* this.token  = this.utilidades.compruebaToken(); */
  this.utilidades.compruebaToken().then(res=>{
    console.table(res);
    this.token= res;
  });
  }

  addMiembro(data: any) {
    debugger;
    let res = this.utilidades.compruebaFormulario(data);
    if (!res.ok) alert (res.msg);
    let dniValido= this.utilidades.compruebaLetraDNI(data.dni);
    if (!dniValido) return alert ("La letra introducida para el digito del DNI no es válida");
    //TODO: Añadir el checkbox para poder decidir si es un director o no. (solo los directores,q llevan D en el token pueden verlo)
    data.director = this.esDirector;
    
    this.miembroServices.addMiembros(data.dni,data.nombre, data.apellido1, data.apellido2,data.instrumento, data.telefono,
       data.director,data.pin)
    .subscribe(res =>{
      if (res.ok){
        var resetForm = <HTMLFormElement>document.getElementById('addMiembroForm');
        resetForm.reset();
        }
      return alert(res.msg);
    });
  }




}
