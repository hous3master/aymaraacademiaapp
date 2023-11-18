import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { Users } from 'src/app/models/users';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { LoginService } from 'src/app/services/login.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-editaestudiante',
  templateUrl: './editaestudiante.component.html',
  styleUrls: ['./editaestudiante.component.css'],
})
export class EditaestudianteComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  estudiante: Estudiante = new Estudiante();
  mensaje: string = '';
  username = '';
  edicion: boolean = false;

  constructor(
    private estudianteService: EstudianteService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.init();

    this.form = this.formBuilder.group({
      idEstudiante: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      resena: ['', Validators.required],
      email: ['', Validators.required],
      user: ['', Validators.required],
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      // Assign values to each attribute
      this.estudiante.nombre = this.form.value.nombre;
      this.estudiante.apellido = this.form.value.apellido;
      this.estudiante.edad = this.form.value.edad;
      this.estudiante.resena = this.form.value.resena;
      this.estudiante.email = this.form.value.email;
      this.estudiante.user.id = this.form.value.user; // Change for component with foreign keys

      this.estudianteService.update(this.estudiante).subscribe(() => {
        this.estudianteService.list().subscribe((data) => {
          this.estudianteService.setList(data);
        });
      });

      this.mensaje = 'Estudiante actualizado correctamente';

      // navigate to [routerLink]="['/components/perfil', username]
      this.router.navigate(['/components/perfil', this.username]);
    }
  }

  init() {
    this.route.params.subscribe((data: Params) => {
      this.username = data['username'];
    });

    this.estudianteService
      .findEstudianteByUserUsername(this.username)
      .subscribe((data) => {
        this.estudiante = data[0];

        this.estudianteService
          .listId(this.estudiante.idEstudiante)
          .subscribe((data) => {
            this.form = new FormGroup({
              // Attributes of the formGroup
              idEstudiante: new FormControl(data.idEstudiante),
              nombre: new FormControl(data.nombre),
              apellido: new FormControl(data.apellido),
              edad: new FormControl(data.edad),
              resena: new FormControl(data.resena),
              email: new FormControl(data.email),
              user: new FormControl(data.user.id), // Change for component with foreign keys
            });
          });
      });
  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }

  validEditor(): boolean {
    return this.loginService.getUsername() == this.username;
  }
}
