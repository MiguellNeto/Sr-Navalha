import { usuarioCredencial } from './../models/UsuarioCredencial';
import { UsuarioBarbeiro } from './../models/usuarioBarbeiro';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioBarbeiroService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAllBarbeiro(): Observable<UsuarioBarbeiro[]> {
    return this.http.get<UsuarioBarbeiro[]>(`${this.baseUrl}/usuarios_barbeiros`);
  }

  findBarbeiroByEmail(email: any): Observable<UsuarioBarbeiro> {
    return this.http.get<UsuarioBarbeiro>(`${this.baseUrl}/usuarios_barbeiros/${email}`);
  }

  createBarbeiro(usuarioBarbeiro: UsuarioBarbeiro): Observable<UsuarioBarbeiro> {
    return this.http.post<UsuarioBarbeiro>(`${this.baseUrl}/usuarios_barbeiros`, usuarioBarbeiro);
  }

  updateBarbeiro(usuarioBarbeiro: UsuarioBarbeiro): Observable<UsuarioBarbeiro> {
    return this.http.put<UsuarioBarbeiro>(`${this.baseUrl}/usuarios_barbeiros`, usuarioBarbeiro);
  }

  deleteBarbeiro(id: any): Observable<void> {
    const url = `${this.baseUrl}/usuarios_barbeiros${id}`
    return this.http.delete<void>(url);
  }
  createUserToken(usuarioCredencial: usuarioCredencial): Observable<usuarioCredencial> {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http.post<usuarioCredencial>(`${environment.urlUserCreateToken}/create`, usuarioCredencial, {headers});
  }
}
