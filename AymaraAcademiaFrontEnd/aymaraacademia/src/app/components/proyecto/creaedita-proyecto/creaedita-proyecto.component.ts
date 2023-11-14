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
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Unidad } from 'src/app/models/unidad';
import { UnidadService } from 'src/app/services/unidad.service';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
selector: 'app-creaedita-proyecto',
templateUrl: './creaedita-proyecto.component.html',
styleUrls: ['./creaedita-proyecto.component.css'],
})
export class CreaeditaProyectoComponent implements OnInit {
form: FormGroup = new FormGroup({});
proyecto: Proyecto = new Proyecto();
mensaje: string = '';
id: number = 0;
edicion: boolean = false;
listaUnidad: Unidad[]=[];
listaEstudiante: Estudiante[]=[];

constructor(
private proyectoService: ProyectoService,
private router: Router,
private formBuilder: FormBuilder,
private route: ActivatedRoute,
private unidadService: UnidadService,
private estudianteService: EstudianteService) {}

ngOnInit(): void {

this.route.params.subscribe((data: Params) => {
this.id = data['id'];
this.edicion = data['id'] != null;
this.init();
});

this.unidadService.list().subscribe((data)=>{
this.listaUnidad = data;
})
this.estudianteService.list().subscribe((data)=>{
this.listaEstudiante = data;
})

this.form = this.formBuilder.group({
idProyecto: [''],
titulo: ['', Validators.required],
descripcion: ['', Validators.required],
unidad: ['', Validators.required],
calificacion: ['', Validators.required],
contador: ['', Validators.required],
estudiante: ['', Validators.required],
});
}
aceptar(): void {
if (this.form.valid) {
// Assign values to the proyecto
this.proyecto.idProyecto = this.form.value.idProyecto;
// Assign values to each attribute
this.proyecto.titulo = this.form.value.titulo;
this.proyecto.descripcion = this.form.value.descripcion;
this.proyecto.unidad.idUnidad = this.form.value.unidad; // Change for component with foreign keys
this.proyecto.calificacion = this.form.value.calificacion;
this.proyecto.contador = this.form.value.contador;
this.proyecto.estudiante.idEstudiante = this.form.value.estudiante; // Change for component with foreign keys
if (this.edicion) {
this.proyectoService.update(this.proyecto).subscribe(() => {
this.proyectoService.list().subscribe((data) => {
this.proyectoService.setList(data);
});
});
} else {
this.proyectoService.insert(this.proyecto).subscribe((data) => {
this.proyectoService.list().subscribe((data) => {
this.proyectoService.setList(data);
});
});
}
this.router.navigate(['components/entidades/proyecto']);
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
this.proyectoService.listId(this.id).subscribe((data) => {
this.form = new FormGroup({
// Attributes of the formGroup
idProyecto: new FormControl(data.idProyecto),
titulo: new FormControl(data.titulo),
descripcion: new FormControl(data.descripcion),
unidad: new FormControl(data.unidad.idUnidad), // Change for component with foreign keys
calificacion: new FormControl(data.calificacion),
contador: new FormControl(data.contador),
estudiante: new FormControl(data.estudiante.idEstudiante), // Change for component with foreign keys
});
});
}
}
}
