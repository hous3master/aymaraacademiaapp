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
import { Modulo } from 'src/app/models/modulo';
import { ModuloService } from 'src/app/services/modulo.service';

@Component({
selector: 'app-creaedita-modulo',
templateUrl: './creaedita-modulo.component.html',
styleUrls: ['./creaedita-modulo.component.css'],
})
export class CreaeditaModuloComponent implements OnInit {
form: FormGroup = new FormGroup({});
modulo: Modulo = new Modulo();
mensaje: string = '';
id: number = 0;
edicion: boolean = false;

constructor(
private moduloService: ModuloService,
private router: Router,
private formBuilder: FormBuilder,
private route: ActivatedRoute) {}

ngOnInit(): void {

this.route.params.subscribe((data: Params) => {
this.id = data['id'];
this.edicion = data['id'] != null;
this.init();
});


this.form = this.formBuilder.group({
idModulo: [''],
nombre: ['', Validators.required],
descripcion: ['', Validators.required],
});
}
aceptar(): void {
if (this.form.valid) {
// Assign values to the modulo
this.modulo.idModulo = this.form.value.idModulo;
// Assign values to each attribute
this.modulo.nombre = this.form.value.nombre;
this.modulo.descripcion = this.form.value.descripcion;
if (this.edicion) {
this.moduloService.update(this.modulo).subscribe(() => {
this.moduloService.list().subscribe((data) => {
this.moduloService.setList(data);
});
});
} else {
this.moduloService.insert(this.modulo).subscribe((data) => {
this.moduloService.list().subscribe((data) => {
this.moduloService.setList(data);
});
});
}
this.router.navigate(['components/entidades/modulo']);
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
this.moduloService.listId(this.id).subscribe((data) => {
this.form = new FormGroup({
// Attributes of the formGroup
idModulo: new FormControl(data.idModulo),
nombre: new FormControl(data.nombre),
descripcion: new FormControl(data.descripcion),
});
});
}
}
}
