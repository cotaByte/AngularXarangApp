import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { headers_genericos, URL } from 'src/app/app.constants';
/**
 * Los servicios respecto a la gestion de eventos son:
 * - AddEvento (nombre,poblacion) ✅
 * - getEventos() ✅
 * - removeMiembro(id_miembro) ✅
 * - CloseEvento(id_evento)
 */

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  constructor(private http: HttpClient) {}

  getEventos() {
    return this.http.get<any>(`${URL}/listEventos`, {
      headers: new HttpHeaders(`${headers_genericos}`),
    });
  }

  addEvento(nombre: string, ubicacion: string, fecha_evento: string) {
    //  Componemos los headers
    const headers = new HttpHeaders(`${headers_genericos}`);
    // Componemos  los parametros que vamos a pasar
    const params = new HttpParams()
      .set('nombre', nombre)
      .append('ubicacion', ubicacion)
      .append('fecha_evento', fecha_evento);
    return this.http.post<any>(` ${URL}/addEvento`, null, {
      headers,
      params,
    });
  }

  removeEvent(id_evento: string) {
    const headers = new HttpHeaders(`${headers_genericos}`);
    const params = new HttpParams().set('id', id_evento);

    return this.http.delete<any>(`${URL}/removeMiembro`, { headers, params });
  }
}
