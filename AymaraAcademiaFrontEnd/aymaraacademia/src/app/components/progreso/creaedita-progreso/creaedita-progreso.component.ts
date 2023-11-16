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
import { Progreso } from 'src/app/models/progreso';
import { ProgresoService } from 'src/app/services/progreso.service';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Modulo } from 'src/app/models/modulo';
import { ModuloService } from 'src/app/services/modulo.service';

@Component({
selector: 'app-creaedita-progreso',
templateUrl: './creaedita-progreso.component.html',
styleUrls: ['./creaedita-progreso.component.css'],
})
export class CreaeditaProgresoComponent implements OnInit {
form: FormGroup = new FormGroup({});
progreso: Progreso = new Progreso();
mensaje: string = '';
id: number = 0;
edicion: boolean = false;
listaEstudiante: Estudiante[]=[];
listaModulo: Modulo[]=[];

constructor(
private progresoService: ProgresoService,
private router: Router,
private formBuilder: FormBuilder,
private route: ActivatedRoute,
private estudianteService: EstudianteService,
private moduloService: ModuloService) {}

ngOnInit(): void {

this.route.params.subscribe((data: Params) => {
this.id = data['id'];
this.edicion = data['id'] != null;
this.init();
});

this.estudianteService.list().subscribe((data)=>{
this.listaEstudiante = data;
})
this.moduloService.list().subscribe((data)=>{
this.listaModulo = data;
})

this.form = this.formBuilder.group({
idProgreso: [''],
progreso: ['', Validators.required],
estudiante: ['', Validators.required],
modulo: ['', Validators.required],
});
}
aceptar(): void {
if (this.form.valid) {
// Assign values to the progreso
this.progreso.idProgreso = this.form.value.idProgreso;
// Assign values to each attribute
this.progreso.progreso = this.form.value.progreso;
this.progreso.estudiante.idEstudiante = this.form.value.estudiante; // Change for component with foreign keys
this.progreso.modulo.idModulo = this.form.value.modulo; // Change for component with foreign keys
if (this.edicion) {
this.progresoService.update(this.progreso).subscribe(() => {
this.progresoService.list().subscribe((data) => {
this.progresoService.setList(data);
});
});
} else {
this.progresoService.insert(this.progreso).subscribe((data) => {
this.progresoService.list().subscribe((data) => {
this.progresoService.setList(data);
});
});
}
this.router.navigate(['components/entidades/progreso']);
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
this.progresoService.listId(this.id).subscribe((data) => {
this.form = new FormGroup({
// Attributes of the formGroup
idProgreso: new FormControl(data.idProgreso),
progreso: new FormControl(data.progreso),
estudiante: new FormControl(data.estudiante.idEstudiante), // Change for component with foreign keys
modulo: new FormControl(data.modulo.idModulo), // Change for component with foreign keys
});
});
}
}
}
