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
import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { Quizz } from 'src/app/models/quizz';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-creaedita-pregunta',
  templateUrl: './creaedita-pregunta.component.html',
  styleUrls: ['./creaedita-pregunta.component.css'],
})
export class CreaeditaPreguntaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  pregunta: Pregunta = new Pregunta();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaQuizz: Quizz[] = [];

  constructor(
    private preguntaService: PreguntaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private quizzService: QuizzService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.quizzService.list().subscribe((data) => {
      this.listaQuizz = data;
    });

    this.form = this.formBuilder.group({
      idPregunta: [''],
      pregunta: ['', Validators.required],
      quizz: ['', Validators.required],
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      // Assign values to the pregunta
      this.pregunta.idPregunta = this.form.value.idPregunta;
      // Assign values to each attribute
      this.pregunta.pregunta = this.form.value.pregunta;
      this.pregunta.quizz.idQuizz = this.form.value.quizz; // Change for component with foreign keys
      if (this.edicion) {
        this.preguntaService.update(this.pregunta).subscribe(() => {
          this.preguntaService.list().subscribe((data) => {
            this.preguntaService.setList(data);
          });
        });
      } else {
        this.preguntaService.insert(this.pregunta).subscribe((data) => {
          this.preguntaService.list().subscribe((data) => {
            this.preguntaService.setList(data);
          });
        });
      }
      this.router.navigate(['components/entidades/pregunta']);
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
      this.preguntaService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          // Attributes of the formGroup
          idPregunta: new FormControl(data.idPregunta),
          pregunta: new FormControl(data.pregunta),
          quizz: new FormControl(data.quizz.idQuizz), // Change for component with foreign keys
        });
      });
    }
  }
}
