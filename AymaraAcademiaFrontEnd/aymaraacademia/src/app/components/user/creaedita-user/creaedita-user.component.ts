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
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
@Component({
selector: 'app-creaedita-user',
templateUrl: './creaedita-user.component.html',
styleUrls: ['./creaedita-user.component.css'],
})
export class CreaeditaUserComponent implements OnInit {
form: FormGroup = new FormGroup({});
user: User = new User();
mensaje: string = '';
id: number = 0;
edicion: boolean = false;

constructor(
private userService: UserService,
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
idEntityName: [''],
username: ['', Validators.required],
password: ['', Validators.required],
});
}
aceptar(): void {
if (this.form.valid) {
// Assign values to the user
this.user.idUser = this.form.value.idUser;
// Assign values to each attribute
this.user.username = this.form.value.username;
this.user.password = this.form.value.password;
if (this.edicion) {
this.userService.update(this.user).subscribe(() => {
this.userService.list().subscribe((data) => {
this.userService.setList(data);
});
});
} else {
this.userService.insert(this.user).subscribe((data) => {
this.userService.list().subscribe((data) => {
this.userService.setList(data);
});
});
}
this.router.navigate(['user']);
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
this.userService.listId(this.id).subscribe((data) => {
this.form = new FormGroup({
// Attributes of the formGroup
idUser: new FormControl(data.idUser),
username: new FormControl(data.username),
password: new FormControl(data.password),
});
});
}
}
}
