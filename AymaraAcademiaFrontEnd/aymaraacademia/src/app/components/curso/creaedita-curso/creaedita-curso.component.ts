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
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
selector: 'app-creaedita-curso',
templateUrl: './creaedita-curso.component.html',
styleUrls: ['./creaedita-curso.component.css'],
})
export class CreaeditaCursoComponent implements OnInit {
form: FormGroup = new FormGroup({});
curso: Curso = new Curso();
mensaje: string = '';
id: number = 0;
edicion: boolean = false;

constructor(
private cursoService: CursoService,
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
idCurso: [''],
nombre: ['', Validators.required],
descripcion: ['', Validators.required],
});
}
aceptar(): void {
if (this.form.valid) {
// Assign values to the curso
this.curso.idCurso = this.form.value.idCurso;
// Assign values to each attribute
this.curso.nombre = this.form.value.nombre;
this.curso.descripcion = this.form.value.descripcion;
if (this.edicion) {
this.cursoService.update(this.curso).subscribe(() => {
this.cursoService.list().subscribe((data) => {
this.cursoService.setList(data);
});
});
} else {
this.cursoService.insert(this.curso).subscribe((data) => {
this.cursoService.list().subscribe((data) => {
this.cursoService.setList(data);
});
});
}
this.router.navigate(['components/entidades/curso']);
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
this.cursoService.listId(this.id).subscribe((data) => {
this.form = new FormGroup({
// Attributes of the formGroup
idCurso: new FormControl(data.idCurso),
nombre: new FormControl(data.nombre),
descripcion: new FormControl(data.descripcion),
});
});
}
}
}
