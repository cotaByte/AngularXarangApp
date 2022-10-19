import { Component, OnInit } from '@angular/core';
import { MiembrosService } from 'src/app/services/miembros.service';

@Component({
  selector: 'app-add-miembros',
  templateUrl: './add-miembros.component.html',
  styleUrls: ['./add-miembros.component.css']
})
export class AddMiembrosComponent implements OnInit {

  constructor(private miembroServices:MiembrosService) {

   }

  ngOnInit(): void {
  }

  addMiembro(data: any) {
    //TODO comprobar el tipo numerico de nif, y que los campos esten rellenos. (map por cada valor de data que este relleno)??
    if (!data.nif) {
      return alert('Debes introducir el valor de nif correcto');
    }
    if (!data.nombre) {
      return alert('Debes introducir un nombre valido');
    }
    this.miembroServices.addMiembros(data.nif,data.nombre, data. apellido1, data.apellido2,data.id_instrumento, data.tlf,data.id_banda, data.director,data.pin).subscribe(res =>{
      alert(res.data);
    });
  }

}
