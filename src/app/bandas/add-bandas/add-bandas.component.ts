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
    if (!data.poblacion) {
      return alert('Debes introducir una poblacion válido');
    }
    if (!data.nombre) {
      return alert('Debes introducir nombre una poblacion válido');
    }
    this.bandaService
      .addBandas(data.nombre, data.poblacion)
      .subscribe((res) => {
        alert(res.data);
      });
  }

  styleUrls: ['./add-bandas.component.css']
})
export class AddBandasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
