import { Unidadmodulo } from './../models/unidadmodulo';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class UnidadmoduloService {
private url = `${base_url}/unidadmodulo`;
private listaCambio = new Subject<Unidadmodulo[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<Unidadmodulo[]>(this.url);
}
insert(unidadmodulo: Unidadmodulo) {
return this.http.post(this.url, unidadmodulo);
}
setList(listaNueva: Unidadmodulo[]) {
this.listaCambio.next(listaNueva);
}

getList() {
return this.listaCambio.asObservable();
}
listId(id: number) {
return this.http.get<Unidadmodulo>(`${this.url}/${id}`);
}
update(unidadmodulo: Unidadmodulo) {
return this.http.put(this.url, unidadmodulo);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
