import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Modulo } from 'src/app/models/modulo';
import { Proyecto } from 'src/app/models/proyecto';
import { Unidad } from 'src/app/models/unidad';
import { Unidadmodulo } from 'src/app/models/unidadmodulo';
import { ModuloService } from 'src/app/services/modulo.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { UnidadService } from 'src/app/services/unidad.service';
import { UnidadmoduloService } from 'src/app/services/unidadmodulo.service';

@Component({
  selector: 'app-informacionunidad',
  templateUrl: './informacionunidad.component.html',
  styleUrls: ['./informacionunidad.component.css']
})
export class InformacionunidadComponent {
  idUnidad: number = 0;
  unidades: Unidad[] = [];

  constructor(
    private unidadService: UnidadService,
    private route: ActivatedRoute,
    private proyectoService: ProyectoService
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.route.params.subscribe((data: Params) => {
      this.idUnidad = data['idUnidad'];

      // Get all unidades and then filter them by idUnidad and print them on console
      this.unidadService.list().subscribe((data) => {
        this.unidades = data;
        console.log(this.unidades);
        this.unidades = this.unidades.filter((unidad) => {
          return unidad.idUnidad == this.idUnidad;
        });
        console.log(this.unidades);
      });
    });
  }

}
/*import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./listarmoduloporunidad.component.css']
})
export class ListarmoduloporunidadComponent {
  idUnidad: number = 0;
  unidadesmodulos: Unidadmodulo[] = []; // replace with actual type of modulo object

  constructor(
    private unidadmoduloService: UnidadmoduloService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.route.params.subscribe((data: Params) => {
      this.idUnidad = data['idUnidad'];

      // Get all modulos and then filter them by idModulo and print them on console
      this.unidadmoduloService.list().subscribe((data) => {
        this.unidadesmodulos = data;
        console.log(this.unidadesmodulos);
        this.unidadesmodulos = this.unidadesmodulos.filter((unidadmodulo) => {
          return unidadmodulo.unidad.idUnidad == this.idUnidad;
        });
        console.log(this.unidadesmodulos);
      });
    });
  }
}
*/
