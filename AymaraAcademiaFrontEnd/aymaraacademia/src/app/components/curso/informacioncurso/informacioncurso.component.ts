import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-informacioncurso',
  templateUrl: './informacioncurso.component.html',
  styleUrls: ['./informacioncurso.component.css'],
})
export class InformacioncursoComponent {
  curso: Curso = new Curso();
  constructor(
    public route: ActivatedRoute,
    private cursoService: CursoService
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.route.params.subscribe((data: Params) => {
      this.cursoService.listId(data['idCurso']).subscribe((data: Curso) => {
        this.curso = data;
      });
    });
  }
}
