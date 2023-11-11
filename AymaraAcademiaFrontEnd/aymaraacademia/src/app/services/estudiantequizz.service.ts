import { Estudiantequizz } from './../models/estudiantequizz';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class EstudiantequizzService {
  private url = `${base_url}/estudiantequizz`;
  private listaCambio = new Subject<Estudiantequizz[]>();

  constructor(private http: HttpClient) {}

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Estudiantequizz[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  insert(estudiantequizz: Estudiantequizz) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, estudiantequizz, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  setList(listaNueva: Estudiantequizz[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Estudiantequizz>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  update(estudiantequizz: Estudiantequizz) {
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url, estudiantequizz, {
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

  // Update or insert Estudiantequizz by idEstudiante and idQuizz
  upsert(calificacion: number, idEstudiante: number, idQuizz: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Estudiantequizz[]>(
      `${this.url}/upsert/${calificacion}/${idEstudiante}/${idQuizz}`,
      {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${token}`)
          .set('Content-Type', 'application/json'),
      }
    );
  }
}
