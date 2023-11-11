import { Estudiante } from './../models/estudiante';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class EstudianteService {
  private url = `${base_url}/estudiante`;
  private listaCambio = new Subject<Estudiante[]>();
  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem('token');

    return this.http.get<Estudiante[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  insert(estudiante: Estudiante) {
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, estudiante, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  setList(listaNueva: Estudiante[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<Estudiante>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  update(estudiante: Estudiante) {
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, estudiante, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  delete(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  findEstudianteByUserUsername(username: string): Observable<Estudiante[]> {
    let token = sessionStorage.getItem('token');

    return this.http.get<Estudiante[]>(`${this.url}/buscar/${username}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
}
