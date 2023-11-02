import { Proyecto } from './../models/proyecto';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class ProyectoService {
private url = `${base_url}/proyecto`;
private listaCambio = new Subject<Proyecto[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<Proyecto[]>(this.url);
}
insert(proyecto: Proyecto) {
return this.http.post(this.url, proyecto);
}
setList(listaNueva: Proyecto[]) {
this.listaCambio.next(listaNueva);
}

getList() {
return this.listaCambio.asObservable();
}
listId(id: number) {
return this.http.get<Proyecto>(`${this.url}/${id}`);
}
update(proyecto: Proyecto) {
return this.http.put(this.url, proyecto);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
