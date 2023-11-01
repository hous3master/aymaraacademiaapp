import { Curso } from './../models/curso';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class CursoService {
private url = `${base_url}/curso`;
private listaCambio = new Subject<Curso[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<Curso[]>(this.url);
}
insert(curso: Curso) {
return this.http.post(this.url, curso);
}
setList(listaNueva: Curso[]) {
this.listaCambio.next(listaNueva);
}

getList() {
return this.listaCambio.asObservable();
}
listId(id: number) {
return this.http.get<Curso>(`${this.url}/${id}`);
}
update(curso: Curso) {
return this.http.put(this.url, curso);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
