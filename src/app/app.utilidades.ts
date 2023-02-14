import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN } from './app.constants';
import { MiembrosService } from './services/miembros.service';
import * as CryptoJS from 'crypto-js';

@Injectable({ providedIn: 'root' })
export class Utilidades {
  constructor(private route: Router, public miembros: MiembrosService) {}

  compruebaFormulario(data: any) {
    let ret = { ok: true, msg: '' };
    Object.keys(data).forEach((res, i) => {
      if (!data[res]) {
        ret.ok = false;
        ret.msg += 'Falta el campo ' + res + '\n';
      }
    });
    return ret;
  }

 async compruebaToken(this: any, login = false) {
    var token = TOKEN.id != '' ? TOKEN  : JSON.parse(localStorage.getItem('token') || '{}');
    if (Object.keys(token).length == 0 && !login) this.route.navigate(['/']);
    else {
          var check = await  this.miembros.PromisecheckToken(token.id);
      if (check.valid == false) {
        this.logOut();
      } else {
        return token;
      }
    }
  }

  logOut() {
    localStorage.removeItem('token');
    this.route.navigate(['/']);
  }


  compruebaLetraDNI(dni:string){
    let letrasDNI= "TRWAGMYFPDXBNJZSQVHLCKET";
    let numero = dni.charAt(0)=='X'?  parseInt(dni.substring(1,9)): parseInt(dni.substring(0,8));
    let letra = dni.charAt(0)=='X'? dni.substring(9,10): dni.substring(8,9);
    let pos= numero % 23;
    return (letra==letrasDNI.substring(pos,pos+1)) ? true:false;
  }

  encriptaPassword(pwd:string){
    let hashedPwd=CryptoJS.SHA256(pwd);
    return hashedPwd.toString();
  }
}
