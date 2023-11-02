import { Progreso } from './../models/progreso';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class ProgresoService {
private url = `${base_url}/progreso`;
private listaCambio = new Subject<Progreso[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<Progreso[]>(this.url);
}
insert(progreso: Progreso) {
return this.http.post(this.url, progreso);
}
setList(listaNueva: Progreso[]) {
this.listaCambio.next(listaNueva);
}

getList() {
return this.listaCambio.asObservable();
}
listId(id: number) {
return this.http.get<Progreso>(`${this.url}/${id}`);
}
update(progreso: Progreso) {
return this.http.put(this.url, progreso);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
