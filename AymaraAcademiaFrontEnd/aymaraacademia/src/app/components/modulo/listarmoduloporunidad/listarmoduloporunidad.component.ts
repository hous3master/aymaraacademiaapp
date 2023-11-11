import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Modulo } from 'src/app/models/modulo';
import { Unidad } from 'src/app/models/unidad';
import { Unidadmodulo } from 'src/app/models/unidadmodulo';
import { ModuloService } from 'src/app/services/modulo.service';
import { UnidadService } from 'src/app/services/unidad.service';
import { UnidadmoduloService } from 'src/app/services/unidadmodulo.service';

@Component({
  selector: 'app-listarmoduloporunidad',
  templateUrl: './listarmoduloporunidad.component.html',
  styleUrls: ['./listarmoduloporunidad.component.css'],
})
export class ListarmoduloporunidadComponent {
  @Input() idUnidad: number = 0;
  unidadesmodulos: Unidadmodulo[] = []; // replace with actual type of modulo object

  constructor(private unidadmoduloService: UnidadmoduloService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    // Get all modulos and then filter them by idModulo and print them on console
    this.unidadmoduloService.list().subscribe((data) => {
      this.unidadesmodulos = data;
      console.log(this.unidadesmodulos);
      this.unidadesmodulos = this.unidadesmodulos.filter((unidadmodulo) => {
        return unidadmodulo.unidad.idUnidad == this.idUnidad;
      });
      console.log(this.unidadesmodulos);
    });
  }
}
