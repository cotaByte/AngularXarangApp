import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN } from './app.constants';

@Injectable({ providedIn: 'root' })
export class Utilidades {
  constructor(private route:Router) {}

  compruebaFormulario(data: any) {
    let ret = {ok:true,msg : ""}
    Object.keys(data).forEach((res, i) => {
      if (!data[res]){
        ret.ok = false;
        ret.msg += "Falta el campo "+ res + "\n";
      };
    });
    return ret;
  }

  compruebaToken (this:any, login = false){
    let token = TOKEN.id!='' ? TOKEN: JSON.parse(localStorage.getItem('token') || "{}") ; 
    if (Object.keys(token).length==0 && !login ) this.route.navigate(['/']);
    else return token;

  }


  logOut (){
    localStorage.removeItem('token');
    this.route.navigate(['/'])
  }
}

