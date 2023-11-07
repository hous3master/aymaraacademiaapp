import { Component, Input, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-listarpreguntaporquizz',
  templateUrl: './listarpreguntaporquizz.component.html',
  styleUrls: ['./listarpreguntaporquizz.component.css']
})
export class ListarpreguntaporquizzComponent {
  @Input() idQuizz: number = 0;
  preguntas: Pregunta[] = []; // replace with actual type of modulo object

  constructor(private preguntaService: PreguntaService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    // Get all modulos and then filter them by idModulo and print them on console
    this.preguntaService.list().subscribe((data) => {
      this.preguntas = data;
      this.preguntas = this.preguntas.filter((quizz) => {
        return quizz.quizz.idQuizz == this.idQuizz;
      });
      console.log(this.preguntas);
    });
  }
}
