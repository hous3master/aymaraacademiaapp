import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css'],
})
export class SignupUserComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  user: Users = new Users();
  mensaje: string = '';

  constructor(
    private signupService: SignupService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signup() {
    console.log(this.form.value);
    if (this.form.valid) {
      // Asignar los valores del formulario al usuario
      this.user.username = this.form.value.username;
      this.user.password = this.form.value.password;
      this.user.enabled = true;

      // Enviar los datos del usuario al backend, iniciar sesión y redirigir a la página de creación de estudiante
      this.signupService
        .signupAndLogin(this.user, 'signup-estudiante')
        .subscribe(() => {
          this.mensaje = 'Usuario registrado con éxito';
          this.snackBar.open(this.mensaje, 'Aviso', { duration: 4000 });
          this.router.navigate(['../signup-estudiante'], {
            relativeTo: this.route,
          });
        });
    }
  }
}
