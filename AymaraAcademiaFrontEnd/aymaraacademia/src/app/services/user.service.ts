import { User } from './../models/user';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class UserService {
private url = `${base_url}/user`;
private listaCambio = new Subject<User[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<User[]>(this.url);
}
insert(user: User) {
return this.http.post(this.url, user);
}
setList(listaNueva: User[]) {
this.listaCambio.next(listaNueva);
}

getList() {
return this.listaCambio.asObservable();
}
listId(id: number) {
return this.http.get<User>(`${this.url}/${id}`);
}
update(user: User) {
return this.http.put(this.url, user);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
