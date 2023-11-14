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
import { Quizz } from 'src/app/models/quizz';
import { QuizzService } from 'src/app/services/quizz.service';
import { Modulo } from 'src/app/models/modulo';
import { ModuloService } from 'src/app/services/modulo.service';

@Component({
selector: 'app-creaedita-quizz',
templateUrl: './creaedita-quizz.component.html',
styleUrls: ['./creaedita-quizz.component.css'],
})
export class CreaeditaQuizzComponent implements OnInit {
form: FormGroup = new FormGroup({});
quizz: Quizz = new Quizz();
mensaje: string = '';
id: number = 0;
edicion: boolean = false;
listaModulo: Modulo[]=[];

constructor(
private quizzService: QuizzService,
private router: Router,
private formBuilder: FormBuilder,
private route: ActivatedRoute,
private moduloService: ModuloService) {}

ngOnInit(): void {

this.route.params.subscribe((data: Params) => {
this.id = data['id'];
this.edicion = data['id'] != null;
this.init();
});

this.moduloService.list().subscribe((data)=>{
this.listaModulo = data;
})

this.form = this.formBuilder.group({
idQuizz: [''],
titulo: ['', Validators.required],
modulo: ['', Validators.required],
});
}
aceptar(): void {
if (this.form.valid) {
// Assign values to the quizz
this.quizz.idQuizz = this.form.value.idQuizz;
// Assign values to each attribute
this.quizz.titulo = this.form.value.titulo;
this.quizz.modulo.idModulo = this.form.value.modulo; // Change for component with foreign keys
if (this.edicion) {
this.quizzService.update(this.quizz).subscribe(() => {
this.quizzService.list().subscribe((data) => {
this.quizzService.setList(data);
});
});
} else {
this.quizzService.insert(this.quizz).subscribe((data) => {
this.quizzService.list().subscribe((data) => {
this.quizzService.setList(data);
});
});
}
this.router.navigate(['components/entidades/quizz']);
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
this.quizzService.listId(this.id).subscribe((data) => {
this.form = new FormGroup({
// Attributes of the formGroup
idQuizz: new FormControl(data.idQuizz),
titulo: new FormControl(data.titulo),
modulo: new FormControl(data.modulo.idModulo), // Change for component with foreign keys
});
});
}
}
}
