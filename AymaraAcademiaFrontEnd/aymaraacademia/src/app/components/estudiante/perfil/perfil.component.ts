import { Estudiante } from './../../../models/estudiante';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  username: string = '';
  estudiante: Estudiante = new Estudiante();

  constructor(
    private estudianteService: EstudianteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.route.params.subscribe((data: Params) => {
      this.username = data['username'];
    });

    this.estudianteService
      .findEstudianteByUserUsername(this.username)
      .subscribe((data) => {
        this.estudiante = data[0];
      });
  }
}
