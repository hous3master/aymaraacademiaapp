import { PreguntaalternativaService } from 'src/app/services/preguntaalternativa.service';
import { Component, Input, OnInit } from '@angular/core';
import { Preguntaalternativa } from 'src/app/models/preguntaalternativa';

@Component({
  selector: 'app-listaralternativaporpregunta',
  templateUrl: './listaralternativaporpregunta.component.html',
  styleUrls: ['./listaralternativaporpregunta.component.css']
})
export class ListaralternativaporpreguntaComponent implements OnInit {
  @Input() idPregunta: number = 0;
  preguntaalternativa: Preguntaalternativa[] = []; // replace with actual type of video object

  constructor(private preguntaalternativaService: PreguntaalternativaService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    // Get all preguntas and then filter them by idPregunta and print them on console
    this.preguntaalternativaService.list().subscribe((data) => {
      this.preguntaalternativa = data;
      this.preguntaalternativa = this.preguntaalternativa.filter((preguntaalternativa) => {
        return preguntaalternativa.pregunta.idPregunta == this.idPregunta;
      });
      console.log(this.preguntaalternativa);
    });
  }
}
