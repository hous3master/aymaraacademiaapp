import { PreguntaService } from 'src/app/services/pregunta.service';
import { Component, Input, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Quizz } from 'src/app/models/quizz';
import { Pregunta } from 'src/app/models/pregunta';

@Component({
  selector: 'app-listarquizzpormodulo',
  templateUrl: './listarquizzpormodulo.component.html',
  styleUrls: ['./listarquizzpormodulo.component.css'],
})
export class ListarquizzpormoduloComponent implements OnInit {
  @Input() idModulo: number = 0;
  quizzs: Quizz[] = []; // replace with actual type of quizz object

  constructor(private quizzService: QuizzService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    // Get all quizzs and then filter them by idModulo and print them on console
    this.quizzService.list().subscribe((data) => {
      this.quizzs = data;
      this.quizzs = this.quizzs.filter((quizz) => {
        return quizz.modulo.idModulo == this.idModulo;
      });
      console.log(this.quizzs);
    });
  }
}
