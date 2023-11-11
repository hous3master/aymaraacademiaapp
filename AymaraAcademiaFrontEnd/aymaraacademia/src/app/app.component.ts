import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aymaraacademia';
  role: string = '';
  username: string = '';

  constructor(
    private loginService: LoginService,
  ) {}

  cerrar() {
    sessionStorage.clear();
  }

  verificar() {
    this.role = this.loginService.showRole();
    this.username = this.loginService.getUsername();

    return this.loginService.verificar();
  }
  validarRol() {
    if (this.role == 'ADMIN' || this.role == 'ESTUDIANTE') {
      return true;
    } else {
      return false;
    }
  }
}
