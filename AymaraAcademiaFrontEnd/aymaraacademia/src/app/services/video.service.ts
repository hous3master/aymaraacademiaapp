import { Video } from './../models/video';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
providedIn: 'root',
})
export class VideoService {
private url = `${base_url}/video`;
private listaCambio = new Subject<Video[]>();
constructor(private http: HttpClient) {}
list() {
return this.http.get<Video[]>(this.url);
}
insert(video: Video) {
return this.http.post(this.url, video);
}
setList(listaNueva: Video[]) {
this.listaCambio.next(listaNueva);
}

getList() {
return this.listaCambio.asObservable();
}
listId(id: number) {
return this.http.get<Video>(`${this.url}/${id}`);
}
update(video: Video) {
return this.http.put(this.url, video);
}
delete(id: number) {
return this.http.delete(`${this.url}/${id}`);
}
}
