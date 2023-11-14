import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-creaedita-estudiante',
  templateUrl: './creaedita-estudiante.component.html',
  styleUrls: ['./creaedita-estudiante.component.css'],
})
export class CreaeditaEstudianteComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  estudiante: Estudiante = new Estudiante();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaUsers: Users[] = [];

  constructor(
    private estudianteService: EstudianteService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private usersService: UsersService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.usersService.list().subscribe((data) => {
      this.listaUsers = data;
      console.log('Dentro del subscribe', this.listaUsers);
    });
    console.log('Fuera del subscribe', this.listaUsers);

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
      // Assign values to the estudiante
      this.estudiante.idEstudiante = this.form.value.idEstudiante;
      // Assign values to each attribute
      this.estudiante.nombre = this.form.value.nombre;
      this.estudiante.apellido = this.form.value.apellido;
      this.estudiante.edad = this.form.value.edad;
      this.estudiante.resena = this.form.value.resena;
      this.estudiante.email = this.form.value.email;
      this.estudiante.user.id = this.form.value.user; // Change for component with foreign keys
      if (this.edicion) {
        this.estudianteService.update(this.estudiante).subscribe(() => {
          this.estudianteService.list().subscribe((data) => {
            this.estudianteService.setList(data);
          });
        });
      } else {
        this.estudianteService.insert(this.estudiante).subscribe((data) => {
          this.estudianteService.list().subscribe((data) => {
            this.estudianteService.setList(data);
          });
        });
      }
      this.router.navigate(['components/entidades/estudiante']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }
  init() {
    if (this.edicion) {
      this.estudianteService.listId(this.id).subscribe((data) => {
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
    }
  }
}
