import { Curso } from './../models/curso';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private url = `${base_url}/curso`;
  private listaCambio = new Subject<Curso[]>();

  constructor(private http: HttpClient) {}

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Curso[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json'),
    });
  }

  insert(curso: Curso) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, curso, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json'),
    });
  }

  setList(listaNueva: Curso[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Curso>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json'),
    });
  }

  update(curso: Curso) {
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url, curso, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json'),
    });
  }

  delete(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json'),
    });
  }
}
