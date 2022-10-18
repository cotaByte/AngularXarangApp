import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {URL} from 'src/app/app.constants';

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
        {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest','MyClientCert': '',}
      )
  });
}
}
