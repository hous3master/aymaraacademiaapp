import { Estudiante } from './../models/estudiante';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class EstudianteService {
private url = `${base_url}/estudiante`;
private listaCambio = new Subject<Estudiante[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<Estudiante[]>(this.url);
}
insert(estudiante: Estudiante) {
return this.http.post(this.url, estudiante);
}
setList(listaNueva: Estudiante[]) {
this.listaCambio.next(listaNueva);
}

getList() {
return this.listaCambio.asObservable();
}
listId(id: number) {
return this.http.get<Estudiante>(`${this.url}/${id}`);
}
update(estudiante: Estudiante) {
return this.http.put(this.url, estudiante);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
