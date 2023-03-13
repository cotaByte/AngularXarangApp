import { Component, OnInit } from '@angular/core';
import { Banda } from 'src/app/models/banda';
import { BandasService } from 'src/app/services/bandas.service';
import { Router } from '@angular/router';
import { Utilidades } from 'src/app/app.utilidades';
import { TOKEN } from 'src/app/app.constants';
import { Token } from 'src/app/models/token';

@Component({
  selector: 'app-leave-bandas',
  templateUrl: './leave-bandas.component.html',
  styleUrls: ['../../app.component.css']
})
export class LeaveBandasComponent implements OnInit {
  bandas: Banda[] =[];
  token :Token={
    id: '',
    nombre: '',
    id_instrumento:0,
    director: false
  };
  constructor(private utilidades: Utilidades ,private bandaService : BandasService, private route: Router ) { }


  ngOnInit() { 
    this.utilidades.compruebaToken().then(res=>{
      this.token=res;
      this.cargarLeaveBandas(this.token);
    });
    
  }

  async cargarLeaveBandas(token:any){
    this.bandaService.getLeaveBandas(token.id).subscribe(res=>{
      this.bandas = res;
    },
    err=>{
      console.log (err);
    });
   }


   leaveBanda(id_banda:string){

    let token = this.token.id;
  this.bandaService.leaveBandas(token,id_banda).subscribe(res=>{
    if(res.ok){
      this.cargarLeaveBandas(this.token);
      return alert(res.msg);
    }else {
      alert (res.msg);
    }


  });



   }
}

