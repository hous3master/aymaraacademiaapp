import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { ActivatedRoute, Params } from '@angular/router';
import { CursoService } from './../../../services/curso.service';

@Component({
  selector: 'app-informacioncurso',
  templateUrl: './informacioncurso.component.html',
  styleUrls: ['./informacioncurso.component.css'],
})
export class InformacioncursoComponent {

  idcurso: number = 0;
  cursos: Curso[] = [];

  constructor(
    private CursoService: CursoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.route.params.subscribe((data: Params) => {
      this.idcurso= data['idCurso'];
  
      this.CursoService.list().subscribe((data) => {
        this.cursos = data;
      });
    });
  }
  
  
}

