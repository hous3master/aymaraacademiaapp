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
import { Cursounidad } from 'src/app/models/cursounidad';
import { CursounidadService } from 'src/app/services/cursounidad.service';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import { Unidad } from 'src/app/models/unidad';
import { UnidadService } from 'src/app/services/unidad.service';

@Component({
selector: 'app-creaedita-cursounidad',
templateUrl: './creaedita-cursounidad.component.html',
styleUrls: ['./creaedita-cursounidad.component.css'],
})
export class CreaeditaCursounidadComponent implements OnInit {
form: FormGroup = new FormGroup({});
cursounidad: Cursounidad = new Cursounidad();
mensaje: string = '';
id: number = 0;
edicion: boolean = false;
listaCurso: Curso[]=[];
listaUnidad: Unidad[]=[];

constructor(
private cursounidadService: CursounidadService,
private router: Router,
private formBuilder: FormBuilder,
private route: ActivatedRoute,
private cursoService: CursoService,
private unidadService: UnidadService) {}

ngOnInit(): void {

this.route.params.subscribe((data: Params) => {
this.id = data['id'];
this.edicion = data['id'] != null;
this.init();
});

this.cursoService.list().subscribe((data)=>{
this.listaCurso = data;
})
this.unidadService.list().subscribe((data)=>{
this.listaUnidad = data;
})

this.form = this.formBuilder.group({
idCursounidad: [''],
curso: ['', Validators.required],
unidad: ['', Validators.required],
});
}
aceptar(): void {
if (this.form.valid) {
// Assign values to the cursounidad
this.cursounidad.idCursounidad = this.form.value.idCursounidad;
// Assign values to each attribute
this.cursounidad.curso.idCurso = this.form.value.curso; // Change for component with foreign keys
this.cursounidad.unidad.idUnidad = this.form.value.unidad; // Change for component with foreign keys
if (this.edicion) {
this.cursounidadService.update(this.cursounidad).subscribe(() => {
this.cursounidadService.list().subscribe((data) => {
this.cursounidadService.setList(data);
});
});
} else {
this.cursounidadService.insert(this.cursounidad).subscribe((data) => {
this.cursounidadService.list().subscribe((data) => {
this.cursounidadService.setList(data);
});
});
}
this.router.navigate(['components/entidades/cursounidad']);
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
this.cursounidadService.listId(this.id).subscribe((data) => {
this.form = new FormGroup({
// Attributes of the formGroup
idCursounidad: new FormControl(data.idCursounidad),
curso: new FormControl(data.curso.idCurso), // Change for component with foreign keys
unidad: new FormControl(data.unidad.idUnidad), // Change for component with foreign keys
});
});
}
}
}
