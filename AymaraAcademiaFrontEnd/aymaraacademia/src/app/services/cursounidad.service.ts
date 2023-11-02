import { Cursounidad } from './../models/cursounidad';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class CursounidadService {
private url = `${base_url}/cursounidad`;
private listaCambio = new Subject<Cursounidad[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<Cursounidad[]>(this.url);
}
insert(cursounidad: Cursounidad) {
return this.http.post(this.url, cursounidad);
}
setList(listaNueva: Cursounidad[]) {
this.listaCambio.next(listaNueva);
}

getList() {
return this.listaCambio.asObservable();
}
listId(id: number) {
return this.http.get<Cursounidad>(`${this.url}/${id}`);
}
update(cursounidad: Cursounidad) {
return this.http.put(this.url, cursounidad);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
