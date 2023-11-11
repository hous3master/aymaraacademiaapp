import { Alternativa } from './../models/alternativa';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class AlternativaService {
  private url = `${base_url}/alternativa`;
  private listaCambio = new Subject<Alternativa[]>();

  constructor(private http: HttpClient) {}

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Alternativa[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json'),
    });
  }

  insert(alternativa: Alternativa) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, alternativa, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json'),
    });
  }

  setList(listaNueva: Alternativa[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Alternativa>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json'),
    });
  }

  update(alternativa: Alternativa) {
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url, alternativa, {
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
