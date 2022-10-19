import { Component, OnInit } from '@angular/core';
import { Banda } from 'src/app/models/banda';
import { BandasService } from 'src/app/services/bandas.service';


@Component({
  selector: 'app-listar-bandas',
  templateUrl: './listar-bandas.component.html',
  styleUrls: ['./listar-bandas.component.css']
})


export class ListarBandasComponent implements OnInit {
 bandas: Banda[]=[];
  constructor(private bandaService: BandasService) {}

  ngOnInit(): void {
    this.cargarBandas();
  }

  async cargarBandas(){
    this.bandaService.getBandas().subscribe(res=>{ 
      
    this.bandas=res;
},
(err) =>{
  console.table(err);
}
    );    
  }

}