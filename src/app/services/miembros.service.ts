import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {headers_genericos, URL} from 'src/app/app.constants';

/**
 * Los servicios respecto a la gestion de miembros son:
 * - AddMiembro (nombre,poblacion) ✅
 * - getMiembros() ✅
 * - removeMiembro(id_miembro) ✅
 * - Login()✅
 * - CheckToken ✅
 */

@Injectable({
  providedIn: 'root'
})


export class MiembrosService {
  constructor(private http: HttpClient) {
  }


getMiembros(id:string){
  const headers = new HttpHeaders(`${headers_genericos}`);
  const params = new HttpParams()
  .set('id_miembro',id);

  return this.http.get<any>(`${URL}/listMiembros`,{
    headers,
    params
  }
);
}


login(dni:number, pin:number){
  //  Componemos los headers
  const headers = new HttpHeaders(`${headers_genericos}`);
// Componemos  los parametros que vamos a pasar
  const params = new HttpParams()
  .set('dni',dni)
  .append('pin',pin);

  return this.http.post<any>(` ${URL}/login`, null, {
    headers,
    params
  });
}


addMiembros(nif:number , nombre: string, apellido1:string, apellido2:string, id_instrumento: number,telefono: number,director: number, pin: number){
//  Componemos los headers
  const headers = new HttpHeaders(`${headers_genericos}`);
// Componemos  los parametros que vamos a pasar
  const params = new HttpParams()
  .set('nif',nif)
  .append('nombre',nombre)
  .append('apellido1',apellido1)
  .append('apellido2',apellido2)
  .append('instrumento',id_instrumento)
  .append('telefono',telefono)
  .append('director',director)
  .append('pin',pin);
  return this.http.post<any>(` ${URL}/addMiembro`, null, {
    headers,
    params
  });
}

removeMiembro(token:string){

  const headers = new HttpHeaders(`${headers_genericos}`);
  const params = new HttpParams().set('id_miembro',token);
  return this.http.delete<any>(`${URL}/removeMiembro`,{headers,params});
}

PromisecheckToken(token:string): Promise<any>{
  return this.checkToken(token).toPromise();
}

checkToken (token:string){
  const headers = new HttpHeaders(`${headers_genericos}`);
  const params = new HttpParams().set('id_miembro',token);
  return this.http.get<any>(`${URL}/checkToken`,{headers,params});
}

}
