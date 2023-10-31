import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, Subject } from 'rxjs';
import { Pregunta } from '../models/pregunta';

const base_url=environment.base;
@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  private url=`${base_url}/quizz`;
  private listaCambio = new Subject<Pregunta[]>();
  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<Pregunta[]>(this.url);
  }
  insert(de: Pregunta) {
    return this.http.post(this.url, de);
  }
  setList(listaNueva: Pregunta[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Pregunta>(`${this.url}/${id}`);
  }
  update(d: Pregunta) {
    return this.http.put(this.url, d);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  buscar(fecha: string): Observable<Pregunta[]> {
    return this.http.post<Pregunta[]>(`${this.url}/buscar`, { fecha: fecha });
  }
}
