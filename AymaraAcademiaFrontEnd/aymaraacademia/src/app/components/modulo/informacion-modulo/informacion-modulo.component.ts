import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Modulo } from 'src/app/models/modulo';
import { ModuloService } from 'src/app/services/modulo.service';

@Component({
  selector: 'app-informacion-modulo',
  templateUrl: './informacion-modulo.component.html',
  styleUrls: ['./informacion-modulo.component.css'],
})
export class InformacionModuloComponent {
  idModulo: number = 0;
  modulos: Modulo[] = []; // replace with actual type of modulo object

  constructor(
    private moduloService: ModuloService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.route.params.subscribe((data: Params) => {
      this.idModulo = data['idModulo'];

      // Get all modulos and then filter them by idModulo and print them on console
      this.moduloService.list().subscribe((data) => {
        this.modulos = data;
        console.log(this.modulos);
        this.modulos = this.modulos.filter((modulo) => {
          return modulo.idModulo == this.idModulo;
        });
        console.log(this.modulos);
      });
    });
  }
}
