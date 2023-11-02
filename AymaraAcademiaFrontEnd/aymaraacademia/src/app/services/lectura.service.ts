import { Lectura } from './../models/lectura';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class LecturaService {
private url = `${base_url}/lectura`;
private listaCambio = new Subject<Lectura[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<Lectura[]>(this.url);
}
insert(lectura: Lectura) {
return this.http.post(this.url, lectura);
}
setList(listaNueva: Lectura[]) {
this.listaCambio.next(listaNueva);
}

getList() {
return this.listaCambio.asObservable();
}
listId(id: number) {
return this.http.get<Lectura>(`${this.url}/${id}`);
}
update(lectura: Lectura) {
return this.http.put(this.url, lectura);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
