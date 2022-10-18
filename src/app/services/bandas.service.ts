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
getBandas(){

  return this.http.get<any>(`${URL}/listBandas`,{
    headers:
      new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'MyClientCert': '',    
        }
      )
  });
}
}
