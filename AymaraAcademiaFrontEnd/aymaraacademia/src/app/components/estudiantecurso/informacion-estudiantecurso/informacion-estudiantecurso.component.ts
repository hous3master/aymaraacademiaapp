import { EstudiantecursoService } from './../../../services/estudiantecurso.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteCurso } from 'src/app/models/estudiantecurso';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-informacion-estudiantecurso',
  templateUrl: './informacion-estudiantecurso.component.html',
  styleUrls: ['./informacion-estudiantecurso.component.css']
})
export class InformacionEstudiantecursoComponent {
  idcurso: number = 0
  cursos: Curso[] = []
  idestudiantecurso: number = 0
  estudiantecursos: EstudianteCurso[] = []
  nombreEstudiante:string=''

  constructor(
    private estudiantecursoService: EstudiantecursoService,
    private loginService: LoginService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.route.params.subscribe((data: Params) => {
      this.idcurso = data['idCurso'];
      const username = this.loginService.getUsername();

      const estudiante = this.estudiantecursos.find(es => es.estudiante.idEstudiante === this.idestudiantecurso);
      this.nombreEstudiante = estudiante ? estudiante.estudiante.nombre: '';

      this.estudiantecursoService.list().subscribe(estudiantecursos => {
        this.cursos = estudiantecursos
          .filter(ec => ec.estudiante.user.username === username)
          .map(ec => ec.curso);
      });
    });
  }
}
