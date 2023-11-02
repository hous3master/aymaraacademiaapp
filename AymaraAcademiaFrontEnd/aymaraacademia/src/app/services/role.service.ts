import { Role } from './../models/role';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class RoleService {
private url = `${base_url}/role`;
private listaCambio = new Subject<Role[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<Role[]>(this.url);
}
insert(role: Role) {
return this.http.post(this.url, role);
}
setList(listaNueva: Role[]) {
this.listaCambio.next(listaNueva);
}

getList() {
return this.listaCambio.asObservable();
}
listId(id: number) {
return this.http.get<Role>(`${this.url}/${id}`);
}
update(role: Role) {
return this.http.put(this.url, role);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
