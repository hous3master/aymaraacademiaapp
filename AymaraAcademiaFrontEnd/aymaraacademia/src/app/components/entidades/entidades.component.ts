import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css']
})
export class EntidadesComponent implements OnInit{
  role:string="";
  username:string="";

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.verificar();
  }

  verificar() {
    this.role = this.loginService.showRole();
    this.username = this.loginService.getUsername();

    return this.loginService.verificar();
  }

  @ViewChild('sidenav') sidenav!: MatSidenav;
}
