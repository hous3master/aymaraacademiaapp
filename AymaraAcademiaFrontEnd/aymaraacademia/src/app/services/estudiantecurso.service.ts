import { Subject } from 'rxjs';
import { EstudianteCurso } from '../models/estudiantecurso';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class EstudiantecursoService {
  private url = `${base_url}/estudiantecurso`;
  private listaCambio = new Subject<EstudianteCurso[]>();

  constructor(private http: HttpClient) {}

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<EstudianteCurso[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  insert(estudiantecurso: EstudianteCurso) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, estudiantecurso, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  setList(listaNueva: EstudianteCurso[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<EstudianteCurso>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  update(estudiantecurso: EstudianteCurso) {
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
    // Update EstudiantePregunta or Insert if not exists based on idEstudiante and idPregunta
    upsert(idEstudiante: number, idCurso: number) {
      let token = sessionStorage.getItem('token');
      return this.http.get<EstudianteCurso[]>(
        `${this.url}/upsert/${idEstudiante}/${idCurso}`,
        {
          headers: new HttpHeaders()
            .set('Authorization', `Bearer ${token}`)
            .set('Content-Type', 'application/json'),
        }
      );
    }
}
