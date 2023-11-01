import { Unidad } from './../models/unidad';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class UnidadService {
private url = `${base_url}/unidad`;
private listaCambio = new Subject<Unidad[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<Unidad[]>(this.url);
}
insert(unidad: Unidad) {
return this.http.post(this.url, unidad);
}
setList(listaNueva: Unidad[]) {
this.listaCambio.next(listaNueva);
}

getList() {
return this.listaCambio.asObservable();
}
listId(id: number) {
return this.http.get<Unidad>(`${this.url}/${id}`);
}
update(unidad: Unidad) {
return this.http.put(this.url, unidad);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
