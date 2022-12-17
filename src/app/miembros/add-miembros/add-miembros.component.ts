
import { Component, OnInit } from '@angular/core';
import { Utilidades } from 'src/app/app.utilidades';
import { Token } from 'src/app/models/token';
import { MiembrosService } from 'src/app/services/miembros.service';


@Component({
  selector: 'app-add-miembros',
  templateUrl: './add-miembros.component.html',
  styleUrls: ['./add-miembros.component.css']
})
export class AddMiembrosComponent implements OnInit {
  public esDirector: boolean = false;
  public token :Token={
    id: '',
    nombre: '',
    director: false
  }

  constructor(private miembroServices:MiembrosService,private utilidades:Utilidades) {

   }
  ngOnInit(): void {
  /* this.token  = this.utilidades.compruebaToken(); */
  this.utilidades.compruebaToken().then(res=>{
    this.token= res;
  });
  }

  addMiembro(data: any) {
    let res = this.utilidades.compruebaFormulario(data);
    if (!res.ok) alert (res.msg);
    //TODO: Añadir el checkbox para poder decidir si es un director o no. (solo los directores,q llevan D en el token pueden verlo)
    data.director = this.esDirector;

    this.miembroServices.addMiembros(data.nif,data.nombre, data.apellido1, data.apellido2,data.instrumento, data.telefono,
       data.director,data.pin)
    .subscribe(res =>{
      debugger;
      if (res.ok){
        var resetForm = <HTMLFormElement>document.getElementById('addMiembroForm');
        resetForm.reset();
        }
      return alert(res.msg);
    });
  }

}
