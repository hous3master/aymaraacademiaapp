import { PreguntaalternativaService } from 'src/app/services/preguntaalternativa.service';
import { Component, Input, OnInit, NgModule } from '@angular/core';
import { Preguntaalternativa } from 'src/app/models/preguntaalternativa';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ModuloService } from 'src/app/services/modulo.service';
import { ProgresoService } from 'src/app/services/progreso.service';
import { Progreso } from 'src/app/models/progreso';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { QuizzService } from 'src/app/services/quizz.service';
import { Estudiante } from 'src/app/models/estudiante';
import { Estudiantepregunta } from 'src/app/models/estudiantepregunta';
import { EstudiantepreguntaService } from 'src/app/services/estudiantepregunta.service';

@Component({
  selector: 'app-listaralternativaporpregunta',
  templateUrl: './listaralternativaporpregunta.component.html',
  styleUrls: ['./listaralternativaporpregunta.component.css'],
})
export class ListaralternativaporpreguntaComponent implements OnInit {
  @Input() idPregunta: number = 0;
  preguntaalternativa: Preguntaalternativa[] = []; // replace with actual type of video object
  form: FormGroup = new FormGroup({});
  mensaje: string = '';
  estudiante: Estudiante = new Estudiante();

  constructor(
    private preguntaalternativaService: PreguntaalternativaService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private estudianteService: EstudianteService,
    private estudiantepreguntaService: EstudiantepreguntaService
  ) {}

  ngOnInit() {
    // Obtener el estudiante logeado
    this.estudianteService.findEstudianteByUserUsername(this.loginService.getUsername()).subscribe((data) => {
      this.estudiante = data[0];
    });

    // Obtener las alternativas de la pregunta
    this.init();

    // Inicializar el formulario
    this.form = this.formBuilder.group({
      correctaControl: ['', Validators.required],
    });
  }

  aceptar() {
    if (this.form.valid) {
      if (this.form.value.correctaControl) {
        // Registrar la pregunta como correcta
        this.estudiantepreguntaService.upsert(this.form.value.correctaControl, this.estudiante.idEstudiante, this.idPregunta).subscribe((data) => {
          console.log(data);
        });
        // Mostrar mensaje de respuesta correcta
        this.mensaje = 'Respuesta correcta y registrada correctamente.';
      } else {
        // Mostrar mensaje de respuesta incorrecta
        this.mensaje = 'Respuesta incorrecta.';
      }
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }

  init() {
    // Get all preguntas and then filter them by idPregunta and print them on console
    this.preguntaalternativaService.list().subscribe((data) => {
      this.preguntaalternativa = data;
      this.preguntaalternativa = this.preguntaalternativa.filter(
        (preguntaalternativa) => {
          return preguntaalternativa.pregunta.idPregunta == this.idPregunta;
        }
      );
      console.log(this.preguntaalternativa);
    });
  }
}
