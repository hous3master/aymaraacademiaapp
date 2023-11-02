import { Alternativa } from './../models/alternativa';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class AlternativaService {
private url = `${base_url}/alternativa`;
private listaCambio = new Subject<Alternativa[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<Alternativa[]>(this.url);
}
insert(alternativa: Alternativa) {
return this.http.post(this.url, alternativa);
}
setList(listaNueva: Alternativa[]) {
this.listaCambio.next(listaNueva);
}

getList() {
return this.listaCambio.asObservable();
}
listId(id: number) {
return this.http.get<Alternativa>(`${this.url}/${id}`);
}
update(alternativa: Alternativa) {
return this.http.put(this.url, alternativa);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
