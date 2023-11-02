import { Quizz } from './../models/quizz';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class QuizzService {
private url = `${base_url}/quizz`;
private listaCambio = new Subject<Quizz[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<Quizz[]>(this.url);
}
insert(quizz: Quizz) {
return this.http.post(this.url, quizz);
}
setList(listaNueva: Quizz[]) {
this.listaCambio.next(listaNueva);
}

getList() {
return this.listaCambio.asObservable();
}
listId(id: number) {
return this.http.get<Quizz>(`${this.url}/${id}`);
}
update(quizz: Quizz) {
return this.http.put(this.url, quizz);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
