// creadita-estudiantecurso.component.ts

import { EstudiantecursoService } from './../../../services/estudiantecurso.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteCurso } from 'src/app/models/estudiantecurso';
import { CursoService } from 'src/app/services/curso.service';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-creadita-estudiantecurso',
  templateUrl: './creadita-estudiantecurso.component.html',
  styleUrls: ['./creadita-estudiantecurso.component.css']
})
export class CreaditaEstudiantecursoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  estudiantecurso: EstudianteCurso = new EstudianteCurso();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaEstudiante: Estudiante[] = [];
  listaCurso: Curso[] = [];

  constructor(
    private estudiantecursoService: EstudiantecursoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private estudianteService: EstudianteService,
    private cursoService: CursoService) { }

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.estudianteService.list().subscribe((data) => {
      this.listaEstudiante = data;
    })
    this.cursoService.list().subscribe((data) => {
      this.listaCurso = data;
    })

    this.form = this.formBuilder.group({
      idEstudiantecurso: [''],
      estudiante: ['', Validators.required],
      curso: ['', Validators.required],
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.estudiantecurso.idEstudiantecurso = this.form.value.idEstudiantecurso;
      this.estudiantecurso.estudiante.idEstudiante = this.form.value.estudiante;
      this.estudiantecurso.curso.idCurso = this.form.value.curso;

      if (this.edicion) {
        this.estudiantecursoService.update(this.estudiantecurso).subscribe(() => {
          this.estudiantecursoService.list().subscribe((data) => {
            this.estudiantecursoService.setList(data);
          });
        });
      } else {
        this.estudiantecursoService.insert(this.estudiantecurso).subscribe((data) => {
          this.estudiantecursoService.list().subscribe((data) => {
            this.estudiantecursoService.setList(data);
          });
        });
      }
      this.router.navigate(['components/entidades/estudiantecurso']);
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
      this.estudiantecursoService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          // Attributes of the formGroup
          idEstudiantecurso: new FormControl(data.idEstudiantecurso),
          estudiante: new FormControl(data.estudiante.idEstudiante),
          curso: new FormControl(data.curso.idCurso),
        });
      });
    }
  }
}
