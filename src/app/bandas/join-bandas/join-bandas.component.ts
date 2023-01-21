import { Component, OnInit } from '@angular/core';
import { Banda } from 'src/app/models/banda';
import { BandasService } from 'src/app/services/bandas.service';
import {TOKEN} from 'src/app/app.constants';
import {Router } from '@angular/router';
import { Utilidades } from 'src/app/app.utilidades';

@Component({
  selector: 'app-join-bandas',
  templateUrl: './join-bandas.component.html',
  styleUrls: ['../../app.component.css']
})
export class JoinBandasComponent implements OnInit {
  bandas: Banda[] =[];

  constructor(private utilidades:Utilidades,private bandaService : BandasService, private route: Router ) { }

  ngOnInit(): void {

     this.utilidades.compruebaToken().then(token=>{
      if (token.id!=''){
        this.cargarJoinBandas(token);        
      }
     });
  }
 async cargarJoinBandas(token:any){
  this.bandaService.getJoinBandas(token.id).subscribe(res=>{
    this.bandas = res;
  },
  err=>{
    console.log (err);
  });
 }

 joinBanda(id_banda:string){
  let token = TOKEN.id;
  this.bandaService.joinBandas(token,id_banda).subscribe(res=>{
    if(res.ok){
      this.cargarJoinBandas(TOKEN);
      return alert(res.msg);
    }else {
      alert (res.msg);
    }
  });
 }
}
