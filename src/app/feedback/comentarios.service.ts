import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http: HttpClient) { }

  listarComentarios() : Observable<any>{
    return this.http.get("http://localhost:3000/comentarios/");
  }
}
