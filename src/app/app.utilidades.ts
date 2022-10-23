import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Utilidades {
  constructor() {}

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
}

//TODO vector indexado por numero sobre a cada instrumento, que nombre le pertenece y otro viceversa

