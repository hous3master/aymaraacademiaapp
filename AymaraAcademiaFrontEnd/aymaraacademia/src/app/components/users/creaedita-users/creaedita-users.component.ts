import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-creaedita-users',
  templateUrl: './creaedita-users.component.html',
  styleUrls: ['./creaedita-users.component.css'],
})
export class CreaeditaUsersComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  users: Users = new Users();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      enabled: [true],
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      // Assign values to the users
      this.users.id = this.form.value.id;
      // Assign values to each attribute
      this.users.username = this.form.value.username;
      this.users.password = this.form.value.password;
      this.users.enabled = this.form.value.enabled;
      if (this.edicion) {
        this.usersService.update(this.users).subscribe(() => {
          this.usersService.list().subscribe((data) => {
            this.usersService.setList(data);
          });
        });
      } else {
        this.usersService.insert(this.users).subscribe((data) => {
          this.usersService.list().subscribe((data) => {
            this.usersService.setList(data);
          });
        });
      }
      this.router.navigate(['components/entidades/users']);
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
      this.usersService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          // Attributes of the formGroup
          id: new FormControl(data.id),
          username: new FormControl(data.username),
          password: new FormControl(data.password),
          enabled: new FormControl(data.enabled),
        });
      });
    }
  }
}
