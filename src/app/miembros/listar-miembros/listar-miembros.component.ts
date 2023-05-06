import { Component, OnInit } from '@angular/core';
import { TOKEN } from 'src/app/app.constants';
import { Utilidades } from 'src/app/app.utilidades';
import { Miembro } from 'src/app/models/miembro';
import { Token } from 'src/app/models/token';
import { MiembrosService } from 'src/app/services/miembros.service';

@Component({
  selector: 'app-listar-miembros',
  templateUrl: './listar-miembros.component.html',

  styleUrls: ['../../app.component.css'],
})
export class ListarMiembrosComponent implements OnInit {
  miembros: Miembro[] = [];
  token :Token={
    id: '',
    nombre: '',
    id_instrumento:0,
    director: false
  }
  constructor(private miembroServices: MiembrosService , private utilidades:Utilidades) {}
  ngOnInit(): void {
    this.utilidades.compruebaToken().then(res=>{
      this.token= res;
    });
    this.cargarMiembros(this.token.id);
  }


  async cargarMiembros(token_id:string) {

    this.miembroServices.getMiembros(token_id).subscribe(
      (res) => {
        this.miembros = res;

      },
      (err) => {
        console.table(err);
      }
    );
  }

  eliminarMiembro(id_miembro: string){
    let token = TOKEN;
    if (!token) return alert ("No se ha podido eliminar el usuario");
    if (confirm("Va a eliminar un miembro, desea continuar? ")){
      console.log("faria faena");
      this.miembroServices.removeMiembro(id_miembro).subscribe(res=>{
        if (res.ok){
          this.cargarMiembros(token.id);
          return alert(res.msg);
        }
      }
      );
    }
  }
}