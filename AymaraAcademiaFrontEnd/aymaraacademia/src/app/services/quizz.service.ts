import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Quizz } from '../models/quizz';
import { Observable, Subject } from 'rxjs';

const base_url=environment.base;
@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  private url=`${base_url}/quizz`;
  private listaCambio = new Subject<Quizz[]>();
  constructor(private http:HttpClient) {}
    list() {
      return this.http.get<Quizz[]>(this.url);
    }
    insert(de: Quizz) {
      return this.http.post(this.url, de);
    }
    setList(listaNueva: Quizz[]) {
      this.listaCambio.next(listaNueva);
    }
  
    getList() {
      return this.listaCambio.asObservable();
    }
    listId(id: number) {
      return this.http.get<Quizz>(`${this.url}/${id}`);
    }
    update(d: Quizz) {
      return this.http.put(this.url, d);
    }
    delete(id: number) {
      return this.http.delete(`${this.url}/${id}`);
    }
  
    buscar(fecha: string): Observable<Quizz[]> {
      return this.http.post<Quizz[]>(`${this.url}/buscar`, { fecha: fecha });
    }
  }
