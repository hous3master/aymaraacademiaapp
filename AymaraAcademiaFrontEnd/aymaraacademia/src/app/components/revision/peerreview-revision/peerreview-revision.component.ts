import { forkJoin } from 'rxjs';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { Proyecto } from 'src/app/models/proyecto';
import { Revision } from 'src/app/models/revision';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { RevisionService } from 'src/app/services/revision.service';

@Component({
  selector: 'app-peerreview-revision',
  templateUrl: './peerreview-revision.component.html',
  styleUrls: ['./peerreview-revision.component.css'],
})
export class PeerreviewRevisionComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  idUnidad: number = 0;
  proyectosValidos: Proyecto[] = [];
  proyecto: Proyecto = new Proyecto();
  estudiante: Estudiante = new Estudiante();
  revisados: Revision[] = [];
  revision: Revision = new Revision();
  mensaje: string = '';
  grade: number = 0;

  constructor(
    private proyectoService: ProyectoService,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private estudianteService: EstudianteService,
    private formBuilder: FormBuilder,
    private revisionService: RevisionService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idUnidad = data['idUnidad'];
      console.log('Unidad', this.idUnidad);
      this.init();
    });

    this.form = this.formBuilder.group({
      grade: ['', Validators.required],
    });
  }

  init() {
    forkJoin([
      this.estudianteService.list(),
      this.proyectoService.list(),
      this.revisionService.list(),
    ]).subscribe(([estudiantes, proyectos, revisiones]) => {
      this.estudiante = estudiantes.filter((student) => {
        return student.user.username == this.loginService.getUsername();
      })[0];

      console.log('El estudiante es', this.estudiante);

      this.revisados = revisiones.filter((revision) => {
        return revision.estudiante.idEstudiante == this.estudiante.idEstudiante;
      });
      console.log(
        'Los proyectos revisados por el estudiante son',
        this.revisados
      );

      this.proyectosValidos = proyectos.filter((proyect) => {
        const proyectoRevisado = this.revisados.find(
          (rev) => rev.proyecto.idProyecto === proyect.idProyecto
        );
        return (
          proyect.unidad.idUnidad == this.idUnidad &&
          proyect.contador < 5 &&
          proyect.estudiante.user.id != this.estudiante.user.id &&
          !proyectoRevisado
        );
      });

      if (this.proyectosValidos.length == 0) {
        // Send a popup message in the browser
        alert('No hay proyectos disponibles para que revises, intenta más tarde');

        // navigate back to [routerLink]="['/components/unidad', idUnidad, 'proyecto', idUnidad]"
        this.router.navigate(['/components/unidad', this.idUnidad, 'proyecto', this.idUnidad]);
      }

      console.log('los proyectos validos son', this.proyectosValidos);

      if (this.proyectosValidos.length > 0) {
        this.proyecto =
          this.proyectosValidos[
            Math.floor(Math.random() * this.proyectosValidos.length)
          ];
        console.log('El proyecto seleccionado es', this.proyecto);
      } else {

      }
    });
  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }

  enviarRevision() {
    if (this.form.valid) {
      console.log('valido bb');
      this.revision.calificacion = this.grade;
      this.revision.estudiante = this.estudiante;
      this.revision.proyecto = this.proyecto;
      console.log(this.revision);
      this.revisionService.insert(this.revision).subscribe((data) => {
        this.revisionService.list().subscribe((data) => {
          this.revisionService.setList(data);
        });
      });
      this.proyecto.contador++;
      this.proyectoService.update(this.proyecto).subscribe((data) => {
        this.proyectoService.list().subscribe((data) => {
          this.proyectoService.setList(data);
        });
      });
      this.router.navigate(['/components/unidad', this.idUnidad, 'proyecto', this.idUnidad]);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }
}
