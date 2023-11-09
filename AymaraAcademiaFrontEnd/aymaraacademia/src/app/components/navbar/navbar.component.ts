import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'aymaraacademia';
  role:string="";

  constructor(private loginService: LoginService) {
  }

  noRol(){
    this.role=this.loginService.showRole();
    if(this.role=='ADMIN' || this.role=='USER'){
      return false;
    }else{
      return true;
    }
  }
}

