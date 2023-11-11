import { EstudianteService } from 'src/app/services/estudiante.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtRequest } from '../models/jwtRequest';
import { Estudiante } from '../models/estudiante';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  estudiante: Estudiante[] = [];
  constructor(private http: HttpClient) {}

  login(request: JwtRequest) {
    return this.http.post('http://localhost:8080/authenticate', request);
  }
  verificar() {
    let token = sessionStorage.getItem('token');
    return token != null;
  }
  showRole() {
    let token = sessionStorage.getItem('token');
    if (!token) {
      // Manejar el caso en el que el token es nulo.
      return null; // O cualquier otro valor predeterminado dependiendo del contexto.
    }
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    return decodedToken?.role;
  }
  getUsername() {
    let token = sessionStorage.getItem('token');
    if (!token) {
      return null;
    }
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    return decodedToken?.username; // Replace 'username' with the actual key used in your token payload.
  }
}
