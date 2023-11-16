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
import { Lectura } from 'src/app/models/lectura';
import { LecturaService } from 'src/app/services/lectura.service';
import { Modulo } from 'src/app/models/modulo';
import { ModuloService } from 'src/app/services/modulo.service';

@Component({
  selector: 'app-creaedita-lectura',
  templateUrl: './creaedita-lectura.component.html',
  styleUrls: ['./creaedita-lectura.component.css'],
})
export class CreaeditaLecturaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  lectura: Lectura = new Lectura();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaModulo: Modulo[] = [];

  constructor(
    private lecturaService: LecturaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private moduloService: ModuloService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.moduloService.list().subscribe((data) => {
      this.listaModulo = data;
    });

    this.form = this.formBuilder.group({
      idLectura: [''],
      descripcion: ['', Validators.required],
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      modulo: ['', Validators.required],
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      // Assign values to the lectura
      this.lectura.idLectura = this.form.value.idLectura;
      // Assign values to each attribute
      this.lectura.descripcion = this.form.value.descripcion;
      this.lectura.titulo = this.form.value.titulo;
      this.lectura.autor = this.form.value.autor;
      this.lectura.modulo.idModulo = this.form.value.modulo; // Change for component with foreign keys
      if (this.edicion) {
        this.lecturaService.update(this.lectura).subscribe(() => {
          this.lecturaService.list().subscribe((data) => {
            this.lecturaService.setList(data);
          });
        });
      } else {
        this.lecturaService.insert(this.lectura).subscribe((data) => {
          this.lecturaService.list().subscribe((data) => {
            this.lecturaService.setList(data);
          });
        });
      }
      this.router.navigate(['components/entidades/lectura']);
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
      this.lecturaService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          // Attributes of the formGroup
          idLectura: new FormControl(data.idLectura),
          descripcion: new FormControl(data.descripcion),
          titulo: new FormControl(data.titulo),
          autor: new FormControl(data.autor),
          modulo: new FormControl(data.modulo.idModulo), // Change for component with foreign keys
        });
      });
    }
  }
}
