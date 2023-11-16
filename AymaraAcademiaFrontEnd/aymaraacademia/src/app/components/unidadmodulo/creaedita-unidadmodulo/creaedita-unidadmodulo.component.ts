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
import { Unidadmodulo } from 'src/app/models/unidadmodulo';
import { UnidadmoduloService } from 'src/app/services/unidadmodulo.service';
import { Unidad } from 'src/app/models/unidad';
import { UnidadService } from 'src/app/services/unidad.service';
import { Modulo } from 'src/app/models/modulo';
import { ModuloService } from 'src/app/services/modulo.service';

@Component({
selector: 'app-creaedita-unidadmodulo',
templateUrl: './creaedita-unidadmodulo.component.html',
styleUrls: ['./creaedita-unidadmodulo.component.css'],
})
export class CreaeditaUnidadmoduloComponent implements OnInit {
form: FormGroup = new FormGroup({});
unidadmodulo: Unidadmodulo = new Unidadmodulo();
mensaje: string = '';
id: number = 0;
edicion: boolean = false;
listaUnidad: Unidad[]=[];
listaModulo: Modulo[]=[];

constructor(
private unidadmoduloService: UnidadmoduloService,
private router: Router,
private formBuilder: FormBuilder,
private route: ActivatedRoute,
private unidadService: UnidadService,
private moduloService: ModuloService) {}

ngOnInit(): void {

this.route.params.subscribe((data: Params) => {
this.id = data['id'];
this.edicion = data['id'] != null;
this.init();
});

this.unidadService.list().subscribe((data)=>{
this.listaUnidad = data;
})
this.moduloService.list().subscribe((data)=>{
this.listaModulo = data;
})

this.form = this.formBuilder.group({
idUnidadmodulo: [''],
unidad: ['', Validators.required],
modulo: ['', Validators.required],
});
}
aceptar(): void {
if (this.form.valid) {
// Assign values to the unidadmodulo
this.unidadmodulo.idUnidadmodulo = this.form.value.idUnidadmodulo;
// Assign values to each attribute
this.unidadmodulo.unidad.idUnidad = this.form.value.unidad; // Change for component with foreign keys
this.unidadmodulo.modulo.idModulo = this.form.value.modulo; // Change for component with foreign keys
if (this.edicion) {
this.unidadmoduloService.update(this.unidadmodulo).subscribe(() => {
this.unidadmoduloService.list().subscribe((data) => {
this.unidadmoduloService.setList(data);
});
});
} else {
this.unidadmoduloService.insert(this.unidadmodulo).subscribe((data) => {
this.unidadmoduloService.list().subscribe((data) => {
this.unidadmoduloService.setList(data);
});
});
}
this.router.navigate(['components/entidades/unidadmodulo']);
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
this.unidadmoduloService.listId(this.id).subscribe((data) => {
this.form = new FormGroup({
// Attributes of the formGroup
idUnidadmodulo: new FormControl(data.idUnidadmodulo),
unidad: new FormControl(data.unidad.idUnidad), // Change for component with foreign keys
modulo: new FormControl(data.modulo.idModulo), // Change for component with foreign keys
});
});
}
}
}
