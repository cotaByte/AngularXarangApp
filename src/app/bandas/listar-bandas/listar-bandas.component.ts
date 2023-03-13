import { Component, OnInit } from '@angular/core';
import { TOKEN } from 'src/app/app.constants';
import { Utilidades } from 'src/app/app.utilidades';
import { Banda } from 'src/app/models/banda';
import { Token } from 'src/app/models/token';
import { BandasService } from 'src/app/services/bandas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-bandas',
  templateUrl: './listar-bandas.component.html',
  styleUrls: ['../../app.component.css'],
})
export class ListarBandasComponent implements OnInit {
  bandas: Banda[] = [];
  public esDirector: boolean = false;
  token :Token={
    id: '',
    nombre: '',
    id_instrumento:0,
    director: false
  };
  constructor(
    private bandaService: BandasService,
    private utilidades: Utilidades,
    private router:Router
  ) {}

  ngOnInit(): void {

    /* this.token  = this.utilidades.compruebaToken(); */
    this.utilidades.compruebaToken().then(res=>{
      this.token= res;
    });
    this.cargarBandas();
  }

  async cargarBandas() {
    this.bandaService.getBandas().subscribe(
      (res) => {
        this.bandas = res;
      },
      (err) => {
        console.table(err);
      }
    );
  }

  eliminarBanda(id_banda :string){
    let  token = TOKEN;
    if (confirm("Está a punto de eliminar una banda, quiere continuar?")){
      this.bandaService.deleteBanda(id_banda).subscribe(res=>{
        if (res.ok){
          this.cargarBandas();
          return alert(res.msg);
        }
      }
      );
    }
    
  }

  verMiembros(id_banda:string){
    this.router.navigate(['listMiembrosByBanda', id_banda]);
  }

}
