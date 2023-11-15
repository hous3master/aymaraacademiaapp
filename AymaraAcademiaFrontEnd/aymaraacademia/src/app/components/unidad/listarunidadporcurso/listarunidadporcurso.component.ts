import { Cursounidad } from 'src/app/models/cursounidad';
import { Component, Input, OnInit } from '@angular/core';
import { CursounidadService } from 'src/app/services/cursounidad.service';

@Component({
  selector: 'app-listarunidadporcurso',
  templateUrl: './listarunidadporcurso.component.html',
  styleUrls: ['./listarunidadporcurso.component.css']
})
export class ListarunidadporcursoComponent {
  @Input() idCurso: number = 0;
  cursounidad: Cursounidad[] = [];
  constructor(private cursounidadService: CursounidadService) {}

  ngOnInit() {
    this.init();
  }

  init(){
    // Get all unidades and then filter them by idUnidad where .idCurso = input idCurso and print them on console
    this.cursounidadService.list().subscribe((data) => {
      this.cursounidad = data;
      console.log(this.cursounidad);
      this.cursounidad = this.cursounidad.filter((cursounidad) => {
        return cursounidad.curso.idCurso == this.idCurso;
      });
      console.log(this.cursounidad);
    });
  }
}
