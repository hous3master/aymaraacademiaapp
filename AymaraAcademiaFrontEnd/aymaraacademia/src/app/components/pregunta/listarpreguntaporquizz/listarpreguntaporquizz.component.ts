import { EstudianteService } from './../../../services/estudiante.service';
import { PreguntaalternativaService } from './../../../services/preguntaalternativa.service';
import { Component, Input, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';
import { Pregunta } from 'src/app/models/pregunta';
import { EstudiantepreguntaService } from 'src/app/services/estudiantepregunta.service';
import { EstudiantequizzService } from 'src/app/services/estudiantequizz.service';
import { LoginService } from 'src/app/services/login.service';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-listarpreguntaporquizz',
  templateUrl: './listarpreguntaporquizz.component.html',
  styleUrls: ['./listarpreguntaporquizz.component.css'],
})
export class ListarpreguntaporquizzComponent implements OnInit {
  @Input() idQuizz: number = 0;
  preguntas: Pregunta[] = []; // replace with actual type of modulo object
  estudiante: Estudiante = new Estudiante();
  calificacion: number = 0;

  constructor(
    private preguntaService: PreguntaService,
    private estudiantepreguntaService: EstudiantepreguntaService,
    private estudianteService: EstudianteService,
    private loginService: LoginService,
    private estudiantequizzService: EstudiantequizzService
  ) {}

  ngOnInit() {
    // Obtener el estudiante logeado
    this.estudianteService
      .findEstudianteByUserUsername(this.loginService.getUsername())
      .subscribe((data) => {
        this.estudiante = data[0];
      });

    this.init();
  }

  init() {
    // Get all preguntas from the server and filter by idQuizz
    this.preguntaService.list().subscribe((data) => {
      this.preguntas = data;
      this.preguntas = this.preguntas.filter((quizz) => {
        return quizz.quizz.idQuizz == this.idQuizz;
      });
      console.log(this.preguntas);
    });
  }

  aceptar() {
    // Sumar las calificaciones de las preguntas por cada correcta
    this.preguntas.forEach((pregunta) => {
      // Get calificacion from estudiantepregunta where estudiante = estudianteActual and pregunta = preguntaActual
      this.estudiantepreguntaService.list().subscribe((data) => {
        let estudiantepregunta = data.filter((estudiantepregunta) => {
          return (
            estudiantepregunta.estudiante.idEstudiante ==
              this.estudiante.idEstudiante &&
            estudiantepregunta.pregunta.idPregunta == pregunta.idPregunta
          );
        });
        console.log(estudiantepregunta);
        this.calificacion += estudiantepregunta[0].correcta ? 1 : 0;
        // Registrar la calificacion en estudiantequizz
        this.estudiantequizzService
          .upsert(this.calificacion, this.estudiante.idEstudiante, this.idQuizz)
          .subscribe((data) => {
            console.log('registro', this.calificacion, data);
          });
      });
    });
  }
}
