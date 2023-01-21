import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { instrumentos_id_nombre } from 'src/app/app.constants';
import { Utilidades } from 'src/app/app.utilidades';
import { Token } from 'src/app/models/token';
import { RequerimientosService } from 'src/app/services/requerimientos.service';

@Component({
  selector: 'app-add-requerimiento',
  templateUrl: './add-requerimiento.component.html',
  styleUrls: ['../../app.component.css']
})
export class AddRequerimientoComponent implements OnInit {
  token :Token={
    id: '',
    nombre: '',
    id_instrumento:0,
    director: false
  };
  array = instrumentos_id_nombre;
  seleccionada: string = '';
  id_evento= this.activatedRoute.snapshot.paramMap.get('id_evento')
  


  constructor(private activatedRoute: ActivatedRoute, private requerimientosService:RequerimientosService,private Utilidades:Utilidades , private route: Router) { 
    
    }
  

  ngOnInit(): void {
    this.Utilidades.compruebaToken().then(res=>{
      this.token = res;
    });
  }

  addRequerimiento(data:any){
    debugger;
    let res= this.Utilidades.compruebaFormulario(data);
    if (res.ok==false) return alert (res.msg);
    if(data.maxRequires>5) return alert("No puedes crear un require de más de 5 solicitantes");
    if (this.id_evento ){
      this.requerimientosService.addRequerimiento2Event(this.id_evento||'',data.instrumento, data.solicitantes)
      .subscribe(res=>{
        //habilitar el botón para volver a el listRequerimientos
        alert(res.msg);
      });
    }
    else{return alert("No existe el evento!")}
  }

  volerListRequires(){
    if (this.id_evento) this.route.navigate(['listRequerimientos',this.id_evento ]);
  }
}