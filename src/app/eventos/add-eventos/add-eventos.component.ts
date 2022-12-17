import { ExpressionType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Utilidades } from 'src/app/app.utilidades';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-add-eventos',
  templateUrl: './add-eventos.component.html',
  styleUrls: ['./add-eventos.component.css'],
})
export class AddEventosComponent implements OnInit {
  constructor(
    private eventoService: EventosService,
    private utilidades: Utilidades
  ) {}

  ngOnInit(): void {
    let token = this.utilidades.compruebaToken();
  }

  addEvento(data: any) {

    let res = this.utilidades.compruebaFormulario(data);
    if (!res.ok) return alert(res.msg);

    this.eventoService
      .addEvento(data.nombre, data.ubicacion, data.fecha_evento)
      .subscribe((res) => {
        if (res.ok){
          var resetForm = <HTMLFormElement>document.getElementById('addEventoForm');
          resetForm.reset();
        }
        return alert(res.msg);
      });
  }
}
