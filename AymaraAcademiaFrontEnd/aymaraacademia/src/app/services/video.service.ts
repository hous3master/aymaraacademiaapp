import { Video } from './../models/video';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private url = `${base_url}/video`;
  private listaCambio = new Subject<Video[]>();

  constructor(private http: HttpClient) {}

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Video[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json'),
    });
  }

  insert(video: Video) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, video, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json'),
    });
  }

  setList(listaNueva: Video[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Video>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json'),
    });
  }

  update(video: Video) {
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url, video, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json'),
    });
  }

  delete(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json'),
    });
  }
}
