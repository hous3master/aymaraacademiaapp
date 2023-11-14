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
import { Estudiantepregunta } from 'src/app/models/estudiantepregunta';
import { EstudiantepreguntaService } from 'src/app/services/estudiantepregunta.service';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
selector: 'app-creaedita-estudiantepregunta',
templateUrl: './creaedita-estudiantepregunta.component.html',
styleUrls: ['./creaedita-estudiantepregunta.component.css'],
})
export class CreaeditaEstudiantepreguntaComponent implements OnInit {
form: FormGroup = new FormGroup({});
estudiantepregunta: Estudiantepregunta = new Estudiantepregunta();
mensaje: string = '';
id: number = 0;
edicion: boolean = false;
listaEstudiante: Estudiante[]=[];
listaPregunta: Pregunta[]=[];

constructor(
private estudiantepreguntaService: EstudiantepreguntaService,
private router: Router,
private formBuilder: FormBuilder,
private route: ActivatedRoute,
private estudianteService: EstudianteService,
private preguntaService: PreguntaService) {}

ngOnInit(): void {

this.route.params.subscribe((data: Params) => {
this.id = data['id'];
this.edicion = data['id'] != null;
this.init();
});

this.estudianteService.list().subscribe((data)=>{
this.listaEstudiante = data;
})
this.preguntaService.list().subscribe((data)=>{
this.listaPregunta = data;
})

this.form = this.formBuilder.group({
idEstudiantepregunta: [''],
estudiante: ['', Validators.required],
pregunta: ['', Validators.required],
correcta: ['', Validators.required],
});
}
aceptar(): void {
if (this.form.valid) {
// Assign values to the estudiantepregunta
this.estudiantepregunta.idEstudiantepregunta = this.form.value.idEstudiantepregunta;
// Assign values to each attribute
this.estudiantepregunta.estudiante.idEstudiante = this.form.value.estudiante; // Change for component with foreign keys
this.estudiantepregunta.pregunta.idPregunta = this.form.value.pregunta; // Change for component with foreign keys
this.estudiantepregunta.correcta = this.form.value.correcta;
if (this.edicion) {
this.estudiantepreguntaService.update(this.estudiantepregunta).subscribe(() => {
this.estudiantepreguntaService.list().subscribe((data) => {
this.estudiantepreguntaService.setList(data);
});
});
} else {
this.estudiantepreguntaService.insert(this.estudiantepregunta).subscribe((data) => {
this.estudiantepreguntaService.list().subscribe((data) => {
this.estudiantepreguntaService.setList(data);
});
});
}
this.router.navigate(['components/entidades/estudiantepregunta']);
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
this.estudiantepreguntaService.listId(this.id).subscribe((data) => {
this.form = new FormGroup({
// Attributes of the formGroup
idEstudiantepregunta: new FormControl(data.idEstudiantepregunta),
estudiante: new FormControl(data.estudiante.idEstudiante), // Change for component with foreign keys
pregunta: new FormControl(data.pregunta.idPregunta), // Change for component with foreign keys
correcta: new FormControl(data.correcta),
});
});
}
}
}
