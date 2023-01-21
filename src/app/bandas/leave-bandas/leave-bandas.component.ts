import { Component, OnInit } from '@angular/core';
import { Banda } from 'src/app/models/banda';
import { BandasService } from 'src/app/services/bandas.service';
import { Router } from '@angular/router';
import { Utilidades } from 'src/app/app.utilidades';
import { TOKEN } from 'src/app/app.constants';

@Component({
  selector: 'app-leave-bandas',
  templateUrl: './leave-bandas.component.html',
  styleUrls: ['../../app.component.css']
})
export class LeaveBandasComponent implements OnInit {
  bandas: Banda[] =[];
  constructor(private utilidades: Utilidades ,private bandaService : BandasService, private route: Router ) { }


  ngOnInit() { 
    this.utilidades.compruebaToken().then(token=>{
      if (token.id!= '')this.cargarLeaveBandas(token);

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

    let token = TOKEN.id;
  this.bandaService.leaveBandas(token,id_banda).subscribe(res=>{
    if(res.ok){
      this.cargarLeaveBandas(TOKEN);
      return alert(res.msg);
    }else {
      alert (res.msg);
    }


  });



   }
}

