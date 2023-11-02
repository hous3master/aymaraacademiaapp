import { Users } from './../models/users';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class UsersService {
private url = `${base_url}/users`;
private listaCambio = new Subject<Users[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<Users[]>(this.url);
}
insert(users: Users) {
return this.http.post(this.url, users);
}
setList(listaNueva: Users[]) {
this.listaCambio.next(listaNueva);
}

getList() {
return this.listaCambio.asObservable();
}
listId(id: number) {
return this.http.get<Users>(`${this.url}/${id}`);
}
update(users: Users) {
return this.http.put(this.url, users);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
