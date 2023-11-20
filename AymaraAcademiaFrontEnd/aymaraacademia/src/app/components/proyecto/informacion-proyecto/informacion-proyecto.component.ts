import { LoginService } from './../../../services/login.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Proyecto } from 'src/app/models/proyecto';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/app/models/estudiante';
import { UnidadService } from 'src/app/services/unidad.service';
import { Unidad } from 'src/app/models/unidad';
import { MatTableDataSource } from '@angular/material/table';
import { Revision } from 'src/app/models/revision';
import { RevisionService } from 'src/app/services/revision.service';

@Component({
  selector: 'app-informacion-proyecto',
  templateUrl: './informacion-proyecto.component.html',
  styleUrls: ['./informacion-proyecto.component.css']
})
export class InformacionProyectoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  dataSource: MatTableDataSource<Revision> = new MatTableDataSource();
  displayedColumns: string[] = ['nombreEstudiante', 'calificacion'];
  proyecto: Proyecto = new Proyecto();
  proyectosUsuario: Proyecto[] = [];
  estudiante: Estudiante = new Estudiante();
  idUnidad: number = 0;
  unidad: Unidad = new Unidad();
  enviado: boolean = false;
  contenido: string = '';
  mensaje: string = '';

  constructor(
    private route: ActivatedRoute,
    private proyectoService: ProyectoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private estudianteService: EstudianteService,
    private unidadService: UnidadService,
    private revisionService: RevisionService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idUnidad = data['idUnidad'];
      this.unidadService.list().subscribe((data) => {
        this.unidad = data.filter((uni) => {
          return uni.idUnidad == this.idUnidad;
        })[0];
        this.init();
      });
    });

    this.form = this.formBuilder.group({
      proyectoContenido: ['', Validators.required],
    });
  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }

  init() {
    this.estudianteService.list().subscribe((data) => {
      this.estudiante = data.filter((student) => {
        return student.user.username == this.loginService.getUsername();
      })[0];
      console.log('El estudiante es: ', this.estudiante);
      this.proyectoService.list().subscribe((data) => {
        this.proyectosUsuario = data.filter((proyect) => {
          return (
            proyect.estudiante.user.username == this.loginService.getUsername()
          );
        });
        if (this.proyectosUsuario.length > 0) {
          console.log('Ya existen registros con su nombre de usuario');
          for (let i = 0; i < this.proyectosUsuario.length; i++) {
            if (this.proyectosUsuario[i].unidad.idUnidad == this.idUnidad) {
              this.proyecto = this.proyectosUsuario[i];
              console.log('El proyecto seleccionado es:', this.proyecto);
            }
          }
          this.revisionService.list().subscribe((data) => {
            this.dataSource = new MatTableDataSource(
              data.filter((a) => {
                return a.proyecto.idProyecto == this.proyecto.idProyecto;
              })
            );
          });
        }else {
          console.log('Se creará un registro nuevo');
          this.proyecto.calificacion = 0;
          this.proyecto.contador = 0;
          this.proyecto.contenido = '';
          this.proyecto.descripcion = this.unidad.descripcion;

          this.proyecto.estudiante = this.estudiante;
          this.proyecto.titulo = this.unidad.nombre;
          this.proyecto.unidad = this.unidad;
          this.proyecto.enviado = false;
          console.log(
            'El proyecto a ingresar será el siguiente',
            this.proyecto
          );
          this.proyectoService.insert(this.proyecto).subscribe((data) => {
            this.proyectoService.list().subscribe((data) => {
              this.proyectoService.setList(data);
            });
          });
          console.log('Proyecto ingresado');
        }
      });
    });
  }

  enviarProyecto() {
    console.log('Contenido: ', this.contenido);
    if (this.form.valid) {
      this.proyectoService.list().subscribe((data)=>{
        console.log("EL GRAN PROYECTO ES", data.filter((proyect)=>{
          return proyect.estudiante.idEstudiante
        })[0])

      })

      this.proyecto.contenido = this.contenido;
      this.proyecto.enviado = true;
      this.proyectoService.update(this.proyecto).subscribe(() => {
        this.proyectoService.list().subscribe((data) => {
          this.proyectoService.setList(data);
        });
      });
      console.log('Editado correctamente');
      this.router.navigate(['/components/unidad', this.idUnidad, 'proyecto', this.idUnidad]);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }
  peerReview() {
    this.router.navigate([
      `components/peerreview/${this.proyecto.unidad.idUnidad}`,
    ]);
  }

}
