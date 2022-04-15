import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { Cliente } from '../models/cliente';

//Envia los encabezados de las solicitudes
const httpOption = {
  Headers: new HttpHeaders({
          'Contend-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

url: string = 'https://localhost:44354/ruta/Cliente'; 

  constructor(
private _http: HttpClient

  ) {

}

getClientes(): Observable<Response>{
return this._http.get<Response>(this.url);
}

//Agregar cliente
agregar(cliente: Cliente): Observable<Response> {
return this._http.post<Response>(this.url, cliente,);
}

//editar cliente
editar(cliente: Cliente): Observable<Response> {
  return this._http.put<Response>(this.url, cliente,);
  }

  //eliminar cliente
delete(id: number): Observable<Response> {
    return this._http.delete<Response>(`${this.url}/${id}`);
}



}
