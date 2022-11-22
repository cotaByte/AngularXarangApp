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
  public esDirector: boolean = false;

  constructor(
    private miembroService: MiembrosService,
    private utilidades: Utilidades,
    private route: Router
  ) {}

  ngOnInit(): void {

    // si estamos en la ventana de login y tenemos localStorageGuardado, podemos acceder directamente
    if (localStorage.getItem('token')) {
      let token = this.utilidades.compruebaToken(true);
      TOKEN.id = token.id;
      TOKEN.nombre = token.nombre;
      TOKEN.director = token.director;
      this.route.navigate(['/greetings']);
    }
  }

  logIn(data: any) {
    let res = this.utilidades.compruebaFormulario(data);
    if (!res.ok) return alert(res.msg);
    this.miembroService.login(data.nif, data.pin).subscribe((res) => {
      if (!res.ok) return alert('tu no mete cabra saramambiche');
      else {
        TOKEN.id = res.token;
        TOKEN.nombre = res.nombre;
        TOKEN.director = TOKEN.id.indexOf('D') != -1;
        if (this.esDirector)
          localStorage.setItem('token', JSON.stringify(TOKEN));
        this.route.navigate(['/greetings']);
        //ir a la ruta de greetings
      }
    });
  }
}
