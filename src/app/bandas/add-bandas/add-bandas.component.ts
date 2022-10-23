import { Component, OnInit } from '@angular/core';
import { BandasService } from 'src/app/services/bandas.service';

@Component({
  selector: 'app-add-bandas',
  templateUrl: './add-bandas.component.html',
  styleUrls: ['./add-bandas.component.css'],
})
export class AddBandasComponent implements OnInit {
  constructor(private bandaService: BandasService) {}

  ngOnInit(): void {}
  addBanda(data: any) {
    for (let key in data){
      if (!key){
           return alert("El campo "+key+" esta vacío");
      }
  }
    this.bandaService
      .addBandas(data.nombre, data.poblacion)
      .subscribe((res) => {
        return alert(res.data);
      });
  }
}
