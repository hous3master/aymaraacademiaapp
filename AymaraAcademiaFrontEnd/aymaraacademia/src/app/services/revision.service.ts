import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Revision } from '../models/revision';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class RevisionService {
  private url = `${base_url}/revision`;
  private listaCambio = new Subject<Revision[]>();
  constructor(private http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Revision[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  insert(revision: Revision) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, revision, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  setList(listaNueva: Revision[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Revision>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  update(revision: Revision) {
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url, revision, {
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

  upsert(idProyecto: number, idEstudiante: number, calificacion: number, revisado: boolean) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Revision[]>(
      `${this.url}/upsert/${idProyecto}/${idEstudiante}/${calificacion}/${revisado}`,
      {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${token}`)
          .set('Content-Type', 'application/json'),
      }
    );
  }
}
