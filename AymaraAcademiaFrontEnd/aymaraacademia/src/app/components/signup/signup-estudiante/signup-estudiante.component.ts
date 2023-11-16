import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { SignupService } from 'src/app/services/signup.service';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup-estudiante',
  templateUrl: './signup-estudiante.component.html',
  styleUrls: ['./signup-estudiante.component.css'],
})
export class SignupEstudianteComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  estudiante: Estudiante = new Estudiante();
  mensaje: string = '';
  username: string = '';

  constructor(
    private signupService: SignupService,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.username = this.loginService.getUsername();
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  signup() {
    console.log('Signup Estudiante:', this.form.value);
    if (this.form.valid) {

      this.signupService.findByUsername(this.username).subscribe(
        (user) => {
          if (user) {
            this.estudiante.user = user;
            this.estudiante.nombre = this.form.value.nombre;
            this.estudiante.apellido = this.form.value.apellido;
            this.estudiante.edad = this.form.value.edad;
            this.estudiante.resena = this.form.value.resena;
            this.estudiante.email = this.form.value.email;

            this.signupService.signupEstudiante(this.estudiante).subscribe(
              () => {
                this.mensaje = 'Estudiante registrado con éxito';
                this.snackBar.open(this.mensaje, 'Aviso', { duration: 4000 });
                this.router.navigate(['components/curso/1']);
              },
              (error) => {
                this.mensaje = 'Hubo un error al registrar al estudiante';
                this.snackBar.open(this.mensaje, 'Aviso', { duration: 4000 });
              }
            );
          } else {
            this.mensaje = 'Usuario no encontrado';
            this.snackBar.open(this.mensaje, 'Aviso', { duration: 2000 });
          }
        },
        (error) => {
          this.mensaje = 'Error al recuperar al usuario';
          this.snackBar.open(this.mensaje, 'Aviso', { duration: 4000 });
        }
      );
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }

}
