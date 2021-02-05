import { Plan } from 'src/app/services/Plan';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanesServiceService {

  //url: string = 'http://localhost:8080/api/planes/'
  url:string = 'https://angular-api-hotel.herokuapp.com/api/planes/'
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' }) //tipo de respuesta
  constructor(private _http:HttpClient) { }



  getClientes(): Observable<Plan[]> {
    return this._http.get<Plan[]>(this.url);
  }
  getCliente(id:number){
    return this._http.get(this.url+id, {headers: this.httpHeaders});

  }
}
