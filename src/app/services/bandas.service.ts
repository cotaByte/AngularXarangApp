
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { headers_genericos, URL } from 'src/app/app.constants';

/**
 * Los servicios respecto a la gestion de bandas son:
 * - AddBandas (nombre,poblacion) ✅
 * - getBandas() ✅
 * - JoinBanda(token, id_banda) ✅
 * - LeaveBanda ✅
 * - getJoinBandas(token)✅
 * - getLeaveBandas(token)✅
 * - removeBanda(token)✅
 */

<<<<<<< HEAD
=======

import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {URL} from 'src/app/app.constants';


@Injectable({
  providedIn: 'root'
})
export class BandasService {

  constructor(private http: HttpClient) {


  }
/* 
  loadNoticias(access_token: string, noticiasAlmacenadas: string, firmaAlmacenadas: string) {
     els headers si no n'envies no et fa falta 
        const headers = new HttpHeaders()
          .set('Accept', 'application/json')
          .set('Authorization', Bearer ${access_token});
    
    /* parametres a enviar .... aci tindras que enviar depenent de la api els parametres necesaris ... de moment envia a ma ahi el token si et fa falta
        const params = new HttpParams().set(
          'noticias_almacenadas',
          noticiasAlmacenadas
        ).append('firmas_almacenadas', firmaAlmacenadas);
        
    
        return this.http.post<any>(${URL}/noticias.php, null, {
          headers,
          params
        });
      } */
>>>>>>> 12dca6f131153e4424ea30760f34802721082047


@Injectable({
  providedIn: 'root',
})
export class BandasService {
  constructor(private http: HttpClient) {}

  getBandas() {
    return this.http.get<any>(`${URL}/listBandas`, {
      headers: new HttpHeaders(`${headers_genericos}`),
    });
  }

  addBandas(nombre: string, poblacion: string) {
    const headers = new HttpHeaders(`${headers_genericos}`);
    const params = new HttpParams()
      .set('nombre', nombre)
      .append('poblacion', poblacion);
    return this.http.post<any>(` ${URL}/addBanda`, null, {
      headers,
      params,
    });
  }

  getJoinBandas(token: string) {
    const headers = new HttpHeaders(`${headers_genericos}`);
    const params = new HttpParams().set('token', token);
    return this.http.get<any>(` ${URL}/listJoin`, { headers, params });
  }

  getLeaveBandas(token: string) {
    const headers = new HttpHeaders(`${headers_genericos}`);
    const params = new HttpParams().set('token', token);
    return this.http.get<any>(` ${URL}/listLeave`, { headers, params });
  }

  joinBandas(token: string, id_banda: string) {
    const headers = new HttpHeaders(`${headers_genericos}`);
    const params = new HttpParams()
      .set('token', token)
      .append('id_banda', id_banda);
    return this.http.post<any>(` ${URL}/join`, null, {
      headers,
      params,
    });
  }

  leaveBandas(token: string, id_banda: string) {
    const headers = new HttpHeaders(`${headers_genericos}`);
    const params = new HttpParams()
      .set('token', token)
      .append('id_banda', id_banda);
    return this.http.post<any>(` ${URL}/leave`, null, {
      headers,
      params,
    });
  }

  deleteBanda(id_banda: string) {
    const headers = new HttpHeaders(`${headers_genericos}`);

    const params = new HttpParams().set('id_banda', id_banda);
    return this.http.delete<any>(`${URL}/removeBanda`, { headers, params });
  }

}
