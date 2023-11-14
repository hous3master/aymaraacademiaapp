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
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video.service';
import { Modulo } from 'src/app/models/modulo';
import { ModuloService } from 'src/app/services/modulo.service';

@Component({
  selector: 'app-creaedita-video',
  templateUrl: './creaedita-video.component.html',
  styleUrls: ['./creaedita-video.component.css'],
})
export class CreaeditaVideoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  video: Video = new Video();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaModulo: Modulo[] = [];

  constructor(
    private videoService: VideoService,
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
      idVideo: [''],
      url: ['', Validators.required],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      duracion: ['', Validators.required],
      presentador: ['', Validators.required],
      transcripcion: ['', Validators.required],
      modulo: ['', Validators.required],
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      // Assign values to the video
      this.video.idVideo = this.form.value.idVideo;
      // Assign values to each attribute
      this.video.url = this.form.value.url;
      this.video.titulo = this.form.value.titulo;
      this.video.descripcion = this.form.value.descripcion;
      this.video.duracion = this.form.value.duracion;
      this.video.presentador = this.form.value.presentador;
      this.video.transcripcion = this.form.value.transcripcion;
      this.video.modulo.idModulo = this.form.value.modulo; // Change for component with foreign keys
      if (this.edicion) {
        this.videoService.update(this.video).subscribe(() => {
          this.videoService.list().subscribe((data) => {
            this.videoService.setList(data);
          });
        });
      } else {
        this.videoService.insert(this.video).subscribe((data) => {
          this.videoService.list().subscribe((data) => {
            this.videoService.setList(data);
          });
        });
      }
      this.router.navigate(['components/entidades/video']);
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
      this.videoService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          // Attributes of the formGroup
          idVideo: new FormControl(data.idVideo),
          url: new FormControl(data.url),
          titulo: new FormControl(data.titulo),
          descripcion: new FormControl(data.descripcion),
          duracion: new FormControl(data.duracion),
          presentador: new FormControl(data.presentador),
          transcripcion: new FormControl(data.transcripcion),
          modulo: new FormControl(data.modulo.idModulo), // Change for component with foreign keys
        });
      });
    }
  }
}
