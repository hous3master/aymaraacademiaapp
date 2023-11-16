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
import { Preguntaalternativa } from 'src/app/models/preguntaalternativa';
import { PreguntaalternativaService } from 'src/app/services/preguntaalternativa.service';
import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { Alternativa } from 'src/app/models/alternativa';
import { AlternativaService } from 'src/app/services/alternativa.service';

@Component({
selector: 'app-creaedita-preguntaalternativa',
templateUrl: './creaedita-preguntaalternativa.component.html',
styleUrls: ['./creaedita-preguntaalternativa.component.css'],
})
export class CreaeditaPreguntaalternativaComponent implements OnInit {
form: FormGroup = new FormGroup({});
preguntaalternativa: Preguntaalternativa = new Preguntaalternativa();
mensaje: string = '';
id: number = 0;
edicion: boolean = false;
listaPregunta: Pregunta[]=[];
listaAlternativa: Alternativa[]=[];

constructor(
private preguntaalternativaService: PreguntaalternativaService,
private router: Router,
private formBuilder: FormBuilder,
private route: ActivatedRoute,
private preguntaService: PreguntaService,
private alternativaService: AlternativaService) {}

ngOnInit(): void {

this.route.params.subscribe((data: Params) => {
this.id = data['id'];
this.edicion = data['id'] != null;
this.init();
});

this.preguntaService.list().subscribe((data)=>{
this.listaPregunta = data;
})
this.alternativaService.list().subscribe((data)=>{
this.listaAlternativa = data;
})

this.form = this.formBuilder.group({
idPreguntaalternativa: [''],
pregunta: ['', Validators.required],
alternativa: ['', Validators.required],
});
}
aceptar(): void {
if (this.form.valid) {
// Assign values to the preguntaalternativa
this.preguntaalternativa.idPreguntaalternativa = this.form.value.idPreguntaalternativa;
// Assign values to each attribute
this.preguntaalternativa.pregunta.idPregunta = this.form.value.pregunta; // Change for component with foreign keys
this.preguntaalternativa.alternativa.idAlternativa = this.form.value.alternativa; // Change for component with foreign keys
if (this.edicion) {
this.preguntaalternativaService.update(this.preguntaalternativa).subscribe(() => {
this.preguntaalternativaService.list().subscribe((data) => {
this.preguntaalternativaService.setList(data);
});
});
} else {
this.preguntaalternativaService.insert(this.preguntaalternativa).subscribe((data) => {
this.preguntaalternativaService.list().subscribe((data) => {
this.preguntaalternativaService.setList(data);
});
});
}
this.router.navigate(['components/entidades/preguntaalternativa']);
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
this.preguntaalternativaService.listId(this.id).subscribe((data) => {
this.form = new FormGroup({
// Attributes of the formGroup
idPreguntaalternativa: new FormControl(data.idPreguntaalternativa),
pregunta: new FormControl(data.pregunta.idPregunta), // Change for component with foreign keys
alternativa: new FormControl(data.alternativa.idAlternativa), // Change for component with foreign keys
});
});
}
}
}
