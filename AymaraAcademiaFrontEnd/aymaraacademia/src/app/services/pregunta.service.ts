import { Pregunta } from './../models/pregunta';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class PreguntaService {
private url = `${base_url}/pregunta`;
private listaCambio = new Subject<Pregunta[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<Pregunta[]>(this.url);
}
insert(pregunta: Pregunta) {
return this.http.post(this.url, pregunta);
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
update(pregunta: Pregunta) {
return this.http.put(this.url, pregunta);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
