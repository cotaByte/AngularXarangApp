import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TOKEN } from 'src/app/app.constants';
import { Utilidades } from 'src/app/app.utilidades';
import { MiembrosService } from 'src/app/services/miembros.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(private miembroService: MiembrosService , private utilidades: Utilidades , private route: Router) {}

  ngOnInit(): void {}

  logIn(data: any) {
    debugger;
    let res = this.utilidades.compruebaFormulario(data);
    if (!res.ok)  return alert (res.msg);
    this.miembroService.login(data.nif,data.pin).subscribe(res =>{
     if (!res.ok) return alert ("tu no mete cabra saramambiche")  ;
     else  {
      localStorage.setItem("token",res.token);
      this.route.navigate(['/greetings']);
        //ir a la ruta de greetings
     }
    });


    
    



  }
}
