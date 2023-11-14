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
import { Alternativa } from 'src/app/models/alternativa';
import { AlternativaService } from 'src/app/services/alternativa.service';

@Component({
selector: 'app-creaedita-alternativa',
templateUrl: './creaedita-alternativa.component.html',
styleUrls: ['./creaedita-alternativa.component.css'],
})
export class CreaeditaAlternativaComponent implements OnInit {
form: FormGroup = new FormGroup({});
alternativa: Alternativa = new Alternativa();
mensaje: string = '';
id: number = 0;
edicion: boolean = false;

constructor(
private alternativaService: AlternativaService,
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
idAlternativa: [''],
respuesta: ['', Validators.required],
correcta: ['', Validators.required],
});
}
aceptar(): void {
if (this.form.valid) {
// Assign values to the alternativa
this.alternativa.idAlternativa = this.form.value.idAlternativa;
// Assign values to each attribute
this.alternativa.respuesta = this.form.value.respuesta;
this.alternativa.correcta = this.form.value.correcta;
if (this.edicion) {
this.alternativaService.update(this.alternativa).subscribe(() => {
this.alternativaService.list().subscribe((data) => {
this.alternativaService.setList(data);
});
});
} else {
this.alternativaService.insert(this.alternativa).subscribe((data) => {
this.alternativaService.list().subscribe((data) => {
this.alternativaService.setList(data);
});
});
}
this.router.navigate(['components/entidades/alternativa']);
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
this.alternativaService.listId(this.id).subscribe((data) => {
this.form = new FormGroup({
// Attributes of the formGroup
idAlternativa: new FormControl(data.idAlternativa),
respuesta: new FormControl(data.respuesta),
correcta: new FormControl(data.correcta),
});
});
}
}
}
