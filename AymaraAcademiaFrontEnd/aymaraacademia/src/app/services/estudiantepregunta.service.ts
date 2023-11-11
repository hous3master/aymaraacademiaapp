import { Estudiantepregunta } from './../models/estudiantepregunta';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class EstudiantepreguntaService {
  private url = `${base_url}/estudiantepregunta`;
  private listaCambio = new Subject<Estudiantepregunta[]>();

  constructor(private http: HttpClient) {}

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Estudiantepregunta[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  insert(estudiantepregunta: Estudiantepregunta) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, estudiantepregunta, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  setList(listaNueva: Estudiantepregunta[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Estudiantepregunta>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  update(estudiantepregunta: Estudiantepregunta) {
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url, estudiantepregunta, {
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

  // Update EstudiantePregunta or Insert if not exists based on idEstudiante and idPregunta
  upsert(correcta: boolean, idEstudiante: number, idPregunta: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Estudiantepregunta[]>(
      `${this.url}/upsert/${correcta}/${idEstudiante}/${idPregunta}`,
      {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${token}`)
          .set('Content-Type', 'application/json'),
      }
    );
  }
}
