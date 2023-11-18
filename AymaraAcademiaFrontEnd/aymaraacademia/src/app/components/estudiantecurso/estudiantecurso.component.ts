import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estudiantecurso',
  templateUrl: './estudiantecurso.component.html',
  styleUrls: ['./estudiantecurso.component.css']
})
export class EstudiantecursoComponent {
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {}
}
