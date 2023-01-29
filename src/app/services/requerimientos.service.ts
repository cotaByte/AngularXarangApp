import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { headers_genericos, URL } from 'src/app/app.constants';
/**
 * Los servicios respecto a la gestion de requerimientos son:
 * - AddRequerimiento (id_evento, instrumento,num_max) ✅
 * - getRequerimientos(id_evento)  ✅
 * - removeRequerimiento(id_miembro)
 * - Inscribe2Event(id_evento, instrumento, id_miembro) ✅
 * - DesInscribe2Event(id_evento, instrumento, id_miembro) ✅
 */

@Injectable({
  providedIn: 'root',
})
export class RequerimientosService {
  constructor(private http: HttpClient) {}
  getRequerimientosEvento(token: string, id_evento: string) {
    const headers = new HttpHeaders(`${headers_genericos}`);
    const params = new HttpParams()
      .set('id_miembro', token)
      .append('id_evento', id_evento);
    return this.http.get<any>(` ${URL}/listRequirementsForEvent`, {
      headers,
      params,
    });
  }

  addRequerimiento2Event(id_evento: string, instrumento: number, max: number) {
    //  Componemos los headers
    const headers = new HttpHeaders(`${headers_genericos}`);
    // Componemos  los parametros que vamos a pasar
    const params = new HttpParams()
      .set('id_evento', id_evento)
      .append('id_instrumento', instrumento)
      .append('num_max', max);
    return this.http.post<any>(` ${URL}/addEventoRequerimiento`, null, {
      headers,
      params,
    });
  }

  removeRequerimiento2Evento(id_require: string) {
    const headers = new HttpHeaders(`${headers_genericos}`);
    const params = new HttpParams().set('id_requerimiento', id_require);
    return this.http.delete<any>(` ${URL}/removeRequerimiento`, {
      headers,
      params,
    });
  }

  inscribe2Evento(id_evento: string,id_require:string, id_miembro: string) {
    const headers = new HttpHeaders(`${headers_genericos}`);
    // Componemos  los parametros que vamos a pasar
    const params = new HttpParams()
      .set('id_evento', id_evento)
      .append('id_requerimiento', id_require )
      .append('id_miembro', id_miembro); // el propio valor del token que tengas
    return this.http.post<any>(` ${URL}/inscribeToEvent`, null, {
      headers,
      params,
    });
  }

  desInscribe2Evento(id_require: string, id_miembro: string) {
    const headers = new HttpHeaders(`${headers_genericos}`);
    // Componemos  los parametros que vamos a pasar
    const params = new HttpParams()
      .set('id_requerimiento', id_require)
      .append('id_miembro', id_miembro); // el propio valor del token que tengas
    return this.http.delete<any>(` ${URL}/desInscribeForEvent`, {
      headers,
      params,
    });
  }

}
