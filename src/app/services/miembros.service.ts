import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {URL} from 'src/app/app.constants';


/**
 * Los servicios respecto a la gestion de miembros son:
 * - AddMiembro (nombre,poblacion) ✅
 * - getMiembros() ✅
 * - removeMiembro(token) ✅
 */


@Injectable({
  providedIn: 'root'
})

export class MiembrosService {
  constructor(private http: HttpClient) {
  }


getMiembros(){
  return this.http.get<any>(`${URL}/listMiembros`,{
    headers:
      new HttpHeaders(

        {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'}
      )
  });
}
addMiembros(nif:number , nombre: string, apellido1:string, apellido2:string, id_instrumento: number,telefono: number,id_banda: number,director: number, pin: number){
  
  const headers = new HttpHeaders({'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'});

  const params = new HttpParams().set('nif',nif)
  .append('nombre',nombre)
  .append('apellido1',apellido1)
  .append('apellido2',apellido2)
  .append('id_instrumento',id_instrumento)
  .append('id_banda',id_banda)
  .append('director',director)
  .append('pin',pin);
  return this.http.post<any>(` ${URL}/addMiembro`, null, {
    headers,
    params
  });
}

removeMiembro(token:string){

  const headers = new HttpHeaders({'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'});
  const params = new HttpParams().set('token',token);

  return this.http.delete<any>(`${URL}/removeMiembro`,{headers,params});


}
}
