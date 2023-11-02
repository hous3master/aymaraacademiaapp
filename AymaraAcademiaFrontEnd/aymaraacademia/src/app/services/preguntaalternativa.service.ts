import { Preguntaalternativa } from './../models/preguntaalternativa';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class PreguntaalternativaService {
private url = `${base_url}/preguntaalternativa`;
private listaCambio = new Subject<Preguntaalternativa[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<Preguntaalternativa[]>(this.url);
}
insert(preguntaalternativa: Preguntaalternativa) {
return this.http.post(this.url, preguntaalternativa);
}
setList(listaNueva: Preguntaalternativa[]) {
this.listaCambio.next(listaNueva);
}

getList() {
return this.listaCambio.asObservable();
}
listId(id: number) {
return this.http.get<Preguntaalternativa>(`${this.url}/${id}`);
}
update(preguntaalternativa: Preguntaalternativa) {
return this.http.put(this.url, preguntaalternativa);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
