import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { Proyecto } from 'src/app/models/proyecto';
import { Revision } from 'src/app/models/revision';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { RevisionService } from 'src/app/services/revision.service';

@Component({
  selector: 'app-creaedita-revision',
  templateUrl: './creaedita-revision.component.html',
  styleUrls: ['./creaedita-revision.component.css']
})
export class CreaeditaRevisionComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  revision: Revision = new Revision();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaProyecto: Proyecto[]=[];
  listaEstudiante: Estudiante[]=[];
  constructor(
    private revisionService: RevisionService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private proyectoService: ProyectoService,
    private estudianteService: EstudianteService)
  {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.proyectoService.list().subscribe((data)=>{
      this.listaProyecto = data;
    })

    this.estudianteService.list().subscribe((data)=>{
      this.listaEstudiante = data;
    })

    this.form = this.formBuilder.group({
      idRevision: [''],
      proyecto: ['', Validators.required],
      estudiante: ['', Validators.required],
      calificacion: ['', Validators.required]
    });
  }

  aceptar(): void {
    if (this.form.valid) {
    // Assign values to the estudiantequizz
    this.revision.idRevision = this.form.value.idRevision;
    // Assign values to each attribute
    this.revision.proyecto.idProyecto = this.form.value.proyecto;
    this.revision.estudiante.idEstudiante = this.form.value.estudiante;
    this.revision.calificacion = this.form.value.calificacion;

    if (this.edicion) {
      this.revisionService.update(this.revision).subscribe(() => {
        this.revisionService.list().subscribe((data) => {
          this.revisionService.setList(data);
        });
      });
    } else {
      this.revisionService.insert(this.revision).subscribe((data) => {
        this.revisionService.list().subscribe((data) => {
          this.revisionService.setList(data);
        });
      });
    }
    this.router.navigate(['components/entidades/revision']);
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
    this.revisionService.listId(this.id).subscribe((data) => {
      this.form = new FormGroup({
        idRevision: new FormControl(data.idRevision),
        proyecto: new FormControl(data.proyecto.idProyecto),
        estudiante: new FormControl(data.estudiante.idEstudiante),
        calificacion: new FormControl(data.calificacion),
      });
    });
    }
  }
}
