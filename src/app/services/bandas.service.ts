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
