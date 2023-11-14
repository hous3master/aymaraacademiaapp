import { Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import { Estudiante } from '../models/estudiante';
import { environment } from 'environments/environment';
import { LoginService } from './login.service';
import { concatMap } from 'rxjs';
import { tap } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private urlUsers = `${base_url}/users`;
  private urlEstudiante = `${base_url}/estudiante`;

  constructor(private http: HttpClient, private loginService: LoginService, private router: Router) {}

  findByUsername(username: string): Observable<Users> {
    const url = `${this.urlUsers}/buscar/${username}`;
    return this.http.get<Users>(url);
  }

  signupUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.urlUsers, user);
  }

  signupEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post<Estudiante>(this.urlEstudiante, estudiante, { headers: headers });
  }

  signupAndLogin(user: Users, redirectUrl: string): Observable<any> {
    return this.signupUser(user).pipe(
      concatMap(() => this.loginService.login({username: user.username, password: user.password})),
      tap((data: any) => {
        sessionStorage.setItem('token', data.jwttoken);
        this.router.navigate([redirectUrl]);
      })
    );
  }
}
