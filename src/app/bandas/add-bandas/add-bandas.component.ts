import { Component, OnInit } from '@angular/core';
import { Utilidades } from 'src/app/app.utilidades';
import { BandasService } from 'src/app/services/bandas.service';
@Component({
  selector: 'app-add-bandas',
  templateUrl: './add-bandas.component.html',
  styleUrls: ['./add-bandas.component.css'],
})
export class AddBandasComponent implements OnInit {
  constructor(private bandaService: BandasService , private utilidades: Utilidades ) {}

  ngOnInit(): void {
    this.utilidades.compruebaToken();
  }

  addBanda(data: any) {
    let res  = this.utilidades.compruebaFormulario(data);
    if (!res.ok) return alert (res.msg);
    
    this.bandaService.addBandas(data.nombre, data.poblacion).subscribe((res) => {
        if (res.ok){
          var resetForm = <HTMLFormElement>document.getElementById('addBandaForm');
          resetForm.reset();
        }
        return alert(res.msg);
      });
  }
}
