import { Modulo } from './../models/modulo';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class ModuloService {
private url = `${base_url}/modulo`;
private listaCambio = new Subject<Modulo[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<Modulo[]>(this.url);
}
insert(modulo: Modulo) {
return this.http.post(this.url, modulo);
}
setList(listaNueva: Modulo[]) {
this.listaCambio.next(listaNueva);
}

getList() {
return this.listaCambio.asObservable();
}
listId(id: number) {
return this.http.get<Modulo>(`${this.url}/${id}`);
}
update(modulo: Modulo) {
return this.http.put(this.url, modulo);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
