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
import { Unidad } from 'src/app/models/unidad';
import { UnidadService } from 'src/app/services/unidad.service';

@Component({
selector: 'app-creaedita-unidad',
templateUrl: './creaedita-unidad.component.html',
styleUrls: ['./creaedita-unidad.component.css'],
})
export class CreaeditaUnidadComponent implements OnInit {
form: FormGroup = new FormGroup({});
unidad: Unidad = new Unidad();
mensaje: string = '';
id: number = 0;
edicion: boolean = false;

constructor(
private unidadService: UnidadService,
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
idUnidad: [''],
nombre: ['', Validators.required],
descripcion: ['', Validators.required],
});
}
aceptar(): void {
if (this.form.valid) {
// Assign values to the unidad
this.unidad.idUnidad = this.form.value.idUnidad;
// Assign values to each attribute
this.unidad.nombre = this.form.value.nombre;
this.unidad.descripcion = this.form.value.descripcion;
if (this.edicion) {
this.unidadService.update(this.unidad).subscribe(() => {
this.unidadService.list().subscribe((data) => {
this.unidadService.setList(data);
});
});
} else {
this.unidadService.insert(this.unidad).subscribe((data) => {
this.unidadService.list().subscribe((data) => {
this.unidadService.setList(data);
});
});
}
this.router.navigate(['components/entidades/unidad']);
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
this.unidadService.listId(this.id).subscribe((data) => {
this.form = new FormGroup({
// Attributes of the formGroup
idUnidad: new FormControl(data.idUnidad),
nombre: new FormControl(data.nombre),
descripcion: new FormControl(data.descripcion),
});
});
}
}
}
