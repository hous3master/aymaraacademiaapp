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
import { Estudiantequizz } from 'src/app/models/estudiantequizz';
import { EstudiantequizzService } from 'src/app/services/estudiantequizz.service';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Quizz } from 'src/app/models/quizz';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
selector: 'app-creaedita-estudiantequizz',
templateUrl: './creaedita-estudiantequizz.component.html',
styleUrls: ['./creaedita-estudiantequizz.component.css'],
})
export class CreaeditaEstudiantequizzComponent implements OnInit {
form: FormGroup = new FormGroup({});
estudiantequizz: Estudiantequizz = new Estudiantequizz();
mensaje: string = '';
id: number = 0;
edicion: boolean = false;
listaEstudiante: Estudiante[]=[];
listaQuizz: Quizz[]=[];

constructor(
private estudiantequizzService: EstudiantequizzService,
private router: Router,
private formBuilder: FormBuilder,
private route: ActivatedRoute,
private estudianteService: EstudianteService,
private quizzService: QuizzService) {}

ngOnInit(): void {

this.route.params.subscribe((data: Params) => {
this.id = data['id'];
this.edicion = data['id'] != null;
this.init();
});

this.estudianteService.list().subscribe((data)=>{
this.listaEstudiante = data;
})
this.quizzService.list().subscribe((data)=>{
this.listaQuizz = data;
})

this.form = this.formBuilder.group({
idEstudiantequizz: [''],
estudiante: ['', Validators.required],
quizz: ['', Validators.required],
calificacion: ['', Validators.required],
});
}
aceptar(): void {
if (this.form.valid) {
// Assign values to the estudiantequizz
this.estudiantequizz.idEstudiantequizz = this.form.value.idEstudiantequizz;
// Assign values to each attribute
this.estudiantequizz.estudiante.idEstudiante = this.form.value.estudiante; // Change for component with foreign keys
this.estudiantequizz.quizz.idQuizz = this.form.value.quizz; // Change for component with foreign keys
this.estudiantequizz.calificacion = this.form.value.calificacion;
if (this.edicion) {
this.estudiantequizzService.update(this.estudiantequizz).subscribe(() => {
this.estudiantequizzService.list().subscribe((data) => {
this.estudiantequizzService.setList(data);
});
});
} else {
this.estudiantequizzService.insert(this.estudiantequizz).subscribe((data) => {
this.estudiantequizzService.list().subscribe((data) => {
this.estudiantequizzService.setList(data);
});
});
}
this.router.navigate(['components/entidades/estudiantequizz']);
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
this.estudiantequizzService.listId(this.id).subscribe((data) => {
this.form = new FormGroup({
// Attributes of the formGroup
idEstudiantequizz: new FormControl(data.idEstudiantequizz),
estudiante: new FormControl(data.estudiante.idEstudiante), // Change for component with foreign keys
quizz: new FormControl(data.quizz.idQuizz), // Change for component with foreign keys
calificacion: new FormControl(data.calificacion),
});
});
}
}
}
