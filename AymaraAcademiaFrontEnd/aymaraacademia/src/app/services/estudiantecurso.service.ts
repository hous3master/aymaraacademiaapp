import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudiantecurso} from '../models/estudiantecurso';
import { environment } from 'environments/environment';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class EstudiantecursoService {
  private url = `${base_url}/estudiantecurso`;
  private listaCambio = new Subject<Estudiantecurso[]>();
  constructor(private http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Estudiantecurso[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  insert(estudiantecurso: Estudiantecurso) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, estudiantecurso, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  setList(listaNueva: Estudiantecurso[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Estudiantecurso>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  update(estudiantecurso: Estudiantecurso) {
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url, estudiantecurso, {
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
}
